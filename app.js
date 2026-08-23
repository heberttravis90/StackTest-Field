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
"1":{title:"Sample / Velocity Traverses",equipment:["Tape measure / laser","Stack drawings / port layout","Method 1 field sheet","Pitot / yaw check equipment as applicable"],setup:["Confirm stack/duct dimensions","Measure upstream/downstream disturbance distances","Confirm port locations and access","Determine traverse point layout"],prelims:["Stack shape and dimensions","Distances from disturbances","Port count / orientation"]},
"2":{title:"Velocity & Volumetric Flow",equipment:["Type S pitot tube","Differential pressure gauge / manometer","Thermocouple","Barometer","Pitot calibration coefficient"],setup:["Leak/zero pressure system","Confirm pitot coefficient","Verify thermocouple","Plan traverse points from Method 1"],prelims:["Expected velocity / flow","Stack temperature","Pressure","Moisture","Gas molecular weight"]},
"3":{title:"Gas Analysis / Molecular Weight",equipment:["Orsat / applicable gas-analysis equipment","Sample line","Gas collection equipment"],setup:["Confirm required gas species and basis","Prepare sample system"],prelims:["Expected O2","Expected CO2","Fuel/process"]},
"3A":{title:"O₂ / CO₂ Instrumental",equipment:["O₂ analyzer","CO₂ analyzer if required","Zero gas","Upscale calibration gases","Regulators","Heated/sample line as needed","DAS"],setup:["Choose analyzer ranges","Verify calibration gas concentrations","Prepare calibration/bias system","Confirm dry/wet reporting basis"],prelims:["Expected O₂ / CO₂","Reference O₂ if applicable","Expected concentration range"]},
"4":{title:"Moisture Content",equipment:["Method 4 impingers / moisture train","Ice chest","Ice","Silica gel","Balance / scale","Graduated cylinder","DGM / pump as applicable"],setup:["Prepare/label impingers","Pre-weigh silica gel","Load ice chest","Confirm meter/sample train"],prelims:["Expected Bws","Expected sample volume","Expected stack temperature"]},
"5":{title:"Particulate — Isokinetic",equipment:["Method 5 console","Probe assembly","Heated probe","Type S pitot","Thermocouple","Nozzles","Nozzle calibration sheet","Filter holder","Filters","Impingers","Ice chest","Ice","Silica gel","DGM","Umbilical","Pump","Acetone / recovery supplies","Sample containers","Balance data / filter IDs"],setup:["Select preliminary nozzle","Confirm probe/nozzle length","Prepare filter and impingers","Leak check train","Verify DGM/nozzle calibrations","Set filter/probe temperature control"],prelims:["Expected velocity/flow","Stack temperature","Bws","Pressure","Run time","Target sample volume"]},
"6":{title:"SO₂ — Manual",equipment:["Method 6 sampling train","Impingers / absorbers","Reagents","Sample line","Pump / meter","Sample bottles","COC supplies"],setup:["Prepare reagents","Label recovery containers","Confirm sample rate / run time"],prelims:["Expected SO₂","Run duration","Required detection level"]},
"6C":{title:"SO₂ — Instrumental",equipment:["SO₂ analyzer","Zero gas","Low/mid/high calibration gases","Regulators","Sample line","Calibration line","DAS"],setup:["Select span","Verify calibration gas certs","Prepare system bias path","Confirm response time requirements"],prelims:["Expected SO₂","Permit limit","Reference O₂ if applicable"]},
"7E":{title:"NOx — Instrumental",equipment:["NOx analyzer","Zero gas","Low/mid/high NOx calibration gases","Regulators","Sample line","Calibration line","NO₂ converter check supplies as applicable","DAS"],setup:["Select span","Verify calibration gases","Prepare system bias / drift checks","Confirm converter performance requirements"],prelims:["Expected NOx","Permit limit","Reference O₂","Fuel / Method 19 basis if lb/MMBtu"]},
"8":{title:"Sulfuric Acid Mist / SO₂",equipment:["Method 8 sampling train","Probe/nozzle as required","Filter","Impingers","Reagents","Ice chest","Sample containers","Recovery supplies"],setup:["Prepare sampling train and reagents","Confirm temperature control","Prepare recovery containers"],prelims:["Expected SO₂ / acid mist","Flow / moisture","Run duration"]},
"9":{title:"Visible Emissions / Opacity",equipment:["Method 9 observation forms","Stopwatch","Compass / sun position aid","Weather data","Rangefinder if used"],setup:["Confirm observer certification","Select observation location","Check sun/background conditions"],prelims:["Expected operating period","Source orientation","Weather forecast"]},
"10":{title:"CO — Instrumental",equipment:["CO analyzer","Zero gas","Low/mid/high CO calibration gases","Regulators","Sample line","DAS"],setup:["Select span","Verify calibration gas certs","Prepare bias/drift checks"],prelims:["Expected CO","Permit limit","Reference O₂"]},
"10B":{title:"CO — Integrated Bag / NDIR",equipment:["Tedlar / sample bags as applicable","CO analyzer / NDIR","Sampling line","Pump","Calibration gases","Regulators"],setup:["Leak check bag system","Prepare analyzer calibration","Confirm integrated sampling time"],prelims:["Expected CO","Run duration","Reference O₂"]},
"15":{title:"Reduced Sulfur Compounds",equipment:["GC / applicable analyzer","Sampling system","Calibration standards","Regulators","Sample bags/containers as applicable"],setup:["Confirm compounds required","Prepare GC/analyzer and sampling path"],prelims:["Expected H2S/COS/CS2","Required detection limits"]},
"17":{title:"PM — In-Stack Filtration",equipment:["Method 17 probe/nozzle","In-stack filter holder","Filters","Pitot","Thermocouple","Meter console","Impingers if required","Ice chest","Recovery supplies"],setup:["Select nozzle","Prepare in-stack filter assembly","Leak check train"],prelims:["Expected flow","Bws","Stack temp","Run time"]},
"18":{title:"Gaseous Organics by GC",equipment:["Sampling bags / canisters as applicable","GC system","Calibration standards","Sample pump/line","COC supplies"],setup:["Confirm target compounds","Prepare calibration standards","Label sample containers"],prelims:["Expected compounds/concentrations","Required detection limits"]},
"19":{title:"F-Factor / Emission Rate Calculations",equipment:["Client fuel/process data","Heat input / fuel flow data","O₂/CO₂ data","Pollutant concentration data"],setup:["Confirm required reporting basis","Confirm fuel/F-factor basis","Confirm reference O₂ and averaging"],prelims:["Fuel type","Expected O₂","Expected pollutant concentration","Permit lb/MMBtu limit","Heat input if direct basis"]},
"20":{title:"Gas Turbine NOx / O₂ / SO₂",equipment:["Applicable analyzers","Calibration gases","Sample system","DAS","Fuel/process data"],setup:["Confirm turbine load points","Select spans","Prepare calibration/bias checks"],prelims:["Expected NOx/O2/SO2","Fuel","Load","Permit basis"]},
"23":{title:"Dioxins / Furans",equipment:["Method 23 sampling train","XAD/resin module","Filters","Probe/nozzle","Pitot","Impingers","Ice chest","Recovery solvents/containers","COC / custody seals"],setup:["Confirm glassware cleanliness","Prepare adsorbent module","Protect samples from contamination","Plan recovery/blank handling"],prelims:["Expected flow/moisture","Run time / sample volume","Lab detection requirements"]},
"25A":{title:"Total Gaseous Organics — FID",equipment:["FID analyzer","Fuel gas","Zero gas","Calibration gases","Regulators","Heated sample line if required","DAS"],setup:["Select span","Verify calibration gas basis (carbon equivalent)","Prepare drift checks","Confirm heated system temperature"],prelims:["Expected VOC ppmC","Permit limit","Response basis"]},
"26":{title:"Hydrogen Halides / Halogens",equipment:["Method 26 sampling train","Impingers","Absorbing solutions","Sample line","Pump/meter","Sample bottles","COC"],setup:["Prepare absorbing solutions","Label samples","Confirm leak check and sample rate"],prelims:["Expected HCl/HF/halogens","Run time","Detection limits"]},
"26A":{title:"Hydrogen Halides / Halogens — Isokinetic",equipment:["Isokinetic sampling train","Probe/nozzle","Pitot","Thermocouple","Filter / holder as required by method/protocol","Impingers","Absorbing solutions","Ice chest","DGM","Pump","Sample containers","Recovery supplies"],setup:["Confirm exact train configuration","Select nozzle","Prepare absorbing solutions","Prepare filter/impingers","Leak check train"],prelims:["Expected velocity/flow","Bws","Stack temp","Expected HCl/HF/halogens","Run time"]},
"29":{title:"Metals Emissions",equipment:["Method 29 sampling train","Probe/nozzle","Pitot","Quartz filter / holder","Impingers","Acid reagents","Ice chest","DGM","Pump","Acid-cleaned sample containers","Recovery supplies","Field blanks / COC"],setup:["Confirm glassware cleaning","Prepare reagents and blanks","Select nozzle","Prepare filter and impingers","Plan acid recovery"],prelims:["Expected velocity/flow","Bws","Stack temp","Target metals","Lab detection requirements"]},
"201A":{title:"PM10 — Constant Sampling Rate",equipment:["PM10 sampling head / cyclone","Probe assembly","Pitot","Thermocouple","Filters","Meter console","Recovery supplies"],setup:["Confirm cyclone/nozzle configuration","Calculate preliminary sampling rate","Prepare filter"],prelims:["Expected velocity/flow","Stack temp","Bws","Particle cut requirements"]},
"202":{title:"Condensable Particulate Matter",equipment:["Method 202 impinger train","Dry impingers as required","Nitrogen purge setup","Ice chest if required by train/protocol","Sample containers","Acetone / DI water / recovery supplies","Field train proof blank supplies"],setup:["Prepare clean train","Confirm purge requirements","Prepare blank and recovery containers","Coordinate with Method 5/17 front half if paired"],prelims:["Expected moisture","Paired filterable PM method","Run time / sample volume"]},
"316":{title:"Formaldehyde / Phenol / Methanol",equipment:["Method 316 sampling train","Impingers","Reagents","Sample line / probe","Pump/meter","Sample containers","COC"],setup:["Prepare reagents and containers","Confirm target analytes","Prepare sample train"],prelims:["Expected analyte concentrations","Detection requirements","Run duration"]},
"320":{title:"Extractive FTIR",equipment:["FTIR analyzer","Heated sample line","Heated pump/system","Calibration transfer standards","Spike gas(es)","Regulators","Background gas/setup","DAS/computer","Spare heated-line components"],setup:["Confirm analyte list and spectral model","Set cell/line temperatures above dew point","Prepare CTS/spike plan","Collect background","Verify data-file storage"],prelims:["Expected analytes/concentrations","Expected moisture/dew point","Line/cell temperatures","Spike concentration","Required detection limits"]},
"0010":{title:"Modified Method 5 — SVOCs",equipment:["MM5 sampling train","Probe/nozzle","Filter","XAD/resin module","Condenser/impingers","Ice chest","DGM","Pump","Solvents/sample containers","COC"],setup:["Prepare resin and filter","Confirm glassware cleanliness","Select nozzle","Prepare recovery containers"],prelims:["Expected flow/moisture","Run time / volume","Target SVOCs"]},
"RATA":{title:"Part 75 RATA",equipment:["Reference method analyzers/trains required by pollutant","Calibration gases","DAS","Client CEMS data access","Operating/load data"],setup:["Confirm RATA pollutants and units","Coordinate simultaneous CEMS data","Plan 9–12 paired runs","Confirm load level requirements"],prelims:["CEMS expected values","Reference method expected values","Units/basis","Operating load"]}
};

