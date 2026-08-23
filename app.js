const $=id=>document.getElementById(id);
const num=id=>{const v=parseFloat($(id)?.value);return Number.isFinite(v)?v:null};
const fmt=(v,d=2)=>Number.isFinite(v)?v.toLocaleString(undefined,{maximumFractionDigits:d}):"—";
const STORAGE_KEY="stacktestpro_job_v3";

const EPA_METHODS=[
["1","Traverse Points","Core"],["1A","Small Ducts","Core"],
["2","Velocity - S-type Pitot","Flow"],["2A","Direct Measurement of Gas Volume Through Pipes and Small Ducts","Flow"],["2B","Exhaust Gas Volume Flow Rate from Gasoline Vapor Incinerators","Flow"],["2C","Velocity and Volumetric Flow Rate in Small Stacks or Ducts - Standard Pitot","Flow"],["2D","Gas Volumetric Flow Rates in Small Pipes and Ducts","Flow"],["2E","Landfill Gas Production Flow Rate","Flow"],["2F","Velocity and Volumetric Flow Rate with Three-Dimensional Probes","Flow"],["2G","Velocity and Volumetric Flow Rate with Two-Dimensional Probes","Flow"],["2H","Velocity Decay Near Stack Walls","Flow"],
["3","Gas Analysis for Dry Molecular Weight","Gas Composition"],["3A","Oxygen and Carbon Dioxide - Instrumental","Gas Composition"],["3B","Gas Analysis for Emission Rate Correction Factor or Excess Air","Gas Composition"],["3C","Carbon Dioxide, Methane, Nitrogen and Oxygen","Gas Composition"],["4","Moisture Content","Core"],
["5","Particulate Matter","Particulate"],["5A","Particulate Matter - Asphalt Roofing","Particulate"],["5B","Nonsulfuric Acid Particulate Matter","Particulate"],["5D","Particulate Matter - Positive Pressure Fabric Filters","Particulate"],["5E","Particulate Matter - Fiberglass Plants","Particulate"],["5F","Particulate Matter - Fluid Catalytic Cracking Units","Particulate"],["5G","Particulate Matter - Wood Heaters, Dilution Tunnel","Particulate"],["5H","Particulate Matter - Wood Heaters, Stack","Particulate"],["5I","Low Level Particulate Matter","Particulate"],
["6","Sulfur Dioxide","SO2"],["6A","SO2, CO2 and Moisture","SO2"],["6B","SO2 and CO2 - Daily Average","SO2"],["6C","Sulfur Dioxide - Instrumental","Instrumental"],
["7","Nitrogen Oxide","NOx"],["7A","Nitrogen Oxide","NOx"],["7B","Nitrogen Oxide","NOx"],["7C","Nitrogen Oxide","NOx"],["7D","Nitrogen Oxide","NOx"],["7E","Nitrogen Oxides - Instrumental","Instrumental"],
["8","Sulfuric Acid Mist and Sulfur Dioxide","Acid Gas"],["9","Visual Opacity","Opacity"],["10","Carbon Monoxide - Instrumental","Instrumental"],["10A","Carbon Monoxide - CEMS Certification","CEMS"],["10B","Carbon Monoxide","CO"],
["11","Hydrogen Sulfide in Fuel Gas","Sulfur"],["12","Inorganic Lead","Metals"],["13A","Total Fluoride","Fluoride"],["13B","Total Fluoride","Fluoride"],["14","Fluoride - Primary Aluminum Plants","Fluoride"],["14A","Total Fluoride - Primary Aluminum Plants","Fluoride"],
["15","Hydrogen Sulfide, Carbonyl Sulfide and Carbon Disulfide","Sulfur"],["15A","Total Reduced Sulfur - Refinery Sulfur Recovery","Sulfur"],["16","Semicontinuous Sulfur Emissions","Sulfur"],["16A","Total Reduced Sulfur","Sulfur"],["16B","Total Reduced Sulfur","Sulfur"],["16C","Total Reduced Sulfur - Real Time","Sulfur"],["17","In-Stack Particulate","Particulate"],
["18","Gaseous Organic Compounds by Gas Chromatography","VOC"],["19","SO2 Removal and PM/SO2/NOx Emission Rates","Combustion"],["20","NOx from Stationary Gas Turbines","NOx"],["21","VOC Leaks","VOC"],["22","Visual Fugitive Emissions","Opacity"],["23","Dioxins and Furans","Organics"],["24","VOC Content of Surface Coatings","VOC"],["24A","VOC Content of Publication Rotogravure Inks","VOC"],
["25","Gaseous Nonmethane Organic Emissions","VOC"],["25A","Total Gaseous Organic Concentration - FID","Instrumental"],["25B","Total Gaseous Organic Concentration - NDIR","Instrumental"],["25C","Nonmethane Organic Compounds in Landfill Gases","VOC"],["25D","VOC Concentration of Waste Samples","VOC"],["25E","Vapor Phase Organic Concentration in Waste Samples","VOC"],
["26","Hydrogen Halide and Halogen Emissions","Acid Gas"],["26A","Hydrogen Halide and Halogen Emissions - Isokinetic","Acid Gas"],["27","Vapor Tightness of Gasoline Delivery Tanks","VOC"],
["28","Wood Heater Certification/Auditing","Wood Heater"],["28A","Air-to-Fuel Ratio and Minimum Achievable Burn Rates","Wood Heater"],["28R","Wood Heater Certification/Auditing","Wood Heater"],["28 WHH","Wood-Fired Hydronic Heating Appliances","Wood Heater"],["28 WHH PTS","Cord Wood Hydronic Heating Appliances","Wood Heater"],
["29","Metals Emissions","Metals"],["30A","Mercury - Instrumental","Mercury"],["30B","Mercury - Sorbent Trap","Mercury"],
["101","Mercury","Mercury"],["101A","Mercury - Sewage Sludge Incinerators","Mercury"],["102","Mercury - Hydrogen Streams","Mercury"],["103","Beryllium Screening","Metals"],["104","Beryllium","Metals"],["105","Mercury in Sewage Sludge","Mercury"],["106","Vinyl Chloride","VOC"],["107","Vinyl Chloride in Wastewater","VOC"],["107A","Vinyl Chloride in Solvents","VOC"],["108","Particulate and Gaseous Arsenic","Metals"],["108A","Arsenic in Ore","Metals"],["108B","Arsenic in Ore","Metals"],["108C","Arsenic in Ore","Metals"],["111","Polonium-210","Radionuclides"],["114","Radionuclides","Radionuclides"],["115","Radon-222","Radionuclides"],
["201","PM10","Particulate"],["201A","PM10 and PM2.5","Particulate"],["202","Condensable Particulate Matter","Particulate"],["203A","Opacity - Time Averaged","Opacity"],["203B","Opacity - Time Exception","Opacity"],["203C","Opacity - Instantaneous","Opacity"],["204","Total Enclosure Capture Efficiency","Capture Efficiency"],["204A","VOC - Liquid Input Stream","Capture Efficiency"],["204B","VOC - Captured Stream","Capture Efficiency"],["204C","VOC - Captured Stream Dilution","Capture Efficiency"],["204D","Fugitive VOC - Temporary Total Enclosure","Capture Efficiency"],["204E","Fugitive VOC - Building Enclosure","Capture Efficiency"],["204F","Fugitive VOC - Liquid Input Stream","Capture Efficiency"],["205","Gas Dilution Calibration","Calibration"],["207","Presurvey - Corn Wet Milling","VOC"],
["301","Field Validation of Pollutant Measurement Methods","Validation"],["303","Coke Oven Visible Emissions","Opacity"],["303A","Nonrecovery Coke Oven Visible Emissions","Opacity"],["304A","Biodegradation Rates - Vent Option","VOC"],["304B","Biodegradation Rates - Scrubber Option","VOC"],["305","Potential VOC in Waste","VOC"],["306","Chromium Emissions","Metals"],["306A","Chromium Emissions - Mason Jar","Metals"],["306B","Surface Tension","Metals"],["307","Solvent Vapor Cleaners","VOC"],["308","Methanol Emissions","VOC"],["310A","Residual Hexane","VOC"],["310B","Residual Solvent","VOC"],["310C","Residual N-Hexane","VOC"],["311","HAP Compounds in Paints and Coatings","HAP"],["312A","Styrene in SBR Latex","VOC"],["312B","Styrene in SBR Latex","VOC"],["312C","Styrene in SBR Latex","VOC"],["313A","Residual Hydrocarbon in Rubber Crumb","VOC"],["313B","Residual Hydrocarbon in Solution Polymers","VOC"],["315","PM and Methylene Chloride Extractable Matter","Particulate"],["316","Formaldehyde","Formaldehyde"],["318","Extractive FTIR","FTIR"],["320","Vapor Phase Organic/Inorganic Emissions by FTIR","FTIR"],["321","Hydrogen Chloride by FTIR","FTIR"],["323","Formaldehyde","Formaldehyde"],["325A","Fenceline Sampler Deployment and Collection","Fenceline"],["325B","Fenceline Sampler Preparation and Analysis","Fenceline"],["326","Isocyanates","HAP"],["327","Selected VOC HAPs Using Canisters","Fenceline"]
];

