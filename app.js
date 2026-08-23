const $ = id => document.getElementById(id);

const num = id => {
  const value = parseFloat($(id)?.value);
  return Number.isFinite(value) ? value : null;
};

const fmt = (value, digits = 2) => {
  return Number.isFinite(value)
    ? value.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits
      })
    : "—";
};


/* =========================
   METHOD SELECTION
========================= */

function buildJob() {
  const selected = [
    ...document.querySelectorAll(".method-select:checked")
  ].map(box => box.value);

  document.querySelectorAll(".method-section")
    .forEach(section => section.classList.remove("active"));

  if (selected.includes("1")) {
    $("method1Section")?.classList.add("active");
  }

  if (selected.includes("2")) {
    $("method2Section")?.classList.add("active");

    /*
      Method 2 needs Method 1 stack geometry,
      so Method 1 is shown automatically.
    */
    $("method1Section")?.classList.add("active");
  }

  if (selected.includes("4")) {
    $("method4Section")?.classList.add("active");
  }

  if (selected.includes("5")) {
    $("method5Section")?.classList.add("active");

    /*
      Method 5 depends on stack / flow information,
      so show Method 1 and Method 2 too.
    */
    $("method1Section")?.classList.add("active");
    $("method2Section")?.classList.add("active");
  }

  if (selected.length === 0) {
    alert("Select at least one method.");
  }
}


/* =========================
   METHOD 1
========================= */

function calculateMethod1() {
  const shape = $("stackShape")?.value;

  const diameter = num("diameter");
  const width = num("width");
  const depth = num("depth");

  const upstream = num("upstreamFt");
  const downstream = num("downstreamFt");

  let area = null;
  let equivalentDiameter = null;

  if (
    shape === "Circular" &&
    diameter != null &&
    diameter > 0
  ) {
    area =
      Math.PI *
      Math.pow(diameter, 2) /
      4;

    equivalentDiameter = diameter;
  }

  if (
    shape === "Rectangular" &&
    width != null &&
    depth != null &&
    width > 0 &&
    depth > 0
  ) {
    area = width * depth;

    equivalentDiameter =
      (2 * width * depth) /
      (width + depth);
  }

  let upstreamDiameters = null;
  let downstreamDiameters = null;

  if (
    equivalentDiameter != null &&
    equivalentDiameter > 0
  ) {
    if (upstream != null) {
      upstreamDiameters =
        upstream / equivalentDiameter;
    }

    if (downstream != null) {
      downstreamDiameters =
        downstream / equivalentDiameter;
    }
  }

  $("areaOut").textContent =
    fmt(area, 3);

  $("eqDiaOut").textContent =
    fmt(equivalentDiameter, 3);

  $("upDiaOut").textContent =
    fmt(upstreamDiameters, 2);

  $("downDiaOut").textContent =
    fmt(downstreamDiameters, 2);

  const flag = $("m1Flag");

  if (flag) {
    if (area == null) {
      flag.className = "status neutral";
      flag.textContent =
        "Enter valid stack geometry.";
    } else if (
      upstreamDiameters != null &&
      downstreamDiameters != null
    ) {
      flag.className = "status ok";
      flag.textContent =
        "Stack geometry calculated. Verify Method 1 traverse requirements for the actual source.";
    } else {
      flag.className = "status neutral";
      flag.textContent =
        "Stack area calculated. Enter upstream and downstream distances for diameter review.";
    }
  }

  return {
    area,
    equivalentDiameter,
    upstreamDiameters,
    downstreamDiameters
  };
}


/* =========================
   METHOD 2
========================= */

const METHOD2_K = 85.49;

