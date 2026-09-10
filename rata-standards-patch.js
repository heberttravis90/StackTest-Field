/* Stack Test Pro — Part 60 RATA applicable-standard corrections
   Loaded after the main app so the field calculator can be corrected without
   duplicating the full single-file application. The applicable PS/subpart,
   approved protocol, and permit remain controlling requirements. */
(function(){
  'use strict';

  const STP_PS_CRITERIA={
    PS3:{meanPct:20,abs:1,absUsesCc:false},
    PS4:{meanPct:10,stdPct:5},
    PS4A:{meanPct:10,stdPct:5,abs:5,absUsesCc:true},
    PS5:{meanPct:20,stdPct:10},
    PS6:{meanPct:20,stdPct:10},
    PS7:{meanPct:20,stdPct:10},
    PS8:{meanPct:20,stdPct:10}
  };

  function ensureRata60StandardUi(){
    const standardInput=$("rata60Standard"),grid=standardInput?.closest(".grid");
    if(!standardInput||!grid)return;

    let pollutantWrap=$("rata60PollutantWrap");
    if(!pollutantWrap){
      pollutantWrap=document.createElement("label");
      pollutantWrap.id="rata60PollutantWrap";
      pollutantWrap.innerHTML='PS 2 pollutant<select id="rata60Pollutant"><option value="NOx">NOx</option><option value="SO2">SO₂</option></select>';
      standardInput.closest("label")?.insertAdjacentElement("afterend",pollutantWrap);
      const pollutant=$("rata60Pollutant");
      pollutant.value=(state.rata60Pollutant==="SO2")?"SO2":"NOx";
      pollutant.addEventListener("change",e=>{state.rata60Pollutant=e.target.value;rata60Field();save();});
    }

    let unitsWrap=$("rata60StdUnitsWrap");
    if(!unitsWrap){
      unitsWrap=document.createElement("label");
      unitsWrap.id="rata60StdUnitsWrap";
      unitsWrap.innerHTML='Emission-standard units<select id="rata60StdUnits"><option value="other">Other / reporting units</option><option value="lbmmbtu">lb/MMBtu</option><option value="ngj">ng/J</option></select>';
      pollutantWrap.insertAdjacentElement("afterend",unitsWrap);
      const units=$("rata60StdUnits"),saved=state.rata60StdUnits;
      units.value=["lbmmbtu","ngj"].includes(saved)?saved:"other";
      units.addEventListener("change",e=>{state.rata60StdUnits=e.target.value;rata60Field();save();});
    }

    let note=$("rata60StandardBasisNote");
    if(!note){
      note=document.createElement("div");
      note.id="rata60StandardBasisNote";
      note.className="status neutral";
      grid.insertAdjacentElement("afterend",note);
    }

    const ps=$("rata60Ps")?.value||"PS2",show=ps==="PS2";
    pollutantWrap.style.display=show?"":"none";
    unitsWrap.style.display=show?"":"none";
    note.style.display=show?"":"none";
    if(show){
      note.textContent="PS 2 automatically selects the governing RM-mean or applicable-standard basis. The displayed Relative Accuracy value uses that same governing denominator.";
    }
  }

  function correctedEvaluatePart60(s){
    ensureRata60StandardUi();
    const ps=$("rata60Ps")?.value||"PS2";
    const standard=num("rata60Standard"),customRa=num("rata60CustomRa"),customAbs=num("rata60CustomAbs");
    const tests=[];
    const numerator=(s.ad!=null&&s.cc!=null)?Math.abs(s.ad)+Math.abs(s.cc):null;
    let displayRa=null,basis=null,ratio=null,limitPct=null;

    if(ps==="PS2"){
      const ready=standard!=null&&standard!==0&&s.ar!=null&&s.ar!==0&&numerator!=null;
      if(!ready){
        tests.push({name:"PS 2 needs the applicable emission standard and paired-run statistics to select the correct RA basis",pass:false,ready:false});
      }else{
        ratio=Math.abs(s.ar)/Math.abs(standard);
        const pollutant=$("rata60Pollutant")?.value||state.rata60Pollutant||"NOx";
        const units=$("rata60StdUnits")?.value||state.rata60StdUnits||"other";

        if(ratio>=0.5){
          limitPct=20;
          basis="RM mean";
          displayRa=numerator/Math.abs(s.ar)*100;
          const limit=Math.abs(s.ar)*limitPct/100;
          tests.push({
            name:`PS 2 RM-mean basis: RA ${fmt(displayRa,2)}% ≤ ${fmt(limitPct,1)}%; RM mean is ${fmt(ratio*100,1)}% of the applicable standard`,
            pass:numerator<=limit,
            ready:true
          });
        }else{
          let pct=10,special="";
          if(pollutant==="SO2"&&units==="lbmmbtu"){
            const v=Math.abs(standard);
            if(v<0.20){pct=20;special=" — SO₂ standard below 0.20 lb/MMBtu";}
            else if(v<=0.30){pct=15;special=" — SO₂ standard 0.20–0.30 lb/MMBtu";}
          }else if(pollutant==="SO2"&&units==="ngj"){
            const v=Math.abs(standard);
            if(v<86){pct=20;special=" — SO₂ standard below 86 ng/J";}
            else if(v<=130){pct=15;special=" — SO₂ standard 86–130 ng/J";}
          }
          limitPct=pct;
          basis="applicable emission standard";
          displayRa=numerator/Math.abs(standard)*100;
          const limit=Math.abs(standard)*pct/100;
          tests.push({
            name:`PS 2 applicable-standard basis: RA ${fmt(displayRa,2)}% ≤ ${fmt(pct,1)}%; RM mean is ${fmt(ratio*100,1)}% of the applicable standard${special}`,
            pass:numerator<=limit,
            ready:true
          });
        }
      }
    }else{
      const cfg=STP_PS_CRITERIA[ps];
      if(cfg?.meanPct!=null){
        tests.push({name:`RA ≤ ${cfg.meanPct}% of RM mean`,pass:s.ra!=null&&s.ra<=cfg.meanPct,ready:s.ra!=null});
      }
      if(cfg?.stdPct!=null){
        tests.push({
          name:`|mean difference| + CC ≤ ${cfg.stdPct}% of emission standard`,
          pass:standard!=null&&numerator!=null&&numerator<=Math.abs(standard)*cfg.stdPct/100,
          ready:standard!=null&&numerator!=null
        });
      }
      if(cfg?.abs!=null){
        const absMetric=cfg.absUsesCc?numerator:(s.ad==null?null:Math.abs(s.ad));
        const label=cfg.absUsesCc?"|mean difference| + CC":"|CEMS mean − RM mean|";
        tests.push({name:`${label} ≤ ${cfg.abs} reporting units`,pass:absMetric!=null&&absMetric<=cfg.abs,ready:absMetric!=null});
      }
      if(!cfg&&customRa!=null){
        tests.push({name:`RA ≤ ${customRa}%`,pass:s.ra!=null&&s.ra<=customRa,ready:s.ra!=null});
      }
      if(!cfg&&customAbs!=null){
        tests.push({name:`|mean difference| + CC ≤ ${customAbs}`,pass:numerator!=null&&numerator<=customAbs,ready:numerator!=null});
      }
    }

    return {ps,tests,passing:tests.filter(x=>x.ready&&x.pass),ready:tests.some(x=>x.ready),displayRa,basis,ratio,limitPct};
  }

  let baseRata60Field=null;
  try{baseRata60Field=rata60Field;}catch(_e){baseRata60Field=window.rata60Field;}

  function correctedRata60Field(){
    const result=baseRata60Field?baseRata60Field():null;
    if(!result)return result;

    const evaluation=result.evaluation;
    if(evaluation?.ps==="PS2"&&evaluation.displayRa!=null){
      const raEl=$("rata60RelDiff");
      if(raEl)raEl.textContent=fmt(evaluation.displayRa,2);
      result.rel=evaluation.displayRa;
      result.raBasis=evaluation.basis;

      const note=$("rata60StandardBasisNote");
      if(note){
        const ratioText=evaluation.ratio==null?"—":`${fmt(evaluation.ratio*100,1)}%`;
        note.className="status neutral";
        note.textContent=`PS 2 calculation basis: ${evaluation.basis}. RM mean is ${ratioText} of the applicable emission standard, so the displayed RA is ${fmt(evaluation.displayRa,2)}% using the governing denominator.`;
      }
    }
    return result;
  }

  try{evaluatePart60=correctedEvaluatePart60;}catch(_e){window.evaluatePart60=correctedEvaluatePart60;}
  try{rata60Field=correctedRata60Field;}catch(_e){window.rata60Field=correctedRata60Field;}
  window.ensureRata60StandardUi=ensureRata60StandardUi;

  try{ensureRata60StandardUi();rata60Field();}catch(e){console.warn("Stack Test Pro RATA standards patch:",e);}
})();
/* Stack Test Pro — Mobilization hotfix 2026-09-10
   Fixes Method 16C availability, monorail style/length population/migration,
   and duplicate Method 4 + Method 5 load-out items without removing required gear. */
