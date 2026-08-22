const methods={
'1':{title:'Sample / Velocity Traverses',tests:'Determines whether the sampling location is suitable and establishes traverse-point locations for representative stack sampling and velocity measurements.',source:'EPA Method 1',url:'https://www.epa.gov/emc/method-1-samplevelocity-traverses',required:['Tape measure / laser distance meter','Stack / duct dimensions','Port location measurements','Traverse point worksheet / field sheet','S-type pitot tube for cyclonic-flow check','Manometer / pressure measurement system','Angle finder / protractor for flow angle','Pitot leak-check setup'],extras:['Probe / pitot extensions','Permanent marker / port labels','Flashlight / headlamp','Spare tubing and fittings']},
'2':{title:'Stack Gas Velocity & Volumetric Flow',tests:'Measures stack-gas velocity pressure and temperature to determine velocity and volumetric flow rate.',source:'EPA Method 2',url:'https://www.epa.gov/emc/method-2-velocity-s-type-pitot',required:['S-type pitot tube','Differential pressure manometer / electronic pressure device','Stack thermocouple / temperature sensor','Barometer','Pitot coefficient documentation','Pitot leak-check setup','Traverse point field sheet / data logger','Tape measure / stack dimensions'],extras:['Spare pitot tubing','Spare thermocouple','Pitot cleaning supplies','Probe extensions']},
'3A':{title:'O₂ & CO₂ — Instrumental',tests:'Measures oxygen and carbon dioxide concentrations in stationary-source emissions using instrumental analyzers.',source:'EPA Method 3A',url:'https://www.epa.gov/emc/method-3a-oxygen-and-carbon-dioxide-concentrations-instrumental',required:['Sample probe','Heated or conditioned sample line as applicable','Moisture removal / sample conditioning system as applicable','O₂ and/or CO₂ analyzer','Sample pump','Data acquisition / recorder','Zero gas','Calibration gases covering the required range','Gas regulators','Calibration gas delivery / system calibration assembly','Flow meters / rotameters as applicable'],extras:['Spare filters','Spare sample tubing and fittings','Backup regulator','Analyzer communication cables']},
'4':{title:'Moisture Content',tests:'Determines the moisture content of stack gas by extracting a known gas volume and measuring collected water.',source:'EPA Method 4',url:'https://www.epa.gov/emc/method-4-moisture-content-0',required:['Sample probe','Condenser / impinger train','Ice bath / cooling container','Impingers and connectors','Silica gel drying tube / impinger','Sample pump','Dry gas meter','Orifice / rate meter','Vacuum gauge','Thermometers / temperature sensors','Barometer','Graduated cylinder and/or balance for water determination','Leak-check setup'],extras:['Extra ice','Spare impingers','Extra silica gel','Spare glass connectors / clamps','Deionized water as applicable']},
'5':{title:'Particulate Matter — Stationary Sources',tests:'Determines particulate matter emissions from stationary sources using an isokinetic sampling train.',source:'EPA Method 5',url:'https://www.epa.gov/emc/emc-promulgated-test-methods',required:['Method 5 sampling console / meter box','Heated probe','S-type pitot tube','Stack thermocouple','Nozzles / nozzle set','Heated filter box','Method 5 filter media','Filter holder','Impingers / condenser train','Ice bath','Silica gel','Umbilical','Vacuum pump','Dry gas meter','Barometer','Balance / weighing supplies for recovery as applicable','Probe wash / recovery containers and reagents per test plan','Leak-check setup'],extras:['Spare filters','Spare nozzle and ferrules','Extra ice','Extra silica gel','Spare glassware / connectors','Probe brush and recovery tools','Extra acetone / recovery solvent when applicable']},
'6C':{title:'SO₂ — Instrumental',tests:'Measures sulfur dioxide concentration in stationary-source emissions using an instrumental analyzer procedure.',source:'EPA Method 6C',url:'https://www.epa.gov/emc/emc-promulgated-test-methods',required:['Sample probe','Heated sample line as applicable','Sample conditioning system as applicable','SO₂ analyzer','Sample pump','Data acquisition / recorder','Zero gas','SO₂ calibration gases','Gas regulators','Calibration gas delivery / system calibration assembly','Flow meters / rotameters as applicable'],extras:['Spare particulate filters','Spare sample tubing','Backup regulator','Analyzer communication cable']},
'7E':{title:'NOx — Instrumental',tests:'Measures nitrogen oxides concentration in stationary-source emissions using an instrumental analyzer procedure.',source:'EPA Method 7E',url:'https://www.epa.gov/emc/emc-promulgated-test-methods',required:['Sample probe','Heated sample line as applicable','Sample conditioning system as applicable','NOx analyzer','Sample pump','Data acquisition / recorder','Zero gas','NOx calibration gases','Gas regulators','Calibration gas delivery / system calibration assembly','NO₂-to-NO converter / converter verification setup when applicable','Flow meters / rotameters as applicable'],extras:['Spare filters','Spare tubing and fittings','Backup regulator','Converter efficiency supplies']},
'10':{title:'Carbon Monoxide — Instrumental',tests:'Measures carbon monoxide concentration in stationary-source emissions using an instrumental analyzer procedure.',source:'EPA Method 10',url:'https://www.epa.gov/emc/emc-promulgated-test-methods',required:['Sample probe','Heated sample line as applicable','Sample conditioning system as applicable','CO analyzer','Sample pump','Data acquisition / recorder','Zero gas','CO calibration gases','Gas regulators','Calibration gas delivery / system calibration assembly','Flow meters / rotameters as applicable'],extras:['Spare filters','Spare tubing and fittings','Backup regulator','Analyzer communication cable']},
'25A':{title:'Total Gaseous Organic Concentration — FID',tests:'Measures total gaseous organic concentration using a flame ionization analyzer, typically reported on the specified calibration-gas basis.',source:'EPA Method 25A',url:'https://www.epa.gov/emc/emc-promulgated-test-methods',required:['Heated sample probe / line as applicable','Flame ionization analyzer (FID)','Sample pump / analyzer sampling system','Data acquisition / recorder','Zero gas','Organic calibration gases on required basis','Fuel gas for FID','Combustion air / oxidant supply as required by analyzer','Gas regulators','Calibration gas delivery / system calibration assembly'],extras:['Spare heated-line fittings','Backup regulator','Spare filters if allowed by method/application','Extra fuel gas']},
'26A':{title:'Hydrogen Halides & Halogens — Isokinetic',tests:'Determines hydrogen halide and halogen emissions using isokinetic sampling and impinger collection.',source:'EPA Method 26A',url:'https://www.epa.gov/emc/emc-promulgated-test-methods',required:['Isokinetic sampling console / meter box','Heated probe and liner appropriate to method','S-type pitot tube','Stack thermocouple','Nozzles / nozzle set','Filter holder and specified filter media when required by method/application','Impingers / absorption train','Required absorbing solutions / reagents','Ice bath','Umbilical','Vacuum pump','Dry gas meter','Barometer','Sample recovery bottles / containers','Leak-check setup'],extras:['Spare impingers and connectors','Extra absorbing reagents','Extra ice','Spare nozzle hardware','Sample labels and chain-of-custody supplies']},
'29':{title:'Metals Emissions',tests:'Measures selected metal emissions from stationary sources using an isokinetic sampling train followed by laboratory analysis.',source:'EPA Method 29',url:'https://www.epa.gov/emc/emc-promulgated-test-methods',required:['Isokinetic sampling console / meter box','Borosilicate / quartz probe liner as applicable','S-type pitot tube','Stack thermocouple','Nozzles / nozzle set','Heated filter holder','Specified filter media','Impingers / condenser train','Required Method 29 reagents','Ice bath','Umbilical','Vacuum pump','Dry gas meter','Barometer','Acid-cleaned sample recovery containers','Probe / glassware recovery supplies','Leak-check setup'],extras:['Extra acid-cleaned bottles','Spare filters','Spare glassware and connectors','Extra ice','Sample labels / chain-of-custody supplies','Clean recovery gloves']},
'320':{title:'Vapor-Phase Organics & Inorganics — FTIR',tests:'Measures vapor-phase organic and inorganic compounds using Fourier transform infrared (FTIR) spectroscopy and a heated extractive sampling system.',source:'EPA Method 320',url:'https://www.epa.gov/emc/emc-promulgated-test-methods',required:['Heated sample probe','Heated sample line','FTIR spectrometer / gas cell','Sample pump','Temperature controllers','Data acquisition / FTIR computer','Nitrogen / zero gas as required','Calibration / analyte gases required by test plan','Gas regulators','Calibration gas introduction assembly','Flow measurement / control devices','Leak-check setup'],extras:['Liquid nitrogen if required by the FTIR detector','Spare heated-line fittings','Backup temperature controller / thermocouple','Extra calibration gas','Power conditioner / UPS','Spare communications cables']}
};