const GENERIC_ISO_EQUIPMENT=["Probe/nozzle as required","Pitot / velocity measurement","Thermocouple","Metering system","Pump","Sample containers / COC"];
const GENERIC_ANALYZER_EQUIPMENT=["Applicable analyzer","Zero gas","Calibration gases","Regulators","Sample line","DAS"];

const COMMON_METHODS=["1","2","3A","4","5","6C","7E","10","19","25A","26A","29","202","320","RATA"];
let selectedMethods=[];

function methodInfo(code){return METHOD_CATALOG.find(m=>m[0]===code);}
function renderMethodCatalog(filter=""){
  const wrap=$("methodCatalog"); if(!wrap)return;
  const q=filter.trim().toLowerCase();
  const items=METHOD_CATALOG.filter(([code,title])=>!q||code.toLowerCase().includes(q)||title.toLowerCase().includes(q));
  wrap.innerHTML=items.map(([code,title,status,target])=>`
    <label class="method-option">
      <input type="checkbox" data-method-code="${code}" ${selectedMethods.includes(code)?"checked":""}>
      <span><b>Method ${code}</b><small>${title}</small></span>
      <span class="badge ${status==="calc"?"calc":"workspace"}">${status==="calc"?"Calculator":"Workspace"}</span>
    </label>`).join("");
}
function openMethodModal(){renderMethodCatalog($("methodSearch")?.value||"");$("methodModal")?.classList.remove("hidden");}
function closeMethodModal(){$("methodModal")?.classList.add("hidden");}
function applyMethodSelection(){
  selectedMethods=[...document.querySelectorAll("[data-method-code]:checked")].map(x=>x.dataset.methodCode);
  if($("methods")) $("methods").value=selectedMethods.join(", ");
  state.selectedMethods=[...selectedMethods];
  renderSelectedMethods();renderHomeMethodChips();renderQuickMethods();save();closeMethodModal();
}
function renderSelectedMethods(){
  const wrap=$("selectedMethodChips");if(!wrap)return;
  wrap.innerHTML=selectedMethods.length?selectedMethods.map(c=>`<span class="chip">M${c}</span>`).join(""):'<span class="muted">No methods selected</span>';
}
function renderMethodWorkspace(){
  const wrap=$("methodWorkspaceCards");if(!wrap)return;
  if(!selectedMethods.length){wrap.innerHTML='<div class="status neutral">Choose the EPA methods planned for this job.</div>';return;}
  wrap.innerHTML=selectedMethods.map(code=>{
    const info=methodInfo(code);
    if(!info) return "";
    const [c,title,status]=info;
    return `<div class="method-workspace-card" data-open-method="${c}">
      <b>Method ${c}</b><small>${title}</small>
      <div style="margin-top:7px"><span class="badge ${status==="calc"?"calc":"workspace"}">${status==="calc"?"Calculator available":"Method workspace"}</span></div>
    </div>`;
  }).join("");
  wrap.querySelectorAll("[data-open-method]").forEach(card=>card.addEventListener("click",()=>openSelectedMethod(card.dataset.openMethod)));
}
function renderQuickMethods(){
  const bar=$("fieldQuickBar");if(!bar)return;
  const buttons=selectedMethods.map(code=>{
    const info=methodInfo(code);if(!info)return "";
    const [c,,,target]=info;
    return `<button class="quick" data-method-code="${c}" data-quick-target="${target}">M${c}</button>`;
  }).join("");
  bar.innerHTML=buttons || '<button class="quick" id="quickChooseMethods">Choose Methods</button>';
  bar.querySelectorAll("[data-method-code]").forEach(btn=>btn.addEventListener("click",()=>openSelectedMethod(btn.dataset.methodCode)));
  $("quickChooseMethods")?.addEventListener("click",openMethodModal);
}
function openSelectedMethod(code){
  const info=methodInfo(code);if(!info)return;
  const [c,title,status,target]=info;
  document.querySelectorAll(".field-module").forEach(x=>x.classList.remove("active"));
  $("compare")?.classList.remove("quick-open");
  if(target==="compare"){
    $("field")?.classList.remove("active");
    $("compare")?.classList.add("quick-open");
    return;
  }
  $("field")?.classList.add("active");
  if(status==="calc" && $(target)){
    $(target).classList.add("active");
  } else {
    currentGenericMethod=c;
    if($("genericEyebrow")) $("genericEyebrow").textContent=`EPA METHOD ${c}`;
    if($("genericTitle")) $("genericTitle").textContent=title;
    const saved=(state.genericMethods||{})[c]||{};
    if($("genericPrelim")) $("genericPrelim").value=saved.prelim||"";
    if($("genericEquipment")) $("genericEquipment").value=saved.equipment||"";
    if($("genericField")) $("genericField").value=saved.field||"";
    if($("genericQa")) $("genericQa").value=saved.qa||"";
    $("genericMethod")?.classList.add("active");
  }
  window.scrollTo({top:0,behavior:"smooth"});
}
let currentGenericMethod=null;
function saveGenericWorkspace(){
  if(!currentGenericMethod)return;
  state.genericMethods ||= {};
  state.genericMethods[currentGenericMethod]={
    prelim:$("genericPrelim")?.value||"",
    equipment:$("genericEquipment")?.value||"",
    field:$("genericField")?.value||"",
    qa:$("genericQa")?.value||"",
    savedAt:new Date().toISOString()
  };
  save();
  if($("genericStatus")){
    $("genericStatus").className="status ok";
    $("genericStatus").textContent="Method workspace saved locally with this job.";
  }
}

let appMode = "full";

function applyMode(){
  document.body.classList.toggle("field-mode",appMode==="field");
  document.body.classList.toggle("full-mode",appMode==="full");
  $("fieldModeBtn")?.classList.toggle("active",appMode==="field");
  $("fullModeBtn")?.classList.toggle("active",appMode==="full");
  if($("modeTitle")) $("modeTitle").textContent=appMode==="field"?"Field Mode":"Full Mode";
  if($("modeHelp")) $("modeHelp").textContent=appMode==="field"
    ?"Fast entry for active testing. Only the essentials stay in front of you."
    :"Pre-job planning, equipment, multi-run review, averages, comparisons, and closeout.";
  if(appMode==="field"){
    document.querySelectorAll(".view").forEach(v=>v.classList.remove("active","quick-open"));
    $("field")?.classList.add("active");
  }
}
function setMode(mode){
  appMode=mode;
  localStorage.setItem("stacktestpro_mode",mode);
  applyMode();
}
function activateFieldModule(id){
  document.querySelectorAll(".module-tab,.field-module,.quick").forEach(x=>x.classList.remove("active"));
  const mod=$(id); if(mod)mod.classList.add("active");
  const tab=document.querySelector(`.module-tab[data-module="${id}"]`); if(tab)tab.classList.add("active");
  const quick=document.querySelector(`.quick[data-quick="${id}"]`); if(quick)quick.classList.add("active");
  $("field")?.classList.add("active");
  $("compare")?.classList.remove("quick-open");
  window.scrollTo({top:0,behavior:"smooth"});
}
function saveActiveRunFast(){
  const active=document.querySelector(".field-module.active");
  if(!active)return;
  const method=active.id;
  if(method==="rata"){
    if($("saveRunMethod")) $("saveRunMethod").value="rata";
  } else if(["m2","m4","m5","inst","m25a","m320"].includes(method)){
    if($("saveRunMethod")) $("saveRunMethod").value=method;
  } else return;
  if($("saveRunStatus") && $("fieldRunStatus")) $("saveRunStatus").value=$("fieldRunStatus").value;
  if($("saveRunName") && $("fieldRunName")) $("saveRunName").value=$("fieldRunName").value.trim();
  saveCurrentRun();
  if($("fieldRunName") && !$("fieldRunName").value.trim()){
    $("fieldRunName").placeholder=`Run ${state.runs.length+1}`;
  }
}