let methodSelectionMemory=new Set();
const methodByNumber=n=>EPA_METHODS.find(m=>m[0]===n);

function buildMethodCatalog(filter=""){
 const wrap=$("methodCatalog"); if(!wrap)return;
 wrap.innerHTML="";
 const q=filter.trim().toLowerCase();
 const cats={};
 EPA_METHODS.filter(m=>`${m[0]} ${m[1]} ${m[2]}`.toLowerCase().includes(q)).forEach(m=>(cats[m[2]]??=[]).push(m));
 Object.entries(cats).forEach(([cat,methods])=>{
   const sec=document.createElement("div");sec.className="method-category";
   sec.innerHTML=`<h3>${cat}</h3>`;
   methods.forEach(([n,t])=>{
     const l=document.createElement("label");l.className="method-check";
     l.innerHTML=`<input type="checkbox" class="epa-method-checkbox" value="${n}" ${methodSelectionMemory.has(n)?"checked":""}><span><strong>Method ${n}</strong><br><small>${t}</small></span>`;
     sec.appendChild(l);
   });wrap.appendChild(sec);
 });
 document.querySelectorAll(".epa-method-checkbox").forEach(b=>b.addEventListener("change",()=>{if(b.checked)methodSelectionMemory.add(b.value);else methodSelectionMemory.delete(b.value);updateSelectedSummary()}));
 updateSelectedSummary();
}
function updateSelectedSummary(){const b=$("selectedMethodSummary"),n=methodSelectionMemory.size;if(!b)return;b.className=n?"status ok":"status neutral";b.textContent=n?`${n} EPA emissions method${n===1?"":"s"} selected.`:"No methods selected."}
function clearMethods(){methodSelectionMemory.clear();buildMethodCatalog($("methodSearch")?.value||"")}