const $=id=>document.getElementById(id); const fmt=(v,d=1)=>Number.isFinite(v)?v.toLocaleString(undefined,{maximumFractionDigits:d}):'—';
const JOB_KEY='stf_active_job_v03'; const JOBS_KEY='stf_job_history_v10'; const PROFILES_KEY='stf_facility_profiles_v10'; const RUN_KEY='stf_runs_v03'; const ANALYZER_KEY='stf_analyzer_v04'; const M3A_KEY='stf_m3a_v05'; const M4_KEY='stf_m4_v05'; const EMISSIONS_KEY='stf_emissions_v06';
const defaultJob=()=>({id:Date.now(),project:'',client:'',facility:'',stack:'',tester:'',date:'',methods:[],check:{},qa:{},notes:'',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()});
const state={job:JSON.parse(localStorage.getItem(JOB_KEY)||'null')||defaultJob(),jobs:JSON.parse(localStorage.getItem(JOBS_KEY)||'[]'),profiles:JSON.parse(localStorage.getItem(PROFILES_KEY)||'[]'),points:[],runs:JSON.parse(localStorage.getItem(RUN_KEY)||'[]'),analyzer:JSON.parse(localStorage.getItem(ANALYZER_KEY)||'[]'),m3a:JSON.parse(localStorage.getItem(M3A_KEY)||'[]'),m4:JSON.parse(localStorage.getItem(M4_KEY)||'[]'),emissions:JSON.parse(localStorage.getItem(EMISSIONS_KEY)||'[]')};
const qaTemplates={
'1':['Verify measurement location against Method 1 / test plan','Confirm stack dimensions and port locations','Complete cyclonic-flow check when applicable','Document traverse-point layout'],
'2':['Pitot leak check complete','Pitot coefficient documentation available','Temperature measurement system verified','Pressure measurement system zeroed / checked'],
'3A':['Analyzer calibration completed','System calibration / bias check completed','Calibration gas certifications verified','Data acquisition recording correctly'],
'4':['Sampling train leak check complete','Dry gas meter / metering system verification current','Impinger / silica gel setup documented','Sample recovery / water determination complete'],
'5':['Pre-test leak check complete','Nozzle / pitot / meter box calibration records available','Filter identification and handling documented','Post-test leak check complete','Sample recovery containers labeled / secured'],
'6C':['Analyzer calibration completed','System calibration / bias check completed','Calibration gases verified','Data acquisition recording correctly'],
'7E':['Analyzer calibration completed','NO2 converter efficiency verified when applicable','System calibration / bias check completed','Calibration gases verified','Data acquisition recording correctly'],
'10':['Analyzer calibration completed','System calibration / bias check completed','Calibration gases verified','Data acquisition recording correctly'],
'25A':['FID calibration completed','Fuel / air supplies verified','System calibration check completed','Response / drift checks documented as applicable'],
'26A':['Train leak check complete','Reagents / absorbing solutions prepared and labeled','Filter configuration confirmed against method/test plan','Post-test leak check complete','Recovery containers / COC prepared'],
'29':['Train leak check complete','Acid-cleaned components / containers verified','Reagents prepared and labeled','Post-test leak check complete','Recovery / COC documentation complete'],
'320':['FTIR system leak check complete','Cell / line temperatures verified','Zero / background completed','Calibration / QA gas checks completed','Spectral data and run files saved']};
function saveJob(){state.job.updatedAt=new Date().toISOString();localStorage.setItem(JOB_KEY,JSON.stringify(state.job));const i=state.jobs.findIndex(j=>j.id===state.job.id);if(i>=0)state.jobs[i]=JSON.parse(JSON.stringify(state.job));else state.jobs.unshift(JSON.parse(JSON.stringify(state.job)));state.jobs.sort((a,b)=>String(b.updatedAt||'').localeCompare(String(a.updatedAt||'')));localStorage.setItem(JOBS_KEY,JSON.stringify(state.jobs));}
function syncJobInputs(){['Project','Client','Facility','Stack','Tester','Date'].forEach(k=>{const el=$('job'+k);if(el)el.value=state.job[k.toLowerCase()]||''});}
function pullJobInputs(){state.job.project=$('jobProject').value.trim();state.job.client=$('jobClient').value.trim();state.job.facility=$('jobFacility').value.trim();state.job.stack=$('jobStack').value.trim();state.job.tester=$('jobTester').value.trim();state.job.date=$('jobDate').value;saveJob();renderJobHub();renderBanners();}
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.screen===id));window.scrollTo(0,0);if(id==='home')renderJobHub();if(id==='methods')renderMethods();if(id==='m1')renderM1();if(id==='iso')renderIso();if(id==='recovery')renderRecovery();if(id==='closeout')renderCloseout();if(id==='m3a')renderM3A();if(id==='m4')renderM4();if(id==='emissions')renderEmissions();if(id==='analyzer')renderAnalyzer();if(id==='qa')renderQA();if(id==='checklist')renderChecklist();if(id==='runs')renderRuns();if(id==='equipment')renderEquipment();if(id==='gases')renderGasInventory();if(id==='analyzerSetup')renderAnalyzerSetup();if(id==='instrumentRuns')renderInstrumentRuns();if(id==='runSummary')renderRunSummary();if(id==='fieldReport')renderFieldReport();if(id==='backup')renderBackup();if(id==='history')renderHistory();renderBanners();}
document.querySelectorAll('[data-screen]').forEach(b=>b.onclick=()=>show(b.dataset.screen));document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));
$('saveJob').onclick=pullJobInputs;
function jobName(){return state.job.project||'New Stack Test Job'}
function renderBanners(){const methodsText=state.job.methods.length?state.job.methods.map(x=>'M'+x).join(', '):'No methods selected';['methodJobBanner','m1JobBanner','isoJobBanner','recoveryJobBanner','m2JobBanner','m3aJobBanner','m4JobBanner','emissionsJobBanner','qaJobBanner'].forEach(id=>{const e=$(id);if(e)e.innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'No client'}${state.job.facility?' • '+state.job.facility:''}${state.job.stack?' • '+state.job.stack:''}</div><div class="method-chips">${state.job.methods.map(x=>`<span>M${x}</span>`).join('')}</div>`});}
function combinedItems(){const req=new Map(),extra=new Map();state.job.methods.forEach(id=>{const m=methods[id];if(!m)return;m.required.forEach(name=>{if(!req.has(name))req.set(name,[]);req.get(name).push(id)});m.extras.forEach(name=>{if(!extra.has(name))extra.set(name,[]);extra.get(name).push(id)})});return{req,extra};}
function metrics(){const {req}=combinedItems();const loadTotal=req.size,loadDone=[...req.keys()].filter(n=>state.job.check['R|'+n]).length;let qaTotal=0,qaDone=0;state.job.methods.forEach(id=>(qaTemplates[id]||[]).forEach((_,i)=>{qaTotal++;if(state.job.qa[id+'|'+i])qaDone++}));return{loadTotal,loadDone,qaTotal,qaDone};}
function renderJobHub(){syncJobInputs();$('jobTitle').textContent=jobName();$('jobSubtitle').textContent=[state.job.client,state.job.facility,state.job.stack].filter(Boolean).join(' • ')||'Enter the job once. Every module below follows it.';const m=metrics();const methodsText=state.job.methods.length?state.job.methods.map(x=>'M'+x).join(', '):'None selected';const loadReady=m.loadTotal>0&&m.loadDone===m.loadTotal,qaReady=m.qaTotal>0&&m.qaDone===m.qaTotal,eqCheck=jobEquipmentCheck(state.job.date||new Date().toISOString().slice(0,10));$('jobStatus').innerHTML=`<div class="section-head"><div><strong>Job Readiness</strong><div class="hint">Methods: ${methodsText}</div></div><span class="badge ${loadReady&&qaReady?'':'subtle'}">${loadReady&&qaReady?'FIELD READY':'IN PROGRESS'}</span></div><div class="mini-results"><div><span>Methods</span><strong>${state.job.methods.length}</strong></div><div><span>Loadout</span><strong>${m.loadDone}/${m.loadTotal}</strong></div><div><span>QA</span><strong>${m.qaDone}/${m.qaTotal}</strong></div><div><span>Equipment</span><strong>${(state.job.equipmentIds||[]).length?((eqCheck.ready?'READY':'HOLD')):'—'}</strong></div></div>`;
const modules=[];modules.push(`<button class="tile" data-go="methods"><strong>Methods</strong><span>${state.job.methods.length?'Selected: '+methodsText:'Choose the test methods'}</span></button>`);if(state.job.methods.includes('1'))modules.push(`<button class="tile" data-go="m1"><strong>Method 1 Planner</strong><span>Site screen • traverse locations</span></button>`);if(state.job.methods.some(x=>['5','26A','29'].includes(x)))modules.push(`<button class="tile" data-go="iso"><strong>Isokinetic Run</strong><span>Points • leak checks • % isokinetic</span></button>`);if(state.job.methods.some(x=>['5','26A','29'].includes(x)))modules.push(`<button class="tile" data-go="recovery"><strong>Recovery & COC</strong><span>Containers • seals • chain of custody</span></button>`);if(state.job.methods.includes('2'))modules.push(`<button class="tile" data-go="m2"><strong>Method 2 Calculator</strong><span>Velocity • ACFM • SCFM • DSCFM</span></button>`);if(state.job.methods.includes('3A'))modules.push(`<button class="tile" data-go="m3a"><strong>Method 3A</strong><span>O₂ • CO₂ • derived dry MW</span></button>`);if(state.job.methods.includes('4'))modules.push(`<button class="tile" data-go="m4"><strong>Method 4</strong><span>Moisture • Bws • feed Method 2</span></button>`);if(state.job.methods.some(x=>['3A','6C','7E','10','25A'].includes(x))||state.job.methods.includes('2'))modules.push(`<button class="tile" data-go="emissions"><strong>Emissions Calculator</strong><span>ppm • DSCFM • lb/hr • tons/year</span></button>`);modules.push(`<button class="tile" data-go="checklist"><strong>Loadout</strong><span>${m.loadDone}/${m.loadTotal} core items loaded</span></button>`);modules.push(`<button class="tile" data-go="qa"><strong>QA & Field Notes</strong><span>${m.qaDone}/${m.qaTotal} checks complete</span></button>`);modules.push(`<button class="tile" data-go="closeout"><strong>Job Closeout</strong><span>READY / HOLD • outstanding items</span></button>`);modules.push(`<button class="tile" data-go="history"><strong>History & Profiles</strong><span>Repeat jobs • reusable facility setups</span></button>`);modules.push(`<button class="tile" data-go="runs"><strong>Saved Runs</strong><span>${state.runs.filter(r=>r.jobId===state.job.id).length} run(s) on this job</span></button>`);$('jobModules').innerHTML=modules.join('');$('jobModules').querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));}
function renderMethods(){const wrap=$('methodCards');wrap.innerHTML='';Object.entries(methods).forEach(([id,m])=>{const card=document.createElement('div');card.className='method-card '+(state.job.methods.includes(id)?'selected':'');card.innerHTML=`<div class="method-head"><div><span class="method-number">Method ${id}</span><h3>${m.title}</h3></div><label class="method-pick"><input type="checkbox" ${state.job.methods.includes(id)?'checked':''}><span>Add</span></label></div><p>${m.tests}</p><details><summary>Equipment & field setup</summary><div class="equipment-columns"><div><h4>Method apparatus / typical required gear</h4><ul>${m.required.map(x=>`<li>${x}</li>`).join('')}</ul></div><div><h4>Field spares & practical extras</h4><ul>${m.extras.map(x=>`<li>${x}</li>`).join('')}</ul></div></div><a class="source-link" href="${m.url}" target="_blank" rel="noopener">${m.source} reference ↗</a></details>`;card.querySelector('input').onchange=e=>toggleMethod(id,e.target.checked);wrap.appendChild(card)});updateMethodSummary();renderBanners();}
function toggleMethod(id,on){state.job.methods=on?[...new Set([...state.job.methods,id])]:state.job.methods.filter(x=>x!==id);state.job.check={};saveJob();renderMethods();renderJobHub();}
function updateMethodSummary(){$('selectedMethodSummary').innerHTML=`<div><strong>${state.job.methods.length} method${state.job.methods.length===1?'':'s'} selected</strong><div class="hint">${state.job.methods.length?state.job.methods.map(x=>'Method '+x).join(' • '):'Select the methods on this job.'}</div></div><span class="badge ${state.job.methods.length?'':'subtle'}">${state.job.methods.length?'JOB PACKAGE SET':'NO METHODS'}</span>`;}
$('clearMethods').onclick=()=>{state.job.methods=[];state.job.check={};state.job.qa={};saveJob();renderMethods();renderJobHub();};$('viewCombinedLoadout').onclick=()=>show('checklist');
function renderChecklist(){const lm=$('loadoutMethods');lm.innerHTML=state.job.methods.length?`<strong>${jobName()}</strong><div class="hint">Combined list follows the active job.</div><div class="method-chips">${state.job.methods.map(id=>`<span>M${id}</span>`).join('')}</div>`:`<strong>No methods selected.</strong>`;const wrap=$('checklistItems');wrap.innerHTML='';if(!state.job.methods.length){$('checkSummary').innerHTML='<div><strong>0 / 0</strong><div class="hint">Select methods first</div></div><span class="badge subtle">HOLD</span>';return}const {req,extra}=combinedItems();[['METHOD APPARATUS / TYPICAL REQUIRED GEAR',req,true],['FIELD SPARES & PRACTICAL EXTRAS',extra,false]].forEach(([title,map,required])=>{const sec=document.createElement('div');sec.className='check-group';sec.innerHTML=`<h3>${title}</h3>`;map.forEach((ids,name)=>{const key=(required?'R|':'E|')+name;const row=document.createElement('label');row.className='check-item';row.innerHTML=`<input type="checkbox" ${state.job.check[key]?'checked':''}><div class="meta"><strong>${name}</strong><span>${required?'Core / typical apparatus':'Recommended extra'} • ${ids.map(id=>'M'+id).join(', ')}</span></div>`;row.querySelector('input').onchange=e=>{state.job.check[key]=e.target.checked;saveJob();updateCheckSummary();renderJobHub()};sec.appendChild(row)});wrap.appendChild(sec)});updateCheckSummary();}
function updateCheckSummary(){const {req}=combinedItems();const total=req.size,done=[...req.keys()].filter(n=>state.job.check['R|'+n]).length;$('checkSummary').innerHTML=`<div><strong>${done} / ${total}</strong><div class="hint">core equipment loaded</div></div><span class="badge ${done===total&&total?'':'subtle'}">${done===total&&total?'READY':'HOLD'}</span>`;}
$('resetChecklist').onclick=()=>{state.job.check={};saveJob();renderChecklist();renderJobHub();};
function renderQA(){renderBanners();const el=$('qaMethods');el.innerHTML='';if(!state.job.methods.length){el.innerHTML='<div class="card empty">Select the job methods first.</div>';$('jobNotes').value=state.job.notes||'';return}state.job.methods.forEach(id=>{const m=methods[id],checks=qaTemplates[id]||[];const card=document.createElement('div');card.className='card';card.innerHTML=`<span class="method-number">Method ${id}</span><h3>${m.title}</h3><div class="check-group">${checks.map((q,i)=>`<label class="check-item"><input type="checkbox" data-key="${id}|${i}" ${state.job.qa[id+'|'+i]?'checked':''}><div class="meta"><strong>${q}</strong><span>Job QA / field completion prompt</span></div></label>`).join('')}</div>`;card.querySelectorAll('input[data-key]').forEach(cb=>cb.onchange=e=>{state.job.qa[e.target.dataset.key]=e.target.checked;saveJob();renderJobHub()});el.appendChild(card)});$('jobNotes').value=state.job.notes||'';}
$('saveNotes').onclick=()=>{state.job.notes=$('jobNotes').value;saveJob();$('saveNotes').textContent='Saved ✓';setTimeout(()=>$('saveNotes').textContent='Save Notes',900);renderJobHub();};

const analyzerChannels={
'3A':['O₂','CO₂'],
'6C':['SO₂'],
'7E':['NOx'],
'10':['CO'],
'25A':['Total Organic / FID']
};
function renderM3A(){renderBanners();const selected=state.job.methods.includes('3A');$('m3aGate').innerHTML=selected?'<strong>Method 3A is active on this job.</strong><div class="hint">Saved O₂/CO₂ values stay with the job and the derived dry MW can populate Method 2.</div>':'<strong>Method 3A is not selected on this job.</strong><div class="hint">You can still review the screen, but add Method 3A before saving field data.</div>';['m3aRunId','m3aBasis','m3aO2','m3aCO2','m3aCO'].forEach(id=>$(id).disabled=!selected);calcM3A();renderSavedM3A();}
function calcM3A(){const o2=num('m3aO2'),co2=num('m3aCO2'),coRaw=num('m3aCO'),co=Number.isFinite(coRaw)?coRaw:0,balance=100-o2-co2-co,md=Number.isFinite(o2)&&Number.isFinite(co2)&&balance>=0?(0.32*o2+0.44*co2+0.28*co+0.28*balance):NaN;$('m3aN2').value=Number.isFinite(balance)?balance.toFixed(2):'';$('m3aO2Out').textContent=fmt(o2,2);$('m3aCO2Out').textContent=fmt(co2,2);$('m3aMdOut').textContent=fmt(md,3);const box=$('m3aWarning');if(!Number.isFinite(md)||o2<0||co2<0||balance<0){box.className='warning-box';box.textContent='Enter valid O₂ and CO₂ values whose total (plus optional CO) does not exceed 100%.';}else{box.className='warning-box good';box.textContent='Composition is internally consistent. Derived dry MW is ready as a Method 2 aid; verify the applicable Method 3/3A requirements and test plan.';}return{o2,co2,co,balance,md};}
['m3aO2','m3aCO2','m3aCO'].forEach(id=>$(id).addEventListener('input',calcM3A));
$('saveM3A').onclick=()=>{if(!state.job.methods.includes('3A')){alert('Add Method 3A to the active job first.');return}const c=calcM3A();if(!Number.isFinite(c.md)){alert('Enter valid O₂ and CO₂ data.');return}const rec={id:Date.now(),jobId:state.job.id,runId:$('m3aRunId').value.trim()||'Average',basis:$('m3aBasis').value,...c,savedAt:new Date().toISOString()};state.m3a.unshift(rec);localStorage.setItem(M3A_KEY,JSON.stringify(state.m3a));$('md').value=c.md.toFixed(3);state.job.latestM3A={o2:c.o2,co2:c.co2,co:c.co,md:c.md,basis:rec.basis,runId:rec.runId};saveJob();calcM2();renderSavedM3A();renderJobHub();$('saveM3A').textContent='Saved & linked ✓';setTimeout(()=>$('saveM3A').textContent='Save 3A Data & Send Dry MW to Method 2',1000);};
$('clearM3A').onclick=()=>{['m3aRunId','m3aO2','m3aCO2'].forEach(id=>$(id).value='');$('m3aCO').value='0';$('m3aBasis').value='dry';calcM3A();};
function renderSavedM3A(){const rows=state.m3a.filter(r=>r.jobId===state.job.id),el=$('savedM3A');if(!rows.length){el.innerHTML='<div class="empty">No Method 3A data saved on this active job.</div>';return}el.innerHTML=rows.map(r=>`<div class="saved-card"><strong>${r.runId} • ${r.basis} basis</strong><div class="hint">O₂ ${fmt(r.o2,2)}% • CO₂ ${fmt(r.co2,2)}% • Dry MW ${fmt(r.md,3)}</div><div class="actions"><button class="ghost" onclick="loadM3A(${r.id})">Open</button><button class="ghost" onclick="deleteM3A(${r.id})">Delete</button></div></div>`).join('');}
window.loadM3A=id=>{const r=state.m3a.find(x=>x.id===id);if(!r)return;$('m3aRunId').value=r.runId;$('m3aBasis').value=r.basis;$('m3aO2').value=r.o2;$('m3aCO2').value=r.co2;$('m3aCO').value=r.co;calcM3A();show('m3a');};window.deleteM3A=id=>{state.m3a=state.m3a.filter(x=>x.id!==id);localStorage.setItem(M3A_KEY,JSON.stringify(state.m3a));renderSavedM3A();};
function renderM4(){renderBanners();const selected=state.job.methods.includes('4');$('m4Gate').innerHTML=selected?'<strong>Method 4 is active on this job.</strong><div class="hint">Saved moisture becomes the job Bws value and can populate Method 2 automatically.</div>':'<strong>Method 4 is not selected on this job.</strong><div class="hint">Add Method 4 before saving field data.</div>';['m4RunId','m4VmStd','m4ImpGain','m4SilicaGain','m4Blank','m4Y'].forEach(id=>$(id).disabled=!selected);calcM4();renderSavedM4();}
function calcM4(){const vm=num('m4VmStd'),imp=num('m4ImpGain'),sil=num('m4SilicaGain'),blankRaw=num('m4Blank'),blank=Number.isFinite(blankRaw)?blankRaw:0,y=num('m4Y'),water=Number.isFinite(imp)&&Number.isFinite(sil)?imp+sil-blank:NaN,vw=Number.isFinite(water)&&water>=0?(water/453.59237/18.01528)*385.3:NaN,dry=Number.isFinite(vm)&&Number.isFinite(y)&&y>0?vm*y:NaN,bws=Number.isFinite(vw)&&Number.isFinite(dry)&&vw+dry>0?vw/(vw+dry):NaN;$('m4WaterMass').textContent=fmt(water,2);$('m4WaterVol').textContent=fmt(vw,4);$('m4DryVol').textContent=fmt(dry,3);$('m4BwsOut').textContent=fmt(bws,5);$('m4PctOut').textContent=fmt(bws*100,2);const box=$('m4Warning');if(!Number.isFinite(bws)||water<0||!(dry>0)){box.className='warning-box';box.textContent='Enter valid collected-water gains, blank adjustment, dry standard gas volume, and meter correction factor.';}else{box.className='warning-box good';box.textContent='Moisture calculated. Save to link this Bws value to Method 2 for the active job.';}return{vm,imp,sil,blank,y,water,vw,dry,bws};}
['m4VmStd','m4ImpGain','m4SilicaGain','m4Blank','m4Y'].forEach(id=>$(id).addEventListener('input',calcM4));
$('saveM4').onclick=()=>{if(!state.job.methods.includes('4')){alert('Add Method 4 to the active job first.');return}const c=calcM4();if(!Number.isFinite(c.bws)){alert('Enter valid Method 4 data.');return}const rec={id:Date.now(),jobId:state.job.id,runId:$('m4RunId').value.trim()||'Run',...c,savedAt:new Date().toISOString()};state.m4.unshift(rec);localStorage.setItem(M4_KEY,JSON.stringify(state.m4));$('bws').value=c.bws.toFixed(5);state.job.latestM4={bws:c.bws,moisturePct:c.bws*100,runId:rec.runId};saveJob();calcM2();renderSavedM4();renderJobHub();$('saveM4').textContent='Saved & linked ✓';setTimeout(()=>$('saveM4').textContent='Save Method 4 & Send Bws to Method 2',1000);};
$('clearM4').onclick=()=>{['m4RunId','m4VmStd','m4ImpGain','m4SilicaGain'].forEach(id=>$(id).value='');$('m4Blank').value='0';$('m4Y').value='1';calcM4();};
function renderSavedM4(){const rows=state.m4.filter(r=>r.jobId===state.job.id),el=$('savedM4');if(!rows.length){el.innerHTML='<div class="empty">No Method 4 data saved on this active job.</div>';return}el.innerHTML=rows.map(r=>`<div class="saved-card"><strong>${r.runId}</strong><div class="hint">Bws ${fmt(r.bws,5)} • Moisture ${fmt(r.bws*100,2)}% • Water ${fmt(r.water,2)} g</div><div class="actions"><button class="ghost" onclick="loadM4(${r.id})">Open</button><button class="ghost" onclick="deleteM4(${r.id})">Delete</button></div></div>`).join('');}
window.loadM4=id=>{const r=state.m4.find(x=>x.id===id);if(!r)return;$('m4RunId').value=r.runId;$('m4VmStd').value=r.vm;$('m4ImpGain').value=r.imp;$('m4SilicaGain').value=r.sil;$('m4Blank').value=r.blank;$('m4Y').value=r.y;calcM4();show('m4');};window.deleteM4=id=>{state.m4=state.m4.filter(x=>x.id!==id);localStorage.setItem(M4_KEY,JSON.stringify(state.m4));renderSavedM4();};

const pollutantMW={NOx:46.01,NO:30.01,SO2:64.066,CO:28.01,CO2:44.01,HCl:36.46,NH3:17.031,VOC:44.097,CH4:16.043};
function latestJobRun(){return state.runs.filter(r=>r.jobId===state.job.id).sort((a,b)=>b.id-a.id)[0]||null;}
function latestJobM3A(){return state.m3a.filter(r=>r.jobId===state.job.id).sort((a,b)=>b.id-a.id)[0]||state.job.latestM3A||null;}
function latestJobM4(){return state.m4.filter(r=>r.jobId===state.job.id).sort((a,b)=>b.id-a.id)[0]||state.job.latestM4||null;}
function pullEmissionsJob(){const r=latestJobRun(),g=latestJobM3A(),m=latestJobM4();if(r&&r.results&&r.results.dscfm){const q=parseFloat(String(r.results.dscfm).replace(/,/g,''));if(Number.isFinite(q))$('emFlow').value=q;}if(g&&Number.isFinite(g.o2))$('emO2').value=g.o2;if(m&&Number.isFinite(m.bws))$('emBws').value=m.bws;calcEmissions();}
function renderEmissions(){renderBanners();const p=$('emPollutant').value;if(p!=='custom'&&pollutantMW[p])$('emMW').value=pollutantMW[p];if(!$('emFlow').value&&!$('emBws').value&&!$('emO2').value)pullEmissionsJob();calcEmissions();renderSavedEmissions();}
function calcEmissions(){const c=num('emConc'),mw=num('emMW'),q=num('emFlow'),bws=num('emBws'),hours=num('emHours'),o2=num('emO2'),ref=num('emRefO2'),basis=$('emBasis').value;let dry=NaN,corr=NaN,lbhr=NaN;if(Number.isFinite(c)){if(basis==='dry')dry=c;else if(Number.isFinite(bws)&&bws>=0&&bws<1)dry=c/(1-bws);}if(Number.isFinite(dry)&&Number.isFinite(o2)&&Number.isFinite(ref)&&o2<20.9&&ref<20.9)corr=dry*(20.9-ref)/(20.9-o2);if(Number.isFinite(dry)&&Number.isFinite(mw)&&mw>0&&Number.isFinite(q)&&q>=0)lbhr=dry*mw*q*60/(385.3*1e6);$('emDryConcOut').textContent=fmt(dry,3);$('emO2CorrOut').textContent=fmt(corr,3);$('emLbHrOut').textContent=fmt(lbhr,4);$('emLbDayOut').textContent=fmt(lbhr*24,3);$('emTpdOut').textContent=fmt(lbhr*24/2000,4);$('emTpyOut').textContent=fmt(lbhr*hours/2000,3);const w=[];if(!Number.isFinite(c))w.push('Enter pollutant concentration.');if(!(mw>0))w.push('Enter molecular weight.');if(!(q>=0))w.push('Enter DSCFM or pull the latest Method 2 run.');if(basis==='wet'&&!(bws>=0&&bws<1))w.push('Wet concentration requires Bws to convert to dry basis.');if(Number.isFinite(ref)&&!Number.isFinite(o2))w.push('Reference O₂ was entered, but measured dry O₂ is missing.');const box=$('emWarning');if(w.length){box.className='warning-box';box.textContent=w.join(' ')}else{box.className='warning-box good';box.textContent='Mass rate calculated from dry concentration and DSCFM. Apply oxygen correction only when the applicable rule, permit, or test plan requires it.';}}
$('emPollutant').onchange=()=>{const p=$('emPollutant').value;if(p!=='custom'&&pollutantMW[p])$('emMW').value=pollutantMW[p];calcEmissions();};['emMW','emConc','emBasis','emFlow','emBws','emHours','emO2','emRefO2'].forEach(id=>$(id).oninput=calcEmissions);$('pullEmissionsJob').onclick=pullEmissionsJob;
$('clearEmissions').onclick=()=>{['emRunId','emConc','emFlow','emBws','emO2','emRefO2'].forEach(id=>$(id).value='');$('emHours').value=8760;$('emBasis').value='dry';calcEmissions();};
$('saveEmissions').onclick=()=>{const dry=parseFloat(String($('emDryConcOut').textContent).replace(/,/g,'')),lbhr=parseFloat(String($('emLbHrOut').textContent).replace(/,/g,''));if(!Number.isFinite(dry)||!Number.isFinite(lbhr)){alert('Complete the concentration and flow inputs first.');return}const rec={id:Date.now(),jobId:state.job.id,runId:$('emRunId').value||'Run / Average',pollutant:$('emPollutant').value,mw:num('emMW'),inputConcentration:num('emConc'),basis:$('emBasis').value,bws:num('emBws'),dscfm:num('emFlow'),o2:num('emO2'),refO2:num('emRefO2'),dryConcentration:dry,o2Corrected:parseFloat(String($('emO2CorrOut').textContent).replace(/,/g,'')),lbhr,tonsYear:parseFloat(String($('emTpyOut').textContent).replace(/,/g,'')),hours:num('emHours'),savedAt:new Date().toISOString()};state.emissions.unshift(rec);localStorage.setItem(EMISSIONS_KEY,JSON.stringify(state.emissions));$('saveEmissions').textContent='Saved ✓';setTimeout(()=>$('saveEmissions').textContent='Save Emissions Result to Job',900);renderSavedEmissions();};
function renderSavedEmissions(){const rows=state.emissions.filter(r=>r.jobId===state.job.id),el=$('savedEmissions');if(!rows.length){el.innerHTML='<div class="empty">No emissions results saved on this active job.</div>';return}el.innerHTML=rows.map(r=>`<div class="saved-card"><strong>${r.runId} • ${r.pollutant}</strong><div class="hint">${fmt(r.dryConcentration,3)} ppmvd • ${fmt(r.dscfm,0)} dscfm</div><div class="hint">${fmt(r.lbhr,4)} lb/hr • ${fmt(r.tonsYear,3)} tons/year</div><div class="actions"><button class="ghost" onclick="deleteEmissions(${r.id})">Delete</button></div></div>`).join('');}
window.deleteEmissions=id=>{state.emissions=state.emissions.filter(r=>r.id!==id);localStorage.setItem(EMISSIONS_KEY,JSON.stringify(state.emissions));renderSavedEmissions();};

function selectedAnalyzerChannels(){const out=[];state.job.methods.forEach(id=>(analyzerChannels[id]||[]).forEach(name=>out.push({method:id,name})));return out;}
function renderAnalyzer(){renderBanners();const channels=selectedAnalyzerChannels();const gate=$('analyzerMethodGate'),sel=$('anPollutant');if(!channels.length){gate.innerHTML='<strong>No instrumental analyzer methods selected.</strong><div class="hint">Add Method 3A, 6C, 7E, 10, or 25A to this job.</div>';sel.innerHTML='<option>No analyzer method selected</option>';document.querySelectorAll('#analyzer input,#analyzer select').forEach(x=>{if(x.id!=='anPollutant')x.disabled=true});$('savedAnalyzer').innerHTML='<div class="empty">No analyzer QA for this job.</div>';return;}document.querySelectorAll('#analyzer input,#analyzer select').forEach(x=>x.disabled=false);gate.innerHTML=`<strong>${channels.length} analyzer channel${channels.length===1?'':'s'} available</strong><div class="method-chips">${channels.map(c=>`<span>M${c.method} ${c.name}</span>`).join('')}</div>`;const cur=sel.value;sel.innerHTML=channels.map(c=>`<option value="${c.method}|${c.name}">M${c.method} — ${c.name}</option>`).join('');if([...sel.options].some(o=>o.value===cur))sel.value=cur;calcAnalyzer();renderSavedAnalyzer();}
function num(id){const v=parseFloat($(id).value);return Number.isFinite(v)?v:NaN;}
function pctErr(response,target,span){return Number.isFinite(response)&&Number.isFinite(target)&&span>0?(response-target)/span*100:NaN;}
function calcAnalyzer(){const span=num('anSpan'),cert=num('anHighCert'),preZ=num('anPreZero'),preH=num('anPreHigh'),postZ=num('anPostZero'),postH=num('anPostHigh');const preZE=pctErr(preZ,0,span),preHE=pctErr(preH,cert,span),postZE=pctErr(postZ,0,span),postHE=pctErr(postH,cert,span),zDr=Number.isFinite(postZE)&&Number.isFinite(preZE)?postZE-preZE:NaN,hDr=Number.isFinite(postHE)&&Number.isFinite(preHE)?postHE-preHE:NaN;$('anPreZeroErr').textContent=fmt(preZE,2);$('anPreHighErr').textContent=fmt(preHE,2);$('anPostZeroErr').textContent=fmt(postZE,2);$('anPostHighErr').textContent=fmt(postHE,2);$('anZeroDrift').textContent=fmt(zDr,2);$('anHighDrift').textContent=fmt(hDr,2);$('anPreStatus').textContent=Number.isFinite(preZE)&&Number.isFinite(preHE)?'CALCULATED':'—';const complete=[span,cert,preZ,preH,postZ,postH].every(Number.isFinite)&&span>0;const box=$('analyzerWarning');box.className=complete?'warning-box good':'warning-box';box.textContent=complete?'Error and drift calculated. Verify the applicable acceptance criteria before marking QA complete.':'Enter the certified gas value, analyzer span, and responses. This screen calculates error and drift only; acceptance limits must be verified against the applicable method, subpart, and approved test plan.';}
['anSpan','anHighCert','anPreZero','anPreHigh','anPostZero','anPostHigh'].forEach(id=>$(id).addEventListener('input',calcAnalyzer));
$('clearAnalyzer').onclick=()=>{['anAnalyzerId','anSpan','anZeroId','anHighId','anHighCert','anGasExp','anPreZero','anPreHigh','anPostZero','anPostHigh'].forEach(id=>$(id).value='');calcAnalyzer();};
$('saveAnalyzer').onclick=()=>{const parts=$('anPollutant').value.split('|');if(parts.length<2){alert('Select an analyzer method first.');return}const span=num('anSpan'),cert=num('anHighCert'),preZ=num('anPreZero'),preH=num('anPreHigh'),postZ=num('anPostZero'),postH=num('anPostHigh');if(!(span>0)||!Number.isFinite(cert)){alert('Enter a valid analyzer span and certified high-gas value.');return}const rec={id:Date.now(),jobId:state.job.id,method:parts[0],pollutant:parts.slice(1).join('|'),analyzerId:$('anAnalyzerId').value.trim(),units:$('anUnits').value,span,zeroId:$('anZeroId').value.trim(),highId:$('anHighId').value.trim(),highCert:cert,gasExp:$('anGasExp').value,preZero:preZ,preHigh:preH,postZero:postZ,postHigh:postH,preZeroErr:pctErr(preZ,0,span),preHighErr:pctErr(preH,cert,span),postZeroErr:pctErr(postZ,0,span),postHighErr:pctErr(postH,cert,span),savedAt:new Date().toISOString()};rec.zeroDrift=Number.isFinite(rec.postZeroErr)&&Number.isFinite(rec.preZeroErr)?rec.postZeroErr-rec.preZeroErr:NaN;rec.highDrift=Number.isFinite(rec.postHighErr)&&Number.isFinite(rec.preHighErr)?rec.postHighErr-rec.preHighErr:NaN;state.analyzer.unshift(rec);localStorage.setItem(ANALYZER_KEY,JSON.stringify(state.analyzer));$('saveAnalyzer').textContent='Saved ✓';setTimeout(()=>$('saveAnalyzer').textContent='Save Analyzer QA to Job',900);renderSavedAnalyzer();};
function renderSavedAnalyzer(){const el=$('savedAnalyzer'),rows=state.analyzer.filter(r=>r.jobId===state.job.id);if(!rows.length){el.innerHTML='<div class="empty">No analyzer QA saved on this active job.</div>';return}el.innerHTML=rows.map(r=>`<div class="saved-card"><strong>M${r.method} • ${r.pollutant}${r.analyzerId?' • '+r.analyzerId:''}</strong><div class="hint">High gas ${fmt(r.highCert,3)} ${r.units} • span ${fmt(r.span,3)} ${r.units}</div><div class="hint">Pre error Z/H: ${fmt(r.preZeroErr,2)}% / ${fmt(r.preHighErr,2)}% • Drift Z/H: ${fmt(r.zeroDrift,2)}% / ${fmt(r.highDrift,2)}%</div><div class="actions"><button class="ghost" onclick="loadAnalyzer(${r.id})">Open</button><button class="ghost" onclick="deleteAnalyzer(${r.id})">Delete</button></div></div>`).join('');}
window.loadAnalyzer=id=>{const r=state.analyzer.find(x=>x.id===id);if(!r)return;show('analyzer');const val=r.method+'|'+r.pollutant;if([...$('anPollutant').options].some(o=>o.value===val))$('anPollutant').value=val;$('anAnalyzerId').value=r.analyzerId||'';$('anUnits').value=r.units||'ppm';$('anSpan').value=r.span??'';$('anZeroId').value=r.zeroId||'';$('anHighId').value=r.highId||'';$('anHighCert').value=r.highCert??'';$('anGasExp').value=r.gasExp||'';$('anPreZero').value=Number.isFinite(r.preZero)?r.preZero:'';$('anPreHigh').value=Number.isFinite(r.preHigh)?r.preHigh:'';$('anPostZero').value=Number.isFinite(r.postZero)?r.postZero:'';$('anPostHigh').value=Number.isFinite(r.postHigh)?r.postHigh:'';calcAnalyzer();};
window.deleteAnalyzer=id=>{state.analyzer=state.analyzer.filter(x=>x.id!==id);localStorage.setItem(ANALYZER_KEY,JSON.stringify(state.analyzer));renderSavedAnalyzer();};

for(let i=1;i<=24;i++){const o=document.createElement('option');o.value=i;o.textContent=i;$('pointCount').appendChild(o)}$('pointCount').value=12;
function renderPoints(){const n=+$('pointCount').value;$('points').innerHTML='';for(let i=0;i<n;i++){const p=state.points[i]||{};const row=document.createElement('div');row.className='point-row';row.innerHTML=`<div class="point-num">${i+1}</div><input class="dp" type="number" inputmode="decimal" step="0.001" placeholder="Δp in. H₂O" value="${p.dp??''}"><input class="temp" type="number" inputmode="decimal" step="0.1" placeholder="Temp °F" value="${p.temp??''}"><div class="point-vel">— ft/s</div>`;const [dp,temp]=row.querySelectorAll('input');dp.oninput=temp.oninput=()=>{state.points[i]={dp:parseFloat(dp.value),temp:parseFloat(temp.value)};calcM2()};$('points').appendChild(row)}calcM2();}
function vals(){return{shape:$('shape').value,cp:+$('cp').value,diameter:+$('diameter').value,width:+$('width').value,length:+$('length').value,baro:+$('baro').value,staticP:+$('staticP').value,md:+$('md').value,bws:+$('bws').value,n:+$('pointCount').value};}
function calcM2(){const v=vals(),area=v.shape==='Circular'?Math.PI*v.diameter*v.diameter/4:v.width*v.length,ps=v.baro+(v.staticP/13.6),ms=v.md*(1-v.bws)+18*v.bws;$('areaOut').textContent=fmt(area,3);$('psOut').textContent=fmt(ps,3);$('msOut').textContent=fmt(ms,2);let roots=[],temps=[],valid=0;document.querySelectorAll('#points .point-row').forEach((r,i)=>{const p=state.points[i]||{};let vel=NaN;if(Number.isFinite(p.dp)&&p.dp>=0&&Number.isFinite(p.temp)){const root=Math.sqrt(p.dp),tr=p.temp+460;roots.push(root);temps.push(p.temp);valid++;if(ps>0&&ms>0)vel=85.49*v.cp*root*Math.sqrt(tr/(ps*ms));}r.querySelector('.point-vel').textContent=Number.isFinite(vel)?`${fmt(vel,1)} ft/s`:'— ft/s';});$('pointStatus').textContent=`${valid} / ${v.n}`;let vel=NaN,acfm=NaN,scfm=NaN,dscfm=NaN;if(valid===v.n&&area>0&&ps>0&&ms>0){const avgRoot=roots.reduce((a,b)=>a+b,0)/roots.length,avgTemp=temps.reduce((a,b)=>a+b,0)/temps.length,tr=avgTemp+460;vel=85.49*v.cp*avgRoot*Math.sqrt(tr/(ps*ms));acfm=vel*area*60;scfm=acfm*(ps/29.92)*(528/tr);dscfm=scfm*(1-v.bws);}$('velOut').textContent=fmt(vel,1);$('acfmOut').textContent=fmt(acfm,0);$('scfmOut').textContent=fmt(scfm,0);$('dscfmOut').textContent=fmt(dscfm,0);$('scfhOut').textContent=fmt(scfm*60,0);$('dscfhOut').textContent=fmt(dscfm*60,0);let w=[];if(!(area>0))w.push('Enter valid stack dimensions.');if(!(v.bws>=0&&v.bws<1))w.push('Moisture Bws must be from 0 to less than 1.');if(valid!==v.n)w.push(`Enter all ${v.n} traverse points.`);const box=$('m2Warnings');if(w.length){box.className='warning-box';box.textContent=w.join(' ')}else{box.className='warning-box good';box.textContent='Inputs complete — ready for independent review.'}}
['cp','diameter','width','length','baro','staticP','md','bws'].forEach(id=>$(id).addEventListener('input',calcM2));$('shape').onchange=()=>{const rect=$('shape').value==='Rectangular';$('diameterWrap').classList.toggle('hidden',rect);$('widthWrap').classList.toggle('hidden',!rect);$('lengthWrap').classList.toggle('hidden',!rect);calcM2();};$('pointCount').onchange=renderPoints;
$('clearM2').onclick=()=>{['diameter','width','length','runId'].forEach(id=>$(id).value='');state.points=[];renderPoints();};
$('saveRun').onclick=()=>{if(!state.job.methods.includes('2')){alert('Add Method 2 to the active job first.');return}const r={id:Date.now(),jobId:state.job.id,jobProject:state.job.project,client:state.job.client,facility:state.job.facility,stack:state.job.stack,tester:state.job.tester,runId:$('runId').value||'Run',savedAt:new Date().toISOString(),inputs:vals(),points:state.points.slice(0,+$('pointCount').value),results:{velocity:$('velOut').textContent,acfm:$('acfmOut').textContent,scfm:$('scfmOut').textContent,dscfm:$('dscfmOut').textContent,dscfh:$('dscfhOut').textContent}};state.runs.unshift(r);localStorage.setItem(RUN_KEY,JSON.stringify(state.runs));$('saveRun').textContent='Saved ✓';setTimeout(()=>$('saveRun').textContent='Save Run to Active Job',900);renderJobHub();};
function renderRuns(){const el=$('savedRuns'),runs=state.runs.filter(r=>r.jobId===state.job.id);if(!runs.length){el.innerHTML='<div class="card empty">No Method 2 runs saved on this active job.</div>';return}el.innerHTML=runs.map(r=>`<div class="saved-card"><strong>${r.runId}</strong><div class="hint">${r.jobProject||'Untitled'}${r.stack?' • '+r.stack:''}</div><div class="hint">DSCFM: ${r.results.dscfm} • ${new Date(r.savedAt).toLocaleString()}</div><div class="actions"><button class="ghost" onclick="loadRun(${r.id})">Open</button><button class="ghost" onclick="deleteRun(${r.id})">Delete</button></div></div>`).join('');}
window.loadRun=id=>{const r=state.runs.find(x=>x.id===id);if(!r)return;$('runId').value=r.runId||'';Object.entries(r.inputs||{}).forEach(([k,v])=>{if($(k))$(k).value=v});state.points=r.points||[];$('shape').onchange();renderPoints();show('m2');};window.deleteRun=id=>{state.runs=state.runs.filter(x=>x.id!==id);localStorage.setItem(RUN_KEY,JSON.stringify(state.runs));renderRuns();renderJobHub();};
window.addEventListener('online',()=>{$('offlineBadge').textContent='Online'});window.addEventListener('offline',()=>{$('offlineBadge').textContent='Offline Ready'});if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});


// ---- v0.7 Method 1 + Isokinetic Run Control ----
const ISO_KEY='stf_iso_v07';
state.isoRuns=JSON.parse(localStorage.getItem(ISO_KEY)||'[]');
state.isoPoints=[];

function renderM1(){
  $('m1JobBanner').innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'No client'}${state.job.facility?' • '+state.job.facility:''}${state.job.stack?' • '+state.job.stack:''}</div>`;
  const active=state.job.methods.includes('1');
  $('m1JobBanner').classList.toggle('warn',!active);
  calcM1();
}
const circularTable={
  8:[6.7,25.0,75.0,93.3],
  12:[4.4,14.6,29.6,70.4,85.4,95.6],
  16:[3.2,10.5,19.4,32.3,67.7,80.6,89.5,96.8],
  20:[2.6,8.2,14.6,22.6,34.2,65.8,77.4,85.4,91.8,97.4],
  24:[2.1,6.7,11.8,17.7,25.0,35.6,64.4,75.0,82.3,88.2,93.3,97.9]
};
const rectMatrix={9:[3,3],12:[4,3],16:[4,4],20:[5,4],25:[5,5],30:[6,5],36:[6,6],42:[7,6],49:[7,7]};
function m1Data(){
  const shape=$('m1Shape').value,d=+$('m1Diameter').value,w=+$('m1Width').value,h=+$('m1Height').value;
  const de=shape==='Circular'?d:(w>0&&h>0?2*w*h/(w+h):NaN);
  const down=+$('m1Down').value,up=+$('m1Up').value,n=+$('m1Points').value;
  return {shape,d,w,h,de,down,up,n,type:$('m1Type').value};
}
function calcM1(){
  const v=m1Data(),downD=v.de>0?v.down/v.de:NaN,upD=v.de>0?v.up/v.de:NaN;
  $('m1DeOut').textContent=fmt(v.de,3); $('m1DownD').textContent=fmt(downD,2); $('m1UpD').textContent=fmt(upD,2);
  let site='—',msg=[];
  if(v.de>0&&Number.isFinite(downD)&&Number.isFinite(upD)){
    if(downD>=8&&upD>=2) site='PREFERRED';
    else if(downD>=2&&upD>=0.5) site='ALTERNATE';
    else site='REVIEW';
    if(v.de<1) msg.push('Method 1 simplified procedure is not applicable below 12 in. diameter/equivalent diameter.');
    if(site==='PREFERRED') msg.push('Meets the 8D downstream / 2D upstream preferred site screen.');
    else if(site==='ALTERNATE') msg.push('Meets the 2D downstream / 0.5D upstream alternative-location screen; determine traverse count from the applicable Method 1 figure and verify cyclonic-flow requirements.');
    else msg.push('Location is inside the simplified-procedure minimum disturbance distances; alternative methodology/review may be required.');
  } else msg.push('Enter valid stack dimensions and both disturbance distances.');
  $('m1SiteOut').textContent=site;
  const box=$('m1Warning'); box.className=site==='PREFERRED'?'warning-box good':'warning-box'; box.textContent=msg.join(' ');
  const layout=$('m1Layout');
  if(!(v.de>0)){layout.innerHTML='<div class="empty">Enter stack dimensions to build the traverse layout.</div>';return;}
  if(v.shape==='Circular'){
    const arr=circularTable[v.n];
    if(!arr){layout.innerHTML='<div class="empty">Choose 8, 12, 16, 20, or 24 total circular traverse points.</div>';return;}
    layout.innerHTML=`<div class="saved-card"><strong>${v.n} total points • ${arr.length} on each of two perpendicular diameters</strong><div class="hint">Insertion distances from inside wall:</div>${arr.map((pct,i)=>`<div class="check-row"><span>Point ${i+1}</span><strong>${pct.toFixed(1)}% • ${(pct/100*v.de*12).toFixed(2)} in.</strong></div>`).join('')}<div class="hint">Repeat these positions on the perpendicular diameter. Check wall-clearance/nozzle adjustment requirements before sampling.</div></div>`;
  } else {
    let matrix=rectMatrix[v.n];
    if(!matrix){layout.innerHTML='<div class="empty">Method 1 Table 1-1 uses 9, 12, 16, 20, 25, 30, 36, 42, or 49 points for standard rectangular layouts. Select a compatible count in the approved plan.</div>';return;}
    const [cols,rows]=matrix,dx=v.w/cols,dy=v.h/rows;
    const xs=Array.from({length:cols},(_,i)=>(i+.5)*dx),ys=Array.from({length:rows},(_,i)=>(i+.5)*dy);
    layout.innerHTML=`<div class="saved-card"><strong>${cols} × ${rows} equal-area grid (${v.n} points)</strong><div class="hint">Centroid distances from the inside walls:</div><div class="hint">Across width: ${xs.map(x=>(x*12).toFixed(2)+' in').join(' • ')}</div><div class="hint">Across height: ${ys.map(y=>(y*12).toFixed(2)+' in').join(' • ')}</div></div>`;
  }
}
['m1Diameter','m1Width','m1Height','m1Down','m1Up','m1Points','m1Type'].forEach(id=>$(id).addEventListener('input',calcM1));
$('m1Shape').onchange=()=>{const r=$('m1Shape').value==='Rectangular';$('m1Diameter').parentElement.classList.toggle('hidden',r);$('m1WidthWrap').classList.toggle('hidden',!r);$('m1HeightWrap').classList.toggle('hidden',!r);calcM1();};
$('clearM1').onclick=()=>{['m1Diameter','m1Width','m1Height','m1Down','m1Up'].forEach(id=>$(id).value='');calcM1();};
$('saveM1').onclick=()=>{if(!state.job.methods.includes('1')){alert('Add Method 1 to the active job first.');return}state.job.latestM1={...m1Data(),savedAt:new Date().toISOString()};saveJob();$('saveM1').textContent='Saved ✓';setTimeout(()=>$('saveM1').textContent='Save Traverse Plan to Job',900);renderJobHub();};

function isoMethods(){return state.job.methods.filter(m=>['5','26A','29'].includes(m));}
function renderIso(){
  $('isoJobBanner').innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'No client'}${state.job.facility?' • '+state.job.facility:''}${state.job.stack?' • '+state.job.stack:''}</div>`;
  const opts=isoMethods(); $('isoMethod').innerHTML=opts.map(m=>`<option value="${m}">Method ${m} — ${methods[m].title}</option>`).join('');
  $('isoGate').innerHTML=opts.length?`<strong>Active isokinetic methods:</strong> ${opts.map(m=>'M'+m).join(', ')}`:'<strong>No supported isokinetic method selected.</strong><div class="hint">Add Method 5, 26A, or 29 to the active job.</div>';
  if(!state.isoPoints.length){for(let i=0;i<4;i++)state.isoPoints.push({});}
  renderIsoPoints(); renderSavedIso(); calcIso();
}
function renderIsoPoints(){
  $('isoPoints').innerHTML=''; state.isoPoints.forEach((p,i)=>{const row=document.createElement('div');row.className='point-row iso-point';row.innerHTML=`<div class="point-num">${i+1}</div><input class="ipt" type="number" inputmode="decimal" step="0.1" placeholder="min" value="${p.min??''}"><input class="idp" type="number" inputmode="decimal" step="0.001" placeholder="Δp" value="${p.dp??''}"><input class="idh" type="number" inputmode="decimal" step="0.01" placeholder="ΔH" value="${p.dh??''}"><input class="ist" type="number" inputmode="decimal" step="0.1" placeholder="Ts °F" value="${p.ts??''}"><button class="ghost iso-del" aria-label="Remove point">×</button>`;
    const q=sel=>row.querySelector(sel); ['.ipt','.idp','.idh','.ist'].forEach((sel,j)=>q(sel).oninput=()=>{const keys=['min','dp','dh','ts'];state.isoPoints[i][keys[j]]=parseFloat(q(sel).value);calcIso();});
    q('.iso-del').onclick=()=>{state.isoPoints.splice(i,1);renderIsoPoints();calcIso();}; $('isoPoints').appendChild(row);
  });
}
$('addIsoPoint').onclick=()=>{state.isoPoints.push({});renderIsoPoints();calcIso();};
function parseDisplayNumber(x){return parseFloat(String(x||'').replace(/,/g,''));}
function pullIsoJob(){
  const runs=state.runs.filter(r=>r.jobId===state.job.id); const r=runs[0];
  if(r){const vs=parseDisplayNumber(r.results.velocity); if(Number.isFinite(vs))$('isoVs').value=vs; const ps=(+r.inputs.baro)+(+r.inputs.staticP/13.6); if(Number.isFinite(ps))$('isoPs').value=ps.toFixed(3); const temps=(r.points||[]).map(p=>+p.temp).filter(Number.isFinite); if(temps.length)$('isoTs').value=(temps.reduce((a,b)=>a+b,0)/temps.length).toFixed(1);}
  if(state.job.latestM4&&Number.isFinite(state.job.latestM4.bws))$('isoBws').value=state.job.latestM4.bws.toFixed(5); calcIso();
}
$('pullIsoJob').onclick=pullIsoJob;
function calcIso(){
  const d=+$('isoNozzle').value,theta=+$('isoMinutes').value,vm=+$('isoVm').value,vs=+$('isoVs').value,tsF=+$('isoTs').value,ps=+$('isoPs').value,bws=+$('isoBws').value;
  const an=d>0?Math.PI*Math.pow(d/12,2)/4:NaN,ts=Number.isFinite(tsF)?tsF+460:NaN;
  let I=NaN; if(an>0&&theta>0&&vm>0&&vs>0&&ts>0&&ps>0&&bws>=0&&bws<1) I=0.0945*ts*vm/(ps*vs*an*theta*(1-bws));
  $('isoPctOut').textContent=fmt(I,1); const pt=state.isoPoints.reduce((a,p)=>a+(Number.isFinite(p.min)?p.min:0),0);$('isoPointTimeOut').textContent=fmt(pt,1);$('isoPointCountOut').textContent=state.isoPoints.length;
  let status='—'; if(Number.isFinite(I)) status=(I>=90&&I<=110)?'TARGET RANGE':'REVIEW'; $('isoRunStatus').textContent=status;
  const avgRate=theta>0&&vm>0?vm/theta:NaN,limit=Number.isFinite(avgRate)?Math.min(.020,.04*avgRate):.020,pre=+$('isoPreLeak').value,post=+$('isoPostLeak').value,maxVac=+$('isoMaxVac').value,postVac=+$('isoPostVac').value;
  const leakBox=$('isoLeakStatus'); let leakMsg=`Method 5 leak-rate screen: ≤ ${limit.toFixed(3)} cfm (${Number.isFinite(avgRate)?'lesser of 0.020 cfm or 4% of average sample rate':'0.020 cfm until sample rate is known'}).`;
  if(Number.isFinite(post)&&post>=0) leakMsg+=post<=limit?' Post-test leak rate is within this screen.':' Post-test leak rate exceeds this screen — review correction/void requirements.';
  if(Number.isFinite(maxVac)&&maxVac>0&&Number.isFinite(postVac)&&postVac<maxVac) leakMsg+=' Post-test vacuum is below the recorded maximum run vacuum.';
  leakBox.className=(Number.isFinite(post)&&post<=limit&&(!Number.isFinite(maxVac)||!Number.isFinite(postVac)||postVac>=maxVac))?'warning-box good':'warning-box'; leakBox.textContent=leakMsg;
  const warn=$('isoWarning'); if(Number.isFinite(I)){warn.className=(I>=90&&I<=110)?'warning-box good':'warning-box';warn.textContent=(I>=90&&I<=110?'Calculated post-run isokinetic rate is within the usual Method 5 90–110% operating target. ':'Calculated post-run isokinetic rate is outside the usual Method 5 90–110% operating target. ')+'Verify the applicable method, subpart, Administrator direction, and any leakage correction before determining run validity.';} else {warn.className='warning-box';warn.textContent='Enter nozzle diameter, sample time, corrected dry standard volume, stack velocity, stack temperature, absolute pressure, and Bws.';}
}
['isoNozzle','isoMinutes','isoVm','isoVs','isoTs','isoPs','isoBws','isoMaxVac','isoPreLeak','isoPreVac','isoPostLeak','isoPostVac'].forEach(id=>$(id).addEventListener('input',calcIso));
$('clearIso').onclick=()=>{['isoRunId','isoNozzle','isoMinutes','isoVm','isoVs','isoTs','isoPs','isoBws','isoMaxVac','isoPreLeak','isoPreVac','isoPostLeak','isoPostVac'].forEach(id=>$(id).value='');state.isoPoints=[{},{},{},{}];renderIsoPoints();calcIso();};
$('saveIso').onclick=()=>{const method=$('isoMethod').value;if(!method){alert('Add Method 5, 26A, or 29 to the active job first.');return}const rec={id:Date.now(),jobId:state.job.id,method,runId:$('isoRunId').value||'Run',savedAt:new Date().toISOString(),inputs:{nozzle:+$('isoNozzle').value,minutes:+$('isoMinutes').value,vm:+$('isoVm').value,vs:+$('isoVs').value,ts:+$('isoTs').value,ps:+$('isoPs').value,bws:+$('isoBws').value,maxVac:+$('isoMaxVac').value,preLeak:+$('isoPreLeak').value,preVac:+$('isoPreVac').value,postLeak:+$('isoPostLeak').value,postVac:+$('isoPostVac').value},points:state.isoPoints.map(x=>({...x})),pct:parseDisplayNumber($('isoPctOut').textContent)};state.isoRuns.unshift(rec);localStorage.setItem(ISO_KEY,JSON.stringify(state.isoRuns));$('saveIso').textContent='Saved ✓';setTimeout(()=>$('saveIso').textContent='Save Isokinetic Run to Job',900);renderSavedIso();renderJobHub();};
function renderSavedIso(){const rows=state.isoRuns.filter(r=>r.jobId===state.job.id),el=$('savedIso');if(!rows.length){el.innerHTML='<div class="empty">No isokinetic runs saved on this active job.</div>';return}el.innerHTML=rows.map(r=>`<div class="saved-card"><strong>M${r.method} • ${r.runId}</strong><div class="hint">Isokinetic: ${fmt(r.pct,1)}% • ${new Date(r.savedAt).toLocaleString()}</div><div class="actions"><button class="ghost" onclick="loadIso(${r.id})">Open</button><button class="ghost" onclick="deleteIso(${r.id})">Delete</button></div></div>`).join('');}
window.loadIso=id=>{const r=state.isoRuns.find(x=>x.id===id);if(!r)return;show('iso');$('isoMethod').value=r.method;$('isoRunId').value=r.runId;const map={nozzle:'isoNozzle',minutes:'isoMinutes',vm:'isoVm',vs:'isoVs',ts:'isoTs',ps:'isoPs',bws:'isoBws',maxVac:'isoMaxVac',preLeak:'isoPreLeak',preVac:'isoPreVac',postLeak:'isoPostLeak',postVac:'isoPostVac'};Object.entries(map).forEach(([k,id])=>$(id).value=Number.isFinite(r.inputs[k])?r.inputs[k]:'');state.isoPoints=r.points||[];renderIsoPoints();calcIso();};
window.deleteIso=id=>{state.isoRuns=state.isoRuns.filter(x=>x.id!==id);localStorage.setItem(ISO_KEY,JSON.stringify(state.isoRuns));renderSavedIso();renderJobHub();};


// v0.8 Sample recovery + chain of custody
const RECOVERY_KEY='stf_recovery_v08';
const COC_KEY='stf_coc_v08';
state.recoveries=JSON.parse(localStorage.getItem(RECOVERY_KEY)||'[]');
state.cocs=JSON.parse(localStorage.getItem(COC_KEY)||'[]');
state.recoveryDraft=[];
const recoveryTemplates={
  '5':[
    {id:'1',name:'Container 1 — Filter',detail:'Carefully recover filter and loose particulate to the labeled filter container / petri dish.'},
    {id:'2',name:'Container 2 — Front-half acetone rinse',detail:'Nozzle, probe liner and front-half/filter-holder recovery as applicable; label and mark liquid level.'},
    {id:'3',name:'Container 3 — Silica gel',detail:'Record condition and recover for moisture determination; do not add liquid.'},
    {id:'water',name:'Impinger water / moisture record',detail:'Measure and record collected liquid for moisture; retain only when the test plan or analysis requires it.'},
    {id:'blank',name:'Recovery solvent / water blank when required',detail:'Track applicable field blanks required by the method, subpart, laboratory or test plan.'}
  ],
  '26A':[
    {id:'1',name:'Container 1 — Filter catch (if particulate determination)',detail:'Optional particulate filter catch; recover per Method 5 procedure when applicable.'},
    {id:'2',name:'Container 2 — Front-half rinse (if particulate determination)',detail:'Optional front-half recovery per Method 5 when particulate is being determined.'},
    {id:'3',name:'Container 3 — Knockout + acid impinger catch',detail:'Measure moisture catch; quantitatively transfer acid/knockout catch and water rinses; seal and mark level.'},
    {id:'4',name:'Container 4 — Alkaline impinger catch',detail:'Measure and recover alkaline impinger catch and required rinses/additions per Method 26A.'},
    {id:'5',name:'Container 5 — Silica gel',detail:'Recover silica gel for moisture determination.'},
    {id:'6-9',name:'Containers 6–9 — Reagent blanks',detail:'Track acid reagent, alkaline reagent, rinse-water and acetone blanks as applicable.'}
  ],
  '29':[
    {id:'1',name:'Container 1 — Sample filter',detail:'Recover filter and loose particulate; protect from contamination.'},
    {id:'2',name:'Container 2 — Acetone front-half rinse',detail:'Recover acetone rinse from nozzle/probe/front half when particulate is determined; mark level.'},
    {id:'3',name:'Container 3 — 0.1 N HNO₃ front-half rinse',detail:'Recover nitric-acid rinse fraction; keep identified separately.'},
    {id:'4',name:'Container 4 — Back-half / HNO₃-H₂O₂ fraction',detail:'Recover designated back-half and nitric acid/peroxide impinger fraction per Method 29 scheme.'},
    {id:'5A',name:'Container 5A — Impinger 4 fraction',detail:'Keep mercury recovery fraction separate and label clearly.'},
    {id:'5B',name:'Container 5B — Acidified KMnO₄ fraction',detail:'Recover permanganate impinger contents and specified rinses; mark fluid level.'},
    {id:'5C',name:'Container 5C — HCl rinse fraction',detail:'Keep separate for the mercury analytical fraction.'},
    {id:'6',name:'Container 6 — Silica gel',detail:'Record condition and recover for moisture determination.'},
    {id:'7-12',name:'Containers 7–12 — Field reagent/filter blanks',detail:'Track acetone, HNO₃, water, HNO₃/H₂O₂, KMnO₄, HCl and filter blanks as applicable.'}
  ]
};
function recoveryMethods(){return state.job.methods.filter(m=>['5','26A','29'].includes(m));}
function renderRecovery(){
  const opts=recoveryMethods();
  $('recoveryMethod').innerHTML=opts.map(m=>`<option value="${m}">Method ${m} — ${methods[m].title}</option>`).join('');
  $('recoveryGate').innerHTML=opts.length?`<strong>Recovery methods on this job:</strong> ${opts.map(m=>'M'+m).join(', ')}<div class="hint">Choose the method and run, then build the recovery package.</div>`:'<strong>No supported recovery method selected.</strong><div class="hint">Add Method 5, 26A, or 29 to the active job.</div>';
  if(!state.recoveryDraft.length&&opts.length) buildRecoveryDraft(); else renderRecoveryContainers();
  renderSavedRecovery(); renderRecoveryStatus();
}
function buildRecoveryDraft(){
  const m=$('recoveryMethod').value||recoveryMethods()[0];
  state.recoveryDraft=(recoveryTemplates[m]||[]).map(x=>({...x,recovered:false,labeled:false,sealed:false,level:false,sampleId:'',notes:''}));
  renderRecoveryContainers();renderRecoveryStatus();
}
$('buildRecovery').onclick=buildRecoveryDraft;
$('recoveryMethod').onchange=buildRecoveryDraft;
function renderRecoveryContainers(){
  const el=$('recoveryContainers');
  if(!state.recoveryDraft.length){el.innerHTML='<div class="empty">No recovery list built yet.</div>';return}
  el.innerHTML=state.recoveryDraft.map((r,i)=>`<div class="saved-card recovery-card"><strong>${r.name}</strong><div class="hint">${r.detail}</div><label>Sample / bottle ID<input data-ri="${i}" data-rf="sampleId" value="${r.sampleId||''}" placeholder="e.g. WO-R1-2"></label><div class="recovery-flags"><label><input type="checkbox" data-ri="${i}" data-rf="recovered" ${r.recovered?'checked':''}> Recovered</label><label><input type="checkbox" data-ri="${i}" data-rf="labeled" ${r.labeled?'checked':''}> Labeled</label><label><input type="checkbox" data-ri="${i}" data-rf="sealed" ${r.sealed?'checked':''}> Sealed</label><label><input type="checkbox" data-ri="${i}" data-rf="level" ${r.level?'checked':''}> Level marked / N.A.</label></div><label>Container notes<input data-ri="${i}" data-rf="notes" value="${r.notes||''}" placeholder="volume, condition, color, exception..."></label></div>`).join('');
  el.querySelectorAll('[data-ri]').forEach(inp=>{inp.oninput=inp.onchange=()=>{const i=+inp.dataset.ri,f=inp.dataset.rf;state.recoveryDraft[i][f]=inp.type==='checkbox'?inp.checked:inp.value;renderRecoveryStatus();};});
}
function renderRecoveryStatus(){const e=$('recoveryStatus');if(!state.recoveryDraft.length){e.className='warning-box';e.textContent='Build the method recovery list to begin.';return}const total=state.recoveryDraft.length,done=state.recoveryDraft.filter(x=>x.recovered&&x.labeled&&x.sealed).length;e.className=done===total?'warning-box good':'warning-box';e.textContent=`Recovery completion: ${done}/${total} containers complete. Verify method-specific volume, rinsing, preservation and blank requirements before release.`;}
$('clearRecovery').onclick=()=>{['recoveryRunId','recoveryTech','recoveryTime','recoveryNotes'].forEach(id=>$(id).value='');state.recoveryDraft=[];buildRecoveryDraft();};
$('saveRecovery').onclick=()=>{const method=$('recoveryMethod').value;if(!method){alert('Add Method 5, 26A, or 29 to the job first.');return}const rec={id:Date.now(),jobId:state.job.id,method,runId:$('recoveryRunId').value.trim()||'Run',tech:$('recoveryTech').value.trim(),time:$('recoveryTime').value,notes:$('recoveryNotes').value,containers:state.recoveryDraft.map(x=>({...x})),savedAt:new Date().toISOString()};state.recoveries.unshift(rec);localStorage.setItem(RECOVERY_KEY,JSON.stringify(state.recoveries));renderSavedRecovery();renderJobHub();$('saveRecovery').textContent='Saved ✓';setTimeout(()=>$('saveRecovery').textContent='Save Recovery to Job',900);};
function renderSavedRecovery(){const rows=state.recoveries.filter(r=>r.jobId===state.job.id),el=$('savedRecovery');if(!rows.length){el.innerHTML='<div class="empty">No recoveries saved on this active job.</div>';return}el.innerHTML=rows.map(r=>{const done=r.containers.filter(x=>x.recovered&&x.labeled&&x.sealed).length;return `<div class="saved-card"><strong>M${r.method} • ${r.runId}</strong><div class="hint">${done}/${r.containers.length} containers complete • ${new Date(r.savedAt).toLocaleString()}</div><div class="actions"><button class="ghost" onclick="loadRecovery(${r.id})">Open</button><button class="ghost" onclick="deleteRecovery(${r.id})">Delete</button></div></div>`}).join('');}
window.loadRecovery=id=>{const r=state.recoveries.find(x=>x.id===id);if(!r)return;show('recovery');$('recoveryMethod').value=r.method;$('recoveryRunId').value=r.runId;$('recoveryTech').value=r.tech||'';$('recoveryTime').value=r.time||'';$('recoveryNotes').value=r.notes||'';state.recoveryDraft=(r.containers||[]).map(x=>({...x}));renderRecoveryContainers();renderRecoveryStatus();};
window.deleteRecovery=id=>{state.recoveries=state.recoveries.filter(x=>x.id!==id);localStorage.setItem(RECOVERY_KEY,JSON.stringify(state.recoveries));renderSavedRecovery();};
$('saveCOC').onclick=()=>{const rec={id:Date.now(),jobId:state.job.id,number:$('cocNumber').value.trim(),lab:$('cocLab').value.trim(),cooler:$('cocCooler').value.trim(),relinquished:$('cocRelinquished').value.trim(),time:$('cocTime').value,receiver:$('cocReceiver').value.trim(),checks:{labels:$('cocLabels').checked,seals:$('cocSeals').checked,forms:$('cocForms').checked,cooler:$('cocCoolerCheck').checked},savedAt:new Date().toISOString()};state.cocs.unshift(rec);localStorage.setItem(COC_KEY,JSON.stringify(state.cocs));state.job.latestCOC=rec;saveJob();renderJobHub();$('saveCOC').textContent='COC Saved ✓';setTimeout(()=>$('saveCOC').textContent='Save Chain of Custody',900);};



// v0.9 End-of-day / job completion dashboard
const CLOSEOUT_KEY='stf_closeout_v09';
state.closeouts=JSON.parse(localStorage.getItem(CLOSEOUT_KEY)||'[]');

function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function profileFromJob(){return {id:Date.now(),name:[state.job.client,state.job.facility,state.job.stack].filter(Boolean).join(' • ')||'Facility Profile',client:state.job.client||'',facility:state.job.facility||'',stack:state.job.stack||'',methods:[...(state.job.methods||[])],m1:state.job.latestM1?JSON.parse(JSON.stringify(state.job.latestM1)):null,notes:state.job.profileNotes||'',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};}
function saveCurrentProfile(){if(!state.job.client&&!state.job.facility&&!state.job.stack){alert('Enter at least a client, facility, or unit/stack first.');return;}const p=profileFromJob();const same=state.profiles.findIndex(x=>x.client===p.client&&x.facility===p.facility&&x.stack===p.stack);if(same>=0){p.id=state.profiles[same].id;p.createdAt=state.profiles[same].createdAt;state.profiles[same]=p;}else state.profiles.unshift(p);localStorage.setItem(PROFILES_KEY,JSON.stringify(state.profiles));renderHistory();}
function startNewJob(){saveJob();state.job=defaultJob();localStorage.setItem(JOB_KEY,JSON.stringify(state.job));syncJobInputs();renderJobHub();renderBanners();renderHistory();show('home');}
function applyProfile(id){const p=state.profiles.find(x=>x.id===id);if(!p)return;state.job=defaultJob();state.job.client=p.client;state.job.facility=p.facility;state.job.stack=p.stack;state.job.methods=[...(p.methods||[])];if(p.m1)state.job.latestM1=JSON.parse(JSON.stringify(p.m1));state.job.profileId=p.id;saveJob();show('home');}
function openHistoricalJob(id){const j=state.jobs.find(x=>x.id===id);if(!j)return;state.job=JSON.parse(JSON.stringify(j));localStorage.setItem(JOB_KEY,JSON.stringify(state.job));show('home');}
function cloneHistoricalJob(id){const j=state.jobs.find(x=>x.id===id);if(!j)return;const n=defaultJob();['client','facility','stack','tester'].forEach(k=>n[k]=j[k]||'');n.methods=[...(j.methods||[])];if(j.latestM1)n.latestM1=JSON.parse(JSON.stringify(j.latestM1));n.project=(j.project?j.project+' - Repeat':'Repeat Stack Test');n.sourceJobId=j.id;state.job=n;saveJob();show('home');}
window.openHistoricalJob=openHistoricalJob;window.cloneHistoricalJob=cloneHistoricalJob;window.applyProfile=applyProfile;window.deleteProfile=id=>{state.profiles=state.profiles.filter(x=>x.id!==id);localStorage.setItem(PROFILES_KEY,JSON.stringify(state.profiles));renderHistory();};
function renderHistory(){
 const hp=$('historyProfiles'),hj=$('historyJobs');if(!hp||!hj)return;
 hp.innerHTML=state.profiles.length?state.profiles.map(p=>`<div class="saved-card"><strong>${escapeHtml(p.name)}</strong><div class="hint">${escapeHtml(p.client)}${p.facility?' • '+escapeHtml(p.facility):''}${p.stack?' • '+escapeHtml(p.stack):''}</div><div class="method-chips">${(p.methods||[]).map(m=>`<span>M${escapeHtml(m)}</span>`).join('')}</div>${p.m1?'<div class="hint">Includes saved Method 1 stack/traverse setup</div>':''}<div class="actions"><button class="primary" onclick="applyProfile(${p.id})">Use for New Job</button><button class="ghost" onclick="deleteProfile(${p.id})">Delete</button></div></div>`).join(''):'<div class="empty">No reusable facility profiles yet. Save the active job setup to create one.</div>';
 const jobs=[...state.jobs].sort((a,b)=>String(b.updatedAt||'').localeCompare(String(a.updatedAt||'')));
 hj.innerHTML=jobs.length?jobs.map(j=>`<div class="saved-card"><strong>${escapeHtml(j.project||'Untitled Job')}</strong><div class="hint">${escapeHtml(j.client||'No client')}${j.facility?' • '+escapeHtml(j.facility):''}${j.stack?' • '+escapeHtml(j.stack):''}</div><div class="hint">${j.date?escapeHtml(j.date)+' • ':''}${(j.methods||[]).map(m=>'M'+escapeHtml(m)).join(', ')||'No methods'} • ${escapeHtml(j.latestCloseout?.status||'IN PROGRESS')}</div><div class="actions"><button class="ghost" onclick="openHistoricalJob(${j.id})">Open</button><button class="primary" onclick="cloneHistoricalJob(${j.id})">Clone Setup</button></div></div>`).join(''):'<div class="empty">No saved job history yet. Saving an active job automatically adds it here.</div>';
}


// v1.8 Equipment inventory + calibration tracking
const EQUIPMENT_KEY='stf_equipment_v11';
state.equipment=JSON.parse(localStorage.getItem(EQUIPMENT_KEY)||'[]');

function calStatus(item, refDate){
  if(!item.due) return {text:'NO DUE DATE',kind:'warn'};
  const ref=new Date((refDate||new Date().toISOString().slice(0,10))+'T00:00:00');
  const due=new Date(item.due+'T00:00:00');
  const days=Math.floor((due-ref)/86400000);
  if(days<0)return {text:'EXPIRED',kind:'bad',days};
  if(days===0)return {text:'DUE TODAY',kind:'warn',days};
  if(days<=30)return {text:`DUE SOON (${days}d)`,kind:'warn',days};
  return {text:'CURRENT',kind:'good',days};
}
function clearEquipmentForm(){
  ['eqId','eqDesc','eqLastCal','eqDue','eqCert','eqAssignedJob'].forEach(id=>{if($(id))$(id).value='';});
  if($('eqStatus'))$('eqStatus').value='Available';
}
function saveEquipmentRecord(){
  const id=$('eqId').value.trim();
  if(!id){alert('Enter an equipment ID.');return;}
  const rec={id,type:$('eqType').value,desc:$('eqDesc').value.trim(),status:$('eqStatus').value,lastCal:$('eqLastCal').value,due:$('eqDue').value,cert:$('eqCert').value.trim(),assignedJob:$('eqAssignedJob').value.trim(),updatedAt:new Date().toISOString()};
  const i=state.equipment.findIndex(x=>x.id.toLowerCase()===id.toLowerCase());
  if(i>=0)state.equipment[i]=rec;else state.equipment.push(rec);
  localStorage.setItem(EQUIPMENT_KEY,JSON.stringify(state.equipment));
  clearEquipmentForm();renderEquipment();renderJobHub();
}
function editEquipment(id){
  const x=state.equipment.find(e=>e.id===id);if(!x)return;
  $('eqType').value=x.type;$('eqId').value=x.id;$('eqDesc').value=x.desc||'';$('eqStatus').value=x.status||'Available';
  $('eqLastCal').value=x.lastCal||'';$('eqDue').value=x.due||'';$('eqCert').value=x.cert||'';$('eqAssignedJob').value=x.assignedJob||'';
  window.scrollTo(0,0);
}
function deleteEquipment(id){
  if(!confirm(`Delete ${id} from equipment inventory?`))return;
  state.equipment=state.equipment.filter(x=>x.id!==id);
  localStorage.setItem(EQUIPMENT_KEY,JSON.stringify(state.equipment));renderEquipment();renderJobHub();
}
window.editEquipment=editEquipment;window.deleteEquipment=deleteEquipment;

function jobEquipmentCheck(refDate){
  const ids=(state.job.equipmentIds||[]);
  const issues=[],results=[];
  ids.forEach(id=>{
    const x=state.equipment.find(e=>e.id.toLowerCase()===String(id).toLowerCase());
    if(!x){issues.push(`${id}: not found in inventory`);results.push({id,status:'MISSING'});return;}
    const cs=calStatus(x,refDate);
    const unavailable=['Out of Service','Repair'].includes(x.status);
    if(cs.text==='EXPIRED')issues.push(`${id}: calibration expired ${x.due}`);
    if(unavailable)issues.push(`${id}: ${x.status}`);
    results.push({id,status:unavailable?x.status:cs.text});
  });
  const demand=typeof equipmentDemand==='function'?equipmentDemand():[];
  if(typeof ensureAssignments==='function')ensureAssignments();
  demand.forEach(d=>{const a=state.job.equipmentAssignments&&state.job.equipmentAssignments[d.slot];if(!a)issues.push(`${d.slot}: unassigned`);});
  return {ids,issues,results,ready:(ids.length>0||demand.length===0)&&issues.length===0,demand};
}
function renderEquipment(){
  renderBanners();
  if($('equipmentJobBanner'))$('equipmentJobBanner').innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'Client'} • ${state.job.facility||'Facility'} • ${state.job.stack||'Unit / Stack'}</div>`;
  const ref=(state.job.date||new Date().toISOString().slice(0,10));
  const expired=state.equipment.filter(x=>calStatus(x,ref).text==='EXPIRED').length;
  const soon=state.equipment.filter(x=>calStatus(x,ref).text.startsWith('DUE SOON')||calStatus(x,ref).text==='DUE TODAY').length;
  const unavailable=state.equipment.filter(x=>['Out of Service','Repair'].includes(x.status)).length;
  $('equipmentSummary').innerHTML=`<div><span>Total</span><strong>${state.equipment.length}</strong></div><div><span>Expired</span><strong>${expired}</strong></div><div><span>Due ≤30d</span><strong>${soon}</strong></div><div><span>Unavailable</span><strong>${unavailable}</strong></div>`;
  $('equipmentList').innerHTML=state.equipment.length?state.equipment
    .slice().sort((a,b)=>a.type.localeCompare(b.type)||a.id.localeCompare(b.id))
    .map(x=>{const c=calStatus(x,ref);return `<div class="saved-card"><strong>${escapeHtml(x.id)} • ${escapeHtml(x.type)}</strong><div class="hint">${escapeHtml(x.desc||'No description')}</div><div class="hint">Status: ${escapeHtml(x.status)} • Calibration due: ${escapeHtml(x.due||'not entered')} • ${escapeHtml(c.text)}</div>${x.cert?`<div class="hint">Cert: ${escapeHtml(x.cert)}</div>`:''}<div class="actions"><button class="ghost" onclick="editEquipment('${String(x.id).replace(/'/g,"\\'")}')">Edit</button><button class="ghost" onclick="deleteEquipment('${String(x.id).replace(/'/g,"\\'")}')">Delete</button></div></div>`;}).join('')
    :'<div class="empty">No equipment saved yet.</div>';
  $('eqJobDate').value=state.job.date||ref;
  $('eqJobIds').value=(state.job.equipmentIds||[]).join(', ');
  renderJobEquipmentCheck();
  renderEquipmentDemand();
}
function renderJobEquipmentCheck(){
  if(!$('equipmentJobCheck'))return;
  const ref=$('eqJobDate').value||state.job.date||new Date().toISOString().slice(0,10);
  const typed=$('eqJobIds').value.split(',').map(x=>x.trim()).filter(Boolean);
  const ids=typed.length?typed:(state.job.equipmentIds||[]);
  const old=state.job.equipmentIds;state.job.equipmentIds=ids;
  const c=jobEquipmentCheck(ref);state.job.equipmentIds=old;
  if(!ids.length){$('equipmentJobCheck').className='warning-box';$('equipmentJobCheck').textContent='Enter the equipment IDs assigned to this job.';return;}
  $('equipmentJobCheck').className=c.ready?'warning-box good':'warning-box';
  $('equipmentJobCheck').innerHTML=`<strong>${c.ready?'READY':'HOLD'}</strong><br>${c.results.map(r=>`${escapeHtml(r.id)} — ${escapeHtml(r.status)}`).join('<br>')}`;
}
$('saveEquipment').onclick=saveEquipmentRecord;
$('clearEquipment').onclick=clearEquipmentForm;
$('checkJobEquipment').onclick=renderJobEquipmentCheck;
$('eqJobDate').onchange=renderJobEquipmentCheck;
$('eqJobIds').oninput=renderJobEquipmentCheck;
$('saveJobEquipment').onclick=()=>{
  state.job.equipmentIds=$('eqJobIds').value.split(',').map(x=>x.trim()).filter(Boolean);
  saveJob();renderJobEquipmentCheck();renderJobHub();
  $('saveJobEquipment').textContent='Saved ✓';setTimeout(()=>$('saveJobEquipment').textContent='Save IDs to Active Job',900);
};