function calculateMethod2() {
  const geometry = calculateMethod1();

  const cp = num("m2Cp");
  const pb = num("m2Pb");
  const ps = num("m2Ps") ?? 0;
  const md = num("m2Md");
  const bws = num("m2Bws");
  const dp = num("m2Dp");
  const ts = num("m2Ts");

  let wetMolecularWeight = null;
  let absolutePressure = null;
  let velocity = null;
  let acfm = null;
  let scfm = null;
  let dscfm = null;

  if (
    md != null &&
    bws != null &&
    bws >= 0 &&
    bws < 1
  ) {
    wetMolecularWeight =
      md * (1 - bws) +
      18 * bws;
  }

  if (pb != null && pb > 0) {
    absolutePressure =
      pb +
      ps / 13.6;
  }

  if (
    cp != null &&
    cp > 0 &&
    absolutePressure != null &&
    absolutePressure > 0 &&
    wetMolecularWeight != null &&
    wetMolecularWeight > 0 &&
    dp != null &&
    dp >= 0 &&
    ts != null
  ) {
    velocity =
      METHOD2_K *
      cp *
      Math.sqrt(
        (
          dp *
          (ts + 459.67)
        ) /
        (
          absolutePressure *
          wetMolecularWeight
        )
      );
  }

  if (
    velocity != null &&
    geometry.area != null &&
    geometry.area > 0
  ) {
    acfm =
      velocity *
      geometry.area *
      60;
  }

  if (
    acfm != null &&
    ts != null &&
    absolutePressure != null
  ) {
    scfm =
      acfm *
      (528 / (ts + 459.67)) *
      (absolutePressure / 29.92);
  }

  if (
    scfm != null &&
    bws != null
  ) {
    dscfm =
      scfm *
      (1 - bws);
  }

  $("m2Mw").textContent =
    fmt(wetMolecularWeight, 3);

  $("m2Vel").textContent =
    fmt(velocity, 2);

  $("m2Acfm").textContent =
    fmt(acfm, 0);

  $("m2Scfm").textContent =
    fmt(scfm, 0);

  $("m2Dscfm").textContent =
    fmt(dscfm, 0);

  const flag = $("m2Flag");

  if (flag) {
    if (dscfm != null) {
      flag.className = "status ok";
      flag.textContent =
        "Method 2 calculation completed.";
    } else {
      flag.className = "status neutral";
      flag.textContent =
        "Enter stack geometry and Method 2 field data.";
    }
  }

  return {
    wetMolecularWeight,
    absolutePressure,
    velocity,
    acfm,
    scfm,
    dscfm
  };
}


/* =========================
   METHOD 4
========================= */

function calculateMethod4() {
  const vm = num("m4Vm");
  const waterMl = num("m4WaterMl") ?? 0;
  const silicaGain = num("m4SilicaG") ?? 0;

  let waterVaporVolume = null;
  let bws = null;
  let percentMoisture = null;

  const totalWaterGrams =
    waterMl + silicaGain;

  if (totalWaterGrams >= 0) {
    /*
      Standard cubic feet of water vapor.

      1 lb-mole gas at standard conditions
      is approximately 385.3 scf.
    */

    waterVaporVolume =
      (totalWaterGrams / 453.59237) *
      (385.3 / 18.01528);
  }

  if (
    vm != null &&
    vm >= 0 &&
    waterVaporVolume != null &&
    vm + waterVaporVolume > 0
  ) {
    bws =
      waterVaporVolume /
      (vm + waterVaporVolume);

    percentMoisture =
      bws * 100;
  }

  $("m4Vw").textContent =
    fmt(waterVaporVolume, 3);

  $("m4BwsOut").textContent =
    fmt(bws, 4);

  $("m4Percent").textContent =
    fmt(percentMoisture, 2);

  const flag = $("m4Flag");

  if (flag) {
    if (bws != null) {
      flag.className = "status ok";
      flag.textContent =
        "Method 4 moisture calculation completed.";
    } else {
      flag.className = "status neutral";
      flag.textContent =
        "Enter the dry gas volume and collected moisture.";
    }
  }

  return {
    waterVaporVolume,
    bws,
    percentMoisture
  };
}


/* =========================
   METHOD 5
========================= */

function calculateMethod5() {
  const nozzleDiameter = num("m5Nozzle");
  const minutes = num("m5Time");
  const actualDscf = num("m5VmStd");

  const velocity = num("m5Vel");
  const stackTemp = num("m5Ts");
  const pressure = num("m5P");
  const bws = num("m5Bws");

  const filterCatch =
    num("m5Filter") ?? 0;

  const probeCatch =
    num("m5Probe") ?? 0;

  const otherCatch =
    num("m5Other") ?? 0;

  const blank =
    num("m5Blank") ?? 0;

  let idealVolume = null;
  let isokineticPercent = null;
  let totalParticulate = null;
  let loading = null;

  if (
    nozzleDiameter != null &&
    nozzleDiameter > 0 &&
    minutes != null &&
    minutes > 0 &&
    velocity != null &&
    velocity > 0 &&
    stackTemp != null &&
    pressure != null &&
    pressure > 0 &&
    bws != null &&
    bws >= 0 &&
    bws < 1
  ) {
    const nozzleArea =
      Math.PI *
      Math.pow(
        nozzleDiameter / 12,
        2
      ) /
      4;

    const wetActualFlow =
      nozzleArea *
      velocity *
      60;

    const dryStandardFlow =
      wetActualFlow *
      (1 - bws) *
      (528 / (stackTemp + 459.67)) *
      (pressure / 29.92);

    idealVolume =
      dryStandardFlow *
      minutes;

    if (
      actualDscf != null &&
      idealVolume > 0
    ) {
      isokineticPercent =
        actualDscf /
        idealVolume *
        100;
    }
  }

  totalParticulate =
    filterCatch +
    probeCatch +
    otherCatch -
    blank;

  if (
    actualDscf != null &&
    actualDscf > 0
  ) {
    /*
      1 grain = 64.79891 mg
    */

    loading =
      (
        totalParticulate /
        64.79891
      ) /
      actualDscf;
  }

  $("m5Ideal").textContent =
    fmt(idealVolume, 3);

  $("m5Iso").textContent =
    fmt(isokineticPercent, 1);

  $("m5PmMg").textContent =
    fmt(totalParticulate, 2);

  $("m5GrDscf").textContent =
    fmt(loading, 5);

  const flag = $("m5Flag");

  if (flag) {
    if (isokineticPercent == null) {
      flag.className =
        "status neutral";

      flag.textContent =
        "Enter Method 5 field data.";
    } else if (
      isokineticPercent >= 90 &&
      isokineticPercent <= 110
    ) {
      flag.className =
        "status ok";

      flag.textContent =
        "Isokinetic rate is within 90–110%.";
    } else {
      flag.className =
        "status warn";

      flag.textContent =
        "Isokinetic rate is outside 90–110%. Review the run and calculation inputs.";
    }
  }

  return {
    idealVolume,
    isokineticPercent,
    totalParticulate,
    loading
  };
}


