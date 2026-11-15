(() => {
const container=document.getElementById('leo-index');
const buttons=[...document.querySelectorAll('[data-show]')];
function render(type) {
  buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.show===type)));
  container.replaceChildren();
  const count=type==='sermones'?96:173;
  for(let n=1;n<=count;n++){
    const available=type==='sermones'&&(n===1||n===2);
    const item=document.createElement(available?'a':'span');
    item.textContent=(type==='sermones'?'Sermo ':'Ep. ')+toRoman(n);
    const sub=document.createElement('small');sub.textContent=available?(n===1?'Edición completa':'Edición completa'):'Pendiente';
    item.append(sub);
    if(available)item.href=n===1?'./sermones/sermo-i/':'./sermones/sermo-ii/';
    container.append(item);
  }
}
function toRoman(num){let out='';for(const [value,glyph] of [[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']])while(num>=value){out+=glyph;num-=value;}return out;}
buttons.forEach(b=>b.addEventListener('click',()=>render(b.dataset.show)));
render('sermones');
})();