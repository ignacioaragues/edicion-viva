/* Lector del Sermón V de León. Conserva la estructura .verse de Edición Viva,
   compatible con resaltados, estadísticas de lectura y vista en bloques. */
(() => {
  "use strict";
  const data = window.LEO_SERMO_I;
  if (!data) return;
  const $=sel=>document.querySelector(sel), verses=$("#verses");
  const popup=$("#word-panel"),note=$("#note-panel"),drawer=$("#side-drawer");
  const key="edicion-viva:latin-dictionary:v1";
  let chosen=null;
  const norm=s=>s.toLocaleLowerCase("la");
  const read=()=>{
    try {const a=JSON.parse(localStorage.getItem(key)||"[]");return Array.isArray(a)?a.filter(w=>w&&typeof w.id==="string"):[];}
    catch{return [];}
  };
  const store=a=>{
    try{
      localStorage.setItem(key,JSON.stringify(a));
      window.dispatchEvent(new CustomEvent("edicion-viva:dictionary-updated",{detail:{language:"la"}}));
      if(window.EdicionVivaAccount?.user)window.EdicionVivaAccount.syncNow().catch(console.warn);
      return true;
    }catch{return false;}
  };
  const lex=form=>data.lexicon[form]||data.lexicon[form.charAt(0).toUpperCase()+form.slice(1)]||data.lexicon[form.toLowerCase()];
  function place(panel, anchor) {
    panel.hidden=false;
    const rect=anchor.getBoundingClientRect(),p=panel.getBoundingClientRect(),margin=12;
    panel.style.left=Math.max(margin,Math.min(rect.left,innerWidth-p.width-margin))+"px";
    const top=rect.bottom+10+p.height<innerHeight-margin?rect.bottom+10:Math.max(margin,rect.top-p.height-10);
    panel.style.top=top+"px";
  }
  function hidePopups() {
    popup.hidden=true;note.hidden=true;
    document.querySelectorAll(".token[aria-pressed]").forEach(el=>el.removeAttribute("aria-pressed"));
  }
  function renderWords(text,node,section){
    const token=/[\p{L}\p{M}]+/gu;let last=0;
    for(const m of text.matchAll(token)) {
      if(m.index>last)node.append(document.createTextNode(text.slice(last,m.index)));
      const value=lex(m[0]),word=document.createElement("button");
      word.type="button";word.className="token";word.textContent=m[0];word.setAttribute("aria-label","Ver ficha de "+m[0]);
      if(value)word.addEventListener("click",()=>showWord(m[0],value,section,word));
      else {word.disabled=true;console.warn("Sin ficha:",m[0],section);}
      node.append(word);last=m.index+m[0].length;
    }
    if(last<text.length)node.append(document.createTextNode(text.slice(last)));
  }
  function showWord(form,item,section,anchor){
    hidePopups();
    chosen={form,lemma:item[0],morphology:item[1],gloss:item[2],reference:"Sermo V · §"+section};
    $("#word-form").textContent=form;
    $("#word-lemma").textContent=item[0];
    $("#word-morphology").textContent=item[1];
    $("#word-gloss").textContent=item[2];
    const lemma=item[0].split(/[,\s]/)[0];
    $("#word-paradigm").href="https://en.wiktionary.org/w/index.php?search="+encodeURIComponent(lemma+" Latin");
    anchor.setAttribute("aria-pressed","true");
    refreshSaved();
    place(popup,anchor);
  }
  for(const p of data.paragraphs){
    const row=document.createElement("div");row.id=p.id;row.className="verse";
    const n=document.createElement("span");n.className="number";n.textContent=p.label;
    const original=document.createElement("div");original.className="speech";
    const la=document.createElement("p");la.className="latin";la.lang="la";renderWords(p.latin,la,p.label);original.append(la);
    if(p.note){
      const button=document.createElement("button");button.className="note-anchor";button.type="button";
      button.textContent="n";button.setAttribute("aria-label","Nota del pasaje "+p.label);
      button.addEventListener("click",()=>{hidePopups();$("#note-heading").textContent=p.note[0];$("#note-content").textContent=p.note[1];place(note,button);});
      original.append(button);
    }
    const es=document.createElement("p");es.className="spanish";es.lang="es";es.textContent=p.spanish;
    row.append(n,original,es);verses.append(row);
  }
  function idOf(w){return "la|"+norm(w.lemma)+"|"+norm(w.form);}
  function refreshSaved(){
    if(!chosen)return;
    const exists=read().some(w=>w.id===idOf(chosen)),btn=$("#save-word");
    btn.textContent=exists?"✓ Guardada · quitar":"+ Guardar en mi diccionario";
    btn.setAttribute("aria-pressed",String(exists));
  }
  function showDictionary(){
    const items=read(),list=$("#dictionary-list");list.replaceChildren();
    $("#saved-count").textContent=String(items.length);
    if(!items.length){const p=document.createElement("p");p.className="storage-note";p.textContent="Todavía no hay palabras guardadas.";list.append(p);return;}
    for(const item of items.slice().sort((a,b)=>a.form.localeCompare(b.form,"la"))){
      const el=document.createElement("div");el.className="dict-record";
      const main=document.createElement("strong");main.textContent=item.form;
      const sub=document.createElement("small");sub.textContent=item.lemma+" · "+(item.reference||item.work||"");
      const del=document.createElement("button");del.type="button";del.textContent="Quitar";del.setAttribute("aria-label","Quitar "+item.form);
      del.addEventListener("click",()=>{if(store(read().filter(w=>w.id!==item.id))){showDictionary();refreshSaved();}});
      el.append(main,sub,del);list.append(el);
    }
  }
  $("#save-word").addEventListener("click",()=>{
    if(!chosen)return;
    const old=read(),id=idOf(chosen),found=old.findIndex(w=>w.id===id);
    if(found>=0)old.splice(found,1);
    else old.push({id,language:"latín",form:chosen.form,lemma:chosen.lemma,
       morphology:chosen.morphology,gloss:chosen.gloss,work:"León I · Sermo V",reference:chosen.reference,addedAt:new Date().toISOString()});
    if(!store(old)){$("#dictionary-feedback").textContent="No se pudo guardar en este navegador.";return;}
    refreshSaved();showDictionary();
  });
  $("#close-word").addEventListener("click",hidePopups);
  $("#close-note").addEventListener("click",hidePopups);
  const close=()=>drawer.hidden=true;
  $("#close-drawer").addEventListener("click",close);
  $("#export-dictionary").addEventListener("click",()=>{
    const blob=new Blob([JSON.stringify(read(),null,2)],{type:"application/json"});
    const u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download="edicion-viva-diccionario-latin.json";a.click();
    setTimeout(()=>URL.revokeObjectURL(u),500);
  });
  document.querySelectorAll("[data-drawer]").forEach(btn=>btn.addEventListener("click",()=>{
    const type=btn.dataset.drawer;
    if(type==="dictionary"){drawer.hidden=false;showDictionary();return;}
    const shell=$("#app-shell"),cls=type==="position"?"nav-collapsed":"characters-collapsed";
    if(type==="position"&&matchMedia("(max-width:860px)").matches){
      $("#sidebar").classList.toggle("open");btn.setAttribute("aria-expanded",String($("#sidebar").classList.contains("open")));return;
    }
    if(type==="characters"&&matchMedia("(max-width:1160px)").matches){
      $("#character-rail").classList.toggle("open");btn.setAttribute("aria-expanded",String($("#character-rail").classList.contains("open")));return;
    }
    shell.classList.toggle(cls);btn.setAttribute("aria-expanded",String(!shell.classList.contains(cls)));
  }));
  document.addEventListener("pointerdown",e=>{if(!e.target.closest(".popover-card,.token,.note-anchor"))hidePopups();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){hidePopups();close();}});
  document.addEventListener("edicion-viva:dictionary-updated",showDictionary);
  showDictionary();
})();