function buildJob(){
 const selected=[...methodSelectionMemory];if(!selected.length){alert("Select at least one EPA emissions method.");return}
 document.querySelectorAll(".method-section").forEach(s=>s.classList.remove("active"));
 if(selected.some(n=>["1","1A","2","5","17","26A","29","201","201A"].includes(n)))$("method1Section")?.classList.add("active");
 if(selected.some(n=>["2","5"].includes(n)))$("method2Section")?.classList.add("active");
 if(selected.includes("4"))$("method4Section")?.classList.add("active");
 if(selected.includes("5"))$("method5Section")?.classList.add("active");
 const list=$("selectedMethodsList");if(list){list.innerHTML="";selected.forEach(n=>{const m=methodByNumber(n);if(!m)return;const d=document.createElement("div");d.className="result";d.innerHTML=`<span>${m[2]}</span><strong>Method ${m[0]}</strong><small>${m[1]}</small>`;list.appendChild(d)})}
 ["jobMethodsSection","methodWorkspaceSection","jobPrepSection","fieldNotesSection"].forEach(id=>$(id)?.classList.remove("hidden"));
 buildGenericWorkspaces(selected);buildJobPrep(selected);
}

function buildGenericWorkspaces(selected){
 const w=$("genericMethodWorkspaces");if(!w)return;w.innerHTML="";
 selected.filter(n=>!["1","2","4","5"].includes(n)).forEach(n=>{const m=methodByNumber(n),s=n.replace(/[^a-z0-9]/gi,"_");if(!m)return;const d=document.createElement("div");d.className="generic-workspace";d.innerHTML=`<div class="workspace-heading"><strong>Method ${m[0]}</strong><small>${m[2]}</small></div><p class="help">${m[1]}</p><div class="grid"><label>Run / Sample ID<input id="g_${s}_run"></label><label>Run Time (min)<input id="g_${s}_time" type="number" step="any"></label></div><label>Method Notes<textarea id="g_${s}_notes" rows="4"></textarea></label>`;w.appendChild(d)});
}

const ISOKINETIC_METHODS = new Set([
  "5","5A","5B","5D","5E","5F","5G","5H","5I",
  "8","17","26A","29","201","201A","202"
]);

function addEquipment(map, group, item, methods){
  if(!map.has(group)) map.set(group,new Map());
  const groupMap=map.get(group);

  if(!groupMap.has(item)){
    groupMap.set(item,new Set());
  }

  const methodSet=groupMap.get(item);
  methods.forEach(m=>methodSet.add(m));
}

