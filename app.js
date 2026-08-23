let appMode = "full";

function applyMode(){
  document.body.classList.toggle("field-mode",appMode==="field");
  document.body.classList.toggle("full-mode",appMode==="full");
  $("fieldModeBtn")?.classList.toggle("active",appMode==="field");
  $("fullModeBtn")?.classList.toggle("active",appMode==="full");

  if($("modeTitle")){
    $("modeTitle").textContent =
      appMode==="field" ? "Field Mode" : "Full Mode";
  }

  if($("modeHelp")){
    $("modeHelp").textContent =
      appMode==="field"
      ? "Fast entry for active testing. Only the essentials stay in front of you."
      : "Pre-job planning, equipment, multi-run review, averages, comparisons, and closeout.";
  }

  if(appMode==="field"){
    document.querySelectorAll(".view").forEach(v=>{
      v.classList.remove("active","quick-open");
    });

    $("field")?.classList.add("active");
  }
}

function setMode(mode){
  appMode=mode;
  localStorage.setItem("stacktestpro_mode",mode);
  applyMode();
}

function activateFieldModule(id){
  document.querySelectorAll(
    ".module-tab,.field-module,.quick"
  ).forEach(x=>x.classList.remove("active"));

  const mod=$(id);
  if(mod) mod.classList.add("active");

  const tab=document.querySelector(
    `.module-tab[data-module="${id}"]`
  );

  if(tab) tab.classList.add("active");

  const quick=document.querySelector(
    `.quick[data-quick="${id}"]`
  );

  if(quick) quick.classList.add("active");

  $("field")?.classList.add("active");
  $("compare")?.classList.remove("quick-open");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

function saveActiveRunFast(){
  const active=
    document.querySelector(".field-module.active");

  if(!active) return;

  const method=active.id;

  if(method==="rata"){

    if($("saveRunMethod")){
      $("saveRunMethod").value="rata";
    }

  }else if(
    ["m2","m4","m5","inst","m25a","m320"]
      .includes(method)
  ){

    if($("saveRunMethod")){
      $("saveRunMethod").value=method;
    }

  }else{
    return;
  }

  if($("saveRunStatus") && $("fieldRunStatus")){
    $("saveRunStatus").value=
      $("fieldRunStatus").value;
  }

  if($("saveRunName") && $("fieldRunName")){
    $("saveRunName").value=
      $("fieldRunName").value.trim();
  }

  saveCurrentRun();

  if(
    $("fieldRunName") &&
    !$("fieldRunName").value.trim()
  ){
    $("fieldRunName").placeholder=
      `Run ${state.runs.length+1}`;
  }
}


const num=id=>{
  const v=parseFloat($(id)?.value);
  return Number.isFinite(v) ? v : null;
};

const fmt=(v,d=2)=>
  Number.isFinite(v)
  ? v.toLocaleString(
      undefined,
      {maximumFractionDigits:d}
    )
  : "—";


const nozzles=[
  0.125,
  0.156,
  0.188,
  0.219,
  0.250,
  0.265,
  0.281,
  0.312,
  0.375
];


const equipment=[

  ["Isokinetic","Probe assembly"],
  ["Isokinetic","Heated umbilical"],
  ["Isokinetic","Pitot tube"],
  ["Isokinetic","Thermocouple"],
  ["Isokinetic","Sample pump"],
  ["Isokinetic","Condenser / moisture system"],
  ["Isokinetic","Ice chest"],

  ["Analyzers","FTIR"],
  ["Analyzers","O₂ analyzer"],
  ["Analyzers","NOx analyzer"],
  ["Analyzers","SO₂ analyzer"],
  ["Analyzers","CO analyzer"],
  ["Analyzers","VOC analyzer"],

  ["Calibration","Zero gas"],
  ["Calibration","Mid gas"],
  ["Calibration","High gas"],
  ["Calibration","Regulators"],
  ["Calibration","Cylinder certificates"],

  ["Data","Laptop"],
  ["Data","DAS / interface"],
  ["Data","Printer"],

  ["Power","Extension cords"],
  ["Power","Power conditioner"],
  ["Power","Generator connections"],

  ["Safety","PPE"],
  ["Safety","Harness"],
  ["Safety","Hard hat"],
  ["Safety","Gloves"],
  ["Safety","Safety glasses"],

  ["Documentation","Test plan"],
  ["Documentation","Field sheets"],
  ["Documentation","Chain of custody"],

  ["Tools","Toolbox"],
  ["Tools","Spare fittings"],
  ["Tools","Tubing"],
  ["Tools","Leak-check supplies"]

];


const fields=[

"jobId",
"client",
"facility",
"unit",
"testDate",
"methods",

"stackShape",
"diameter",
"width",
"depth",
"upstreamFt",
"downstreamFt",

"velocity",
"stackTemp",
"stackPress",
"bws",
"targetDscfm",
"targetVolume",
"runTime",

"o2Pre",
"co2Pre",
"bwsGas",

"m2RunId",
"m2Cp",
"m2Pb",
"m2Ps",
"m2Md",
"m2Bws",
"m2Dp",
"m2Ts",

"m4RunId",
"m4Vm",
"m4WaterMl",
"m4SilicaG",

"m5RunId",
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
"m5Blank",

"instPollutant",
"instSpan",
"instLowCert",
"instLowResp",
"instMidCert",
"instMidResp",
"instHighCert",
"instHighResp",
"instPreZero",
"instPostZero",
"instPreUp",
"instPostUp",

"m25Span",
"m25Cert",
"m25Resp",
"m25PreZero",
"m25PostZero",
"m25PreUp",
"m25PostUp",
"m25Sample",

"m320RunId",
"m320CellTemp",
"m320LineTemp",
"m320Dew",
"m320CtsExp",
"m320CtsMeas",
"m320SpikeExp",
"m320SpikeMeas",

"actualDscfm",
"actualBws",
"actualVelocity",
"actualTemp",

"testerNox",
"clientNox",
"testerO2",
"clientO2",
"fuel",
"customFd",
"permitLimit",
"clientReported",
"testerLbHr",
"heatInput",

"m1Shape",
"m1Diameter",
"m1Width",
"m1Depth",
"m1Upstream",
"m1Downstream",

"m3aO2",
"m3aCo2",
"m3aBws",

"prepJobId",
"prepClient",
"prepFacility",
"prepUnit",
"prepDate",
"prepPm",

"permitRef",
"operatingCondition",
"prepFuel",
"requiredRuns",
"requiredRunTime",
"permitRequirement",
"protocolNotes",

"jpStackShape",
"jpDiameter",
"jpWidth",
"jpDepth",
"jpTemp",
"jpVelocity",
"jpAcfm",
"jpDscfm",
"jpBws",
"jpO2",
"jpCo2",
"jpBaro"

];


let state={
  equipment:{},
  post:{},
  runs:[]
};

const STORAGE="stacktestpro_v01_job";


function buildEquipment(){

  const wrap=$("equipmentList");

  if(!wrap) return;

  wrap.innerHTML="";

  let last="";

  equipment.forEach(([cat,item],i)=>{

    if(cat!==last){

      const h=document.createElement("div");

      h.className="eyebrow";

      h.style.marginTop=i ? "12px" : "2px";

      h.textContent=cat;

      wrap.appendChild(h);

      last=cat;
    }

    const label=
      document.createElement("label");

    label.className="check";

    const checked=
      !!state.equipment[item];

    label.innerHTML=`
      <input
        type="checkbox"
        data-equip="${item.replace(/"/g,'&quot;')}"
        ${checked ? "checked" : ""}
      >
      <span class="equip-name">
        ${item}
      </span>
    `;

    wrap.appendChild(label);

  });

  wrap.querySelectorAll("[data-equip]")
    .forEach(cb=>{

      cb.addEventListener(
        "change",
        e=>{

          state.equipment[
            e.target.dataset.equip
          ]=e.target.checked;

          save();
          updateEquipment();

        }
      );

    });

  updateEquipment();

}


function updateEquipment(){

  const done=
    equipment.filter(
      ([,item])=>state.equipment[item]
    ).length;

  if($("equipProgress")){
    $("equipProgress").textContent=
      `${done} / ${equipment.length}`;
  }

}


function method1(){

  const shape=
    $("stackShape")?.value;

  const d=num("diameter");

  const w=num("width");

  const dep=num("depth");

  let area=null;

  let eq=null;


  if(
    shape==="Circular" &&
    d>0
  ){

    area=Math.PI*d*d/4;

    eq=d;

  }


  if(
    shape==="Rectangular" &&
    w>0 &&
    dep>0
  ){

    area=w*dep;

    eq=
      2*w*dep/
      (w+dep);

  }


  if($("areaOut")){
    $("areaOut").textContent=
      fmt(area);
  }

  if($("eqDiaOut")){
    $("eqDiaOut").textContent=
      fmt(eq);
  }


  const up=num("upstreamFt");

  const down=num("downstreamFt");


  const upD=
    (eq && up!=null)
    ? up/eq
    : null;


  const downD=
    (eq && down!=null)
    ? down/eq
    : null;


  if($("upDiaOut")){
    $("upDiaOut").textContent=
      fmt(upD);
  }


  if($("downDiaOut")){
    $("downDiaOut").textContent=
      fmt(downD);
  }


  const flag=$("m1Flag");


  if(flag){

    flag.className=
      "status neutral";

    flag.textContent=
      "Enter prelim geometry.";


    if(
      eq &&
      upD!=null &&
      downD!=null
    ){

      if(
        upD>=2 &&
        downD>=0.5
      ){

        flag.className=
          "status ok";

        flag.textContent=
          "Preliminary location screen looks reasonable — verify exact Method 1 requirements.";

      }else{

        flag.className=
          "status warn";

        flag.textContent=
          "Review site suitability and exact Method 1 traverse requirements before mobilization.";

      }

    }

  }


  return {
    area,
    eq
  };

}


function method2(){

  const {area}=method1();

  const v=num("velocity");

  const t=num("stackTemp");

  const p=num("stackPress");

  const b=num("bws");


  let acfm=null;

  let scfm=null;

  let dscfm=null;


  if(
    area>0 &&
    v!=null
  ){

    acfm=
      area*
      v*
      60;

  }


  if(
    acfm!=null &&
    t!=null &&
    p>0
  ){

    scfm=
      acfm *
      (528/(t+459.67)) *
      (p/29.92);

  }


  if(
    scfm!=null &&
    b!=null
  ){

    dscfm=
      scfm*
      (1-b);

  }


  if($("acfmOut")){
    $("acfmOut").textContent=
      fmt(acfm,0);
  }


  if($("scfmOut")){
    $("scfmOut").textContent=
      fmt(scfm,0);
  }


  if($("dscfmOut")){
    $("dscfmOut").textContent=
      fmt(dscfm,0);
  }


  return {
    acfm,
    scfm,
    dscfm
  };

}


function nozzleCalc(){

  const v=num("velocity");

  const t=num("stackTemp");

  const p=num("stackPress");

  const b=num("bws");

  let target=
    num("targetDscfm");

  const vol=
    num("targetVolume");

  const minutes=
    num("runTime");


  if(
    target==null &&
    vol!=null &&
    minutes>0
  ){

    target=
      vol/minutes;

  }


  let wetRate=null;

  let dia=null;


  if(
    v>0 &&
    t!=null &&
    p>0 &&
    b!=null &&
    b<1 &&
    target>0
  ){

    wetRate=
      target/
      (1-b) *
      ((t+459.67)/528) *
      (29.92/p);


    dia=
      Math.sqrt(
        4*
        (wetRate/(v*60))/
        Math.PI
      )*
      12;

  }


  if($("nozzleOut")){
    $("nozzleOut").textContent=
      fmt(dia,3);
  }


  const tbody=
    $("nozzleTable");

  if(!tbody) return;


  tbody.innerHTML="";


  nozzles.forEach(n=>{

    let req=null;

    let note=
      "Enter prelim conditions";


    if(
      v>0 &&
      t!=null &&
      p>0 &&
      b!=null
    ){

      const wet=
        (
          Math.PI*
          Math.pow(n/12,2)/
          4
        )*
        v*
        60;


      req=
        wet*
        (1-b)*
        (528/(t+459.67))*
        (p/29.92);


      note=
        (
          req>=0.3 &&
          req<=1.2
        )
        ? "Typical planning range"
        : "Check meter capability";

    }


    tbody.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
        <td>${n.toFixed(3)}</td>
        <td>${fmt(req,3)}</td>
        <td>${note}</td>
      </tr>
      `
    );

  });

}


function gasCalc(){

  const o=num("o2Pre");

  const c=num("co2Pre");

  const b=num("bwsGas");


  let n=null;

  let dry=null;

  let wet=null;


  if(
    o!=null &&
    c!=null
  ){

    n=
      100-
      o-
      c;


    dry=
      (
        32*o+
        44*c+
        28*n
      )/
      100;

  }


  if(
    dry!=null &&
    b!=null
  ){

    wet=
      dry*
      (1-b)+
      18*b;

  }


  if($("n2Out")){
    $("n2Out").textContent=
      fmt(n);
  }


  if($("dryMwOut")){
    $("dryMwOut").textContent=
      fmt(dry);
  }


  if($("wetMwOut")){
    $("wetMwOut").textContent=
      fmt(wet);
  }

}


function fieldCompare(){

  const pre=
    method2().dscfm;

  const actual=
    num("actualDscfm");


  if($("prelimFlowCompare")){
    $("prelimFlowCompare").textContent=
      fmt(pre,0);
  }


  if($("actualFlowCompare")){
    $("actualFlowCompare").textContent=
      fmt(actual,0);
  }


  const diff=
    (
      pre &&
      actual!=null
    )
    ?
    (
      (actual-pre)/
      pre*
      100
    )
    :
    null;


  if($("flowDiff")){
    $("flowDiff").textContent=
      fmt(diff,1);
  }

}


/* ============================
   METHOD 19 CALCULATOR
============================ */


function fd(){

  const custom=
    num("customFd");


  if(
    custom!=null &&
    custom>0
  ){

    return custom;

  }


  const raw=
    $("fuel")?.value;


  if(!raw){
    return null;
  }


  const numeric=
    parseFloat(raw);


  if(
    Number.isFinite(numeric)
  ){

    return numeric;

  }


  const fuelName=
    String(raw)
      .trim()
      .toLowerCase();


  const factors={

    "natural gas":8710,

    "pipeline natural gas":8710,

    "propane":8710,

    "butane":8710,

    "distillate oil":9190,

    "fuel oil":9190,

    "residual oil":9190,

    "coal":9820,

    "wood":9240

  };


  return factors[fuelName] ?? null;

}


function m19(ppm,o2){

  const Fd=fd();


  if(
    ppm==null ||
    o2==null ||
    Fd==null ||
    Fd<=0 ||
    o2>=20.9
  ){

    return null;

  }


  return (
    ppm *
    46.01 /
    (385.3*1e6) *
    Fd *
    20.9 /
    (20.9-o2)
  );

}


function noxCalc(){

  const tester=
    m19(
      num("testerNox"),
      num("testerO2")
    );


  const reported=
    num("clientReported");


  const client=
    (
      reported!=null &&
      reported>0
    )
    ?
    reported
    :
    m19(
      num("clientNox"),
      num("clientO2")
    );


  const diff=
    (
      tester!=null &&
      client!=null &&
      Math.abs(client)>0
    )
    ?
    (
      Math.abs(
        tester-client
      )/
      Math.abs(client)*
      100
    )
    :
    null;


  const limit=
    num("permitLimit");


  const margin=
    (
      tester!=null &&
      limit!=null &&
      limit>0
    )
    ?
    (
      (limit-tester)/
      limit*
      100
    )
    :
    null;


  const mass=
    num("testerLbHr");


  const heat=
    num("heatInput");


  const direct=
    (
      mass!=null &&
      heat!=null &&
      heat>0
    )
    ?
    mass/heat
    :
    null;


  if($("testerM19")){
    $("testerM19").textContent=
      fmt(tester,4);
  }


  if($("clientM19")){
    $("clientM19").textContent=
      fmt(client,4);
  }


  if($("noxDiff")){
    $("noxDiff").textContent=
      fmt(diff,1);
  }


  if($("permitMargin")){
    $("permitMargin").textContent=
      fmt(margin,1);
  }


  if($("directLbMmbtu")){
    $("directLbMmbtu").textContent=
      fmt(direct,4);
  }


  const flag=
    $("noxFlag");


  if(!flag){
    return;
  }


  if(tester==null){

    flag.className=
      "status neutral";

    flag.textContent=
      "Enter tester NOx, O₂, and Fd information.";

  }else if(client==null){

    flag.className=
      "status neutral";

    flag.textContent=
      "Tester result calculated. Enter client NOx/O₂ or a client-reported lb/MMBtu value.";

  }else if(
    diff!=null &&
    diff<=10
  ){

    flag.className=
      "status ok";

    flag.textContent=
      "Tester/client preliminary agreement is within 10%. Review rule-specific acceptance criteria.";

  }else{

    flag.className=
      "status warn";

    flag.textContent=
      "Tester/client difference exceeds 10%. Check concentration, O₂ basis, Fd, averaging, moisture basis, and client data.";

  }


  if(
    margin!=null &&
    margin<0
  ){

    flag.className=
      "status warn";

    flag.textContent+=
      " Tester result is above the entered permit limit.";

  }

}


const K2=85.49;


function method2Field(){

  const cp=num("m2Cp");

  const pb=num("m2Pb");

  const ps=num("m2Ps");

  const md=num("m2Md");

  const b=num("m2Bws");

  const dp=num("m2Dp");

  const ts=num("m2Ts");


  let mw=null;

  let pabs=null;

  let vel=null;

  let acfm=null;

  let scfm=null;

  let dscfm=null;


  if(
    md!=null &&
    b!=null
  ){

    mw=
      md*
      (1-b)+
      18*b;

  }


  if(pb!=null){

    pabs=
      pb+
      (ps||0)/
      13.6;

  }


  const area=
    method1().area;


  if(
    cp &&
    pabs>0 &&
    mw>0 &&
    dp>=0 &&
    ts!=null
  ){

    vel=
      K2*
      cp*
      Math.sqrt(
        dp*
        (ts+459.67)/
        (pabs*mw)
      );


    if(area>0){

      acfm=
        vel*
        area*
        60;

    }


    if(acfm!=null){

      scfm=
        acfm*
        (528/(ts+459.67))*
        (pabs/29.92);

    }


    if(
      scfm!=null &&
      b!=null
    ){

      dscfm=
        scfm*
        (1-b);

    }

  }


  if($("m2Mw")){
    $("m2Mw").textContent=
      fmt(mw,2);
  }


  if($("m2Vel")){
    $("m2Vel").textContent=
      fmt(vel,2);
  }


  if($("m2Acfm")){
    $("m2Acfm").textContent=
      fmt(acfm,0);
  }


  if($("m2Scfm")){
    $("m2Scfm").textContent=
      fmt(scfm,0);
  }


  if($("m2Dscfm")){
    $("m2Dscfm").textContent=
      fmt(dscfm,0);
  }


  const f=
    $("m2Flag");


  if(f){

    if(dscfm!=null){

      f.className=
        "status ok";

      f.textContent=
        "Method 2 run calculation populated — verify traverse averages and inputs.";

    }else{

      f.className=
        "status neutral";

      f.textContent=
        "Enter Method 2 field data.";

    }

  }


  return {
    mw,
    vel,
    acfm,
    scfm,
    dscfm
  };

}


function method4Field(){

  const vm=
    num("m4Vm");

  const ml=
    num("m4WaterMl");

  const sg=
    num("m4SilicaG");


  let vw=null;

  let bws=null;


  if(
    ml!=null ||
    sg!=null
  ){

    const grams=
      (ml||0)+
      (sg||0);


    vw=
      grams/
      18.01528*
      0.04707;


    if(
      vm!=null &&
      vm+vw>0
    ){

      bws=
        vw/
        (vm+vw);

    }

  }


  if($("m4Vw")){
    $("m4Vw").textContent=
      fmt(vw,3);
  }


  if($("m4BwsOut")){
    $("m4BwsOut").textContent=
      fmt(bws,4);
  }


  const f=
    $("m4Flag");


  if(f){

    if(bws!=null){

      f.className=
        "status ok";

      f.textContent=
        "Method 4 moisture calculated — verify train volumes and any method-specific corrections.";

    }else{

      f.className=
        "status neutral";

      f.textContent=
        "Enter Method 4 field data.";

    }

  }


  return {
    vw,
    bws
  };

}


function method5Field(){

  const noz=
    num("m5Nozzle");

  const mins=
    num("m5Time");

  const actual=
    num("m5VmStd");

  const v=
    num("m5Vel");

  const t=
    num("m5Ts");

  const p=
    num("m5P");

  const b=
    num("m5Bws");


  const fc=
    num("m5Filter");

  const pc=
    num("m5Probe");

  const oc=
    num("m5Other")||0;

  const blank=
    num("m5Blank")||0;


  let ideal=null;

  let iso=null;

  let total=null;

  let gr=null;


  if(
    noz>0 &&
    mins>0 &&
    v>0 &&
    t!=null &&
    p>0 &&
    b!=null
  ){

    const wet=
      (
        Math.PI*
        Math.pow(noz/12,2)/
        4
      )*
      v*
      60;


    const dry=
      wet*
      (1-b)*
      (528/(t+459.67))*
      (p/29.92);


    ideal=
      dry*
      mins;


    if(
      actual!=null &&
      ideal>0
    ){

      iso=
        actual/
        ideal*
        100;

    }

  }


  if(
    fc!=null ||
    pc!=null
  ){

    total=
      (fc||0)+
      (pc||0)+
      oc-
      blank;

  }


  if(
    total!=null &&
    actual>0
  ){

    gr=
      (
        total/
        64.79891
      )/
      actual;

  }


  if($("m5Ideal")){
    $("m5Ideal").textContent=
      fmt(ideal,2);
  }


  if($("m5Iso")){
    $("m5Iso").textContent=
      fmt(iso,1);
  }


  if($("m5PmMg")){
    $("m5PmMg").textContent=
      fmt(total,2);
  }


  if($("m5GrDscf")){
    $("m5GrDscf").textContent=
      fmt(gr,5);
  }


  const f=
    $("m5Flag");


  if(f){

    if(iso!=null){

      if(
        iso>=90 &&
        iso<=110
      ){

        f.className=
          "status ok";

        f.textContent=
          "Isokinetic percentage is within 90–110%.";

      }else{

        f.className=
          "status warn";

        f.textContent=
          "Isokinetic percentage is outside 90–110%; review run validity and inputs.";

      }

    }else{

      f.className=
        "status neutral";

      f.textContent=
        "Enter Method 5 field data.";

    }

  }


  return {
    ideal,
    iso,
    total,
    gr
  };

}


function pctSpan(
  resp,
  cert,
  span
){

  return (
    resp!=null &&
    cert!=null &&
    span>0
  )
  ?
  (
    (resp-cert)/
    span*
    100
  )
  :
  null;

}


function instrumentalField(){

  const span=
    num("instSpan");


  const low=
    pctSpan(
      num("instLowResp"),
      num("instLowCert"),
      span
    );


  const mid=
    pctSpan(
      num("instMidResp"),
      num("instMidCert"),
      span
    );


  const high=
    pctSpan(
      num("instHighResp"),
      num("instHighCert"),
      span
    );


  const zd=
    (
      span>0 &&
      num("instPreZero")!=null &&
      num("instPostZero")!=null
    )
    ?
    (
      (
        num("instPostZero")-
        num("instPreZero")
      )/
      span*
      100
    )
    :
    null;


  const ud=
    (
      span>0 &&
      num("instPreUp")!=null &&
      num("instPostUp")!=null
    )
    ?
    (
      (
        num("instPostUp")-
        num("instPreUp")
      )/
      span*
      100
    )
    :
    null;


  if($("instLowCe")){
    $("instLowCe").textContent=
      fmt(low,2);
  }


  if($("instMidCe")){
    $("instMidCe").textContent=
      fmt(mid,2);
  }


  if($("instHighCe")){
    $("instHighCe").textContent=
      fmt(high,2);
  }


  if($("instZeroDrift")){
    $("instZeroDrift").textContent=
      fmt(zd,2);
  }


  if($("instUpDrift")){
    $("instUpDrift").textContent=
      fmt(ud,2);
  }


  const vals=
    [
      low,
      mid,
      high,
      zd,
      ud
    ]
    .filter(v=>v!=null)
    .map(Math.abs);


  const f=
    $("instFlag");


  if(f){

    if(vals.length===5){

      f.className=
        Math.max(...vals)<=5
        ? "status ok"
        : "status warn";


      f.textContent=
        Math.max(...vals)<=5
        ?
        "Analyzer QA values are within the app's preliminary ±5% span screen. Verify exact method limits."
        :
        "One or more QA values exceed the app's preliminary ±5% span screen. Verify method-specific criteria.";

    }else{

      f.className=
        "status neutral";

      f.textContent=
        "Enter calibration and drift data.";

    }

  }


  return {
    low,
    mid,
    high,
    zd,
    ud
  };

}


function method25AField(){

  const span=
    num("m25Span");


  const ce=
    pctSpan(
      num("m25Resp"),
      num("m25Cert"),
      span
    );


  const zd=
    (
      span>0 &&
      num("m25PreZero")!=null &&
      num("m25PostZero")!=null
    )
    ?
    (
      (
        num("m25PostZero")-
        num("m25PreZero")
      )/
      span*
      100
    )
    :
    null;


  const ud=
    (
      span>0 &&
      num("m25PreUp")!=null &&
      num("m25PostUp")!=null
    )
    ?
    (
      (
        num("m25PostUp")-
        num("m25PreUp")
      )/
      span*
      100
    )
    :
    null;


  const voc=
    num("m25Sample");


  if($("m25Ce")){
    $("m25Ce").textContent=
      fmt(ce,2);
  }


  if($("m25Zd")){
    $("m25Zd").textContent=
      fmt(zd,2);
  }


  if($("m25Ud")){
    $("m25Ud").textContent=
      fmt(ud,2);
  }


  if($("m25Voc")){
    $("m25Voc").textContent=
      fmt(voc,2);
  }


  const f=
    $("m25Flag");


  if(f){

    if(
      ce!=null &&
      zd!=null &&
      ud!=null
    ){

      f.className=
        Math.max(
          Math.abs(ce),
          Math.abs(zd),
          Math.abs(ud)
        )<=5
        ?
        "status ok"
        :
        "status warn";


      f.textContent=
        f.className.includes("ok")
        ?
        "Method 25A QA screen looks acceptable for preliminary review — verify exact criteria."
        :
        "Review Method 25A QA values against the applicable method criteria.";

    }else{

      f.className=
        "status neutral";

      f.textContent=
        "Enter Method 25A data.";

    }

  }


  return {
    ce,
    zd,
    ud,
    voc
  };

}


function method320Field(){

  const line=
    num("m320LineTemp");

  const dew=
    num("m320Dew");

  const ce=
    num("m320CtsExp");

  const cm=
    num("m320CtsMeas");

  const se=
    num("m320SpikeExp");

  const sm=
    num("m320SpikeMeas");


  const margin=
    (
      line!=null &&
      dew!=null
    )
    ?
    line-dew
    :
    null;


  const cts=
    (
      ce &&
      cm!=null
    )
    ?
    (
      (cm-ce)/
      ce*
      100
    )
    :
    null;


  const rec=
    (
      se &&
      sm!=null
    )
    ?
    sm/
    se*
    100
    :
    null;


  if($("m320Margin")){
    $("m320Margin").textContent=
      fmt(margin,1);
  }


  if($("m320CtsDiff")){
    $("m320CtsDiff").textContent=
      fmt(cts,1);
  }


  if($("m320SpikeRec")){
    $("m320SpikeRec").textContent=
      fmt(rec,1);
  }


  const filesOk=
    !!$("m320Bg")?.checked &&
    !!$("m320SampleFile")?.checked &&
    !!$("m320CtsFile")?.checked;


  const f=
    $("m320Flag");


  if(f){

    if(
      margin!=null &&
      cts!=null &&
      rec!=null
    ){

      if(
        margin>0 &&
        filesOk
      ){

        f.className=
          "status ok";

        f.textContent=
          "FTIR run-review screen is populated and required files are checked. Verify method-specific CTS/spike limits.";

      }else{

        f.className=
          "status warn";

        f.textContent=
          "Review heated-line margin and file-retention checklist before closing the run.";

      }

    }else{

      f.className=
        "status neutral";

      f.textContent=
        "Enter FTIR run-review data.";

    }

  }


  return {
    margin,
    cts,
    rec,
    filesOk
  };

}


function buildRataRows(){

  const body=
    $("rataRows");

  if(!body) return;


  body.innerHTML="";


  for(
    let i=1;
    i<=12;
    i++
  ){

    body.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
        <td>${i}</td>
        <td>
          <input
            id="rataRef${i}"
            type="number"
            step="any"
          >
        </td>
        <td>
          <input
            id="rataCems${i}"
            type="number"
            step="any"
          >
        </td>
        <td id="rataDiff${i}">
          —
        </td>
      </tr>
      `
    );

  }


  for(
    let i=1;
    i<=12;
    i++
  ){

    [
      "rataRef"+i,
      "rataCems"+i
    ].forEach(id=>{

      $(id)?.addEventListener(
        "input",
        ()=>{

          rataField();
          save();

        }
      );

    });

  }

}


function rataField(){

  let refs=[];

  let cems=[];

  let diffs=[];


  for(
    let i=1;
    i<=12;
    i++
  ){

    const r=
      num("rataRef"+i);

    const c=
      num("rataCems"+i);


    if(
      r!=null &&
      c!=null
    ){

      refs.push(r);

      cems.push(c);

      diffs.push(c-r);


      if($("rataDiff"+i)){

        $("rataDiff"+i).textContent=
          fmt(c-r,3);

      }

    }else if(
      $("rataDiff"+i)
    ){

      $("rataDiff"+i).textContent=
        "—";

    }

  }


  const avg=a=>
    a.length
    ?
    a.reduce(
      (x,y)=>x+y,
      0
    )/
    a.length
    :
    null;


  const ar=
    avg(refs);

  const ac=
    avg(cems);

  const ad=
    avg(diffs);


  const rel=
    (
      ar &&
      ad!=null
    )
    ?
    Math.abs(ad)/
    Math.abs(ar)*
    100
    :
    null;


  if($("rataN")){
    $("rataN").textContent=
      refs.length;
  }


  if($("rataRefAvg")){
    $("rataRefAvg").textContent=
      fmt(ar,3);
  }


  if($("rataCemsAvg")){
    $("rataCemsAvg").textContent=
      fmt(ac,3);
  }


  if($("rataDiffAvg")){
    $("rataDiffAvg").textContent=
      fmt(ad,3);
  }


  if($("rataRelDiff")){
    $("rataRelDiff").textContent=
      fmt(rel,2);
  }


  const f=
    $("rataFlag");


  if(f){

    if(refs.length>=9){

      f.className=
        "status ok";

      f.textContent=
        "At least 9 paired runs entered. Proceed with full rule-specific RA/bias review.";

    }else{

      f.className=
        "status neutral";

      f.textContent=
        "Enter at least 9 paired runs for a normal RATA review set.";

    }

  }


  return {
    n:refs.length,
    ar,
    ac,
    ad,
    rel
  };

}