// v1.8 Method-based equipment demand and serialized assignment
const equipmentRules=[
  {slot:'Pitot Tube',type:'Pitot Tube',match:/pitot/i},
  {slot:'Pressure Measurement',type:'Differential Pressure Device',match:/manometer|differential pressure|pressure measurement/i},
  {slot:'Meter Box / Sampling Console',type:'Meter Box',match:/meter box|sampling console/i},
  {slot:'Dry Gas Meter',type:'Dry Gas Meter',match:/dry gas meter/i},
  {slot:'Temperature Sensor',type:'Thermocouple / Temperature Sensor',match:/thermocouple|temperature sensor|stack temperature/i},
  {slot:'Barometer',type:'Barometer',match:/barometer/i},
  {slot:'Vacuum Gauge',type:'Vacuum Gauge',match:/vacuum gauge/i},
  {slot:'Rate Meter / Rotameter',type:'Rate Meter / Rotameter',match:/rate meter|rotameter|flow meter/i},
  {slot:'Probe / Heated Probe',type:'Probe / Heated Probe',match:/sample probe|heated probe|probe and liner/i},
  {slot:'Umbilical / Sample Line',type:'Umbilical / Sample Line',match:/umbilical|sample line/i},
  {slot:'Impinger Set',type:'Impinger Set',match:/impinger|condenser train/i},
  {slot:'O₂ / CO₂ Analyzer',type:'Analyzer',match:/O₂ and\/or CO₂ analyzer/i},
  {slot:'SO₂ Analyzer',type:'Analyzer',match:/SO₂ analyzer/i},
  {slot:'NOx Analyzer',type:'Analyzer',match:/NOx analyzer/i},
  {slot:'CO Analyzer',type:'Analyzer',match:/CO analyzer/i},
  {slot:'FID Analyzer',type:'Analyzer',match:/flame ionization analyzer|FID/i},
  {slot:'Gas Dilution System',type:'Gas Dilution System',match:/dilution/i},
];
function equipmentDemand(){
  const {req}=combinedItems(); const slots=new Map();
  req.forEach((methodIds,name)=>{
    const rule=equipmentRules.find(r=>r.match.test(name)); if(!rule)return;
    if(!slots.has(rule.slot))slots.set(rule.slot,{slot:rule.slot,type:rule.type,methods:new Set(),sourceItems:new Set()});
    const s=slots.get(rule.slot); methodIds.forEach(id=>s.methods.add(id)); s.sourceItems.add(name);
  });
  return [...slots.values()].map(s=>({slot:s.slot,type:s.type,methods:[...s.methods],sourceItems:[...s.sourceItems]}));
}
function ensureAssignments(){if(!state.job.equipmentAssignments)state.job.equipmentAssignments={};}
function assignmentStatus(slot,refDate){
  ensureAssignments(); const id=state.job.equipmentAssignments[slot];
  if(!id)return{text:'UNASSIGNED',ready:false};
  const x=state.equipment.find(e=>e.id===id); if(!x)return{text:'MISSING FROM INVENTORY',ready:false};
  const cs=calStatus(x,refDate);
  if(['Out of Service','Repair'].includes(x.status))return{text:x.status.toUpperCase(),ready:false};
  if(cs.text==='EXPIRED')return{text:'CAL EXPIRED',ready:false};
  return{text:cs.text,ready:true};
}
function assignEquipment(slot,id){
  ensureAssignments(); if(id)state.job.equipmentAssignments[slot]=id; else delete state.job.equipmentAssignments[slot];
  state.job.equipmentIds=[...new Set(Object.values(state.job.equipmentAssignments).filter(Boolean))];
  saveJob(); renderEquipmentDemand(); renderJobEquipmentCheck(); renderJobHub();
}
window.assignEquipment=assignEquipment;
function renderEquipmentDemand(){
  if(!$('equipmentDemandList'))return; ensureAssignments();
  const demand=equipmentDemand(),ref=state.job.date||new Date().toISOString().slice(0,10);
  const assigned=demand.filter(d=>state.job.equipmentAssignments[d.slot]).length;
  const ready=demand.filter(d=>assignmentStatus(d.slot,ref).ready).length;
  $('equipmentDemandSummary').innerHTML=`<div><span>Slots</span><strong>${demand.length}</strong></div><div><span>Assigned</span><strong>${assigned}</strong></div><div><span>Ready</span><strong>${ready}</strong></div>`;
  if(!state.job.methods.length){$('equipmentDemandList').innerHTML='<div class="empty">Select job methods first.</div>';return;}
  $('equipmentDemandList').innerHTML=demand.map(d=>{
    const current=state.job.equipmentAssignments[d.slot]||'';
    const candidates=state.equipment.filter(x=>x.type===d.type);
    const st=assignmentStatus(d.slot,ref);
    const opts=['<option value="">— Select equipment —</option>'].concat(candidates.map(x=>{
      const c=calStatus(x,ref),bad=['Out of Service','Repair'].includes(x.status)||c.text==='EXPIRED';
      return `<option value="${escapeHtml(x.id)}" ${current===x.id?'selected':''}>${escapeHtml(x.id)} — ${escapeHtml(x.status)} — ${escapeHtml(c.text)}${bad?' ⚠':''}</option>`;
    })).join('');
    return `<div class="saved-card"><strong>${escapeHtml(d.slot)}</strong><div class="hint">Needed by ${d.methods.map(m=>'M'+m).join(', ')}</div><label>Assigned unit<select onchange="assignEquipment('${String(d.slot).replace(/'/g,"\\'")}',this.value)">${opts}</select></label><div class="hint">Status: <strong>${escapeHtml(st.text)}</strong></div>${!candidates.length?`<div class="warning-box">No ${escapeHtml(d.type)} saved in inventory.</div>`:''}</div>`;
  }).join('')||'<div class="empty">No serialized-equipment slots identified. Non-serialized gear remains on the loadout checklist.</div>';
}
function autoAssignEquipment(){
  ensureAssignments(); const ref=state.job.date||new Date().toISOString().slice(0,10),used=new Set(Object.values(state.job.equipmentAssignments).filter(Boolean));
  equipmentDemand().forEach(d=>{
    if(state.job.equipmentAssignments[d.slot])return;
    const x=state.equipment.find(e=>e.type===d.type&&!used.has(e.id)&&!['Out of Service','Repair'].includes(e.status)&&calStatus(e,ref).text!=='EXPIRED');
    if(x){state.job.equipmentAssignments[d.slot]=x.id;used.add(x.id);}
  });
  state.job.equipmentIds=[...new Set(Object.values(state.job.equipmentAssignments).filter(Boolean))];saveJob();renderEquipment();renderJobHub();
}
function clearEquipmentAssignments(){state.job.equipmentAssignments={};state.job.equipmentIds=[];saveJob();renderEquipment();renderJobHub();}
$('autoAssignEquipment').onclick=autoAssignEquipment;
$('clearAssignments').onclick=clearEquipmentAssignments;