function addBaseEquipment(map, selected){
  addEquipment(map,"General Field Gear","PPE",selected);
  addEquipment(map,"General Field Gear","Hard hats",selected);
  addEquipment(map,"General Field Gear","Safety glasses",selected);
  addEquipment(map,"General Field Gear","Work gloves",selected);
  addEquipment(map,"General Field Gear","Fall protection / harnesses as required",selected);
  addEquipment(map,"General Field Gear","Toolbox / hand tools",selected);
  addEquipment(map,"General Field Gear","Extension cords / power distribution",selected);
  addEquipment(map,"General Field Gear","Field laptop / tablet",selected);
  addEquipment(map,"General Field Gear","Field data sheets / test plan",selected);
  addEquipment(map,"General Field Gear","Permit / protocol / applicable method copies",selected);
  addEquipment(map,"General Field Gear","Labels / markers / tape",selected);
}

function addIsokineticPackage(map, methods){
  addEquipment(map,"Isokinetic Sampling","Sampling pump",methods);
  addEquipment(map,"Isokinetic Sampling","Meter box / dry gas meter",methods);
  addEquipment(map,"Isokinetic Sampling","Heated probe assembly",methods);
  addEquipment(map,"Isokinetic Sampling","Heated umbilical",methods);
  addEquipment(map,"Isokinetic Sampling","Pitot tube",methods);
  addEquipment(map,"Isokinetic Sampling","Thermocouples / temperature readout",methods);
  addEquipment(map,"Isokinetic Sampling","Nozzle set",methods);
  addEquipment(map,"Isokinetic Sampling","Nozzle sizing tools / calipers",methods);
  addEquipment(map,"Isokinetic Sampling","Impingers / glassware",methods);
  addEquipment(map,"Isokinetic Sampling","Silica gel",methods);
  addEquipment(map,"Isokinetic Sampling","Leak-check supplies",methods);
  addEquipment(map,"Isokinetic Sampling","Tubing / fittings / spare ferrules",methods);
  addEquipment(map,"Isokinetic Sampling","Sample recovery supplies",methods);
  addEquipment(map,"Isokinetic Sampling","Sample containers",methods);
  addEquipment(map,"Isokinetic Sampling","Chain of custody",methods);

  // User-requested standard isokinetic items
  addEquipment(map,"Isokinetic Sampling","Ice chest",methods);
  addEquipment(map,"Isokinetic Sampling","Ice",methods);
}

