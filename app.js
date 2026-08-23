const $ = id => document.getElementById(id);

const METHOD_CATALOG = [
  ["1","Sample and Velocity Traverses","calc","m1"],
  ["1A","Small Stack / Duct Traverses","workspace","genericMethod"],
  ["2","Stack Gas Velocity / Flow — Type S Pitot","calc","m2"],
  ["2A","Direct Gas Volume — Pipes / Small Ducts","workspace","genericMethod"],
  ["2B","Gasoline Vapor Incinerator Exhaust Flow","workspace","genericMethod"],
  ["2C","Small Stack Velocity / Flow — Standard Pitot","workspace","genericMethod"],
  ["2D","Gas Volumetric Flow — Small Pipes / Ducts","workspace","genericMethod"],
  ["2F","3-D Probe Velocity / Flow","workspace","genericMethod"],
  ["2G","2-D Probe Velocity / Flow","workspace","genericMethod"],
  ["2H","Decay of Swirl / Flow Effects","workspace","genericMethod"],
  ["3","CO₂ / O₂ / Excess Air / Dry MW","workspace","genericMethod"],
  ["3A","O₂ / CO₂ — Instrumental","calc","m3a"],
  ["3B","O₂ / CO₂ — Orsat","workspace","genericMethod"],
  ["4","Moisture Content","calc","m4"],
  ["5","Particulate Matter — Isokinetic","calc","m5"],
  ["5A","PM — Asphalt Processing / Roofing","workspace","genericMethod"],
  ["5B","Nonsulfuric Acid PM","workspace","genericMethod"],
  ["5D","PM — Positive Pressure Fabric Filters","workspace","genericMethod"],
  ["5E","PM — Fiberglass Manufacturing","workspace","genericMethod"],
  ["5F","Nonsulfate PM","workspace","genericMethod"],
  ["5G","PM — Wood Heaters","workspace","genericMethod"],
  ["5H","PM — Wood Heaters / Alt Train","workspace","genericMethod"],
  ["5I","Low-Level PM","workspace","genericMethod"],
  ["6","SO₂","workspace","genericMethod"],
  ["6A","SO₂ / CO₂ / Dry MW","workspace","genericMethod"],
  ["6B","SO₂ / CO₂ Daily Average","workspace","genericMethod"],
  ["6C","SO₂ — Instrumental","calc","inst"],
  ["7","NOx","workspace","genericMethod"],
  ["7A","NOx — Ion Chromatographic","workspace","genericMethod"],
  ["7B","NOx — UV Spectrophotometric","workspace","genericMethod"],
  ["7C","NOx — Alkaline Permanganate","workspace","genericMethod"],
  ["7D","NOx — Alkaline Permanganate / IC","workspace","genericMethod"],
  ["7E","NOx — Instrumental","calc","inst"],
  ["8","Sulfuric Acid Mist / SO₂","workspace","genericMethod"],
  ["9","Visual Opacity","workspace","genericMethod"],
  ["10","CO — Instrumental","calc","inst"],
  ["10A","CO — Continuous Analyzer","workspace","genericMethod"],
  ["10B","CO — NDIR / Integrated Bag","workspace","genericMethod"],
  ["11","Hydrogen Sulfide","workspace","genericMethod"],
  ["12","Inorganic Lead","workspace","genericMethod"],
  ["13A","Total Fluoride — SPADNS","workspace","genericMethod"],
  ["13B","Total Fluoride — Specific Ion Electrode","workspace","genericMethod"],
  ["14","Fluoride — Pot Room Roof Monitors","workspace","genericMethod"],
  ["15","Hydrogen Sulfide / COS / CS₂","workspace","genericMethod"],
  ["15A","Total Reduced Sulfur","workspace","genericMethod"],
  ["16","Semicontinuous Sulfur Emissions","workspace","genericMethod"],
  ["16A","Total Reduced Sulfur — Impinger","workspace","genericMethod"],
  ["16B","TRS / Reduced Sulfur — GC","workspace","genericMethod"],
  ["17","PM — In-Stack Filtration","workspace","genericMethod"],
  ["18","Gaseous Organic Compounds by GC","workspace","genericMethod"],
  ["19","SO₂ / NOx / PM / Heat Input Calculations","calc","compare"],
  ["20","NOx / O₂ / SO₂ — Gas Turbines","workspace","genericMethod"],
  ["21","VOC Leaks","workspace","genericMethod"],
  ["22","Visible Emissions / Fugitive Emissions","workspace","genericMethod"],
  ["23","Dioxins / Furans","workspace","genericMethod"],
  ["24","VOC Content of Surface Coatings","workspace","genericMethod"],
  ["25","Gaseous Nonmethane Organics","workspace","genericMethod"],
  ["25A","Total Gaseous Organics — FID","calc","m25a"],
  ["25B","Total Gaseous Organics — NDIR","workspace","genericMethod"],
  ["25C","Nonmethane Organic Compounds — Landfill Gas","workspace","genericMethod"],
  ["26","Hydrogen Halides / Halogens","workspace","genericMethod"],
  ["26A","Hydrogen Halides / Halogens — Isokinetic","workspace","genericMethod"],
  ["27","Vapor Tightness — Gasoline Delivery Tanks","workspace","genericMethod"],
  ["28","Wood Heater Certification","workspace","genericMethod"],
  ["28A","Wood Heater / Pellet Heater Certification","workspace","genericMethod"],
  ["29","Metals Emissions","workspace","genericMethod"],
  ["30A","Total Vapor Phase Mercury","workspace","genericMethod"],
  ["30B","Total Vapor Phase Mercury — Sorbent Trap","workspace","genericMethod"],
  ["201A","PM10 — Constant Sampling Rate","workspace","genericMethod"],
  ["202","Condensable Particulate Matter","workspace","genericMethod"],
  ["203A","Opacity — Time-Exception","workspace","genericMethod"],
  ["203B","Opacity — Time-Averaged","workspace","genericMethod"],
  ["203C","Opacity — Digital Camera / Alt Procedure","workspace","genericMethod"],
  ["204A","Permanent Total Enclosure Verification","workspace","genericMethod"],
  ["204B","Temporary Total Enclosure Verification","workspace","genericMethod"],
  ["204C","Building Enclosure Verification","workspace","genericMethod"],
  ["204D","Alternative Enclosure Verification","workspace","genericMethod"],
  ["204E","Capture Efficiency — Gas/Gas","workspace","genericMethod"],
  ["204F","Capture Efficiency — Liquid/Gas","workspace","genericMethod"],
  ["205","Wood Products Enclosure / Capture Efficiency","workspace","genericMethod"],
  ["301","Field Validation of Pollutant Measurement Methods","workspace","genericMethod"],
  ["305","Volatile Organic Concentration in Waste","workspace","genericMethod"],
  ["306","Chromium Emissions","workspace","genericMethod"],
  ["308","Methanol Emissions","workspace","genericMethod"],
  ["311","Formaldehyde — Wood Products","workspace","genericMethod"],
  ["315","Extractive FTIR / Alternative Applications","workspace","genericMethod"],
  ["316","Formaldehyde / Phenol / Methanol","workspace","genericMethod"],
  ["320","Vapor Phase Organic / Inorganic by Extractive FTIR","calc","m320"],
  ["321","Gaseous HCl by FTIR / Instrumental","workspace","genericMethod"],
  ["0010","Modified Method 5 Sampling Train — SVOCs","workspace","genericMethod"],
  ["RATA","Part 75 Relative Accuracy Test Audit","calc","rata"]
];