(function(){
  'use strict';

  const logPrefix='Stack Test Pro mobilization hotfix:';

  function safeRun(fn){
    try{return fn();}catch(e){console.warn(logPrefix,e);return null;}
  }

  function ensureMethod16C(){
    if(typeof METHOD_CATALOG!=='undefined' && Array.isArray(METHOD_CATALOG) && !METHOD_CATALOG.some(m=>m?.[0]==='16C')){
      const entry=['16C','Total Reduced Sulfur — Real Time Data','workspace','genericMethod'];
      const after=METHOD_CATALOG.findIndex(m=>m?.[0]==='16B');
      METHOD_CATALOG.splice(after>=0?after+1:METHOD_CATALOG.length,0,entry);
    }

    if(typeof ANALYZER_METHOD_CODES!=='undefined' && ANALYZER_METHOD_CODES?.add){
      ANALYZER_METHOD_CODES.add('16C');
    }

    if(typeof METHOD_PREP!=='undefined' && METHOD_PREP && !METHOD_PREP['16C']){
      METHOD_PREP['16C']={
        title:'Total Reduced Sulfur — Real Time Data',
        equipment:[
          'Method 16C TRS analyzer system',
          'SO₂ analyzer / instrumental analyzer',
          'Thermal oxidizer / converter',
          'Citrate buffer SO₂ scrubber / conditioning system',
          'Sample probe / sample line',
          'Sample pump / flow control',
          'Zero gas',
          'Calibration / span gas standards',
          'Gas cylinder certificates',
          'Regulators / calibration manifold',
          'DAS / laptop',
          'Communication cable',
          'Spare tubing / fittings',
          'Calibration / bias / drift field sheets'
        ],
        setup:[
          'Confirm Method 16C applicability and reporting basis',
          'Prepare citrate buffer scrubber and thermal oxidizer / converter',
          'Select analyzer span and verify calibration gas certificates',
          'Prepare system calibration, bias, and response-time checks'
        ],
        prelims:[
          'Expected TRS concentration',
          'Expected SO₂ concentration / interference',
          'Applicable limit and averaging basis',
          'Required run duration / data averaging period'
        ]
      };
    }

    if(typeof renderMethodCatalog==='function') renderMethodCatalog(document.getElementById('methodSearch')?.value||'');
    if(typeof renderMethodWorkspace==='function') renderMethodWorkspace();
    if(typeof renderSelectedMethods==='function') renderSelectedMethods();
    if(typeof renderHomeMethodChips==='function') renderHomeMethodChips();
  }

  const MONORAIL_STYLES=['Bolt-on Plate','Pin Style','Verify at Shop'];
  const MONORAIL_LENGTHS=[
    ['5','5 ft'],['8','8 ft'],['10','10 ft'],['12','12 ft'],['15','15 ft'],['Verify','Verify at Shop']
  ];

  function normalizeMonorail(m){
    const raw=(m&&typeof m==='object')?m:{};
    const style=String(raw.style||raw.type||'').trim()||'Verify at Shop';
    const rawLength=raw.length??raw.size??'Verify';
    const length=String(rawLength).replace(/\s*ft\.?$/i,'').trim()||'Verify';
    const quantity=Math.max(1,Math.floor(Number(raw.quantity??raw.qty??1)||1));
    return {style,length,quantity};
  }

  function populateMonorailControls(){
    const style=document.getElementById('monorailStyle');
    const length=document.getElementById('monorailLength');
    if(style){
      const current=style.value;
      style.innerHTML=MONORAIL_STYLES.map(x=>`<option value="${x}">${x}</option>`).join('');
      style.value=MONORAIL_STYLES.includes(current)?current:MONORAIL_STYLES[0];
    }
    if(length){
      const current=length.value;
      length.innerHTML=MONORAIL_LENGTHS.map(([value,label])=>`<option value="${value}">${label}</option>`).join('');
      length.value=MONORAIL_LENGTHS.some(([value])=>value===current)?current:MONORAIL_LENGTHS[0][0];
    }
  }

  const baseMonorailText=(typeof monorailEquipmentText==='function')?monorailEquipmentText:null;
  function fixedMonorailEquipmentText(m){
    const n=normalizeMonorail(m);
    const length=n.length==='Verify'?'Length: Verify at Shop':`${n.length} ft`;
    return `${n.quantity} × ${n.style} Monorail${n.quantity===1?'':'s'} — ${length}`;
  }

  const baseRenderMonorails=(typeof renderMonorails==='function')?renderMonorails:null;
  function fixedRenderMonorails(){
    populateMonorailControls();
    if(typeof state!=='undefined' && state){
      state.monorails=Array.isArray(state.monorails)?state.monorails.map(normalizeMonorail):[];
    }
    return baseRenderMonorails?baseRenderMonorails():undefined;
  }

  const baseAddMonorail=(typeof addMonorail==='function')?addMonorail:null;
  function fixedAddMonorail(){
    populateMonorailControls();
    if(baseAddMonorail) baseAddMonorail();
    if(typeof state!=='undefined' && state){
      state.monorails=Array.isArray(state.monorails)?state.monorails.map(normalizeMonorail):[];
      if(typeof save==='function') save();
    }
    fixedRenderMonorails();
    if(typeof buildEquipment==='function') buildEquipment();
    if(typeof renderMasterEquipment==='function') renderMasterEquipment();
  }

  // Extend the app's semantic dedupe rules so common Method 4 / Method 5 support gear
  // is represented once even when the same physical item has slightly different wording.
  const baseCanonical=(typeof canonicalEquipmentItem==='function')?canonicalEquipmentItem:null;
  function fixedCanonicalEquipmentItem(item){
    const raw=String(item||'').replace(/\s+/g,' ').trim();
    const key=raw.toLowerCase().replace(/[–—]/g,'-').replace(/\s*\/\s*/g,' / ');
    const aliases=new Map([
      ['umbilical','Umbilical / vacuum line'],
      ['umbilical / vacuum line','Umbilical / vacuum line'],
      ['silica gel holder','Silica gel container / holder'],
      ['silica gel container / holder','Silica gel container / holder'],
      ['impingers clamps / connectors','Impinger clamps / connectors'],
      ['impingers clamps / glass connectors','Impinger clamps / connectors'],
      ['impingers connectors / clamps','Impinger clamps / connectors'],
      ['dgm','DGM / meter console'],
      ['dgm / meter console','DGM / meter console'],
      ['ice chest / ice','Ice chest'],
      ['ice chest / cooling supplies as applicable','Ice chest'],
      ['ice chest if required by approved train','Ice chest']
    ]);
    return aliases.get(key)||(baseCanonical?baseCanonical(raw):raw);
  }

  const baseAllEquipment=(typeof allEquipment==='function')?allEquipment:null;
  function fixedAllEquipment(){
    let items=baseAllEquipment?baseAllEquipment():[];
    items=Array.isArray(items)?items.map(fixedCanonicalEquipmentItem):[];

    // These combined descriptions duplicate items already guaranteed by the base mobilization list.
    const baseCovered=new Set([
      'Extension cords / power strip',
      'Toolbox / spare fittings',
      'Field sheets / sample labels'
    ]);
    items=items.filter(item=>!baseCovered.has(item));

    // Method 5 already lists the actual stack/probe/filter-box thermocouples; don't also show a generic Thermocouples row.
    if(items.some(x=>['Stack thermocouple','Probe thermocouple','Filter-box thermocouple'].includes(x))){
      items=items.filter(x=>x!=='Thermocouples');
    }

    // On a Method 5 job the meter console is the load-out item; don't repeat the same metering package as DGM / meter console.
    if(items.includes('Method 5 meter console')){
      items=items.filter(x=>x!=='DGM / meter console');
    }

    const seen=new Set();
    const out=[];
    for(const item of items){
      const display=fixedCanonicalEquipmentItem(item);
      const key=display.toLowerCase().replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim();
      if(!key||seen.has(key)) continue;
      seen.add(key);
      out.push(display);
    }
    return out.sort((a,b)=>a.localeCompare(b));
  }

  safeRun(()=>{try{monorailEquipmentText=fixedMonorailEquipmentText;}catch(_e){window.monorailEquipmentText=fixedMonorailEquipmentText;}});
  safeRun(()=>{try{renderMonorails=fixedRenderMonorails;}catch(_e){window.renderMonorails=fixedRenderMonorails;}});
  safeRun(()=>{try{addMonorail=fixedAddMonorail;}catch(_e){window.addMonorail=fixedAddMonorail;}});
  safeRun(()=>{try{canonicalEquipmentItem=fixedCanonicalEquipmentItem;}catch(_e){window.canonicalEquipmentItem=fixedCanonicalEquipmentItem;}});
  safeRun(()=>{try{allEquipment=fixedAllEquipment;}catch(_e){window.allEquipment=fixedAllEquipment;}});

  // Rebind the existing add button because its original listener captured the pre-hotfix function.
  safeRun(()=>{
    const oldBtn=document.getElementById('addMonorailBtn');
    if(oldBtn && !oldBtn.dataset.hotfixBound){
      const fresh=oldBtn.cloneNode(true);
      fresh.dataset.hotfixBound='1';
      oldBtn.replaceWith(fresh);
      fresh.addEventListener('click',fixedAddMonorail);
    }
  });

  safeRun(ensureMethod16C);
  safeRun(populateMonorailControls);
  safeRun(fixedRenderMonorails);
  safeRun(()=>{if(typeof buildEquipment==='function') buildEquipment();});
  safeRun(()=>{if(typeof renderMasterEquipment==='function') renderMasterEquipment();});

  window.STP_MOBILIZATION_HOTFIX='2026-09-10';
})();