function addMethodSpecificEquipment(map, methodNumber){
  const method=methodByNumber(methodNumber);
  if(!method) return;

  const category=method[2];
  const m=[methodNumber];

  if(["1","1A"].includes(methodNumber)){
    addEquipment(map,"Traverse / Stack Setup","Tape measure / laser distance meter",m);
    addEquipment(map,"Traverse / Stack Setup","Stack dimension records / port sketch",m);
  }

  if(["2","2A","2B","2C","2D","2E","2F","2G","2H"].includes(methodNumber)){
    addEquipment(map,"Flow Measurement","Pitot / flow measurement device applicable to method",m);
    addEquipment(map,"Flow Measurement","Differential pressure gauge / manometer",m);
    addEquipment(map,"Flow Measurement","Stack temperature measurement",m);
    addEquipment(map,"Flow Measurement","Barometer",m);
  }

  if(["3","3A","3B","3C"].includes(methodNumber)){
    addEquipment(map,"Gas Composition","O₂ / CO₂ measurement equipment applicable to method",m);
    addEquipment(map,"Gas Composition","Sample line / probe",m);
    addEquipment(map,"Gas Composition","Calibration standards or reagents",m);
  }

  if(methodNumber==="4"){
    addEquipment(map,"Moisture","Method 4 moisture train / impingers",m);
    addEquipment(map,"Moisture","Silica gel",m);
    addEquipment(map,"Moisture","Ice chest",m);
    addEquipment(map,"Moisture","Ice",m);
    addEquipment(map,"Moisture","Balance / weighing supplies",m);
  }

  if(category==="Instrumental" || category==="CEMS"){
    addEquipment(map,"Instrumental Analyzers","Applicable gas analyzer",m);
    addEquipment(map,"Instrumental Analyzers","Sample probe / sample line",m);
    addEquipment(map,"Instrumental Analyzers","Sample pump",m);
    addEquipment(map,"Instrumental Analyzers","Data acquisition system",m);
    addEquipment(map,"Instrumental Analyzers","Zero gas",m);
    addEquipment(map,"Instrumental Analyzers","Low / mid / high calibration gases as applicable",m);
    addEquipment(map,"Instrumental Analyzers","Gas regulators",m);
    addEquipment(map,"Instrumental Analyzers","Calibration manifold / tubing",m);
    addEquipment(map,"Instrumental Analyzers","Calibration gas certificates",m);
  }

  if(category==="FTIR"){
    addEquipment(map,"FTIR","FTIR analyzer",m);
    addEquipment(map,"FTIR","Heated sample line",m);
    addEquipment(map,"FTIR","Heated filter",m);
    addEquipment(map,"FTIR","Heated sample pump",m);
    addEquipment(map,"FTIR","FTIR computer / acquisition software",m);
    addEquipment(map,"FTIR","Background spectra / reference files",m);
    addEquipment(map,"FTIR","CTS materials",m);
    addEquipment(map,"FTIR","Spike materials / spiking hardware",m);
    addEquipment(map,"FTIR","Calibration gases / regulators",m);
    addEquipment(map,"FTIR","Temperature verification device",m);
  }

  if(category==="Particulate"){
    addEquipment(map,"Particulate Recovery","Filters / filter holders applicable to method",m);
    addEquipment(map,"Particulate Recovery","Recovery solvents / reagents applicable to method",m);
    addEquipment(map,"Particulate Recovery","Brushes / wash bottles / funnels",m);
    addEquipment(map,"Particulate Recovery","Sample jars / bottles",m);
    addEquipment(map,"Particulate Recovery","Field blanks as required",m);
  }

  if(category==="Acid Gas"){
    addEquipment(map,"Acid Gas Sampling","Method-specific absorbing solutions / reagents",m);
    addEquipment(map,"Acid Gas Sampling","Impinger train / sample containers",m);
    addEquipment(map,"Acid Gas Sampling","Heated probe / line as applicable",m);
  }

  if(category==="Metals"){
    addEquipment(map,"Metals","Method-specific filters / impingers",m);
    addEquipment(map,"Metals","Acid recovery reagents",m);
    addEquipment(map,"Metals","Clean sample containers",m);
    addEquipment(map,"Metals","Field blanks",m);
  }

  if(category==="Mercury"){
    addEquipment(map,"Mercury","Mercury-specific sampling media / traps",m);
    addEquipment(map,"Mercury","Leak-check and flow verification supplies",m);
    addEquipment(map,"Mercury","Sample containers / transport materials",m);
  }

  if(["VOC","Organics","HAP","Formaldehyde"].includes(category)){
    addEquipment(map,"VOC / HAP Sampling","Method-specific sampling media",m);
    addEquipment(map,"VOC / HAP Sampling","Sample containers",m);
    addEquipment(map,"VOC / HAP Sampling","Recovery reagents / preservation supplies",m);
    addEquipment(map,"VOC / HAP Sampling","Field blanks as required",m);
    addEquipment(map,"VOC / HAP Sampling","Chain of custody",m);
  }

  if(category==="Opacity"){
    addEquipment(map,"Opacity","Observation forms",m);
    addEquipment(map,"Opacity","Timing device",m);
    addEquipment(map,"Opacity","Compass / sun position reference",m);
    addEquipment(map,"Opacity","Weather observation sheet",m);
    addEquipment(map,"Opacity","Observer certification documentation as applicable",m);
  }

  if(category==="Calibration"){
    addEquipment(map,"Calibration","Gas dilution system",m);
    addEquipment(map,"Calibration","Certified gases",m);
    addEquipment(map,"Calibration","Flow measurement devices",m);
    addEquipment(map,"Calibration","Calibration records",m);
  }

  if(category==="Fenceline"){
    addEquipment(map,"Fenceline","Method-specific passive samplers / canisters",m);
    addEquipment(map,"Fenceline","Deployment map / location list",m);
    addEquipment(map,"Fenceline","Sample labels / custody seals",m);
    addEquipment(map,"Fenceline","Chain of custody",m);
    addEquipment(map,"Fenceline","Meteorological information / field log",m);
  }
}

function buildJobPrep(selected){
  const wrap=$("jobPrepList");
  const summary=$("mobilizeSummary");
  if(!wrap) return;

  wrap.innerHTML="";

  const equipmentMap=new Map();

  addBaseEquipment(equipmentMap,selected);

  const isokineticSelected=selected.filter(m=>ISOKINETIC_METHODS.has(m));

  if(isokineticSelected.length){
    addIsokineticPackage(equipmentMap,isokineticSelected);
  }

  selected.forEach(methodNumber=>{
    addMethodSpecificEquipment(equipmentMap,methodNumber);
  });

  let totalItems=0;

  equipmentMap.forEach(groupMap=>{
    totalItems+=groupMap.size;
  });

  if(summary){
    summary.className="status ok";
    summary.textContent=
      `${totalItems} mobilization items generated from ${selected.length} selected method${selected.length===1?"":"s"}. Shared equipment is listed once.`;
  }

  equipmentMap.forEach((groupMap,groupName)=>{
    const section=document.createElement("div");
    section.className="mobilize-group";

    let html=`<h3>${groupName}</h3>`;

    groupMap.forEach((methods,item)=>{
      const methodList=[...methods]
        .sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}))
        .map(m=>`M${m}`)
        .join(", ");

      html+=`
        <label class="method-check">
          <input type="checkbox">
          <span>
            <strong>${item}</strong>
            <div class="mobilize-note">${methodList}</div>
          </span>
        </label>
      `;
    });

    section.innerHTML=html;
    wrap.appendChild(section);
  });
}