const num = id => {
  const v = parseFloat($(id)?.value);
  return Number.isFinite(v) ? v : null;
};
const fmt = (v,d=2) => Number.isFinite(v) ? v.toLocaleString(undefined,{maximumFractionDigits:d}) : "—";

const nozzles=[0.125,0.156,0.188,0.219,0.250,0.265,0.281,0.312,0.375];
const equipment=[
  ["Isokinetic","Probe assembly"],["Isokinetic","Heated umbilical"],["Isokinetic","Pitot tube"],
  ["Isokinetic","Thermocouple"],["Isokinetic","Sample pump"],["Isokinetic","Condenser / moisture system"],
  ["Isokinetic","Ice chest"],["Analyzers","FTIR"],["Analyzers","O₂ analyzer"],["Analyzers","NOx analyzer"],
  ["Analyzers","SO₂ analyzer"],["Analyzers","CO analyzer"],["Analyzers","VOC analyzer"],
  ["Calibration","Zero gas"],["Calibration","Mid gas"],["Calibration","High gas"],["Calibration","Regulators"],
  ["Calibration","Cylinder certificates"],["Data","Laptop"],["Data","DAS / interface"],["Data","Printer"],
  ["Power","Extension cords"],["Power","Power conditioner"],["Power","Generator connections"],
  ["Safety","PPE"],["Safety","Harness"],["Safety","Hard hat"],["Safety","Gloves"],["Safety","Safety glasses"],
  ["Documentation","Test plan"],["Documentation","Field sheets"],["Documentation","Chain of custody"],
  ["Tools","Toolbox"],["Tools","Spare fittings"],["Tools","Tubing"],["Tools","Leak-check supplies"]
];

const fields=["jobId","client","facility","unit","testDate","methods","stackShape","diameter","width","depth","upstreamFt","downstreamFt",
"velocity","stackTemp","stackPress","bws","targetDscfm","targetVolume","runTime","o2Pre","co2Pre","bwsGas",
"m2RunId","m2Cp","m2Pb","m2Ps","m2Md","m2Bws","m2Dp","m2Ts",
"m4RunId","m4Vm","m4WaterMl","m4SilicaG",
"m5RunId","m5Nozzle","m5Time","m5VmStd","m5Vel","m5Ts","m5P","m5Bws","m5Filter","m5Probe","m5Other","m5Blank",
"instPollutant","instSpan","instLowCert","instLowResp","instMidCert","instMidResp","instHighCert","instHighResp","instPreZero","instPostZero","instPreUp","instPostUp",
"m25Span","m25Cert","m25Resp","m25PreZero","m25PostZero","m25PreUp","m25PostUp","m25Sample",
"m320RunId","m320CellTemp","m320LineTemp","m320Dew","m320CtsExp","m320CtsMeas","m320SpikeExp","m320SpikeMeas",
"actualDscfm","actualBws","actualVelocity","actualTemp","testerNox","clientNox","testerO2","clientO2","fuel","customFd",
"permitLimit","clientReported","testerLbHr","heatInput","m1Shape","m1Diameter","m1Width","m1Depth","m1Upstream","m1Downstream","m3aO2","m3aCo2","m3aBws","prepJobId","prepClient","prepFacility","prepUnit","prepDate","prepPm","permitRef","operatingCondition","prepFuel","requiredRuns","requiredRunTime","permitRequirement","protocolNotes","jpStackShape","jpDiameter","jpWidth","jpDepth","jpTemp","jpVelocity","jpAcfm","jpDscfm","jpBws","jpO2","jpCo2","jpBaro"];

let state={equipment:{},post:{},runs:[]};
const STORAGE="stacktestpro_v01_job";

function buildEquipment(){
  const wrap=$("equipmentList"); if(!wrap)return;
  wrap.innerHTML="";
  let last="";
  equipment.forEach(([cat,item],i)=>{
    if(cat!==last){
      const h=document.createElement("div");h.className="eyebrow";h.style.marginTop=i?"12px":"2px";h.textContent=cat;wrap.appendChild(h);last=cat;
    }
    const label=document.createElement("label");label.className="check";
    const checked=!!state.equipment[item];
    label.innerHTML=`<input type="checkbox" data-equip="${item.replace(/"/g,'&quot;')}" ${checked?"checked":""}><span class="equip-name">${item}</span>`;
    wrap.appendChild(label);
  });
  wrap.querySelectorAll("[data-equip]").forEach(cb=>cb.addEventListener("change",e=>{
    state.equipment[e.target.dataset.equip]=e.target.checked; save(); updateEquipment();
  }));
  updateEquipment();
}
function updateEquipment(){
  const done=equipment.filter(([,item])=>state.equipment[item]).length;
  if($("equipProgress")) $("equipProgress").textContent=`${done} / ${equipment.length}`;
}

function method1(){
  const shapeEl=$("stackShape");
  if(!shapeEl) return {area:null,eq:null};
  const shape=shapeEl.value;
  const d=num("diameter"),w=num("width"),dep=num("depth");
  let area=null,eq=null;
  if(shape==="Circular" && d>0){area=Math.PI*d*d/4;eq=d;}
  if(shape==="Rectangular" && w>0 && dep>0){area=w*dep;eq=2*w*dep/(w+dep);}
  if($("areaOut")) $("areaOut").textContent=fmt(area);
  if($("eqDiaOut")) $("eqDiaOut").textContent=fmt(eq);
  const up=num("upstreamFt"),down=num("downstreamFt");
  const upD=(eq&&up!=null)?up/eq:null, downD=(eq&&down!=null)?down/eq:null;
  if($("upDiaOut")) $("upDiaOut").textContent=fmt(upD);
  if($("downDiaOut")) $("downDiaOut").textContent=fmt(downD);
  const flag=$("m1Flag");
  if(flag){
    flag.className="status neutral"; flag.textContent="Enter prelim geometry.";
    if(eq && upD!=null && downD!=null){
      if(upD>=2 && downD>=0.5){flag.className="status ok";flag.textContent="Preliminary location screen looks reasonable — verify exact Method 1 requirements."}
      else {flag.className="status warn";flag.textContent="Review site suitability and exact Method 1 traverse requirements before mobilization."}
    }
  }
  return {area,eq};
}

function method2(){
  const {area}=method1(),v=num("velocity"),t=num("stackTemp"),p=num("stackPress"),b=num("bws");
  let acfm=null,scfm=null,dscfm=null;
  if(area>0 && v!=null) acfm=area*v*60;
  if(acfm!=null && t!=null && p>0) scfm=acfm*(528/(t+459.67))*(p/29.92);
  if(scfm!=null && b!=null) dscfm=scfm*(1-b);
  if($("acfmOut")) $("acfmOut").textContent=fmt(acfm,0);
  if($("scfmOut")) $("scfmOut").textContent=fmt(scfm,0);
  if($("dscfmOut")) $("dscfmOut").textContent=fmt(dscfm,0);
  return {acfm,scfm,dscfm};
}

function nozzleCalc(){
  if(!$("nozzleTable") && !$("nozzleOut")) return;
  const v=num("velocity"),t=num("stackTemp"),p=num("stackPress"),b=num("bws");
  let target=num("targetDscfm"),vol=num("targetVolume"),minutes=num("runTime");
  if(target==null && vol!=null && minutes>0) target=vol/minutes;
  let wetRate=null,dia=null;
  if(v>0 && t!=null && p>0 && b!=null && b<1 && target>0){
    wetRate=target/(1-b)*((t+459.67)/528)*(29.92/p);
    dia=Math.sqrt(4*(wetRate/(v*60))/Math.PI)*12;
  }
  if($("nozzleOut")) $("nozzleOut").textContent=fmt(dia,3);
  const tbody=$("nozzleTable");
  if(!tbody) return;
  tbody.innerHTML="";
  nozzles.forEach(n=>{
    let req=null,note="Enter prelim conditions";
    if(v>0 && t!=null && p>0 && b!=null){
      const wet=(Math.PI*Math.pow(n/12,2)/4)*v*60;
      req=wet*(1-b)*(528/(t+459.67))*(p/29.92);
      note=(req>=0.3 && req<=1.2)?"Typical planning range":"Check meter capability";
    }
    tbody.insertAdjacentHTML("beforeend",`<tr><td>${n.toFixed(3)}</td><td>${fmt(req,3)}</td><td>${note}</td></tr>`);
  });
}