// Calibration gas inventory + analyzer demand assignment
const GAS_KEY='stf_cal_gases_v13';
state.gases=JSON.parse(localStorage.getItem(GAS_KEY)||'[]');
function gasExpStatus(g,refDate){
  if(!g.expire)return{text:'NO EXPIRATION DATE',ready:false};
  const r=new Date((refDate||new Date().toISOString().slice(0,10))+'T00:00:00'),e=new Date(g.expire+'T00:00:00'),d=Math.floor((e-r)/86400000);
  if(d<0)return{text:'EXPIRED',ready:false}; if(d===0)return{text:'EXPIRES TODAY',ready:false};
  if(d<=30)return{text:`EXPIRES SOON (${d}d)`,ready:true}; return{text:'CURRENT',ready:true};
}
function clearGasForm(){['gasId','gasConc','gasBalance','gasExpire','gasRegulator','gasAssignedJob','gasCert'].forEach(id=>{if($(id))$(id).value='';});if($('gasStatus'))$('gasStatus').value='Available';}
function saveGasRecord(){
  const id=$('gasId').value.trim();if(!id){alert('Enter a cylinder ID.');return;}
  const rec={id,pollutant:$('gasPollutant').value,conc:num($('gasConc').value),units:$('gasUnits').value,balance:$('gasBalance').value.trim(),expire:$('gasExpire').value,regulator:$('gasRegulator').value.trim(),status:$('gasStatus').value,assignedJob:$('gasAssignedJob').value.trim(),cert:$('gasCert').value.trim(),updatedAt:new Date().toISOString()};
  const i=state.gases.findIndex(x=>x.id.toLowerCase()===id.toLowerCase());if(i>=0)state.gases[i]=rec;else state.gases.push(rec);
  localStorage.setItem(GAS_KEY,JSON.stringify(state.gases));clearGasForm();renderGasInventory();renderJobHub();
}
function editGas(id){const x=state.gases.find(g=>g.id===id);if(!x)return;$('gasId').value=x.id;$('gasPollutant').value=x.pollutant;$('gasConc').value=Number.isFinite(x.conc)?x.conc:'';$('gasUnits').value=x.units||'ppm';$('gasBalance').value=x.balance||'';$('gasExpire').value=x.expire||'';$('gasRegulator').value=x.regulator||'';$('gasStatus').value=x.status||'Available';$('gasAssignedJob').value=x.assignedJob||'';$('gasCert').value=x.cert||'';}
function deleteGas(id){if(!confirm(`Delete cylinder ${id}?`))return;state.gases=state.gases.filter(g=>g.id!==id);localStorage.setItem(GAS_KEY,JSON.stringify(state.gases));renderGasInventory();renderJobHub();}
window.editGas=editGas;window.deleteGas=deleteGas;
function gasDemand(){
  const s=new Set(state.job.methods||[]),d=[];
  if([...s].some(x=>['3A','6C','7E','10','25A'].includes(x)))d.push({slot:'Zero Gas',pollutant:'Zero Gas',methods:[...s].filter(x=>['3A','6C','7E','10','25A'].includes(x))});
  if(s.has('3A')){d.push({slot:'O2 Calibration Gas',pollutant:'O2',methods:['3A']});d.push({slot:'CO2 Calibration Gas',pollutant:'CO2',methods:['3A']});}
  if(s.has('6C'))d.push({slot:'SO2 Calibration Gas',pollutant:'SO2',methods:['6C']});
  if(s.has('7E'))d.push({slot:'NOx Calibration Gas',pollutant:'NOx',methods:['7E']});
  if(s.has('10'))d.push({slot:'CO Calibration Gas',pollutant:'CO',methods:['10']});
  if(s.has('25A'))d.push({slot:'Organic Calibration Gas',pollutant:'Propane',methods:['25A']});
  return d;
}
function ensureGasAssignments(){if(!state.job.gasAssignments)state.job.gasAssignments={};}
function gasAssignmentStatus(slot,refDate){
  ensureGasAssignments();const id=state.job.gasAssignments[slot];if(!id)return{text:'UNASSIGNED',ready:false};
  const g=state.gases.find(x=>x.id===id);if(!g)return{text:'MISSING FROM INVENTORY',ready:false};
  const e=gasExpStatus(g,refDate);if(!e.ready)return{text:e.text,ready:false};if(['Empty','Out of Service'].includes(g.status))return{text:g.status.toUpperCase(),ready:false};if(!g.regulator)return{text:'NO REGULATOR ASSIGNED',ready:false};return{text:e.text,ready:true};
}
function assignGas(slot,id){ensureGasAssignments();if(id)state.job.gasAssignments[slot]=id;else delete state.job.gasAssignments[slot];saveJob();renderGasDemand();renderAnalyzer();renderJobHub();}
window.assignGas=assignGas;
function renderGasDemand(){
  if(!$('gasDemandList'))return;ensureGasAssignments();const ref=state.job.date||new Date().toISOString().slice(0,10),d=gasDemand(),a=d.filter(x=>state.job.gasAssignments[x.slot]).length,r=d.filter(x=>gasAssignmentStatus(x.slot,ref).ready).length;
  $('gasDemandSummary').innerHTML=`<div><span>Gas Slots</span><strong>${d.length}</strong></div><div><span>Assigned</span><strong>${a}</strong></div><div><span>Ready</span><strong>${r}</strong></div>`;
  if(!d.length){$('gasDemandList').innerHTML='<div class="empty">No instrumental analyzer methods selected.</div>';return;}
  $('gasDemandList').innerHTML=d.map(x=>{const cur=state.job.gasAssignments[x.slot]||'',c=state.gases.filter(g=>g.pollutant===x.pollutant||(x.pollutant==='NOx'&&g.pollutant==='NO')),opts=['<option value="">— Select cylinder —</option>'].concat(c.map(g=>{const e=gasExpStatus(g,ref),conc=Number.isFinite(g.conc)?` ${g.conc} ${g.units}`:'';return `<option value="${escapeHtml(g.id)}" ${cur===g.id?'selected':''}>${escapeHtml(g.id)} — ${escapeHtml(g.pollutant)}${escapeHtml(conc)} — ${escapeHtml(e.text)}</option>`;})).join(''),st=gasAssignmentStatus(x.slot,ref);return `<div class="saved-card"><strong>${escapeHtml(x.slot)}</strong><div class="hint">Needed by ${x.methods.map(m=>'M'+m).join(', ')}</div><label>Assigned cylinder<select onchange="assignGas('${String(x.slot).replace(/'/g,"\\'")}',this.value)">${opts}</select></label><div class="hint">Status: <strong>${escapeHtml(st.text)}</strong></div></div>`;}).join('');
}
function autoAssignGas(){ensureGasAssignments();const ref=state.job.date||new Date().toISOString().slice(0,10),used=new Set(Object.values(state.job.gasAssignments).filter(Boolean));gasDemand().forEach(d=>{if(state.job.gasAssignments[d.slot])return;const g=state.gases.find(x=>!used.has(x.id)&&(x.pollutant===d.pollutant||(d.pollutant==='NOx'&&x.pollutant==='NO'))&&gasExpStatus(x,ref).ready&&!['Empty','Out of Service'].includes(x.status)&&x.regulator);if(g){state.job.gasAssignments[d.slot]=g.id;used.add(g.id);}});saveJob();renderGasInventory();renderAnalyzerSetup();renderInstrumentRuns();renderRunSummary();renderFieldReport();renderBackup();renderAnalyzer();renderJobHub();}
function clearGasAssignments(){state.job.gasAssignments={};saveJob();renderGasInventory();renderAnalyzer();renderJobHub();}
function analyzerGasCheck(){const ref=state.job.date||new Date().toISOString().slice(0,10),d=gasDemand();ensureGasAssignments();const issues=[];d.forEach(x=>{const s=gasAssignmentStatus(x.slot,ref);if(!s.ready)issues.push(`${x.slot}: ${s.text}`);});return{demand:d,issues,ready:d.length===0||issues.length===0};}
function renderGasInventory(){
  if(!$('gasList'))return;if($('gasJobBanner'))$('gasJobBanner').innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'Client'} • ${state.job.facility||'Facility'} • ${state.job.stack||'Unit / Stack'}</div>`;
  const ref=state.job.date||new Date().toISOString().slice(0,10),expired=state.gases.filter(g=>gasExpStatus(g,ref).text==='EXPIRED').length,soon=state.gases.filter(g=>gasExpStatus(g,ref).text.startsWith('EXPIRES SOON')).length,un=state.gases.filter(g=>['Empty','Out of Service'].includes(g.status)).length;
  $('gasSummary').innerHTML=`<div><span>Cylinders</span><strong>${state.gases.length}</strong></div><div><span>Expired</span><strong>${expired}</strong></div><div><span>Exp ≤30d</span><strong>${soon}</strong></div><div><span>Unavailable</span><strong>${un}</strong></div>`;
  $('gasList').innerHTML=state.gases.length?state.gases.map(g=>{const e=gasExpStatus(g,ref),conc=Number.isFinite(g.conc)?`${g.conc} ${g.units}`:'—';return `<div class="saved-card"><strong>${escapeHtml(g.id)} • ${escapeHtml(g.pollutant)}</strong><div class="hint">${escapeHtml(conc)} • Balance: ${escapeHtml(g.balance||'—')} • Regulator: ${escapeHtml(g.regulator||'none')}</div><div class="hint">Expiration: ${escapeHtml(g.expire||'not entered')} • ${escapeHtml(e.text)} • ${escapeHtml(g.status)}</div><div class="actions"><button class="ghost" onclick="editGas('${String(g.id).replace(/'/g,"\\'")}')">Edit</button><button class="ghost" onclick="deleteGas('${String(g.id).replace(/'/g,"\\'")}')">Delete</button></div></div>`;}).join(''):'<div class="empty">No calibration-gas cylinders saved yet.</div>';renderGasDemand();
}
$('saveGas').onclick=saveGasRecord;$('clearGasForm').onclick=clearGasForm;$('autoAssignGas').onclick=autoAssignGas;$('clearGasAssignments').onclick=clearGasAssignments;