/* =========================
   METHOD 2 TEST
========================= */

function runMethod2Test() {
  $("stackShape").value = "Circular";
  $("diameter").value = "8";

  $("upstreamFt").value = "20";
  $("downstreamFt").value = "8";

  $("m2Cp").value = "0.84";
  $("m2Pb").value = "29.92";
  $("m2Ps").value = "0";
  $("m2Md").value = "29";
  $("m2Bws").value = "0.10";
  $("m2Dp").value = "0.75";
  $("m2Ts").value = "300";

  calculateMethod2();
}


/* =========================
   SYSTEM TEST
========================= */

function runSystemTest() {
  const result =
    $("systemTestResult");

  try {
    $("stackShape").value =
      "Circular";

    $("diameter").value =
      "10";

    $("upstreamFt").value =
      "20";

    $("downstreamFt").value =
      "10";

    const m1 =
      calculateMethod1();

    const expectedArea =
      Math.PI *
      100 /
      4;

    const difference =
      Math.abs(
        m1.area -
        expectedArea
      );

    if (
      m1.area != null &&
      difference < 0.001
    ) {
      result.className =
        "status ok";

      result.textContent =
        "PASS — JavaScript is running and the calculation engine is working.";
    } else {
      result.className =
        "status bad";

      result.textContent =
        "FAIL — JavaScript loaded, but the test calculation did not match the expected result.";
    }
  } catch (error) {
    result.className =
      "status bad";

    result.textContent =
      "FAIL — JavaScript error: " +
      error.message;

    console.error(error);
  }
}


/* =========================
   LIVE CALCULATION
========================= */

const method1Inputs = [
  "stackShape",
  "diameter",
  "width",
  "depth",
  "upstreamFt",
  "downstreamFt"
];

method1Inputs.forEach(id => {
  $(id)?.addEventListener(
    "input",
    calculateMethod1
  );

  $(id)?.addEventListener(
    "change",
    calculateMethod1
  );
});


const method2Inputs = [
  "m2Cp",
  "m2Pb",
  "m2Ps",
  "m2Md",
  "m2Bws",
  "m2Dp",
  "m2Ts"
];

method2Inputs.forEach(id => {
  $(id)?.addEventListener(
    "input",
    calculateMethod2
  );
});


const method4Inputs = [
  "m4Vm",
  "m4WaterMl",
  "m4SilicaG"
];

method4Inputs.forEach(id => {
  $(id)?.addEventListener(
    "input",
    calculateMethod4
  );
});


const method5Inputs = [
  "m5Nozzle",
  "m5Time",
  "m5VmStd",
  "m5Vel",
  "m5Ts",
  "m5P",
  "m5Bws",
  "m5Filter",
  "m5Probe",
  "m5Other",
  "m5Blank"
];

method5Inputs.forEach(id => {
  $(id)?.addEventListener(
    "input",
    calculateMethod5
  );
});


/* =========================
   BUTTONS
========================= */

$("buildJobBtn")?.addEventListener(
  "click",
  buildJob
);

$("calcM2Btn")?.addEventListener(
  "click",
  calculateMethod2
);

$("calcM4Btn")?.addEventListener(
  "click",
  calculateMethod4
);

$("calcM5Btn")?.addEventListener(
  "click",
  calculateMethod5
);

$("testM2Btn")?.addEventListener(
  "click",
  runMethod2Test
);

$("systemTestBtn")?.addEventListener(
  "click",
  runSystemTest
);


/* =========================
   STARTUP
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log(
      "Stack Test Pro loaded successfully."
    );
  }
);