const METHOD_PREP = {
  "1":{
    title:"Sample / Velocity Traverses",
    equipment:[
      "Tape measure / laser",
      "Stack drawings / port layout",
      "Method 1 field sheet",
      "Pitot / yaw check equipment as applicable"
    ],
    setup:[
      "Confirm stack/duct dimensions",
      "Measure upstream/downstream disturbance distances",
      "Confirm port locations and access",
      "Determine traverse point layout"
    ],
    prelims:[
      "Stack shape and dimensions",
      "Distances from disturbances",
      "Port count / orientation"
    ]
  },

  "2":{
    title:"Velocity & Volumetric Flow",
    equipment:[
      "Type S pitot tube",
      "Differential pressure gauge / manometer",
      "Thermocouple",
      "Barometer",
      "Pitot calibration coefficient"
    ],
    setup:[
      "Leak/zero pressure system",
      "Confirm pitot coefficient",
      "Verify thermocouple",
      "Plan traverse points from Method 1"
    ],
    prelims:[
      "Expected velocity / flow",
      "Stack temperature",
      "Pressure",
      "Moisture",
      "Gas molecular weight"
    ]
  },

  "3":{
    title:"Gas Analysis / Molecular Weight",
    equipment:[
      "Orsat / applicable gas-analysis equipment",
      "Sample line",
      "Gas collection equipment"
    ],
    setup:[
      "Confirm required gas species and basis",
      "Prepare sample system"
    ],
    prelims:[
      "Expected O2",
      "Expected CO2",
      "Fuel/process"
    ]
  },

  "3A":{
    title:"O₂ / CO₂ Instrumental",
    equipment:[
      "O₂ analyzer",
      "CO₂ analyzer if required",
      "Zero gas",
      "Upscale calibration gases",
      "Regulators",
      "Heated/sample line as needed",
      "DAS"
    ],
    setup:[
      "Choose analyzer ranges",
      "Verify calibration gas concentrations",
      "Prepare calibration/bias system",
      "Confirm dry/wet reporting basis"
    ],
    prelims:[
      "Expected O₂ / CO₂",
      "Reference O₂ if applicable",
      "Expected concentration range"
    ]
  },

  "4":{
    title:"Moisture Content",
    equipment:[
      "Method 4 impingers / moisture train",
      "Ice chest",
      "Ice",
      "Silica gel",
      "Balance / scale",
      "Graduated cylinder",
      "DGM / pump as applicable"
    ],
    setup:[
      "Prepare/label impingers",
      "Pre-weigh silica gel",
      "Load ice chest",
      "Confirm meter/sample train"
    ],
    prelims:[
      "Expected Bws",
      "Expected sample volume",
      "Expected stack temperature"
    ]
  },

  "5":{
    title:"Particulate — Isokinetic",
    equipment:[
      "Method 5 console",
      "Probe assembly",
      "Heated probe",
      "Type S pitot",
      "Thermocouple",
      "Nozzles",
      "Nozzle calibration sheet",
      "Filter holder",
      "Filters",
      "Impingers",
      "Ice chest",
      "Ice",
      "Silica gel",
      "DGM",
      "Umbilical",
      "Pump",
      "Acetone / recovery supplies",
      "Sample containers",
      "Balance data / filter IDs"
    ],
    setup:[
      "Select preliminary nozzle",
      "Confirm probe/nozzle length",
      "Prepare filter and impingers",
      "Leak check train",
      "Verify DGM/nozzle calibrations",
      "Set filter/probe temperature control"
    ],
    prelims:[
      "Expected velocity/flow",
      "Stack temperature",
      "Bws",
      "Pressure",
      "Run time",
      "Target sample volume"
    ]
  },

  "6":{
    title:"SO₂ — Manual",
    equipment:[
      "Method 6 sampling train",
      "Impingers / absorbers",
      "Reagents",
      "Sample line",
      "Pump / meter",
      "Sample bottles",
      "COC supplies"
    ],
    setup:[
      "Prepare reagents",
      "Label recovery containers",
      "Confirm sample rate / run time"
    ],
    prelims:[
      "Expected SO₂",
      "Run duration",
      "Required detection level"
    ]
  },

  "6C":{
    title:"SO₂ — Instrumental",
    equipment:[
      "SO₂ analyzer",
      "Zero gas",
      "Low/mid/high calibration gases",
      "Regulators",
      "Sample line",
      "Calibration line",
      "DAS"
    ],
    setup:[
      "Select span",
      "Verify calibration gas certs",
      "Prepare system bias path",
      "Confirm response time requirements"
    ],
    prelims:[
      "Expected SO₂",
      "Permit limit",
      "Reference O₂ if applicable"
    ]
  },

  "7E":{
    title:"NOx — Instrumental",
    equipment:[
      "NOx analyzer",
      "Zero gas",
      "Low/mid/high NOx calibration gases",
      "Regulators",
      "Sample line",
      "Calibration line",
      "NO₂ converter check supplies as applicable",
      "DAS"
    ],
    setup:[
      "Select span",
      "Verify calibration gases",
      "Prepare system bias / drift checks",
      "Confirm converter performance requirements"
    ],
    prelims:[
      "Expected NOx",
      "Permit limit",
      "Reference O₂",
      "Fuel / Method 19 basis if lb/MMBtu"
    ]
  },

  "8":{
    title:"Sulfuric Acid Mist / SO₂",
    equipment:[
      "Method 8 sampling train",
      "Probe/nozzle as required",
      "Filter",
      "Impingers",
      "Reagents",
      "Ice chest",
      "Sample containers",
      "Recovery supplies"
    ],
    setup:[
      "Prepare sampling train and reagents",
      "Confirm temperature control",
      "Prepare recovery containers"
    ],
    prelims:[
      "Expected SO₂ / acid mist",
      "Flow / moisture",
      "Run duration"
    ]
  },

  "9":{
    title:"Visible Emissions / Opacity",
    equipment:[
      "Method 9 observation forms",
      "Stopwatch",
      "Compass / sun position aid",
      "Weather data",
      "Rangefinder if used"
    ],
    setup:[
      "Confirm observer certification",
      "Select observation location",
      "Check sun/background conditions"
    ],
    prelims:[
      "Expected operating period",
      "Source orientation",
      "Weather forecast"
    ]
  },

  "10":{
    title:"CO — Instrumental",
    equipment:[
      "CO analyzer",
      "Zero gas",
      "Low/mid/high CO calibration gases",
      "Regulators",
      "Sample line",
      "DAS"
    ],
    setup:[
      "Select span",
      "Verify calibration gas certs",
      "Prepare bias/drift checks"
    ],
    prelims:[
      "Expected CO",
      "Permit limit",
      "Reference O₂"
    ]
  },

  "10B":{
    title:"CO — Integrated Bag / NDIR",
    equipment:[
      "Tedlar / sample bags as applicable",
      "CO analyzer / NDIR",
      "Sampling line",
      "Pump",
      "Calibration gases",
      "Regulators"
    ],
    setup:[
      "Leak check bag system",
      "Prepare analyzer calibration",
      "Confirm integrated sampling time"
    ],
    prelims:[
      "Expected CO",
      "Run duration",
      "Reference O₂"
    ]
  },

  "15":{
    title:"Reduced Sulfur Compounds",
    equipment:[
      "GC / applicable analyzer",
      "Sampling system",
      "Calibration standards",
      "Regulators",
      "Sample bags/containers as applicable"
    ],
    setup:[
      "Confirm compounds required",
      "Prepare GC/analyzer and sampling path"
    ],
    prelims:[
      "Expected H2S/COS/CS2",
      "Required detection limits"
    ]
  },

  "17":{
    title:"PM — In-Stack Filtration",
    equipment:[
      "Method 17 probe/nozzle",
      "In-stack filter holder",
      "Filters",
      "Pitot",
      "Thermocouple",
      "Meter console",
      "Impingers if required",
      "Ice chest",
      "Recovery supplies"
    ],
    setup:[
      "Select nozzle",
      "Prepare in-stack filter assembly",
      "Leak check train"
    ],
    prelims:[
      "Expected flow",
      "Bws",
      "Stack temp",
      "Run time"
    ]
  },

  "18":{
    title:"Gaseous Organics by GC",
    equipment:[
      "Sampling bags / canisters as applicable",
      "GC system",
      "Calibration standards",
      "Sample pump/line",
      "COC supplies"
    ],
    setup:[
      "Confirm target compounds",
      "Prepare calibration standards",
      "Label sample containers"
    ],
    prelims:[
      "Expected compounds/concentrations",
      "Required detection limits"
    ]
  },

  "19":{
    title:"F-Factor / Emission Rate Calculations",
    equipment:[
      "Client fuel/process data",
      "Heat input / fuel flow data",
      "O₂/CO₂ data",
      "Pollutant concentration data"
    ],
    setup:[
      "Confirm required reporting basis",
      "Confirm fuel/F-factor basis",
      "Confirm reference O₂ and averaging"
    ],
    prelims:[
      "Fuel type",
      "Expected O₂",
      "Expected pollutant concentration",
      "Permit lb/MMBtu limit",
      "Heat input if direct basis"
    ]
  },

  "20":{
    title:"Gas Turbine NOx / O₂ / SO₂",
    equipment:[
      "Applicable analyzers",
      "Calibration gases",
      "Sample system",
      "DAS",
      "Fuel/process data"
    ],
    setup:[
      "Confirm turbine load points",
      "Select spans",
      "Prepare calibration/bias checks"
    ],
    prelims:[
      "Expected NOx/O2/SO2",
      "Fuel",
      "Load",
      "Permit basis"
    ]
  },

  "23":{
    title:"Dioxins / Furans",
    equipment:[
      "Method 23 sampling train",
      "XAD/resin module",
      "Filters",
      "Probe/nozzle",
      "Pitot",
      "Impingers",
      "Ice chest",
      "Recovery solvents/containers",
      "COC / custody seals"
    ],
    setup:[
      "Confirm glassware cleanliness",
      "Prepare adsorbent module",
      "Protect samples from contamination",
      "Plan recovery/blank handling"
    ],
    prelims:[
      "Expected flow/moisture",
      "Run time / sample volume",
      "Lab detection requirements"
    ]
  },

  "25A":{
    title:"Total Gaseous Organics — FID",
    equipment:[
      "FID analyzer",
      "Fuel gas",
      "Zero gas",
      "Calibration gases",
      "Regulators",
      "Heated sample line if required",
      "DAS"
    ],
    setup:[
      "Select span",
      "Verify calibration gas basis (carbon equivalent)",
      "Prepare drift checks",
      "Confirm heated system temperature"
    ],
    prelims:[
      "Expected VOC ppmC",
      "Permit limit",
      "Response basis"
    ]
  },

  "26":{
    title:"Hydrogen Halides / Halogens",
    equipment:[
      "Method 26 sampling train",
      "Impingers",
      "Absorbing solutions",
      "Sample line",
      "Pump/meter",
      "Sample bottles",
      "COC"
    ],
    setup:[
      "Prepare absorbing solutions",
      "Label samples",
      "Confirm leak check and sample rate"
    ],
    prelims:[
      "Expected HCl/HF/halogens",
      "Run time",
      "Detection limits"
    ]
  },

  "26A":{
    title:"Hydrogen Halides / Halogens — Isokinetic",
    equipment:[
      "Isokinetic sampling train",
      "Probe/nozzle",
      "Pitot",
      "Thermocouple",
      "Filter / holder as required by method/protocol",
      "Impingers",
      "Absorbing solutions",
      "Ice chest",
      "DGM",
      "Pump",
      "Sample containers",
      "Recovery supplies"
    ],
    setup:[
      "Confirm exact train configuration",
      "Select nozzle",
      "Prepare absorbing solutions",
      "Prepare filter/impingers",
      "Leak check train"
    ],
    prelims:[
      "Expected velocity/flow",
      "Bws",
      "Stack temp",
      "Expected HCl/HF/halogens",
      "Run time"
    ]
  },

  "29":{
    title:"Metals Emissions",
    equipment:[
      "Method 29 sampling train",
      "Probe/nozzle",
      "Pitot",
      "Quartz filter / holder",
      "Impingers",
      "Acid reagents",
      "Ice chest",
      "DGM",
      "Pump",
      "Acid-cleaned sample containers",
      "Recovery supplies",
      "Field blanks / COC"
    ],
    setup:[
      "Confirm glassware cleaning",
      "Prepare reagents and blanks",
      "Select nozzle",
      "Prepare filter and impingers",
      "Plan acid recovery"
    ],
    prelims:[
      "Expected velocity/flow",
      "Bws",
      "Stack temp",
      "Target metals",
      "Lab detection requirements"
    ]
  },

  "201A":{
    title:"PM10 — Constant Sampling Rate",
    equipment:[
      "PM10 sampling head / cyclone",
      "Probe assembly",
      "Pitot",
      "Thermocouple",
      "Filters",
      "Meter console",
      "Recovery supplies"
    ],
    setup:[
      "Confirm cyclone/nozzle configuration",
      "Calculate preliminary sampling rate",
      "Prepare filter"
    ],
    prelims:[
      "Expected velocity/flow",
      "Stack temp",
      "Bws",
      "Particle cut requirements"
    ]
  },

  "202":{
    title:"Condensable Particulate Matter",
    equipment:[
      "Method 202 impinger train",
      "Dry impingers as required",
      "Nitrogen purge setup",
      "Ice chest if required by train/protocol",
      "Sample containers",
      "Acetone / DI water / recovery supplies",
      "Field train proof blank supplies"
    ],
    setup:[
      "Prepare clean train",
      "Confirm purge requirements",
      "Prepare blank and recovery containers",
      "Coordinate with Method 5/17 front half if paired"
    ],
    prelims:[
      "Expected moisture",
      "Paired filterable PM method",
      "Run time / sample volume"
    ]
  },

  "316":{
    title:"Formaldehyde / Phenol / Methanol",
    equipment:[
      "Method 316 sampling train",
      "Impingers",
      "Reagents",
      "Sample line / probe",
      "Pump/meter",
      "Sample containers",
      "COC"
    ],
    setup:[
      "Prepare reagents and containers",
      "Confirm target analytes",
      "Prepare sample train"
    ],
    prelims:[
      "Expected analyte concentrations",
      "Detection requirements",
      "Run duration"
    ]
  },

  "320":{
    title:"Extractive FTIR",
    equipment:[
      "FTIR analyzer",
      "Heated sample line",
      "Heated pump/system",
      "Calibration transfer standards",
      "Spike gas(es)",
      "Regulators",
      "Background gas/setup",
      "DAS/computer",
      "Spare heated-line components"
    ],
    setup:[
      "Confirm analyte list and spectral model",
      "Set cell/line temperatures above dew point",
      "Prepare CTS/spike plan",
      "Collect background",
      "Verify data-file storage"
    ],
    prelims:[
      "Expected analytes/concentrations",
      "Expected moisture/dew point",
      "Line/cell temperatures",
      "Spike concentration",
      "Required detection limits"
    ]
  },

  "0010":{
    title:"Modified Method 5 — SVOCs",
    equipment:[
      "MM5 sampling train",
      "Probe/nozzle",
      "Filter",
      "XAD/resin module",
      "Condenser/impingers",
      "Ice chest",
      "DGM",
      "Pump",
      "Solvents/sample containers",
      "COC"
    ],
    setup:[
      "Prepare resin and filter",
      "Confirm glassware cleanliness",
      "Select nozzle",
      "Prepare recovery containers"
    ],
    prelims:[
      "Expected flow/moisture",
      "Run time / volume",
      "Target SVOCs"
    ]
  },

  "RATA":{
    title:"Part 75 RATA",
    equipment:[
      "Reference method analyzers/trains required by pollutant",
      "Calibration gases",
      "DAS",
      "Client CEMS data access",
      "Operating/load data"
    ],
    setup:[
      "Confirm RATA pollutants and units",
      "Coordinate simultaneous CEMS data",
      "Plan 9–12 paired runs",
      "Confirm load level requirements"
    ],
    prelims:[
      "CEMS expected values",
      "Reference method expected values",
      "Units/basis",
      "Operating load"
    ]
  }
};