// Automatic analyzer setup sheets
const ANALYZER_SETUP_KEY='stf_analyzer_setup_v14';
state.analyzerSetups=JSON.parse(localStorage.getItem(ANALYZER_SETUP_KEY)||'[]');
function analyzerSetupDefs(){
  const s=new Set(state.job.methods||[]),d=[];
  if(s.has('3A'))d.push({method:'3A',channel:'O2',slot:'O₂ / CO₂ Analyzer',gasSlots:['Zero Gas','O2 Calibration Gas'],units:'%'},{method:'3A',channel:'CO2',slot:'O₂ / CO₂ Analyzer',gasSlots:['Zero Gas','CO2 Calibration Gas'],units:'%'});
  if(s.has('6C'))d.push({method:'6C',channel:'SO2',slot:'SO₂ Analyzer',gasSlots:['Zero Gas','SO2 Calibration Gas'],units:'ppm'});
  if(s.has('7E'))d.push({method:'7E',channel:'NOx',slot:'NOx Analyzer',gasSlots:['Zero Gas','NOx Calibration Gas'],units:'ppm'});
  if(s.has('10'))d.push({method:'10',channel:'CO',slot:'CO Analyzer',gasSlots:['Zero Gas','CO Calibration Gas'],units:'ppm'});
  if(s.has('25A'))d.push({method:'25A',channel:'VOC / FID',slot:'FID Analyzer',gasSlots:['Zero Gas','Organic Calibration Gas'],units:'ppm'});
  return d;
}
function setupRecordKey(d){return `${state.job.id}|${d.method}|${d.channel}`;}
function latestSetup(d){return state.analyzerSetups.find(x=>x.key===setupRecordKey(d))||null;}
function assignedEquipmentBySlot(slot){ensureAssignments();const id=state.job.equipmentAssignments?.[slot];return state.equipment.find(e=>e.id===id)||null;}
function assignedGasBySlot(slot){ensureGasAssignments();const id=state.job.gasAssignments?.[slot];return state.gases.find(g=>g.id===id)||null;}
function renderAnalyzerSetup(){
  if(!$('analyzerSetupSheets'))return;
  $('analyzerSetupBanner').innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'Client'} • ${state.job.facility||'Facility'} • ${state.job.stack||'Unit / Stack'}</div>`;
  const defs=analyzerSetupDefs();
  if(!defs.length){$('analyzerSetupSheets').innerHTML='<div class="card empty">No instrumental analyzer methods selected.</div>';return;}
  $('analyzerSetupSheets').innerHTML=defs.map((d,i)=>{
    const r=latestSetup(d),a=assignedEquipmentBySlot(d.slot),z=assignedGasBySlot(d.gasSlots[0]),h=assignedGasBySlot(d.gasSlots[1]),id=`aset_${i}`;
    return `<div class="card form-card"><div class="section-head"><div><h3>M${d.method} — ${escapeHtml(d.channel)}</h3></div><span class="badge ${a&&z&&h?'':'subtle'}">${a&&z&&h?'PREFILLED':'NEEDS ASSIGNMENT'}</span></div>
    <div class="grid two">
    <label>Analyzer ID<input id="${id}_analyzer" value="${escapeHtml(a?.id||r?.analyzerId||'')}" readonly></label>
    <label>Units<input id="${id}_units" value="${escapeHtml(r?.units||d.units)}"></label>
    <label>Zero Gas ID<input id="${id}_zeroId" value="${escapeHtml(z?.id||r?.zeroId||'')}" readonly></label>
    <label>Zero Certified<input id="${id}_zeroCert" type="number" step="any" value="${Number.isFinite(z?.conc)?z.conc:(r?.zeroCert??'')}"></label>
    <label>High Gas ID<input id="${id}_highId" value="${escapeHtml(h?.id||r?.highId||'')}" readonly></label>
    <label>High Certified<input id="${id}_highCert" type="number" step="any" value="${Number.isFinite(h?.conc)?h.conc:(r?.highCert??'')}"></label>
    <label>Pre-Test Zero Response<input id="${id}_preZero" type="number" step="any" value="${r?.preZero??''}"></label>
    <label>Pre-Test High Response<input id="${id}_preHigh" type="number" step="any" value="${r?.preHigh??''}"></label>
    <label>Start Time<input id="${id}_time" type="datetime-local" value="${escapeHtml(r?.time||'')}"></label>
    <label>Operator<input id="${id}_operator" value="${escapeHtml(r?.operator||state.job.tester||'')}"></label>
    </div><label>Notes<textarea id="${id}_notes">${escapeHtml(r?.notes||'')}</textarea></label>
    <div id="${id}_calc" class="warning-box"></div><div class="actions"><button class="primary" onclick="saveAnalyzerSetup('${d.method}','${String(d.channel).replace(/'/g,"\\'")}',${i})">Save Setup</button></div></div>`;
  }).join('');
  defs.forEach((d,i)=>wireAnalyzerSetupCalc(i));
}
function wireAnalyzerSetupCalc(i){
  const id=`aset_${i}`,calc=()=>{const zc=num($(`${id}_zeroCert`).value),hc=num($(`${id}_highCert`).value),zr=num($(`${id}_preZero`).value),hr=num($(`${id}_preHigh`).value);
  if(!Number.isFinite(hc)||hc===0||!Number.isFinite(zr)||!Number.isFinite(hr)){$(`${id}_calc`).textContent='Enter certified high value and both field responses.';return;}
  const span=Math.abs(hc-zc)||Math.abs(hc),ze=100*(zr-zc)/span,he=100*(hr-hc)/span;
  $(`${id}_calc`).innerHTML=`Zero error: <strong>${ze.toFixed(2)}% span</strong> • High error: <strong>${he.toFixed(2)}% span</strong><br><span class="hint">Compare with the applicable method/test-plan criteria.</span>`;};
  ['zeroCert','highCert','preZero','preHigh'].forEach(s=>$(`${id}_${s}`).oninput=calc);calc();
}
function saveAnalyzerSetup(method,channel,i){
  const d=analyzerSetupDefs()[i],id=`aset_${i}`,key=setupRecordKey(d);
  const rec={key,jobId:state.job.id,method,channel,analyzerId:$(`${id}_analyzer`).value,units:$(`${id}_units`).value,zeroId:$(`${id}_zeroId`).value,zeroCert:num($(`${id}_zeroCert`).value),highId:$(`${id}_highId`).value,highCert:num($(`${id}_highCert`).value),preZero:num($(`${id}_preZero`).value),preHigh:num($(`${id}_preHigh`).value),time:$(`${id}_time`).value,operator:$(`${id}_operator`).value.trim(),notes:$(`${id}_notes`).value,savedAt:new Date().toISOString()};
  state.analyzerSetups=state.analyzerSetups.filter(x=>x.key!==key);state.analyzerSetups.unshift(rec);localStorage.setItem(ANALYZER_SETUP_KEY,JSON.stringify(state.analyzerSetups));renderAnalyzerSetup();renderJobHub();
}
window.saveAnalyzerSetup=saveAnalyzerSetup;
function analyzerSetupStatus(){const d=analyzerSetupDefs(),missing=[];d.forEach(x=>{const r=latestSetup(x);if(!r||!r.analyzerId||!r.zeroId||!r.highId||!Number.isFinite(r.preZero)||!Number.isFinite(r.preHigh))missing.push(`M${x.method} ${x.channel}`);});return{total:d.length,complete:d.length-missing.length,missing,ready:d.length===0||missing.length===0};}
$('refreshAnalyzerSetup').onclick=renderAnalyzerSetup;


