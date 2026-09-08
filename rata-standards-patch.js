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
      note.textContent="PS 2 automatically selects the governing RM-mean or applicable-standard denominator. For SO₂, choose lb/MMBtu or ng/J so the low-standard 15% / 20% provisions can be applied when applicable.";
    }
  }

  function correctedEvaluatePart60(s){
    ensureRata60StandardUi();
    const ps=$("rata60Ps")?.value||"PS2";
    const standard=num("rata60Standard"),customRa=num("rata60CustomRa"),customAbs=num("rata60CustomAbs");
    const tests=[];
    const numerator=(s.ad!=null&&s.cc!=null)?Math.abs(s.ad)+Math.abs(s.cc):null;

    if(ps==="PS2"){
      const ready=standard!=null&&standard!==0&&s.ar!=null&&numerator!=null;
      if(!ready){
        tests.push({name:"PS 2 needs the applicable emission standard to select the correct RA basis",pass:false,ready:false});
      }else{
        const ratio=Math.abs(s.ar)/Math.abs(standard);
        const pollutant=$("rata60Pollutant")?.value||state.rata60Pollutant||"NOx";
        const units=$("rata60StdUnits")?.value||state.rata60StdUnits||"other";

        if(ratio>=0.5){
          const limit=Math.abs(s.ar)*0.20;
          tests.push({
            name:`PS 2 RM-mean basis: RM mean ${fmt(ratio*100,1)}% of standard; RA ≤ 20% of RM mean (allowable numerator ${fmt(limit,4)})`,
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
          const limit=Math.abs(standard)*pct/100;
          tests.push({
            name:`PS 2 applicable-standard basis: RM mean ${fmt(ratio*100,1)}% of standard; RA ≤ ${pct}% of standard${special} (allowable numerator ${fmt(limit,4)})`,
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

    return {ps,tests,passing:tests.filter(x=>x.ready&&x.pass),ready:tests.some(x=>x.ready)};
  }

  try{evaluatePart60=correctedEvaluatePart60;}catch(_e){window.evaluatePart60=correctedEvaluatePart60;}
  window.ensureRata60StandardUi=ensureRata60StandardUi;

  try{ensureRata60StandardUi();rata60Field();}catch(e){console.warn("Stack Test Pro RATA standards patch:",e);}
})();