const GENERIC_ISO_EQUIPMENT = [
  "Probe/nozzle as required",
  "Pitot / velocity measurement",
  "Thermocouple",
  "Metering system",
  "Pump",
  "Sample containers / COC"
];

const GENERIC_ANALYZER_EQUIPMENT = [
  "Applicable analyzer",
  "Zero gas",
  "Calibration gases",
  "Regulators",
  "Sample line",
  "DAS"
];

const COMMON_METHODS = [
  "1","2","3A","4","5","6C","7E","10",
  "19","25A","26A","29","202","320","RATA"
];

let selectedMethods = [];

function methodInfo(code){
  return METHOD_CATALOG.find(m => m[0] === code);
}

function renderMethodCatalog(filter=""){
  const wrap = $("methodCatalog");
  if(!wrap) return;

  const q = filter.trim().toLowerCase();

  const items = METHOD_CATALOG.filter(([code,title]) =>
    !q ||
    code.toLowerCase().includes(q) ||
    title.toLowerCase().includes(q)
  );

  wrap.innerHTML = items.map(([code,title,status]) => `
    <label class="method-option">
      <input
        type="checkbox"
        data-method-code="${code}"
        ${selectedMethods.includes(code) ? "checked" : ""}
      >
      <span>
        <b>Method ${code}</b>
        <small>${title}</small>
      </span>
      <span class="badge ${status==="calc" ? "calc" : "workspace"}">
        ${status==="calc" ? "Calculator" : "Workspace"}
      </span>
    </label>
  `).join("");
}