// Live instrumental run logging
const INSTRUMENT_RUN_KEY='stf_instrument_runs_v15';
state.instrumentRuns=JSON.parse(localStorage.getItem(INSTRUMENT_RUN_KEY)||'[]');
function instrumentDefs(){return analyzerSetupDefs();}
function currentInstrumentDef(){const v=$('irChannel')?.value||'',p=v.split('|');return instrumentDefs().find(d=>d.method===p[0]&&d.channel===p.slice(1).join('|'))||null;}
function populateInstrumentChannels(){
  if(!$('irChannel'))return;const defs=instrumentDefs(),cur=$('irChannel').value;
  $('irChannel').innerHTML=defs.length?defs.map(d=>`<option value="${d.method}|${escapeHtml(d.channel)}">M${d.method} — ${escapeHtml(d.channel)}</option>`).join(''):'<option value="">No instrumental methods selected</option>';
  if(defs.some(d=>`${d.method}|${d.channel}`===cur))$('irChannel').value=cur;
  const d=currentInstrumentDef();if(d&&!$('irUnits').value)$('irUnits').value=d.units;
}
function linkedSetupForInstrument(d){return d?latestSetup(d):null;}
function calcInstrumentPost(){
  const d=currentInstrumentDef(),r=linkedSetupForInstrument(d);
  if(!d||!r){$('irPostCalc').textContent='Complete and save the pre-test analyzer setup first.';return;}
  const pz=num($('irPostZero').value),ph=num($('irPostHigh').value);
  if(!Number.isFinite(pz)||!Number.isFinite(ph)||!Number.isFinite(r.highCert)){$('irPostCalc').textContent='Enter both post-test responses.';return;}
  const span=Math.abs(r.highCert-r.zeroCert)||Math.abs(r.highCert),zd=span?100*(pz-r.preZero)/span:NaN,hd=span?100*(ph-r.preHigh)/span:NaN;
  $('irPostCalc').innerHTML=`Zero drift: <strong>${Number.isFinite(zd)?zd.toFixed(2):'—'}% span</strong> • High drift: <strong>${Number.isFinite(hd)?hd.toFixed(2):'—'}% span</strong><br><span class="hint">Compare with the applicable method/test-plan criteria.</span>`;
}
function renderInstrumentPretest(){
  const d=currentInstrumentDef(),r=linkedSetupForInstrument(d);
  if(!d){$('irPretest').textContent='No instrumental method/channel selected.';return;}
  if(!r){$('irPretest').innerHTML=`<strong>HOLD</strong> — No saved pre-test setup for M${d.method} ${escapeHtml(d.channel)}.`;return;}
  $('irPretest').innerHTML=`<strong>Linked setup:</strong> ${escapeHtml(r.analyzerId||'No analyzer')}<br>Zero: ${escapeHtml(r.zeroId||'—')} (${Number.isFinite(r.preZero)?r.preZero:'—'}) • High: ${escapeHtml(r.highId||'—')} (${Number.isFinite(r.preHigh)?r.preHigh:'—'})`;
}
function nextInstrumentRunNo(d){if(!d)return 1;const rs=state.instrumentRuns.filter(r=>r.jobId===state.job.id&&r.method===d.method&&r.channel===d.channel);return rs.length?Math.max(...rs.map(r=>Number(r.runNo)||0))+1:1;}
function newInstrumentRun(){
  populateInstrumentChannels();const d=currentInstrumentDef();
  $('irRunNo').value=nextInstrumentRunNo(d);$('irStart').value='';$('irEnd').value='';$('irReading').value='';$('irUnits').value=d?.units||'';$('irOperator').value=state.job.tester||'';$('irCondition').value='';$('irNotes').value='';$('irPostZero').value='';$('irPostHigh').value='';
  renderInstrumentPretest();calcInstrumentPost();
}
function saveInstrumentRun(){
  const d=currentInstrumentDef();if(!d){alert('Select an instrumental method/channel.');return;}
  const setup=linkedSetupForInstrument(d);if(!setup){alert('Save the pre-test analyzer setup first.');return;}
  const rec={id:Date.now(),jobId:state.job.id,method:d.method,channel:d.channel,runNo:Number($('irRunNo').value)||1,start:$('irStart').value,end:$('irEnd').value,reading:num($('irReading').value),units:$('irUnits').value.trim(),operator:$('irOperator').value.trim(),condition:$('irCondition').value.trim(),notes:$('irNotes').value,setupKey:setup.key,analyzerId:setup.analyzerId,zeroId:setup.zeroId,zeroCert:setup.zeroCert,highId:setup.highId,highCert:setup.highCert,preZero:setup.preZero,preHigh:setup.preHigh,postZero:num($('irPostZero').value),postHigh:num($('irPostHigh').value),savedAt:new Date().toISOString()};
  const span=Math.abs(rec.highCert-rec.zeroCert)||Math.abs(rec.highCert);
  rec.zeroDrift=span&&Number.isFinite(rec.postZero)?100*(rec.postZero-rec.preZero)/span:NaN;
  rec.highDrift=span&&Number.isFinite(rec.postHigh)?100*(rec.postHigh-rec.preHigh)/span:NaN;
  state.instrumentRuns.unshift(rec);localStorage.setItem(INSTRUMENT_RUN_KEY,JSON.stringify(state.instrumentRuns));renderInstrumentRuns();renderJobHub();
}
function deleteInstrumentRun(id){if(!confirm('Delete this analyzer run?'))return;state.instrumentRuns=state.instrumentRuns.filter(r=>r.id!==id);localStorage.setItem(INSTRUMENT_RUN_KEY,JSON.stringify(state.instrumentRuns));renderInstrumentRuns();renderJobHub();}
window.deleteInstrumentRun=deleteInstrumentRun;
function instrumentRunStatus(){
  const defs=instrumentDefs(),missing=[];
  defs.forEach(d=>{const rs=state.instrumentRuns.filter(r=>r.jobId===state.job.id&&r.method===d.method&&r.channel===d.channel);if(!rs.length)missing.push(`M${d.method} ${d.channel}: no run`);rs.forEach(r=>{if(!r.start||!r.end||!Number.isFinite(r.reading)||!Number.isFinite(r.postZero)||!Number.isFinite(r.postHigh))missing.push(`M${d.method} ${d.channel} Run ${r.runNo}: incomplete`);});});
  const runs=state.instrumentRuns.filter(r=>r.jobId===state.job.id);return{totalDefs:defs.length,runs,missing,ready:defs.length===0||missing.length===0};
}
function renderInstrumentRuns(){
  if(!$('instrumentRunList'))return;
  $('instrumentRunBanner').innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'Client'} • ${state.job.facility||'Facility'} • ${state.job.stack||'Unit / Stack'}</div>`;
  populateInstrumentChannels();renderInstrumentPretest();calcInstrumentPost();
  const rs=state.instrumentRuns.filter(r=>r.jobId===state.job.id).sort((a,b)=>`${a.method}${a.channel}${a.runNo}`.localeCompare(`${b.method}${b.channel}${b.runNo}`));
  $('instrumentRunList').innerHTML=rs.length?rs.map(r=>`<div class="saved-card"><strong>M${r.method} ${escapeHtml(r.channel)} — Run ${r.runNo}</strong><div class="hint">${escapeHtml(r.analyzerId||'')} • ${Number.isFinite(r.reading)?r.reading:'—'} ${escapeHtml(r.units||'')} • ${escapeHtml(r.start||'')} → ${escapeHtml(r.end||'')}</div><div class="hint">Zero drift: ${Number.isFinite(r.zeroDrift)?r.zeroDrift.toFixed(2)+'%':'—'} • High drift: ${Number.isFinite(r.highDrift)?r.highDrift.toFixed(2)+'%':'—'}</div><div class="actions"><button class="ghost" onclick="deleteInstrumentRun(${r.id})">Delete</button></div></div>`).join(''):'<div class="empty">No instrumental runs saved for this job.</div>';
}
$('newInstrumentRun').onclick=newInstrumentRun;$('saveInstrumentRun').onclick=saveInstrumentRun;
$('irChannel').onchange=()=>{const d=currentInstrumentDef();$('irUnits').value=d?.units||'';$('irRunNo').value=nextInstrumentRunNo(d);renderInstrumentPretest();calcInstrumentPost();};
$('irPostZero').oninput=calcInstrumentPost;$('irPostHigh').oninput=calcInstrumentPost;


// Multi-run analyzer summaries
function avg(values){const v=values.filter(Number.isFinite);return v.length?v.reduce((a,b)=>a+b,0)/v.length:NaN;}
function groupedInstrumentRuns(){
  const groups=new Map();
  state.instrumentRuns.filter(r=>r.jobId===state.job.id).forEach(r=>{
    const key=`${r.method}|${r.channel}`;
    if(!groups.has(key))groups.set(key,{method:r.method,channel:r.channel,units:r.units||'',runs:[]});
    groups.get(key).runs.push(r);
  });
  groups.forEach(g=>g.runs.sort((a,b)=>(Number(a.runNo)||0)-(Number(b.runNo)||0)));
  return [...groups.values()].sort((a,b)=>`${a.method}${a.channel}`.localeCompare(`${b.method}${b.channel}`));
}
function runGroupSummary(g){
  return {count:g.runs.length,average:avg(g.runs.map(r=>Number(r.reading))),avgZeroDrift:avg(g.runs.map(r=>Number(r.zeroDrift))),avgHighDrift:avg(g.runs.map(r=>Number(r.highDrift))),complete:g.runs.every(r=>r.start&&r.end&&Number.isFinite(r.reading)&&Number.isFinite(r.postZero)&&Number.isFinite(r.postHigh))};
}
function saveSummaryToEmissions(method,channel){
  const g=groupedInstrumentRuns().find(x=>x.method===method&&x.channel===channel);if(!g)return;
  const s=runGroupSummary(g);if(!Number.isFinite(s.average)){alert('No valid run average is available.');return;}
  if($('emConc'))$('emConc').value=s.average;
  if($('emBasis'))$('emBasis').value='dry';
  state.job.latestAnalyzerAverage={method,channel,value:s.average,units:g.units||'',savedAt:new Date().toISOString()};saveJob();
  if(typeof renderEmissions==='function')renderEmissions();show('emissions');
}
window.saveSummaryToEmissions=saveSummaryToEmissions;
function renderRunSummary(){
  if(!$('runSummaryCards'))return;
  $('runSummaryBanner').innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'Client'} • ${state.job.facility||'Facility'} • ${state.job.stack||'Unit / Stack'}</div>`;
  const groups=groupedInstrumentRuns();
  if(!groups.length){$('runSummaryCards').innerHTML='<div class="card empty">No saved instrumental runs for this job yet.</div>';return;}
  $('runSummaryCards').innerHTML=groups.map(g=>{
    const s=runGroupSummary(g),rows=g.runs.map(r=>`<div class="check-item"><div class="meta"><strong>Run ${r.runNo}</strong><span>${Number.isFinite(r.reading)?r.reading:'—'} ${escapeHtml(r.units||g.units||'')} • ${escapeHtml(r.start||'')} → ${escapeHtml(r.end||'')}</span></div><span class="badge ${r.start&&r.end&&Number.isFinite(r.reading)&&Number.isFinite(r.postZero)&&Number.isFinite(r.postHigh)?'':'subtle'}">${r.start&&r.end&&Number.isFinite(r.reading)&&Number.isFinite(r.postZero)&&Number.isFinite(r.postHigh)?'COMPLETE':'INCOMPLETE'}</span></div>`).join('');
    return `<div class="card"><div class="section-head"><div><h3>M${g.method} — ${escapeHtml(g.channel)}</h3><div class="hint">${s.count} saved run(s)</div></div><span class="badge ${s.complete?'':'subtle'}">${s.complete?'COMPLETE':'REVIEW'}</span></div>${rows}<div class="mini-results"><div><span>Test Average</span><strong>${Number.isFinite(s.average)?s.average.toFixed(3):'—'} ${escapeHtml(g.units||'')}</strong></div><div><span>Avg Zero Drift</span><strong>${Number.isFinite(s.avgZeroDrift)?s.avgZeroDrift.toFixed(2)+'%':'—'}</strong></div><div><span>Avg High Drift</span><strong>${Number.isFinite(s.avgHighDrift)?s.avgHighDrift.toFixed(2)+'%':'—'}</strong></div></div><div class="actions"><button class="primary" onclick="saveSummaryToEmissions('${g.method}','${String(g.channel).replace(/'/g,"\\'")}')">Use Average in Emissions</button></div></div>`;
  }).join('');
}
$('refreshRunSummary').onclick=renderRunSummary;
function runSummaryStatus(){
  const groups=groupedInstrumentRuns();
  if(!instrumentDefs().length)return {ready:true,total:0,incomplete:[]};
  const needed=instrumentDefs().map(d=>`${d.method}|${d.channel}`),incomplete=[];
  needed.forEach(k=>{const g=groups.find(x=>`${x.method}|${x.channel}`===k);if(!g)incomplete.push(k.replace('|',' '));else if(!runGroupSummary(g).complete)incomplete.push(k.replace('|',' ')+' incomplete');});
  return {ready:incomplete.length===0,total:needed.length,incomplete};
}