function gasCalc(){
  if(!$("n2Out") && !$("dryMwOut") && !$("wetMwOut")) return;
  const o=num("o2Pre"),c=num("co2Pre"),b=num("bwsGas");
  let n=null,dry=null,wet=null;
  if(o!=null&&c!=null){n=100-o-c;dry=(32*o+44*c+28*n)/100;}
  if(dry!=null&&b!=null)wet=dry*(1-b)+18*b;
  if($("n2Out")) $("n2Out").textContent=fmt(n);
  if($("dryMwOut")) $("dryMwOut").textContent=fmt(dry);
  if($("wetMwOut")) $("wetMwOut").textContent=fmt(wet);
}

function fieldCompare(){
  if(!$("prelimFlowCompare") && !$("actualFlowCompare") && !$("flowDiff")) return;
  const pre=method2().dscfm,actual=num("actualDscfm");
  if($("prelimFlowCompare")) $("prelimFlowCompare").textContent=fmt(pre,0);
  if($("actualFlowCompare")) $("actualFlowCompare").textContent=fmt(actual,0);
  const diff=(pre&&actual!=null)?(actual-pre)/pre*100:null;
  if($("flowDiff")) $("flowDiff").textContent=fmt(diff,1);
}

function fd(){
  const custom=num("customFd");
  if(custom!=null && custom>0) return custom;

  const raw=$("fuel")?.value;
  if(!raw) return null;

  const numeric=parseFloat(raw);
  if(Number.isFinite(numeric)) return numeric;

  const fuelName=String(raw).trim().toLowerCase();
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
  if(ppm==null||o2==null||Fd==null||Fd<=0||o2>=20.9)return null;
  return ppm*46.01/(385.3*1e6)*Fd*20.9/(20.9-o2);
}
function noxCalc(){
  const tester=m19(num("testerNox"),num("testerO2"));
  const reported=num("clientReported");
  const client=(reported!=null && reported>0) ? reported : m19(num("clientNox"),num("clientO2"));

  const diff=(tester!=null&&client!=null&&Math.abs(client)>0)
    ? Math.abs(tester-client)/Math.abs(client)*100
    : null;

  const limit=num("permitLimit");
  const margin=(tester!=null&&limit!=null&&limit>0)?(limit-tester)/limit*100:null;

  const mass=num("testerLbHr"),heat=num("heatInput");
  const direct=(mass!=null&&heat!=null&&heat>0)?mass/heat:null;

  if($("testerM19")) $("testerM19").textContent=fmt(tester,4);
  if($("clientM19")) $("clientM19").textContent=fmt(client,4);
  if($("noxDiff")) $("noxDiff").textContent=fmt(diff,1);
  if($("permitMargin")) $("permitMargin").textContent=fmt(margin,1);
  if($("directLbMmbtu")) $("directLbMmbtu").textContent=fmt(direct,4);

  const flag=$("noxFlag");
  if(!flag)return;

  if(tester==null){
    flag.className="status neutral";
    flag.textContent="Enter tester NOx, O₂, and Fd information.";
  } else if(client==null){
    flag.className="status neutral";
    flag.textContent=`Tester Method 19 result: ${fmt(tester,4)} lb/MMBtu. Heat input and lb/hr are not required.`;
  } else if(diff!=null && diff<=10){
    flag.className="status ok";
    flag.textContent="Tester/client preliminary agreement is within 10%. Review rule-specific acceptance criteria.";
  } else {
    flag.className="status warn";
    flag.textContent="Tester/client difference exceeds 10%. Check concentration, O₂ basis, Fd, averaging, moisture basis, and client data.";
  }

  if(margin!=null && margin<0){
    flag.className="status warn";
    flag.textContent += " Tester result is above the entered permit limit.";
  }
}

const K2 = 85.49;

function method2Field(){
  const cp=num("m2Cp"),pb=num("m2Pb"),ps=num("m2Ps"),md=num("m2Md"),b=num("m2Bws"),dp=num("m2Dp"),ts=num("m2Ts");
  let mw=null, pabs=null, vel=null, acfm=null, scfm=null, dscfm=null;
  if(md!=null&&b!=null) mw=md*(1-b)+18*b;
  if(pb!=null) pabs=pb+(ps||0)/13.6;
  const area=method1().area;
  if(cp&&pabs>0&&mw>0&&dp>=0&&ts!=null){
    vel=K2*cp*Math.sqrt(dp*(ts+459.67)/(pabs*mw));
    if(area>0) acfm=vel*area*60;
    if(acfm!=null) scfm=acfm*(528/(ts+459.67))*(pabs/29.92);
    if(scfm!=null&&b!=null) dscfm=scfm*(1-b);
  }
  if($("m2Mw")) $("m2Mw").textContent=fmt(mw,2);
  if($("m2Vel")) $("m2Vel").textContent=fmt(vel,2);
  if($("m2Acfm")) $("m2Acfm").textContent=fmt(acfm,0);
  if($("m2Scfm")) $("m2Scfm").textContent=fmt(scfm,0);
  if($("m2Dscfm")) $("m2Dscfm").textContent=fmt(dscfm,0);
  const f=$("m2Flag");
  if(f){
    if(dscfm!=null){f.className="status ok";f.textContent="Method 2 run calculation populated — verify traverse averages and inputs."}
    else{f.className="status neutral";f.textContent="Enter Method 2 field data."}
  }
  return {mw,vel,acfm,scfm,dscfm};
}

function method4Field(){
  const vm=num("m4Vm"),ml=num("m4WaterMl"),sg=num("m4SilicaG");
  let vw=null,bws=null;
  if(ml!=null||sg!=null){
    const grams=(ml||0)+(sg||0);
    vw=grams/18.01528*0.04707;
    if(vm!=null&&vm+vw>0)bws=vw/(vm+vw);
  }
  if($("m4Vw")) $("m4Vw").textContent=fmt(vw,3);
  if($("m4BwsOut")) $("m4BwsOut").textContent=fmt(bws,4);
  const f=$("m4Flag");
  if(f){
    if(bws!=null){f.className="status ok";f.textContent="Method 4 moisture calculated — verify train volumes and any method-specific corrections."}
    else{f.className="status neutral";f.textContent="Enter Method 4 field data."}
  }
  return {vw,bws};
}

function method5Field(){
  const noz=num("m5Nozzle"),mins=num("m5Time"),actual=num("m5VmStd"),v=num("m5Vel"),t=num("m5Ts"),p=num("m5P"),b=num("m5Bws");
  const fc=num("m5Filter"),pc=num("m5Probe"),oc=num("m5Other")||0,blank=num("m5Blank")||0;
  let ideal=null,iso=null,total=null,gr=null;
  if(noz>0&&mins>0&&v>0&&t!=null&&p>0&&b!=null){
    const wet=((Math.PI*Math.pow(noz/12,2)/4)*v*60);
    const dry=wet*(1-b)*(528/(t+459.67))*(p/29.92);
    ideal=dry*mins;
    if(actual!=null&&ideal>0)iso=actual/ideal*100;
  }
  if(fc!=null||pc!=null){ total=(fc||0)+(pc||0)+oc-blank; }
  if(total!=null&&actual>0) gr=(total/64.79891)/actual;
  if($("m5Ideal")) $("m5Ideal").textContent=fmt(ideal,2);
  if($("m5Iso")) $("m5Iso").textContent=fmt(iso,1);
  if($("m5PmMg")) $("m5PmMg").textContent=fmt(total,2);
  if($("m5GrDscf")) $("m5GrDscf").textContent=fmt(gr,5);
  const f=$("m5Flag");
  if(f){
    if(iso!=null){
      if(iso>=90&&iso<=110){f.className="status ok";f.textContent="Isokinetic percentage is within 90–110%."}
      else{f.className="status warn";f.textContent="Isokinetic percentage is outside 90–110%; review run validity and inputs."}
    } else {f.className="status neutral";f.textContent="Enter Method 5 field data."}
  }
  return {ideal,iso,total,gr};
}

function pctSpan(resp,cert,span){ return (resp!=null&&cert!=null&&span>0)?(resp-cert)/span*100:null; }
function instrumentalField(){
  const span=num("instSpan");
  const low=pctSpan(num("instLowResp"),num("instLowCert"),span);
  const mid=pctSpan(num("instMidResp"),num("instMidCert"),span);
  const high=pctSpan(num("instHighResp"),num("instHighCert"),span);
  const zd=(span>0&&num("instPreZero")!=null&&num("instPostZero")!=null)?(num("instPostZero")-num("instPreZero"))/span*100:null;
  const ud=(span>0&&num("instPreUp")!=null&&num("instPostUp")!=null)?(num("instPostUp")-num("instPreUp"))/span*100:null;
  if($("instLowCe")) $("instLowCe").textContent=fmt(low,2);
  if($("instMidCe")) $("instMidCe").textContent=fmt(mid,2);
  if($("instHighCe")) $("instHighCe").textContent=fmt(high,2);
  if($("instZeroDrift")) $("instZeroDrift").textContent=fmt(zd,2);
  if($("instUpDrift")) $("instUpDrift").textContent=fmt(ud,2);
  const vals=[low,mid,high,zd,ud].filter(v=>v!=null).map(Math.abs);
  const f=$("instFlag");
  if(f){
    if(vals.length===5){f.className=Math.max(...vals)<=5?"status ok":"status warn";f.textContent=Math.max(...vals)<=5?"Analyzer QA values are within the app's preliminary ±5% span screen. Verify exact method limits.":"One or more QA values exceed the app's preliminary ±5% span screen. Verify method-specific criteria."}
    else{f.className="status neutral";f.textContent="Enter calibration and drift data."}
  }
  return {low,mid,high,zd,ud};
}