function openMethodModal(){
  renderMethodCatalog($("methodSearch")?.value || "");
  $("methodModal")?.classList.remove("hidden");
}

function closeMethodModal(){
  $("methodModal")?.classList.add("hidden");
}

function applyMethodSelection(){
  selectedMethods = [
    ...document.querySelectorAll("[data-method-code]:checked")
  ].map(x => x.dataset.methodCode);

  if($("methods")){
    $("methods").value = selectedMethods.join(", ");
  }

  state.selectedMethods = [...selectedMethods];

  renderSelectedMethods();
  renderHomeMethodChips();
  renderQuickMethods();
  save();
  closeMethodModal();
}

function renderSelectedMethods(){
  const wrap = $("selectedMethodChips");
  if(!wrap) return;

  wrap.innerHTML = selectedMethods.length
    ? selectedMethods.map(c => `<span class="chip">M${c}</span>`).join("")
    : '<span class="muted">No methods selected</span>';
}

function renderHomeMethodChips(){
  const wrap = $("homeSelectedMethods");
  if(!wrap) return;

  wrap.innerHTML = selectedMethods.length
    ? selectedMethods.map(c => `<span class="chip">Method ${c}</span>`).join("")
    : '<span class="muted">No methods selected yet.</span>';
}

function renderQuickMethods(){
  const bar = $("fieldQuickBar");
  if(!bar) return;

  const buttons = selectedMethods.map(code => {
    const info = methodInfo(code);
    if(!info) return "";

    return `
      <button class="quick" data-method-code="${code}">
        M${code}
      </button>
    `;
  }).join("");

  bar.innerHTML = buttons ||
    '<button class="quick" id="quickChooseMethods">Choose Methods</button>';

  bar.querySelectorAll("[data-method-code]").forEach(btn => {
    btn.addEventListener("click", () => {
      openSelectedMethod(btn.dataset.methodCode);
    });
  });

  $("quickChooseMethods")?.addEventListener("click", openMethodModal);
}

