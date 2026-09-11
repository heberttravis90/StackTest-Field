/* Stack Test Pro — Mobilize fixes — 2026-09-10
   - Method 16C
   - Monorail style/length population + old-job migration
   - Method 4 + 5 semantic load-out dedupe
   - Native Share / Save / Print-Save-PDF actions on Android
*/
(function(){
  'use strict';

  const warn=(label,error)=>console.warn(`Stack Test Pro ${label}:`,error);

  // ---------- Method 16C ----------
  try{
    if(typeof METHOD_CATALOG!=="undefined" && Array.isArray(METHOD_CATALOG) && !METHOD_CATALOG.some(m=>m?.[0]==="16C")){
      const entry=["16C","Total Reduced Sulfur — Real Time Data","workspace","genericMethod"];
      const at=METHOD_CATALOG.findIndex(m=>m?.[0]==="16B");
      METHOD_CATALOG.splice(at>=0?at+1:METHOD_CATALOG.length,0,entry);
    }
    if(typeof ANALYZER_METHOD_CODES!=="undefined" && ANALYZER_METHOD_CODES?.add) ANALYZER_METHOD_CODES.add("16C");
    if(typeof METHOD_AUDIT_EXTRAS!=="undefined" && METHOD_AUDIT_EXTRAS && !METHOD_AUDIT_EXTRAS["16C"]){
      METHOD_AUDIT_EXTRAS["16C"]=[
        "Method 16C TRS analyzer system",
        "SO₂ analyzer / instrumental analyzer",
        "Thermal oxidizer / converter",
        "Citrate buffer SO₂ scrubber / conditioning system",
        "Sample probe / sample line",
        "Sample pump / flow control",
        "Zero gas",
        "Calibration / span gas standards",
        "Gas cylinder certificates",
        "Regulators / calibration manifold",
        "DAS / laptop",
        "Communication cable",
        "Spare tubing / fittings",
        "Calibration / bias / drift field sheets"
      ];
    }
  }catch(e){warn("Method 16C hotfix",e);}

  // ---------- Method 4 + 5 semantic equipment dedupe ----------
  let baseCanonical=null;
  try{baseCanonical=canonicalEquipmentItem;}catch(_e){baseCanonical=window.canonicalEquipmentItem;}
  function fixedCanonicalEquipmentItem(item){
    const raw=String(item||"").replace(/\s+/g," ").trim();
    const key=raw.toLowerCase().replace(/[–—]/g,"-").replace(/\s*\/\s*/g," / ");
    const aliases=new Map([
      ["ice chest / ice","Ice chest"],
      ["ice chest / cooling supplies as applicable","Ice chest"],
      ["ice chest if required by approved train","Ice chest"],
      ["dgm","DGM / meter console"],
      ["dgm / meter console","DGM / meter console"],
      ["umbilical","Umbilical / vacuum line"],
      ["umbilical / vacuum line","Umbilical / vacuum line"],
      ["silica gel holder","Silica gel container / holder"],
      ["silica gel container / holder","Silica gel container / holder"],
      ["impingers clamps / connectors","Impinger clamps / connectors"],
      ["impingers clamps / glass connectors","Impinger clamps / connectors"],
      ["impingers connectors / clamps","Impinger clamps / connectors"],
      ["extension cords / power strip","Extension cords"],
      ["toolbox / spare fittings","Toolbox"],
      ["field sheets / sample labels","Project field sheets / run sheets"]
    ]);
    return aliases.get(key)||(baseCanonical?baseCanonical(raw):raw);
  }

  let baseAllEquipment=null;
  try{baseAllEquipment=allEquipment;}catch(_e){baseAllEquipment=window.allEquipment;}
  function fixedAllEquipment(){
    let items=baseAllEquipment?baseAllEquipment():[];
    items=Array.isArray(items)?items.map(fixedCanonicalEquipmentItem):[];

    if(items.includes("Method 5 meter console")){
      items=items.filter(x=>x!=="DGM / meter console");
    }
    if(items.some(x=>["Stack thermocouple","Probe thermocouple","Filter-box thermocouple"].includes(x))){
      items=items.filter(x=>x!=="Thermocouples");
    }

    const seen=new Set(),out=[];
    for(const item of items){
      const display=fixedCanonicalEquipmentItem(item);
      const key=display.toLowerCase().replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim();
      if(!key||seen.has(key))continue;
      seen.add(key);
      out.push(display);
    }
    return out.sort((a,b)=>a.localeCompare(b));
  }

  try{canonicalEquipmentItem=fixedCanonicalEquipmentItem;}catch(_e){window.canonicalEquipmentItem=fixedCanonicalEquipmentItem;}
  try{allEquipment=fixedAllEquipment;}catch(_e){window.allEquipment=fixedAllEquipment;}

  // ---------- Monorail fix ----------
  const MONORAIL_STYLES=["Bolt-on Plate","Pin Style","Verify at Shop"];
  const MONORAIL_LENGTHS=[["5","5 ft"],["8","8 ft"],["10","10 ft"],["12","12 ft"],["15","15 ft"],["Verify","Verify at Shop"]];

  function normalizeMonorail(m){
    const raw=(m&&typeof m==="object")?m:{};
    const style=String(raw.style||raw.type||"").trim()||"Verify at Shop";
    const rawLength=raw.length??raw.size??"Verify";
    const length=String(rawLength).replace(/\s*ft\.?$/i,"").trim()||"Verify";
    const quantity=Math.max(1,Math.floor(Number(raw.quantity??raw.qty??1)||1));
    return {style,length,quantity};
  }
  function populateMonorailControls(){
    const style=document.getElementById("monorailStyle");
    const length=document.getElementById("monorailLength");
    if(style){
      const current=style.value;
      style.innerHTML=MONORAIL_STYLES.map(x=>`<option value="${x}">${x}</option>`).join("");
      style.value=MONORAIL_STYLES.includes(current)?current:MONORAIL_STYLES[0];
    }
    if(length){
      const current=length.value;
      length.innerHTML=MONORAIL_LENGTHS.map(([value,label])=>`<option value="${value}">${label}</option>`).join("");
      length.value=MONORAIL_LENGTHS.some(([value])=>value===current)?current:MONORAIL_LENGTHS[0][0];
    }
  }
  function fixedMonorailEquipmentText(m){
    const n=normalizeMonorail(m);
    const length=n.length==="Verify"?"Length: Verify at Shop":`${n.length} ft`;
    return `${n.quantity} × ${n.style} Monorail${n.quantity===1?"":"s"} — ${length}`;
  }
  function fixedRenderMonorails(){
    const card=document.getElementById("monorailCard"),wrap=document.getElementById("monorailList");
    if(!card||!wrap)return;
    populateMonorailControls();
    state.monorails=Array.isArray(state.monorails)?state.monorails.map(normalizeMonorail):[];
    card.classList.toggle("hidden",!hasIsokineticJob());
    const items=state.monorails;
    wrap.innerHTML=items.length?items.map((m,i)=>`<div class="monorail-item"><span><strong>${escapeHtml(String(m.quantity))} × ${escapeHtml(m.style)}</strong> — ${escapeHtml(m.length==="Verify"?"Length: Verify at Shop":`${m.length} ft`)}</span><button class="danger" type="button" data-remove-monorail="${i}">Remove</button></div>`).join(""):'<div class="status neutral">Monorails are required for this isokinetic job. Add the style, length, and quantity, or select Verify at Shop.</div>';
    wrap.querySelectorAll("[data-remove-monorail]").forEach(btn=>btn.addEventListener("click",()=>{
      const index=Number(btn.dataset.removeMonorail),m=state.monorails[index];
      if(m){
        const item=fixedMonorailEquipmentText(m);
        delete state.equipment?.[item];
        delete state.prepEquipment?.[item];
      }
      state.monorails.splice(index,1);
      save();fixedRenderMonorails();buildEquipment();renderMasterEquipment();
    }));
  }
  function fixedAddMonorail(){
    populateMonorailControls();
    const style=document.getElementById("monorailStyle")?.value;
    const length=document.getElementById("monorailLength")?.value;
    const quantity=Math.max(1,Math.floor(Number(document.getElementById("monorailQuantity")?.value)||1));
    if(!style||!length)return;
    state.monorails=Array.isArray(state.monorails)?state.monorails.map(normalizeMonorail):[];
    const existing=state.monorails.find(m=>m.style===style&&m.length===length);
    if(existing)existing.quantity+=quantity;else state.monorails.push({style,length,quantity});
    const qty=document.getElementById("monorailQuantity");if(qty)qty.value="1";
    save();fixedRenderMonorails();buildEquipment();renderMasterEquipment();
  }
  try{monorailEquipmentText=fixedMonorailEquipmentText;}catch(_e){window.monorailEquipmentText=fixedMonorailEquipmentText;}
  try{renderMonorails=fixedRenderMonorails;}catch(_e){window.renderMonorails=fixedRenderMonorails;}
  try{addMonorail=fixedAddMonorail;}catch(_e){window.addMonorail=fixedAddMonorail;}

  // ---------- Mobilize Share / Save / Print ----------
  function safeName(ext="txt"){
    const job=document.getElementById("jobId")?.value||document.getElementById("facility")?.value||"job";
    const base=String(job).replace(/[^a-z0-9_-]+/gi,"_").replace(/^_+|_+$/g,"")||"job";
    return `StackTestPro_Loadout_${base}.${ext}`;
  }
  function printHtml(){
    const text=loadoutText();
    return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
      @page{margin:0.55in}
      body{font-family:Arial,Helvetica,sans-serif;color:#111827;margin:0;font-size:12pt;line-height:1.45}
      h1{font-size:20pt;color:#173b25;margin:0 0 4px}
      .sub{font-size:9.5pt;color:#667085;margin-bottom:18px}
      pre{white-space:pre-wrap;word-break:break-word;font:inherit;margin:0}
    </style></head><body><h1>Stack Test Pro — Mobilize Loadout</h1><div class="sub">Selected Mobilize items only</div><pre>${escapeHtml(text)}</pre></body></html>`;
  }
  async function fixedShareLoadout(){
    const text=loadoutText();
    const title=`Stack Test Pro Loadout — ${document.getElementById("jobId")?.value||document.getElementById("facility")?.value||"Job"}`;
    try{
      if(window.STP_NATIVE_ACTIONS?.shareText){
        await window.STP_NATIVE_ACTIONS.shareText({title,text,dialogTitle:"Share Stack Test Pro loadout"});
        return;
      }
      if(navigator.share){
        await navigator.share({title,text});
        return;
      }
    }catch(e){
      if(e?.name==="AbortError"||e?.message==="cancelled")return;
      warn("loadout share",e);
    }
    downloadBlob(safeName("txt"),"text/plain",text);
    alert("Sharing is not available in this browser, so the loadout was saved as a text file.");
  }
  async function saveLoadoutFile(){
    const text=loadoutText(),filename=safeName("txt");
    try{
      if(window.STP_NATIVE_ACTIONS?.saveText){
        const result=await window.STP_NATIVE_ACTIONS.saveText({filename,text,mimeType:"text/plain"});
        if(result?.cancelled)return;
        return;
      }
    }catch(e){
      if(e?.message==="cancelled")return;
      warn("loadout save",e);
    }
    downloadBlob(filename,"text/plain",text);
  }

  let browserPrintLoadout=null;
  try{browserPrintLoadout=printLoadout;}catch(_e){browserPrintLoadout=window.printLoadout;}
  async function fixedPrintLoadout(){
    const name=`Stack Test Pro Loadout — ${document.getElementById("jobId")?.value||document.getElementById("facility")?.value||"Job"}`;
    try{
      if(window.STP_NATIVE_ACTIONS?.printHtml){
        await window.STP_NATIVE_ACTIONS.printHtml({name,html:printHtml()});
        return;
      }
    }catch(e){warn("loadout print",e);}
    if(browserPrintLoadout) browserPrintLoadout();
  }
  try{shareLoadout=fixedShareLoadout;}catch(_e){window.shareLoadout=fixedShareLoadout;}
  try{printLoadout=fixedPrintLoadout;}catch(_e){window.printLoadout=fixedPrintLoadout;}

  function replaceButton(id,handler){
    const old=document.getElementById(id);
    if(!old)return null;
    const fresh=old.cloneNode(true);
    old.replaceWith(fresh);
    fresh.addEventListener("click",handler);
    return fresh;
  }
  function wireMobilizeActions(){
    const share=replaceButton("shareLoadoutBtn",fixedShareLoadout);
    const print=document.getElementById("printLoadoutBtn");
    if(share)share.textContent="Share Loadout";
    if(print){
      const parent=print.parentElement;
      if(parent && !document.getElementById("saveLoadoutBtn")){
        const save=document.createElement("button");
        save.id="saveLoadoutBtn";
        save.className="secondary";
        save.type="button";
        save.textContent="Save Loadout File";
        save.addEventListener("click",saveLoadoutFile);
        parent.insertBefore(save,print);
      }
      replaceButton("printLoadoutBtn",fixedPrintLoadout);
    }

    const addMonorailBtn=document.getElementById("addMonorailBtn");
    if(addMonorailBtn){
      const fresh=addMonorailBtn.cloneNode(true);
      addMonorailBtn.replaceWith(fresh);
      fresh.addEventListener("click",fixedAddMonorail);
    }
  }

  try{
    populateMonorailControls();
    fixedRenderMonorails();
    if(typeof renderMethodCatalog==="function")renderMethodCatalog(document.getElementById("methodSearch")?.value||"");
    if(typeof renderSelectedMethods==="function")renderSelectedMethods();
    if(typeof renderHomeMethodChips==="function")renderHomeMethodChips();
    if(typeof buildEquipment==="function")buildEquipment();
    if(typeof renderMasterEquipment==="function")renderMasterEquipment();
    wireMobilizeActions();
  }catch(e){warn("Mobilize hotfix startup",e);}

  window.STP_MOBILIZE_FIX="2026-09-10-native-actions";
})();