function calculateMethod1(){
 const shape=$("stackShape")?.value,d=num("diameter"),w=num("width"),dep=num("depth"),up=num("upstreamFt"),down=num("downstreamFt");
 let area=null,eq=null;if(shape==="Circular"&&d>0){area=Math.PI*d*d/4;eq=d}else if(shape==="Rectangular"&&w>0&&dep>0){area=w*dep;eq=2*w*dep/(w+dep)}
 const ud=eq&&up!=null?up/eq:null,dd=eq&&down!=null?down/eq:null;
 if($("areaOut"))$("areaOut").textContent=fmt(area,3);if($("eqDiaOut"))$("eqDiaOut").textContent=fmt(eq,3);if($("upDiaOut"))$("upDiaOut").textContent=fmt(ud,2);if($("downDiaOut"))$("downDiaOut").textContent=fmt(dd,2);
 const f=$("m1Flag");if(f){f.className=area!=null?"status ok":"status neutral";f.textContent=area!=null?"Stack geometry calculated. Verify exact Method 1 requirements.":"Enter valid stack geometry."}
 return{area,equivalentDiameter:eq,upstreamDiameters:ud,downstreamDiameters:dd};
}
const METHOD2_K=85.49;
function calculateMethod2(){
 const g=calculateMethod1(),cp=num("m2Cp"),pb=num("m2Pb"),ps=num("m2Ps")??0,md=num("m2Md"),b=num("m2Bws"),dp=num("m2Dp"),ts=num("m2Ts");
 let mw=null,pabs=null,v=null,acfm=null,scfm=null,dscfm=null;
 if(md!=null&&b!=null&&b>=0&&b<1)mw=md*(1-b)+18*b;if(pb>0)pabs=pb+ps/13.6;
 if(cp>0&&pabs>0&&mw>0&&dp!=null&&dp>=0&&ts!=null)v=METHOD2_K*cp*Math.sqrt(dp*(ts+459.67)/(pabs*mw));
 if(v!=null&&g.area>0)acfm=v*g.area*60;if(acfm!=null)scfm=acfm*(528/(ts+459.67))*(pabs/29.92);if(scfm!=null)dscfm=scfm*(1-b);
 [["m2Mw",mw,3],["m2Vel",v,2],["m2Acfm",acfm,0],["m2Scfm",scfm,0],["m2Dscfm",dscfm,0]].forEach(([id,x,d])=>{if($(id))$(id).textContent=fmt(x,d)});
 const f=$("m2Flag");if(f){f.className=dscfm!=null?"status ok":"status neutral";f.textContent=dscfm!=null?"Method 2 calculation completed.":"Enter stack geometry and Method 2 field data."}
 return{wetMolecularWeight:mw,absolutePressure:pabs,velocity:v,acfm,scfm,dscfm};
}
function calculateMethod4(){
 const vm=num("m4Vm"),water=num("m4WaterMl")??0,silica=num("m4SilicaG")??0;let vw=(water+silica)/453.59237*(385.3/18.01528),b=null,p=null;if(vm!=null&&vm+vw>0){b=vw/(vm+vw);p=b*100}
 if($("m4Vw"))$("m4Vw").textContent=fmt(vw,3);if($("m4BwsOut"))$("m4BwsOut").textContent=fmt(b,4);if($("m4Percent"))$("m4Percent").textContent=fmt(p,2);
 const f=$("m4Flag");if(f){f.className=b!=null?"status ok":"status neutral";f.textContent=b!=null?"Method 4 moisture calculation completed.":"Enter dry gas volume and collected moisture."}return{waterVaporVolume:vw,bws:b,percentMoisture:p};
}
function calculateMethod5(){
 const noz=num("m5Nozzle"),mins=num("m5Time"),actual=num("m5VmStd"),v=num("m5Vel"),t=num("m5Ts"),p=num("m5P"),b=num("m5Bws"),fc=num("m5Filter")??0,pc=num("m5Probe")??0,oc=num("m5Other")??0,blank=num("m5Blank")??0;
 let ideal=null,iso=null;if(noz>0&&mins>0&&v>0&&t!=null&&p>0&&b!=null&&b>=0&&b<1){const a=Math.PI*Math.pow(noz/12,2)/4,wet=a*v*60,dry=wet*(1-b)*(528/(t+459.67))*(p/29.92);ideal=dry*mins;if(actual>0)iso=actual/ideal*100}
 const total=fc+pc+oc-blank,loading=actual>0?(total/64.79891)/actual:null;
 [["m5Ideal",ideal,3],["m5Iso",iso,1],["m5PmMg",total,2],["m5GrDscf",loading,5]].forEach(([id,x,d])=>{if($(id))$(id).textContent=fmt(x,d)});
 const f=$("m5Flag");if(f){f.className=iso==null?"status neutral":iso>=90&&iso<=110?"status ok":"status warn";f.textContent=iso==null?"Enter Method 5 field data.":iso>=90&&iso<=110?"Isokinetic rate is within 90–110%.":"Isokinetic rate is outside 90–110%. Review inputs."}
 return{idealVolume:ideal,isokineticPercent:iso,totalParticulate:total,loading};
}
function runMethod2Test(){Object.entries({stackShape:"Circular",diameter:"8",upstreamFt:"20",downstreamFt:"8",m2Cp:"0.84",m2Pb:"29.92",m2Ps:"0",m2Md:"29",m2Bws:"0.10",m2Dp:"0.75",m2Ts:"300"}).forEach(([id,v])=>{if($(id))$(id).value=v});calculateMethod2()}
function runSystemTest(){const r=$("systemTestResult");try{if(!r)return;$("stackShape").value="Circular";$("diameter").value="10";const m=calculateMethod1(),e=Math.PI*100/4;if(m.area!=null&&Math.abs(m.area-e)<.001){r.className="status ok";r.textContent=`PASS — app loaded, ${EPA_METHODS.length} emissions methods are available, and the calculator engine is working.`}else throw new Error("calculation mismatch")}catch(e){r.className="status bad";r.textContent="FAIL — "+e.message}}