// Field summary / report generator
const FIELD_REPORT_KEY='stf_field_report_v17';
state.fieldReports=JSON.parse(localStorage.getItem(FIELD_REPORT_KEY)||'[]');
function latestFieldReportMeta(){return state.fieldReports.find(x=>x.jobId===state.job.id)||null;}
function saveFieldReportMeta(){
  const rec={jobId:state.job.id,preparedBy:$('frPreparedBy').value.trim(),reviewedBy:$('frReviewedBy').value.trim(),title:$('frTitle').value.trim()||'Field Test Summary',status:$('frStatus').value,execNotes:$('frExecNotes').value,savedAt:new Date().toISOString()};
  state.fieldReports=state.fieldReports.filter(x=>x.jobId!==state.job.id);state.fieldReports.unshift(rec);localStorage.setItem(FIELD_REPORT_KEY,JSON.stringify(state.fieldReports));renderFieldReport();
}
function safeVal(v,d=3){return Number.isFinite(Number(v))?Number(v).toFixed(d):'—';}
function reportTable(rows){return `<div class="saved-list">${rows.map(r=>`<div class="saved-card"><strong>${escapeHtml(r[0])}</strong><div class="hint">${escapeHtml(String(r[1]??'—'))}</div></div>`).join('')}</div>`;}
function fieldReportSections(){
  const s=[],methods=(state.job.methods||[]).map(x=>'M'+x).join(', ')||'None selected';
  s.push({title:'Project',body:reportTable([['Project / WO',state.job.project||'—'],['Client',state.job.client||'—'],['Facility',state.job.facility||'—'],['Unit / Stack',state.job.stack||'—'],['Test Date',state.job.date||'—'],['Tester',state.job.tester||'—'],['Methods',methods]])});
  if(state.job.latestM3A){const x=state.job.latestM3A;s.push({title:'Method 3A',body:reportTable([['O2',safeVal(x.o2,2)+' %'],['CO2',safeVal(x.co2,2)+' %'],['Derived Dry MW',safeVal(x.md,3)],['Basis',x.basis||'—']])});}
  if(state.job.latestM4){const x=state.job.latestM4;s.push({title:'Method 4 / Moisture',body:reportTable([['Moisture',safeVal((x.bws||0)*100,2)+' %'],['Bws',safeVal(x.bws,5)],['Water Collected',safeVal(x.waterMass,2)],['Corrected Dry Gas Volume',safeVal(x.vmStdCorrected??x.vmStd,3)]])});}
  const eq=jobEquipmentCheck(state.job.date||new Date().toISOString().slice(0,10));s.push({title:'Equipment Readiness',body:reportTable([['Assigned Equipment',(state.job.equipmentIds||[]).join(', ')||'None'],['Status',eq.ready?'READY':'HOLD'],['Issues',eq.issues.length?eq.issues.join('; '):'None']])});
  const g=analyzerGasCheck();s.push({title:'Calibration Gas Readiness',body:reportTable([['Gas Slots',g.demand.length],['Status',g.ready?'READY':'HOLD'],['Issues',g.issues.length?g.issues.join('; '):'None']])});
  const setup=analyzerSetupStatus();if(setup.total)s.push({title:'Analyzer Pre-Test Setup',body:reportTable([['Setup Sheets',`${setup.complete}/${setup.total}`],['Status',setup.ready?'COMPLETE':'HOLD'],['Missing',setup.missing.length?setup.missing.join(', '):'None']])});
  const groups=groupedInstrumentRuns();if(groups.length)s.push({title:'Instrumental Run Summary',body:`<div class="saved-list">${groups.map(x=>{const r=runGroupSummary(x);return `<div class="saved-card"><strong>M${x.method} — ${escapeHtml(x.channel)}</strong><div class="hint">${x.runs.length} run(s) • Average: ${Number.isFinite(r.average)?r.average.toFixed(3):'—'} ${escapeHtml(x.units||'')} • Avg zero drift: ${Number.isFinite(r.avgZeroDrift)?r.avgZeroDrift.toFixed(2)+'%':'—'} • Avg high drift: ${Number.isFinite(r.avgHighDrift)?r.avgHighDrift.toFixed(2)+'%':'—'}</div></div>`;}).join('')}</div>`});
  const e=(state.emissions||[]).filter(x=>!x.jobId||x.jobId===state.job.id)[0];if(e)s.push({title:'Emissions',body:reportTable([['Pollutant',e.pollutant||'—'],['Concentration',`${e.conc??e.concentration??'—'} ${e.units||'ppm'}`],['lb/hr',safeVal(e.lbhr,3)],['lb/day',safeVal(e.lbday,2)],['tons/day',safeVal(e.tonsday,4)],['tons/year',safeVal(e.tonsyear,3)]])});
  const close=state.closeouts?.find(x=>x.jobId===state.job.id)||state.job.latestCloseout;if(close)s.push({title:'Job Closeout',body:reportTable([['Final Field Status',close.status||'—'],['Field Lead',close.lead||'—'],['Closeout Time',close.time||'—'],['Hold Items',(close.holdItems||[]).join(', ')||'None'],['Closeout Notes',close.notes||'—']])});
  s.push({title:'Field Notes',body:`<div class="saved-card"><div class="hint">${escapeHtml((state.job.notes||'').trim()||'No field notes entered.')}</div></div>`});
  return s;
}
function renderFieldReport(){
  if(!$('fieldReportContent'))return;const m=latestFieldReportMeta();
  $('fieldReportBanner').innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'Client'} • ${state.job.facility||'Facility'} • ${state.job.stack||'Unit / Stack'}</div>`;
  $('frPreparedBy').value=m?.preparedBy||state.job.tester||'';$('frReviewedBy').value=m?.reviewedBy||'';$('frTitle').value=m?.title||'Field Test Summary';$('frStatus').value=m?.status||'Draft';$('frExecNotes').value=m?.execNotes||'';
  $('fieldReportContent').innerHTML=fieldReportSections().map(x=>`<div class="card"><h3>${escapeHtml(x.title)}</h3>${x.body}</div>`).join('');
}
function printFieldReport(){renderFieldReport();window.print();}
$('saveFieldReportMeta').onclick=saveFieldReportMeta;$('printFieldReport').onclick=printFieldReport;$('refreshFieldReport').onclick=renderFieldReport;


// Full local backup / restore
const BACKUP_FORMAT='StackTestFieldBackup';
const BACKUP_VERSION='1.8';

function localStorageSnapshot(){
  const data={};
  for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    if(!key)continue;
    if(key.startsWith('stf_')||key.startsWith('stacktest_')){
      data[key]=localStorage.getItem(key);
    }
  }
  return data;
}
function backupObject(){
  return {format:BACKUP_FORMAT,version:BACKUP_VERSION,exportedAt:new Date().toISOString(),app:'StackTest Field',activeJobId:state.job?.id||null,localStorage:localStorageSnapshot()};
}
function backupCounts(){
  return {jobs:(state.jobs||[]).length,equipment:(state.equipment||[]).length,gases:(state.gases||[]).length,analyzerRuns:(state.instrumentRuns||[]).length,reports:(state.fieldReports||[]).length};
}
function renderBackup(){
  if(!$('backupSummary'))return;
  const c=backupCounts();
  $('backupSummary').innerHTML=`<div><span>Jobs</span><strong>${c.jobs}</strong></div><div><span>Equipment</span><strong>${c.equipment}</strong></div><div><span>Cal Gases</span><strong>${c.gases}</strong></div><div><span>Analyzer Runs</span><strong>${c.analyzerRuns}</strong></div><div><span>Reports</span><strong>${c.reports}</strong></div>`;
}
function downloadBackup(){
  const blob=new Blob([JSON.stringify(backupObject(),null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=`StackTest_Field_Backup_${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
async function copyBackup(){
  const txt=JSON.stringify(backupObject(),null,2);
  try{await navigator.clipboard.writeText(txt);$('copyBackup').textContent='Copied ✓';setTimeout(()=>$('copyBackup').textContent='Copy Backup JSON',1000);}
  catch(e){$('restoreJson').value=txt;$('restoreStatus').textContent='Clipboard blocked. Backup JSON placed in the text box for manual copy.';}
}
function validateBackup(obj){
  if(!obj||obj.format!==BACKUP_FORMAT)throw new Error('This is not a StackTest Field backup.');
  if(!obj.localStorage||typeof obj.localStorage!=='object')throw new Error('Backup data is missing.');
}
function applyBackup(obj){
  validateBackup(obj);
  const remove=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&(k.startsWith('stf_')||k.startsWith('stacktest_')))remove.push(k);}
  remove.forEach(k=>localStorage.removeItem(k));
  Object.entries(obj.localStorage).forEach(([k,v])=>{if(typeof v==='string')localStorage.setItem(k,v);});
}
async function restoreBackup(){
  try{
    let txt=$('restoreJson').value.trim();
    const f=$('restoreFile').files?.[0];if(f)txt=await f.text();
    if(!txt)throw new Error('Choose a backup file or paste backup JSON.');
    const obj=JSON.parse(txt);validateBackup(obj);
    if(!confirm(`Restore backup from ${obj.exportedAt||'unknown date'}? This replaces StackTest Field data on this device.`))return;
    applyBackup(obj);
    $('restoreStatus').innerHTML='<strong>RESTORED</strong> — Reloading with restored data.';
    setTimeout(()=>location.reload(),500);
  }catch(e){$('restoreStatus').innerHTML=`<strong>RESTORE FAILED</strong> — ${escapeHtml(e.message||String(e))}`;}
}
$('exportBackup').onclick=downloadBackup;
$('copyBackup').onclick=copyBackup;
$('restoreBackup').onclick=restoreBackup;
$('restoreFile').onchange=()=>{const f=$('restoreFile').files?.[0];if(f)$('restoreStatus').textContent=`Selected: ${f.name}`;};