function method25AField(){
  const span=num("m25Span");
  const ce=pctSpan(num("m25Resp"),num("m25Cert"),span);
  const zd=(span>0&&num("m25PreZero")!=null&&num("m25PostZero")!=null)?(num("m25PostZero")-num("m25PreZero"))/span*100:null;
  const ud=(span>0&&num("m25PreUp")!=null&&num("m25PostUp")!=null)?(num("m25PostUp")-num("m25PreUp"))/span*100:null;
  const voc=num("m25Sample");
  if($("m25Ce")) $("m25Ce").textContent=fmt(ce,2);
  if($("m25Zd")) $("m25Zd").textContent=fmt(zd,2);
  if($("m25Ud")) $("m25Ud").textContent=fmt(ud,2);
  if($("m25Voc")) $("m25Voc").textContent=fmt(voc,2);
  const f=$("m25Flag");
  if(f){
    if(ce!=null&&zd!=null&&ud!=null){f.className=Math.max(Math.abs(ce),Math.abs(zd),Math.abs(ud))<=5?"status ok":"status warn";f.textContent=f.className.includes("ok")?"Method 25A QA screen looks acceptable for preliminary review — verify exact criteria.":"Review Method 25A QA values against the applicable method criteria."}
    else{f.className="status neutral";f.textContent="Enter Method 25A data."}
  }
  return {ce,zd,ud,voc};
}

function method320Field(){
  const line=num("m320LineTemp"),dew=num("m320Dew"),ce=num("m320CtsExp"),cm=num("m320CtsMeas"),se=num("m320SpikeExp"),sm=num("m320SpikeMeas");
  const margin=(line!=null&&dew!=null)?line-dew:null;
  const cts=(ce&&cm!=null)?(cm-ce)/ce*100:null;
  const rec=(se&&sm!=null)?sm/se*100:null;
  if($("m320Margin")) $("m320Margin").textContent=fmt(margin,1);
  if($("m320CtsDiff")) $("m320CtsDiff").textContent=fmt(cts,1);
  if($("m320SpikeRec")) $("m320SpikeRec").textContent=fmt(rec,1);
  const filesOk=!!$("m320Bg")?.checked&&!!$("m320SampleFile")?.checked&&!!$("m320CtsFile")?.checked;
  const f=$("m320Flag");
  if(f){
    if(margin!=null&&cts!=null&&rec!=null){
      if(margin>0&&filesOk){f.className="status ok";f.textContent="FTIR run-review screen is populated and required files are checked. Verify method-specific CTS/spike limits."}
      else{f.className="status warn";f.textContent="Review heated-line margin and file-retention checklist before closing the run."}
    } else {f.className="status neutral";f.textContent="Enter FTIR run-review data."}
  }
  return {margin,cts,rec,filesOk};
}

function buildRataRows(){
  const body=$("rataRows"); if(!body)return; body.innerHTML="";
  for(let i=1;i<=12;i++){
    body.insertAdjacentHTML("beforeend",`<tr><td>${i}</td><td><input id="rataRef${i}" type="number" step="any"></td><td><input id="rataCems${i}" type="number" step="any"></td><td id="rataDiff${i}">—</td></tr>`);
  }
  for(let i=1;i<=12;i++){
    ["rataRef"+i,"rataCems"+i].forEach(id=>$(id)?.addEventListener("input",()=>{rataField();save();}));
  }
}
function rataField(){
  let refs=[],cems=[],diffs=[];
  for(let i=1;i<=12;i++){
    const r=num("rataRef"+i),c=num("rataCems"+i);
    if(r!=null&&c!=null){
      refs.push(r);cems.push(c);diffs.push(c-r);
      if($("rataDiff"+i)) $("rataDiff"+i).textContent=fmt(c-r,3);
    } else if($("rataDiff"+i)) $("rataDiff"+i).textContent="—";
  }
  const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
  const ar=avg(refs),ac=avg(cems),ad=avg(diffs),rel=(ar&&ad!=null)?Math.abs(ad)/Math.abs(ar)*100:null;
  if($("rataN")) $("rataN").textContent=refs.length;
  if($("rataRefAvg")) $("rataRefAvg").textContent=fmt(ar,3);
  if($("rataCemsAvg")) $("rataCemsAvg").textContent=fmt(ac,3);
  if($("rataDiffAvg")) $("rataDiffAvg").textContent=fmt(ad,3);
  if($("rataRelDiff")) $("rataRelDiff").textContent=fmt(rel,2);
  const f=$("rataFlag");
  if(f){
    if(refs.length>=9){f.className="status ok";f.textContent="At least 9 paired runs entered. Proceed with full rule-specific RA/bias review."}
    else{f.className="status neutral";f.textContent="Enter at least 9 paired runs for a normal RATA review set."}
  }
  return {n:refs.length,ar,ac,ad,rel};
}