let currentGenericMethod = null;

function openSelectedMethod(code){
  const info = methodInfo(code);
  if(!info) return;

  const [c,title,status,target] = info;

  document.querySelectorAll(".field-module").forEach(x => {
    x.classList.remove("active");
  });

  $("compare")?.classList.remove("quick-open");

  if(target === "compare"){
    $("field")?.classList.remove("active");
    $("compare")?.classList.add("quick-open");
    window.scrollTo({top:0,behavior:"smooth"});
    return;
  }

  $("field")?.classList.add("active");

  if(status === "calc" && $(target)){
    $(target).classList.add("active");
  } else {
    currentGenericMethod = c;

    if($("genericEyebrow"))
      $("genericEyebrow").textContent = `EPA METHOD ${c}`;

    if($("genericTitle"))
      $("genericTitle").textContent = title;

    const saved = (state.genericMethods || {})[c] || {};

    if($("genericPrelim"))
      $("genericPrelim").value = saved.prelim || "";

    if($("genericEquipment"))
      $("genericEquipment").value = saved.equipment || "";

    if($("genericField"))
      $("genericField").value = saved.field || "";

    if($("genericQa"))
      $("genericQa").value = saved.qa || "";

    $("genericMethod")?.classList.add("active");
  }

  window.scrollTo({top:0,behavior:"smooth"});
}

function saveGenericWorkspace(){
  if(!currentGenericMethod) return;

  state.genericMethods ||= {};

  state.genericMethods[currentGenericMethod] = {
    prelim: $("genericPrelim")?.value || "",
    equipment: $("genericEquipment")?.value || "",
    field: $("genericField")?.value || "",
    qa: $("genericQa")?.value || "",
    savedAt: new Date().toISOString()
  };

  save();

  if($("genericStatus")){
    $("genericStatus").className = "status ok";
    $("genericStatus").textContent =
      "Method workspace saved locally with this job.";
  }
}