function closeoutSnapshot(){
  const m=metrics();
  const methodSet=new Set(state.job.methods);
  const regularRuns=state.runs.filter(r=>r.jobId===state.job.id);
  const isoRuns=state.isoRuns.filter(r=>r.jobId===state.job.id);
  const recs=state.recoveries.filter(r=>r.jobId===state.job.id);
  const analyzer=state.analyzer.filter(r=>r.jobId===state.job.id);
  const m3a=state.m3a.filter(r=>r.jobId===state.job.id);
  const m4=state.m4.filter(r=>r.jobId===state.job.id);
  const emissions=state.emissions.filter(r=>r.jobId===state.job.id);
  const cocs=state.cocs.filter(r=>r.jobId===state.job.id);
  const needsIso=[...methodSet].filter(x=>['5','26A','29'].includes(x));
  const needsAnalyzer=[...methodSet].filter(x=>['3A','6C','7E','10','25A'].includes(x));
  const completeRecovery=recs.filter(r=>r.containers&&r.containers.length&&r.containers.every(c=>c.recovered&&c.labeled&&c.sealed)).length;
  const completeCoc=cocs.filter(c=>c.checks&&Object.values(c.checks).every(Boolean)).length;
  const leakComplete=isoRuns.filter(r=>Number.isFinite(r.inputs?.postLeak)&&Number.isFinite(r.inputs?.postVac)).length;
  const checks=[];
  checks.push({name:'Job methods selected',done:state.job.methods.length>0,detail:state.job.methods.length?state.job.methods.map(x=>'M'+x).join(', '):'No methods selected',go:'methods'});
  checks.push({name:'Core mobilization loadout',done:m.loadTotal>0&&m.loadDone===m.loadTotal,detail:`${m.loadDone}/${m.loadTotal} core items checked`,go:'checklist'});
  const eqc=jobEquipmentCheck(state.job.date||new Date().toISOString().slice(0,10));checks.push({name:'Assigned equipment calibration/status',done:eqc.ready,detail:(state.job.equipmentIds||[]).length?(eqc.ready?`${eqc.ids.length} assigned item(s) ready`:eqc.issues.join('; ')):'No equipment IDs assigned to job',go:'equipment'});
  const gqc=analyzerGasCheck();checks.push({name:'Calibration gas readiness',done:gqc.ready,detail:gqc.demand.length?(gqc.ready?`${gqc.demand.length} gas slot(s) ready`:gqc.issues.join('; ')):'No analyzer gas package required',go:'gases'});
  const asc=analyzerSetupStatus();checks.push({name:'Analyzer pre-test setup',done:asc.ready,detail:asc.total?(asc.ready?`${asc.complete}/${asc.total} setup sheet(s) complete`:`Missing: ${asc.missing.join(', ')}`):'No analyzer setup required',go:'analyzerSetup'});
  const irs=instrumentRunStatus();checks.push({name:'Instrumental runs / post-test QA',done:irs.ready,detail:irs.totalDefs?(irs.ready?`${irs.runs.length} saved analyzer run(s) complete`:irs.missing.join('; ')):'No instrumental runs required',go:'instrumentRuns'});
  const rss=runSummaryStatus();checks.push({name:'Multi-run test summary',done:rss.ready,detail:rss.total?(rss.ready?`${rss.total} channel summary(ies) complete`:`Review: ${rss.incomplete.join(', ')}`):'No analyzer summary required',go:'runSummary'});
  checks.push({name:'Method QA / field prompts',done:m.qaTotal>0&&m.qaDone===m.qaTotal,detail:`${m.qaDone}/${m.qaTotal} prompts complete`,go:'qa'});
  if(methodSet.has('1')) checks.push({name:'Method 1 traverse plan',done:!!state.job.latestM1,detail:state.job.latestM1?'Traverse plan saved':'No saved traverse plan',go:'m1'});
  if(methodSet.has('2')) checks.push({name:'Method 2 flow run',done:regularRuns.length>0,detail:`${regularRuns.length} saved Method 2 run(s)`,go:'m2'});
  if(methodSet.has('3A')) checks.push({name:'Method 3A result',done:m3a.length>0,detail:`${m3a.length} saved result(s)`,go:'m3a'});
  if(methodSet.has('4')) checks.push({name:'Method 4 moisture result',done:m4.length>0,detail:`${m4.length} saved result(s)`,go:'m4'});
  if(needsAnalyzer.length) checks.push({name:'Analyzer QA records',done:analyzer.length>=needsAnalyzer.length,detail:`${analyzer.length} saved QA record(s) for ${needsAnalyzer.map(x=>'M'+x).join(', ')}`,go:'analyzer'});
  if(needsIso.length){
    checks.push({name:'Isokinetic run record',done:isoRuns.length>0,detail:`${isoRuns.length} saved isokinetic run(s)`,go:'iso'});
    checks.push({name:'Post-test leak check recorded',done:isoRuns.length>0&&leakComplete===isoRuns.length,detail:`${leakComplete}/${isoRuns.length||0} saved run(s) with post-test leak data`,go:'iso'});
    checks.push({name:'Sample recovery complete',done:recs.length>0&&completeRecovery===recs.length,detail:`${completeRecovery}/${recs.length||0} recovery package(s) complete`,go:'recovery'});
    checks.push({name:'Chain of custody complete',done:completeCoc>0,detail:completeCoc?`${completeCoc} complete COC record(s)`:'No complete COC saved',go:'recovery'});
  }
  if(methodSet.size&&([...methodSet].some(x=>['3A','6C','7E','10','25A','2'].includes(x)))) checks.push({name:'Emissions result reviewed',done:emissions.length>0,detail:`${emissions.length} saved emissions result(s)`,go:'emissions',advisory:true});
  checks.push({name:'Field notes reviewed',done:!!(state.job.notes||'').trim(),detail:(state.job.notes||'').trim()?'Notes saved':'No field notes entered',go:'qa',advisory:true});
  const required=checks.filter(c=>!c.advisory), hold=required.filter(c=>!c.done), advisory=checks.filter(c=>c.advisory&&!c.done);
  return {checks,required,hold,advisory,ready:required.length>0&&hold.length===0};
}
function renderCloseout(){
  renderBanners(); const s=closeoutSnapshot();
  $('closeoutBanner').innerHTML=`<strong>${jobName()}</strong><div class="hint">${state.job.client||'Client'} • ${state.job.facility||'Facility'} • ${state.job.stack||'Unit / Stack'}</div><div class="method-chips">${state.job.methods.map(x=>`<span>M${x}</span>`).join('')}</div>`;
  $('closeoutOverall').innerHTML=`<div class="section-head"><div><strong>Final Field Status</strong><div class="hint">${s.ready?'All required closeout checks in this app are complete.':'Resolve the hold items below before closing the job.'}</div></div><span class="badge ${s.ready?'':'subtle'}">${s.ready?'READY TO CLOSE':'HOLD'}</span></div><div class="mini-results"><div><span>Required Complete</span><strong>${s.required.length-s.hold.length}/${s.required.length}</strong></div><div><span>Hold Items</span><strong>${s.hold.length}</strong></div><div><span>Advisories</span><strong>${s.advisory.length}</strong></div></div>`;
  $('closeoutChecks').innerHTML=s.checks.map(c=>`<button class="check-item closeout-item" data-go="${c.go}"><div class="meta"><strong>${c.done?'✓':'✕'} ${c.name}</strong><span>${c.detail}${c.advisory?' • advisory':' '}</span></div><span class="badge ${c.done?'':'subtle'}">${c.done?'DONE':(c.advisory?'REVIEW':'HOLD')}</span></button>`).join('');
  $('closeoutChecks').querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));
  const last=state.closeouts.find(x=>x.jobId===state.job.id); if(last){$('closeoutLead').value=last.lead||'';$('closeoutTime').value=last.time||'';$('closeoutNotes').value=last.notes||'';$('closeoutConfirm').checked=!!last.confirm;}
}
$('refreshCloseout').onclick=renderCloseout;
$('saveCloseout').onclick=()=>{const s=closeoutSnapshot();const rec={id:Date.now(),jobId:state.job.id,lead:$('closeoutLead').value.trim(),time:$('closeoutTime').value,notes:$('closeoutNotes').value,confirm:$('closeoutConfirm').checked,status:s.ready?'READY TO CLOSE':'HOLD',holdItems:s.hold.map(x=>x.name),savedAt:new Date().toISOString()};state.closeouts=state.closeouts.filter(x=>x.jobId!==state.job.id);state.closeouts.unshift(rec);localStorage.setItem(CLOSEOUT_KEY,JSON.stringify(state.closeouts));state.job.latestCloseout=rec;saveJob();renderCloseout();renderJobHub();$('saveCloseout').textContent=rec.status==='READY TO CLOSE'?'Closeout Saved ✓':'HOLD Saved ✓';setTimeout(()=>$('saveCloseout').textContent='Save Closeout Review',1000);};

syncJobInputs();if(state.job.latestM3A&&Number.isFinite(state.job.latestM3A.md))$('md').value=state.job.latestM3A.md.toFixed(3);if(state.job.latestM4&&Number.isFinite(state.job.latestM4.bws))$('bws').value=state.job.latestM4.bws.toFixed(5);renderJobHub();renderMethods();renderPoints();renderBanners();renderM1();renderIso();renderRecovery();renderCloseout();renderM3A();renderM4();renderEmissions();renderChecklist();renderEquipment();renderGasInventory();renderAnalyzer();renderQA();renderRuns();

if($('saveProfile'))$('saveProfile').onclick=saveCurrentProfile;if($('newJobFromHistory'))$('newJobFromHistory').onclick=startNewJob;if($('newBlankJob'))$('newBlankJob').onclick=startNewJob;