function normalizeMethodCode(s){
  return String(s||"").toUpperCase().replace(/^METHOD\s*/,"").trim();
}
function parseMethodEntry(){
  const raw=$("methodEntry")?.value||"";
  const codes=raw.split(/[\s,;/]+/).map(normalizeMethodCode).filter(Boolean);
  codes.forEach(c=>{
    if(METHOD_CATALOG.some(m=>m[0].toUpperCase()===c) && !selectedMethods.includes(c)) selectedMethods.push(c);
  });
  selectedMethods.sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
  state.selectedMethods=[...selectedMethods];
  renderHomeMethodChips();renderSelectedMethods();renderMethodCatalog();save();
  if($("methodEntry")) $("methodEntry").value="";
}
function renderHomeMethodChips(){
  const wrap=$("homeSelectedMethods");if(!wrap)return;
  wrap.innerHTML=selectedMethods.length?selectedMethods.map(c=>`<span class="chip">Method ${c}</span>`).join(""):'<span class="muted">No methods selected yet.</span>';
}
function getPrepForMethod(code){
  if(METHOD_PREP[code]) return METHOD_PREP[code];
  const info=methodInfo(code);
  const title=info?info[1]:`Method ${code}`;
  let equipment=["Method-specific field sheets / protocol","Required sample containers / COC"];
  if(["1A","2A","2B","2C","2D","2F","2G","2H","5A","5B","5D","5E","5F","5G","5H","5I"].some(x=>code.startsWith(x.slice(0,1)))) equipment=[...equipment,...GENERIC_ISO_EQUIPMENT];
  if(["3B","7","7A","7B","7C","7D","10A","15A","16","16A","16B","20","25B","25C","30A","30B","305","306","308","311","315","321"].includes(code)) equipment=[...equipment,...GENERIC_ANALYZER_EQUIPMENT];
  return {
    title,
    equipment:[...new Set(equipment)],
    setup:["Review promulgated method and applicable subpart","Confirm approved test plan / method modifications","Identify required calibrations, samples, blanks, and QA/QC"],
    prelims:["Expected source conditions","Expected pollutant / parameter range","Run duration / sample volume","Permit and client reporting basis"]
  };
}
function buildJobPrep(){
  if(!selectedMethods.length){
    openMethodModal(); return;
  }
  state.selectedMethods=[...selectedMethods];
  renderPrepPage();
  document.querySelectorAll(".step,.view").forEach(x=>x.classList.remove("active"));
  document.querySelector('.step[data-view="prelims"]')?.classList.add("active");
  $("prelims")?.classList.add("active");
  save();
  window.scrollTo({top:0,behavior:"smooth"});
}
function methodPrelimHtml(code){
  if(code==="5" || code==="17" || code==="26A" || code==="29" || code==="201A" || code==="0010"){
    return `<div class="prep-inputs">
      <label>Target dry std sample rate (DSCFM)<input data-prep-input="${code}:rate" type="number" step="any"></label>
      <label>Planned run time (min)<input data-prep-input="${code}:time" type="number" step="any" value="${$("requiredRunTime")?.value||""}"></label>
    </div>
    <div class="method-prelim-results">
      <div><span>Suggested nozzle</span><strong data-prep-result="${code}:nozzle">—</strong></div>
      <div><span>Target volume</span><strong data-prep-result="${code}:volume">—</strong></div>
    </div>`;
  }
  if(["6C","7E","10","25A"].includes(code)){
    return `<div class="prep-inputs">
      <label>Expected concentration<input data-prep-input="${code}:conc" type="number" step="any"></label>
      <label>Planned analyzer span<input data-prep-input="${code}:span" type="number" step="any"></label>
    </div>
    <div class="method-prelim-results">
      <div><span>% of Span</span><strong data-prep-result="${code}:pctspan">—</strong></div>
    </div>`;
  }
  if(code==="19"){
    return `<div class="prep-inputs">
      <label>Expected NOx ppmvd<input data-prep-input="${code}:nox" type="number" step="any"></label>
      <label>Expected O₂ %<input data-prep-input="${code}:o2" type="number" step="any" value="${$("jpO2")?.value||""}"></label>
      <label>Fd (dscf/MMBtu)<input data-prep-input="${code}:fd" type="number" step="any" value="8710"></label>
      <label>Permit limit lb/MMBtu<input data-prep-input="${code}:limit" type="number" step="any"></label>
    </div>
    <div class="method-prelim-results">
      <div><span>Expected lb/MMBtu</span><strong data-prep-result="${code}:lbmmbtu">—</strong></div>
      <div><span>Permit margin</span><strong data-prep-result="${code}:margin">—</strong></div>
    </div>`;
  }
  if(code==="320"){
    return `<div class="prep-inputs">
      <label>Estimated dew point °F<input data-prep-input="${code}:dew" type="number" step="any"></label>
      <label>Planned line temp °F<input data-prep-input="${code}:line" type="number" step="any"></label>
    </div>
    <div class="method-prelim-results">
      <div><span>Temp margin</span><strong data-prep-result="${code}:margin">—</strong></div>
    </div>`;
  }
  return "";
}
function renderPrepPage(){
  if($("prepMethodChips")) $("prepMethodChips").innerHTML=selectedMethods.map(c=>`<span class="chip">Method ${c}</span>`).join("");
  if($("prepMethodCount")) $("prepMethodCount").textContent=selectedMethods.length;
  const container=$("generatedPrepSections");
  if(!container)return;
  container.innerHTML=selectedMethods.map(code=>{
    const prep=getPrepForMethod(code);
    return `<section class="prep-method-card">
      <div class="card-title-row">
        <div><div class="eyebrow">EPA METHOD ${code}</div><h3>${prep.title}</h3></div>
        <span class="badge ${METHOD_PREP[code]?"calc":"workspace"}">${METHOD_PREP[code]?"Job Prep Built":"Review Method"}</span>
      </div>
      <div class="prep-grid">
        <div class="prep-block"><h4>Prelim Information Needed</h4><ul class="prep-list">${prep.prelims.map(x=>`<li>${x}</li>`).join("")}</ul></div>
        <div class="prep-block"><h4>Mobilize</h4><ul class="prep-list">${prep.equipment.map(x=>`<li>${x}</li>`).join("")}</ul></div>
        <div class="prep-block"><h4>Setup / Before Testing</h4><ul class="prep-list">${prep.setup.map(x=>`<li>${x}</li>`).join("")}</ul></div>
        <div class="prep-block"><h4>Field / Post-Run</h4><ul class="prep-list"><li>Complete required calibrations / leak checks</li><li>Document run validity and deviations</li><li>Recover / label samples and complete COC as applicable</li><li>Compare results with client / permit basis before demobilizing</li></ul></div>
      </div>
      ${methodPrelimHtml(code)}
    </section>`;
  }).join("");
  restorePrepInputs();
  renderMasterEquipment();
  calcJobPrep();
  container.querySelectorAll("[data-prep-input]").forEach(el=>el.addEventListener("input",()=>{savePrepInputs();calcJobPrep();save();}));
}
function allEquipment(){
  const items=[];
  selectedMethods.forEach(c=>getPrepForMethod(c).equipment.forEach(x=>items.push(x)));
  return [...new Set(items)].sort();
}
function renderMasterEquipment(){
  state.prepEquipment ||= {};
  const items=allEquipment();
  if($("prepEquipCount")) $("prepEquipCount").textContent=items.length;
  const wrap=$("masterEquipmentList");
  if(!wrap)return;
  wrap.innerHTML=items.map(item=>`<label class="check"><input type="checkbox" data-prep-equip="${item.replace(/"/g,'&quot;')}" ${state.prepEquipment[item]?"checked":""}><span>${item}</span></label>`).join("");
  wrap.querySelectorAll("[data-prep-equip]").forEach(cb=>cb.addEventListener("change",e=>{state.prepEquipment[e.target.dataset.prepEquip]=e.target.checked;updatePrepReady();save();}));
  updatePrepReady();
}
function updatePrepReady(){
  const items=allEquipment(),loaded=items.filter(x=>state.prepEquipment?.[x]).length;
  if($("prepEquipLoaded")) $("prepEquipLoaded").textContent=loaded;
  const f=$("prepReadyFlag"); if(!f)return;
  if(!items.length){f.className="status neutral";f.textContent="Build the job prep to begin.";}
  else if(loaded===items.length){f.className="status ok";f.textContent="All generated mobilization items are checked. Complete method-specific QA/protocol review before departure.";}
  else{f.className="status warn";f.textContent=`${items.length-loaded} mobilization item(s) still unchecked.`;}
}
function calcCommonJobPrep(){
  const shape=$("jpStackShape")?.value,d=num("jpDiameter"),w=num("jpWidth"),dep=num("jpDepth"),temp=num("jpTemp"),vel=num("jpVelocity"),bws=num("jpBws"),baro=num("jpBaro"),o2=num("jpO2"),co2=num("jpCo2");
  let area=null;
  if(shape==="Circular"&&d>0)area=Math.PI*d*d/4;
  if(shape==="Rectangular"&&w>0&&dep>0)area=w*dep;
  let acfm=num("jpAcfm");
  if(acfm==null&&area&&vel!=null)acfm=area*vel*60;
  let dscfm=num("jpDscfm");
  if(dscfm==null&&acfm!=null&&temp!=null&&baro>0&&bws!=null)dscfm=acfm*(528/(temp+459.67))*(baro/29.92)*(1-bws);
  let dryMw=null;
  if(o2!=null&&co2!=null){const n2=100-o2-co2;dryMw=(32*o2+44*co2+28*n2)/100;}
  if($("jpAreaOut")) $("jpAreaOut").textContent=fmt(area,2);
  if($("jpAcfmOut")) $("jpAcfmOut").textContent=fmt(acfm,0);
  if($("jpDscfmOut")) $("jpDscfmOut").textContent=fmt(dscfm,0);
  if($("jpDryMwOut")) $("jpDryMwOut").textContent=fmt(dryMw,2);
  return {area,acfm,dscfm,dryMw};
}
function prepVal(key){const el=document.querySelector(`[data-prep-input="${key}"]`);const v=parseFloat(el?.value);return Number.isFinite(v)?v:null;}
function setPrepResult(key,val,d=2,suffix=""){const el=document.querySelector(`[data-prep-result="${key}"]`);if(el)el.textContent=Number.isFinite(val)?fmt(val,d)+suffix:"—";}
function calcJobPrep(){
  calcCommonJobPrep();
  const v=num("jpVelocity"),t=num("jpTemp"),p=num("jpBaro")||29.92,b=num("jpBws");
  selectedMethods.forEach(code=>{
    if(["5","17","26A","29","201A","0010"].includes(code)){
      const rate=prepVal(`${code}:rate`),mins=prepVal(`${code}:time`);
      let dia=null;
      if(v>0&&t!=null&&p>0&&b!=null&&b<1&&rate>0){
        const wetRate=rate/(1-b)*((t+459.67)/528)*(29.92/p);
        dia=Math.sqrt(4*(wetRate/(v*60))/Math.PI)*12;
      }
      setPrepResult(`${code}:nozzle`,dia,3," in");
      setPrepResult(`${code}:volume`,rate!=null&&mins!=null?rate*mins:null,2," dscf");
    }
    if(["6C","7E","10","25A"].includes(code)){
      const c=prepVal(`${code}:conc`),s=prepVal(`${code}:span`);
      setPrepResult(`${code}:pctspan`,c!=null&&s>0?c/s*100:null,1,"%");
    }
    if(code==="19"){
      const ppm=prepVal("19:nox"),o2=prepVal("19:o2"),fd=prepVal("19:fd"),limit=prepVal("19:limit");
      const e=(ppm!=null&&o2!=null&&fd>0&&o2<20.9)?ppm*46.01/(385.3*1e6)*fd*20.9/(20.9-o2):null;
      setPrepResult("19:lbmmbtu",e,4);
      setPrepResult("19:margin",e!=null&&limit>0?(limit-e)/limit*100:null,1,"%");
    }
    if(code==="320"){
      const dew=prepVal("320:dew"),line=prepVal("320:line");
      setPrepResult("320:margin",dew!=null&&line!=null?line-dew:null,1," °F");
    }
  });
}
function savePrepInputs(){
  state.prepInputs ||= {};
  document.querySelectorAll("[data-prep-input]").forEach(el=>state.prepInputs[el.dataset.prepInput]=el.value);
}
function restorePrepInputs(){
  document.querySelectorAll("[data-prep-input]").forEach(el=>{
    if(state.prepInputs?.[el.dataset.prepInput]!=null)el.value=state.prepInputs[el.dataset.prepInput];
  });
}