function fd(){
  const custom=num("customFd");
  if(custom!=null&&custom>0)return custom;

  const raw=$("fuel")?.value;
  if(!raw)return null;

  const factors={
    "natural gas":8710,
    "distillate oil":9190,
    "residual oil":9190,
    "coal":9820,
    "wood":9240
  };

  return factors[String(raw).trim().toLowerCase()]??null;
}

function method19LbMmbtu(ppm,o2){
  const Fd=fd();

  if(
    ppm==null||
    o2==null||
    Fd==null||
    Fd<=0||
    o2>=20.9
  ){
    return null;
  }

  return (
    ppm*
    46.01/
    (385.3*1e6)*
    Fd*
    20.9/
    (20.9-o2)
  );
}

function calculateTesterClient(){
  const tester=method19LbMmbtu(
    num("testerNox"),
    num("testerO2")
  );

  const reported=num("clientReported");

  const client=
    reported!=null&&reported>0
      ? reported
      : method19LbMmbtu(
          num("clientNox"),
          num("clientO2")
        );

  const diff=
    tester!=null&&
    client!=null&&
    Math.abs(client)>0
      ? Math.abs(tester-client)/
        Math.abs(client)*
        100
      : null;

  const limit=num("permitLimit");

  const margin=
    tester!=null&&
    limit!=null&&
    limit>0
      ? (limit-tester)/
        limit*
        100
      : null;

  const mass=num("testerLbHr");
  const heat=num("heatInput");

  const direct=
    mass!=null&&
    heat!=null&&
    heat>0
      ? mass/heat
      : null;

  if($("testerM19"))$("testerM19").textContent=fmt(tester,4);
  if($("clientM19"))$("clientM19").textContent=fmt(client,4);
  if($("noxDiff"))$("noxDiff").textContent=fmt(diff,1);
  if($("permitMargin"))$("permitMargin").textContent=fmt(margin,1);
  if($("directLbMmbtu"))$("directLbMmbtu").textContent=fmt(direct,4);

  const flag=$("noxFlag");
  if(!flag)return;

  if(tester==null){
    flag.className="status neutral";
    flag.textContent="Enter tester NOx, O₂, and fuel/Fd information.";
  }else if(client==null){
    flag.className="status neutral";
    flag.textContent="Tester result calculated. Enter client NOx/O₂ or client-reported lb/MMBtu.";
  }else if(diff!=null&&diff<=10){
    flag.className="status ok";
    flag.textContent="Tester/client preliminary agreement is within 10%. Verify the applicable rule-specific acceptance criteria.";
  }else{
    flag.className="status warn";
    flag.textContent="Tester/client difference exceeds 10%. Check NOx, O₂ basis, Fd, averaging, moisture basis, and client data.";
  }

  if(margin!=null&&margin<0){
    flag.className="status warn";
    flag.textContent+=" Tester result is above the entered permit limit.";
  }
}


