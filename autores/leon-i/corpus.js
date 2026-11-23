(() => {
const container=document.getElementById('leo-index');
const buttons=[...document.querySelectorAll('[data-show]')];
function render(type) {
  buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.show===type)));
  container.replaceChildren();
  const count=type==='sermones'?96:173;
  for(let n=1;n<=count;n++){
    const available=(type==='sermones'&&[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91].includes(n))||(type==='epistolae'&&(n===10||n===14||n===28||n===113||n===159||n===166||n===167));
    const item=document.createElement(available?'a':'span');
    item.textContent=(type==='sermones'?'Sermo ':'Ep. ')+toRoman(n);
    const sub=document.createElement('small');sub.textContent=available?'Texto bilingüe · revisión abierta':'Pendiente';
    item.append(sub);
    if(available)item.href=type==='epistolae'?(n===167?'./epistolae/epistola-clxvii/':n===166?'./epistolae/epistola-clxvi/':n===159?'./epistolae/epistola-clix/':n===113?'./epistolae/epistola-cxiii/':n===28?'./epistolae/epistola-xxviii/':n===14?'./epistolae/epistola-xiv/':'./epistolae/epistola-x/'):'./sermones/sermo-'+toRoman(n).toLowerCase()+'/';
    container.append(item);
  }
}
function toRoman(num){let out='';for(const [value,glyph] of [[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']])while(num>=value){out+=glyph;num-=value;}return out;}
buttons.forEach(b=>b.addEventListener('click',()=>render(b.dataset.show)));
render('sermones');
})();