function currentRunPayload(method){
  const now=new Date().toISOString();
  if(method==="m2"){
    const r=method2Field();
    return {method:"Method 2",timestamp:now,metrics:{velocity:r.vel,acfm:r.acfm,scfm:r.scfm,dscfm:r.dscfm,wetMW:r.mw},
      inputs:{runId:$("m2RunId")?.value||"",cp:$("m2Cp")?.value||"",pb:$("m2Pb")?.value||"",ps:$("m2Ps")?.value||"",md:$("m2Md")?.value||"",bws:$("m2Bws")?.value||"",dp:$("m2Dp")?.value||"",ts:$("m2Ts")?.value||""}};
  }
  if(method==="m4"){
    const r=method4Field();
    return {method:"Method 4",timestamp:now,metrics:{waterStd:r.vw,bws:r.bws},
      inputs:{runId:$("m4RunId")?.value||"",vm:$("m4Vm")?.value||"",waterMl:$("m4WaterMl")?.value||"",silicaG:$("m4SilicaG")?.value||""}};
  }
  if(method==="m5"){
    const r=method5Field();
    return {method:"Method 5",timestamp:now,metrics:{idealDscf:r.ideal,isokinetic:r.iso,totalPMmg:r.total,grDscf:r.gr},
      inputs:{runId:$("m5RunId")?.value||"",nozzle:$("m5Nozzle")?.value||"",time:$("m5Time")?.value||"",vmStd:$("m5VmStd")?.value||"",velocity:$("m5Vel")?.value||"",ts:$("m5Ts")?.value||"",p:$("m5P")?.value||"",bws:$("m5Bws")?.value||""}};
  }
  if(method==="inst"){
    const r=instrumentalField();
    return {method:"6C / 7E / 10",timestamp:now,metrics:{lowCE:r.low,midCE:r.mid,highCE:r.high,zeroDrift:r.zd,upscaleDrift:r.ud},
      inputs:{pollutant:$("instPollutant")?.value||"",span:$("instSpan")?.value||""}};
  }
  if(method==="m25a"){
    const r=method25AField();
    return {method:"Method 25A",timestamp:now,metrics:{calError:r.ce,zeroDrift:r.zd,upscaleDrift:r.ud,voc:r.voc},
      inputs:{span:$("m25Span")?.value||"",sample:$("m25Sample")?.value||""}};
  }
  if(method==="m320"){
    const r=method320Field();
    return {method:"Method 320",timestamp:now,metrics:{lineMargin:r.margin,ctsDiff:r.cts,spikeRecovery:r.rec,filesOk:r.filesOk},
      inputs:{runId:$("m320RunId")?.value||"",cellTemp:$("m320CellTemp")?.value||"",lineTemp:$("m320LineTemp")?.value||"",dew:$("m320Dew")?.value||""}};
  }
  if(method==="rata"){
    const r=rataField();
    return {method:"RATA",timestamp:now,metrics:{pairs:r.n,avgReference:r.ar,avgCEMS:r.ac,meanDifference:r.ad,relativeDifference:r.rel},inputs:{}};
  }
  return null;
}

function saveCurrentRun(){
  const method=$("saveRunMethod")?.value;
  const payload=currentRunPayload(method);
  if(!payload)return;
  const name=$("saveRunName")?.value.trim() || `${payload.method} Run ${state.runs.filter(x=>x.method===payload.method).length+1}`;
  const status=$("saveRunStatus")?.value||"valid";
  const notes=$("saveRunNotes")?.value.trim()||"";
  state.runs.push({...payload,id:crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random(),name,status,notes});
  save();
  renderSavedRuns();
  updateRunAverages();
  updateRunSummary();
  if($("saveRunName")) $("saveRunName").value="";
  if($("saveRunNotes")) $("saveRunNotes").value="";
}

function deleteRun(id){
  state.runs=state.runs.filter(r=>r.id!==id);save();renderSavedRuns();updateRunAverages();updateRunSummary();
}
function toggleRunStatus(id){
  const r=state.runs.find(x=>x.id===id);if(!r)return;
  r.status=r.status==="valid"?"invalid":"valid";save();renderSavedRuns();updateRunAverages();updateRunSummary();
}
function renderSavedRuns(){
  const wrap=$("savedRuns");if(!wrap)return;
  if($("savedRunCount")) $("savedRunCount").textContent=`${state.runs.length} saved`;
  if(!state.runs.length){wrap.innerHTML='<div class="status neutral">No saved runs yet.</div>';return;}
  wrap.innerHTML=state.runs.slice().reverse().map(r=>{
    const metricText=Object.entries(r.metrics||{}).filter(([,v])=>v!=null&&typeof v!=="boolean").slice(0,3)
      .map(([k,v])=>`${k}: ${typeof v==="number"?fmt(v,3):v}`).join(" · ");
    return `<div class="saved-run ${r.status==="invalid"?"invalid":""}">
      <div class="row"><b>${r.name}</b><span class="pill">${r.status.toUpperCase()}</span></div>
      <div class="meta">${r.method}${metricText?" · "+metricText:""}${r.notes?" · "+r.notes:""}</div>
      <div class="row" style="margin-top:8px"><button onclick="toggleRunStatus('${r.id}')">${r.status==="valid"?"Mark Invalid":"Mark Valid"}</button><button onclick="deleteRun('${r.id}')">Delete</button></div>
    </div>`;
  }).join("");
}

function avg(vals){
  const a=vals.filter(v=>Number.isFinite(v));return a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
}
function validRuns(method){return state.runs.filter(r=>r.status==="valid"&&r.method===method);}

function updateRunAverages(){
  const wrap=$("runAverages");if(!wrap)return;
  const rows=[];
  const m2=validRuns("Method 2");
  if(m2.length) rows.push(["Method 2",`${m2.length} valid · Avg DSCFM ${fmt(avg(m2.map(r=>r.metrics.dscfm)),0)} · Avg velocity ${fmt(avg(m2.map(r=>r.metrics.velocity)),2)} ft/s`]);
  const m4=validRuns("Method 4");
  if(m4.length) rows.push(["Method 4",`${m4.length} valid · Avg Bws ${fmt(avg(m4.map(r=>r.metrics.bws)),4)}`]);
  const m5=validRuns("Method 5");
  if(m5.length) rows.push(["Method 5",`${m5.length} valid · Avg iso ${fmt(avg(m5.map(r=>r.metrics.isokinetic)),1)}% · Avg PM ${fmt(avg(m5.map(r=>r.metrics.grDscf)),5)} gr/dscf`]);
  const inst=validRuns("6C / 7E / 10");
  if(inst.length) rows.push(["6C / 7E / 10",`${inst.length} valid · Avg zero drift ${fmt(avg(inst.map(r=>r.metrics.zeroDrift)),2)}% span`]);
  const m25=validRuns("Method 25A");
  if(m25.length) rows.push(["Method 25A",`${m25.length} valid · Avg VOC ${fmt(avg(m25.map(r=>r.metrics.voc)),2)} ppmC`]);
  const m320=validRuns("Method 320");
  if(m320.length) rows.push(["Method 320",`${m320.length} valid · Avg spike recovery ${fmt(avg(m320.map(r=>r.metrics.spikeRecovery)),1)}%`]);
  const rata=validRuns("RATA");
  if(rata.length) rows.push(["RATA",`${rata.length} saved snapshot(s) · Latest relative difference ${fmt(rata[rata.length-1].metrics.relativeDifference,2)}%`]);
  wrap.innerHTML=rows.length?rows.map(([a,b])=>`<div class="summary-row"><b>${a}</b><span>${b}</span></div>`).join(""):'<div class="status neutral">Save valid runs to build averages.</div>';
}

function finalSummaryRows(){
  const rows=[];
  const m2=validRuns("Method 2"),m4=validRuns("Method 4"),m5=validRuns("Method 5");
  if(m2.length)rows.push(["Final Avg DSCFM",fmt(avg(m2.map(r=>r.metrics.dscfm)),0)]);
  if(m4.length)rows.push(["Final Avg Bws",fmt(avg(m4.map(r=>r.metrics.bws)),4)]);
  if(m5.length)rows.push(["Final Avg Isokinetic",fmt(avg(m5.map(r=>r.metrics.isokinetic)),1)+"%"]);
  if(m5.length)rows.push(["Final Avg PM",fmt(avg(m5.map(r=>r.metrics.grDscf)),5)+" gr/dscf"]);
  rows.push(["Tester NOx M19",$("testerM19")?.textContent==="—"?"Not entered":($("testerM19")?.textContent||"Not entered")+" lb/MMBtu"]);
  rows.push(["Client NOx M19",$("clientM19")?.textContent==="—"?"Not entered":($("clientM19")?.textContent||"Not entered")+" lb/MMBtu"]);
  rows.push(["Saved Runs",`${state.runs.filter(r=>r.status==="valid").length} valid / ${state.runs.filter(r=>r.status==="invalid").length} invalid`]);
  return rows;
}

function updateRunSummary(){
  const rows=finalSummaryRows();
  const wrap=$("runSummary"); if(wrap)wrap.innerHTML=rows.map(([a,b])=>`<div class="summary-row"><b>${a}</b><span>${b}</span></div>`).join("");
  const active=["Method 2","Method 4","Method 5","6C / 7E / 10","Method 25A","Method 320","RATA"].filter(m=>validRuns(m).length>0).length;
  if($("fieldStatus"))$("fieldStatus").textContent=`${active} modules with saved valid runs`;
}