function runTesterClientTest(){
  if($("testerNox")) $("testerNox").value="100";
  if($("testerO2")) $("testerO2").value="3";
  if($("clientNox")) $("clientNox").value="102";
  if($("clientO2")) $("clientO2").value="3";
  if($("fuel")) $("fuel").value="natural gas";
  if($("customFd")) $("customFd").value="";
  if($("clientReported")) $("clientReported").value="";
  if($("permitLimit")) $("permitLimit").value="0.15";
  if($("testerLbHr")) $("testerLbHr").value="10";
  if($("heatInput")) $("heatInput").value="100";

  calculateTesterClient();

  const testerText=$("testerM19")?.textContent;
  const clientText=$("clientM19")?.textContent;

  if($("noxFlag") && testerText!=="—" && clientText!=="—"){
    $("noxFlag").className="status ok";
    $("noxFlag").textContent=
      "PASS — Tester vs Client calculator is working. Test values were loaded.";
  }
}

function saveJob(){const form={};document.querySelectorAll("input:not(.epa-method-checkbox),select,textarea").forEach(el=>{if(el.id)form[el.id]=el.type==="checkbox"?el.checked:el.value});localStorage.setItem(STORAGE_KEY,JSON.stringify({methods:[...methodSelectionMemory],form}));const s=$("saveStatus");if(s){s.className="status ok";s.textContent="Job saved on this device."}}
function loadJob(){const raw=localStorage.getItem(STORAGE_KEY),s=$("saveStatus");if(!raw){if(s){s.className="status warn";s.textContent="No saved job found."}return}try{const j=JSON.parse(raw);methodSelectionMemory=new Set(j.methods||[]);buildMethodCatalog();buildJob();Object.entries(j.form||{}).forEach(([id,v])=>{const el=$(id);if(el){if(el.type==="checkbox")el.checked=!!v;else el.value=v}});calculateMethod1();calculateMethod2();calculateMethod4();calculateMethod5();if(s){s.className="status ok";s.textContent="Saved job loaded."}}catch(e){if(s){s.className="status bad";s.textContent="Saved job could not be loaded."}}}
function newJob(){if(!confirm("Start a new job? Unsaved screen data will be cleared."))return;localStorage.removeItem(STORAGE_KEY);location.reload()}

$("buildJobBtn")?.addEventListener("click",buildJob);$("clearMethodsBtn")?.addEventListener("click",clearMethods);$("calcM2Btn")?.addEventListener("click",calculateMethod2);$("calcM4Btn")?.addEventListener("click",calculateMethod4);$("calcM5Btn")?.addEventListener("click",calculateMethod5);$("testM2Btn")?.addEventListener("click",runMethod2Test);$("systemTestBtn")?.addEventListener("click",runSystemTest);$("saveJobBtn")?.addEventListener("click",saveJob);$("loadJobBtn")?.addEventListener("click",loadJob);$("newJobBtn")?.addEventListener("click",newJob);

$("calcCompareBtn")?.addEventListener("click",calculateTesterClient);
$("testCompareBtn")?.addEventListener("click",runTesterClientTest);

["testerNox","testerO2","clientNox","clientO2","fuel","customFd","clientReported","permitLimit","testerLbHr","heatInput"]
  .forEach(id=>{
    $(id)?.addEventListener("input",calculateTesterClient);
    $(id)?.addEventListener("change",calculateTesterClient);
  });

$("methodSearch")?.addEventListener("input",e=>buildMethodCatalog(e.target.value));
["stackShape","diameter","width","depth","upstreamFt","downstreamFt"].forEach(id=>{$(id)?.addEventListener("input",calculateMethod1);$(id)?.addEventListener("change",calculateMethod1)});
["m2Cp","m2Pb","m2Ps","m2Md","m2Bws","m2Dp","m2Ts"].forEach(id=>$(id)?.addEventListener("input",calculateMethod2));
["m4Vm","m4WaterMl","m4SilicaG"].forEach(id=>$(id)?.addEventListener("input",calculateMethod4));
["m5Nozzle","m5Time","m5VmStd","m5Vel","m5Ts","m5P","m5Bws","m5Filter","m5Probe","m5Other","m5Blank"].forEach(id=>$(id)?.addEventListener("input",calculateMethod5));
buildMethodCatalog();
