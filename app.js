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
function buildJobPrep(selected){
 const w=$("jobPrepList");if(!w)return;w.innerHTML="";
 selected.forEach(n=>{const m=methodByNumber(n);if(!m)return;let items=["Applicable method / field procedure","Field data sheets","Test plan / permit requirements","Calibration and QA records"];
 if(["Particulate","Acid Gas","Metals","Mercury"].includes(m[2]))items.push("Sampling train and method-specific media","Sample recovery supplies","Sample containers / chain of custody");
 if(["Instrumental","CEMS"].includes(m[2]))items.push("Analyzer and sample system","Zero and calibration gases","Regulators / calibration manifold","Data acquisition system");
 if(m[2]==="FTIR")items.push("FTIR and heated sample system","CTS / spiking materials","Background and sample spectra storage");
 const d=document.createElement("div");d.className="generic-workspace";d.innerHTML=`<strong>Method ${m[0]}</strong><p class="help">${m[1]}</p>`+items.map((x,i)=>`<label class="method-check"><input type="checkbox" id="prep_${n.replace(/[^a-z0-9]/gi,"_")}_${i}">${x}</label>`).join("");w.appendChild(d)});
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

function saveJob(){const form={};document.querySelectorAll("input:not(.epa-method-checkbox),select,textarea").forEach(el=>{if(el.id)form[el.id]=el.type==="checkbox"?el.checked:el.value});localStorage.setItem(STORAGE_KEY,JSON.stringify({methods:[...methodSelectionMemory],form}));const s=$("saveStatus");if(s){s.className="status ok";s.textContent="Job saved on this device."}}
function loadJob(){const raw=localStorage.getItem(STORAGE_KEY),s=$("saveStatus");if(!raw){if(s){s.className="status warn";s.textContent="No saved job found."}return}try{const j=JSON.parse(raw);methodSelectionMemory=new Set(j.methods||[]);buildMethodCatalog();buildJob();Object.entries(j.form||{}).forEach(([id,v])=>{const el=$(id);if(el){if(el.type==="checkbox")el.checked=!!v;else el.value=v}});calculateMethod1();calculateMethod2();calculateMethod4();calculateMethod5();if(s){s.className="status ok";s.textContent="Saved job loaded."}}catch(e){if(s){s.className="status bad";s.textContent="Saved job could not be loaded."}}}
function newJob(){if(!confirm("Start a new job? Unsaved screen data will be cleared."))return;localStorage.removeItem(STORAGE_KEY);location.reload()}

$("buildJobBtn")?.addEventListener("click",buildJob);$("clearMethodsBtn")?.addEventListener("click",clearMethods);$("calcM2Btn")?.addEventListener("click",calculateMethod2);$("calcM4Btn")?.addEventListener("click",calculateMethod4);$("calcM5Btn")?.addEventListener("click",calculateMethod5);$("testM2Btn")?.addEventListener("click",runMethod2Test);$("systemTestBtn")?.addEventListener("click",runSystemTest);$("saveJobBtn")?.addEventListener("click",saveJob);$("loadJobBtn")?.addEventListener("click",loadJob);$("newJobBtn")?.addEventListener("click",newJob);
$("methodSearch")?.addEventListener("input",e=>buildMethodCatalog(e.target.value));
["stackShape","diameter","width","depth","upstreamFt","downstreamFt"].forEach(id=>{$(id)?.addEventListener("input",calculateMethod1);$(id)?.addEventListener("change",calculateMethod1)});
["m2Cp","m2Pb","m2Ps","m2Md","m2Bws","m2Dp","m2Ts"].forEach(id=>$(id)?.addEventListener("input",calculateMethod2));
["m4Vm","m4WaterMl","m4SilicaG"].forEach(id=>$(id)?.addEventListener("input",calculateMethod4));
["m5Nozzle","m5Time","m5VmStd","m5Vel","m5Ts","m5P","m5Bws","m5Filter","m5Probe","m5Other","m5Blank"].forEach(id=>$(id)?.addEventListener("input",calculateMethod5));
buildMethodCatalog();