function method1Field(){
  const shape=$("m1Shape")?.value,d=num("m1Diameter"),w=num("m1Width"),dep=num("m1Depth"),up=num("m1Upstream"),down=num("m1Downstream");
  let area=null,eq=null;
  if(shape==="Circular"&&d>0){area=Math.PI*d*d/4;eq=d;}
  if(shape==="Rectangular"&&w>0&&dep>0){area=w*dep;eq=2*w*dep/(w+dep);}
  const upD=(eq&&up!=null)?up/eq:null,downD=(eq&&down!=null)?down/eq:null;
  if($("m1Area")) $("m1Area").textContent=fmt(area,2);
  if($("m1EqDia")) $("m1EqDia").textContent=fmt(eq,2);
  if($("m1UpDia")) $("m1UpDia").textContent=fmt(upD,2);
  if($("m1DownDia")) $("m1DownDia").textContent=fmt(downD,2);
  const f=$("m1FieldFlag");
  if(f){
    if(eq&&upD!=null&&downD!=null){f.className=(upD>=2&&downD>=0.5)?"status ok":"status warn";f.textContent=(upD>=2&&downD>=0.5)?"Preliminary location screen looks reasonable. Verify exact Method 1 requirements.":"Review exact Method 1 site suitability / traverse requirements.";}
    else{f.className="status neutral";f.textContent="Enter Method 1 site geometry.";}
  }
  return {area,eq,upD,downD};
}
function method3AField(){
  const o=num("m3aO2"),c=num("m3aCo2"),b=num("m3aBws");let n=null,dry=null,wet=null;
  if(o!=null&&c!=null){n=100-o-c;dry=(32*o+44*c+28*n)/100;}
  if(dry!=null&&b!=null)wet=dry*(1-b)+18*b;
  if($("m3aN2")) $("m3aN2").textContent=fmt(n,2);
  if($("m3aDryMw")) $("m3aDryMw").textContent=fmt(dry,2);
  if($("m3aWetMw")) $("m3aWetMw").textContent=fmt(wet,2);
  const f=$("m3aFlag");
  if(f){
    if(dry!=null){f.className="status ok";f.textContent="Method 3A run-average gas composition populated."}
    else{f.className="status neutral";f.textContent="Enter Method 3A averages."}
  }
  return {n,dry,wet};
}

function calcFieldAll(){
  method1Field();method3AField();method2Field();method4Field();method5Field();instrumentalField();method25AField();method320Field();rataField();updateRunSummary();
}
function calcAll(){method1();method2();nozzleCalc();gasCalc();fieldCompare();noxCalc();calcFieldAll();}

function collect(){
  const data={...state,fields:{},checks:{},rata:{},runs:state.runs||[],selectedMethods:selectedMethods,genericMethods:state.genericMethods||{}};
  fields.forEach(id=>{const el=$(id);if(el)data.fields[id]=el.value;});
  document.querySelectorAll("[data-post]").forEach(cb=>data.post[cb.dataset.post]=cb.checked);
  ["m320Bg","m320SampleFile","m320CtsFile"].forEach(id=>{if($(id))data.checks[id]=$(id).checked;});
  for(let i=1;i<=12;i++){data.rata["ref"+i]=$("rataRef"+i)?.value||"";data.rata["cems"+i]=$("rataCems"+i)?.value||"";}
  data.savedAt=new Date().toISOString();
  return data;
}
function save(){
  state=collect();
  localStorage.setItem(STORAGE,JSON.stringify(state));
  if($("saveStatus")) $("saveStatus").textContent="Saved locally";
  const title=[state.fields.client,state.fields.facility,state.fields.unit].filter(Boolean).join(" · ");
  if($("jobTitle")) $("jobTitle").textContent=title||"New Stack Test";
}
function load(){
  try{state=JSON.parse(localStorage.getItem(STORAGE))||{equipment:{},post:{},runs:[]};}
  catch{state={equipment:{},post:{},runs:[]}}
  state.equipment ||= {}; state.post ||= {}; state.runs ||= [];
  state.selectedMethods ||= []; state.genericMethods ||= {}; state.prepInputs ||= {}; state.prepEquipment ||= {}; selectedMethods=[...state.selectedMethods];
  if(state.fields) fields.forEach(id=>{if($(id)&&state.fields[id]!=null)$(id).value=state.fields[id];});
  if(state.checks) ["m320Bg","m320SampleFile","m320CtsFile"].forEach(id=>{if($(id))$(id).checked=!!state.checks[id];});
  if(state.rata) for(let i=1;i<=12;i++){if($("rataRef"+i))$("rataRef"+i).value=state.rata["ref"+i]||"";if($("rataCems"+i))$("rataCems"+i).value=state.rata["cems"+i]||"";}
  document.querySelectorAll("[data-post]").forEach(cb=>cb.checked=!!state.post[cb.dataset.post]);
  buildEquipment();renderSelectedMethods();renderHomeMethodChips();renderQuickMethods();calcAll();renderSavedRuns();updateRunAverages();updateRunSummary();if(selectedMethods.length)renderPrepPage();save();
}

document.querySelectorAll(".step").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".step,.view").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");
  $(btn.dataset.view)?.classList.add("active");
  window.scrollTo({top:60,behavior:"smooth"});
}));

fields.forEach(id=>$(id)?.addEventListener("input",()=>{calcAll();save();}));
document.querySelectorAll("[data-post]").forEach(cb=>cb.addEventListener("change",save));

$("exportBtn")?.addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify(collect(),null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=`StackTestPro_${$("jobId")?.value||"job"}_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
});

$("resetBtn")?.addEventListener("click",()=>{
  if(confirm("Clear the current locally saved job and start a new one?")){
    localStorage.removeItem(STORAGE);
    location.reload();
  }
});

$("parseMethodsBtn")?.addEventListener("click",parseMethodEntry);
$("methodEntry")?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();parseMethodEntry();}});
$("browseMethodsBtn")?.addEventListener("click",openMethodModal);
$("buildPrepBtn")?.addEventListener("click",buildJobPrep);
$("editPrepMethodsBtn")?.addEventListener("click",openMethodModal);

["jpStackShape","jpDiameter","jpWidth","jpDepth","jpTemp","jpVelocity","jpAcfm","jpDscfm","jpBws","jpO2","jpCo2","jpBaro"].forEach(id=>
  $(id)?.addEventListener("input",()=>{calcJobPrep();save();})
);

$("chooseMethodsBtn")?.addEventListener("click",openMethodModal);
$("editMethodsBtn")?.addEventListener("click",openMethodModal);
$("closeMethodModal")?.addEventListener("click",closeMethodModal);
$("applyMethodsBtn")?.addEventListener("click",applyMethodSelection);
$("methodSearch")?.addEventListener("input",e=>renderMethodCatalog(e.target.value));
$("selectCommonBtn")?.addEventListener("click",()=>{selectedMethods=[...COMMON_METHODS];renderMethodCatalog($("methodSearch")?.value||"");});
$("clearMethodsBtn")?.addEventListener("click",()=>{selectedMethods=[];renderMethodCatalog($("methodSearch")?.value||"");});
$("saveGenericBtn")?.addEventListener("click",saveGenericWorkspace);

function syncJobInfo(){
  const pairs=[["prepJobId","jobId"],["prepClient","client"],["prepFacility","facility"],["prepUnit","unit"],["prepDate","testDate"]];
  pairs.forEach(([a,b])=>{if($(a)&&$(b))$(b).value=$(a).value;});
}
["prepJobId","prepClient","prepFacility","prepUnit","prepDate"].forEach(id=>$(id)?.addEventListener("input",()=>{syncJobInfo();save();}));

buildRataRows();

$("fieldModeBtn")?.addEventListener("click",()=>setMode("field"));
$("fullModeBtn")?.addEventListener("click",()=>setMode("full"));
$("fieldSaveActiveBtn")?.addEventListener("click",saveActiveRunFast);

document.querySelectorAll(".quick").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".quick").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");
  if(btn.dataset.quick==="compare"){
    document.querySelectorAll(".field-module").forEach(x=>x.classList.remove("active"));
    $("field")?.classList.remove("active");
    $("compare")?.classList.add("quick-open");
    window.scrollTo({top:0,behavior:"smooth"});
  } else if(btn.dataset.quick){
    activateFieldModule(btn.dataset.quick);
  }
}));

document.querySelectorAll(".module-tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".module-tab,.field-module").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");
  $(btn.dataset.module)?.classList.add("active");
}));

["m320Bg","m320SampleFile","m320CtsFile"].forEach(id=>$(id)?.addEventListener("change",()=>{calcAll();save();}));
$("saveRunBtn")?.addEventListener("click",saveCurrentRun);

/* Ensure Method 19 recalculates on dropdown changes too */
["testerNox","clientNox","testerO2","clientO2","fuel","customFd","permitLimit","clientReported","testerLbHr","heatInput"].forEach(id=>{
  const el=$(id);
  if(!el)return;
  el.addEventListener("change",()=>{noxCalc();save();});
});

appMode=localStorage.getItem("stacktestpro_mode")||"full";
applyMode();
load();
noxCalc();

let installPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();
  installPrompt=e;
  $("installBtn")?.classList.remove("hidden");
});
$("installBtn")?.addEventListener("click",async()=>{
  if(installPrompt){
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt=null;
    $("installBtn")?.classList.add("hidden");
  }
});
if("serviceWorker" in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("sw.js").catch(err=>{
      console.log("Service worker registration skipped:",err);
    });
  });
}
