(() => {
const container=document.getElementById('leo-index');
const buttons=[...document.querySelectorAll('[data-show]')];
function render(type) {
  buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.show===type)));
  container.replaceChildren();
  const count=type==='sermones'?96:173;
  for(let n=1;n<=count;n++){
    const available=(type==='sermones'&&((n>=1&&n<=44)||n===82||n===84))||(type==='epistolae'&&(n===10||n===14||n===28||n===113||n===159||n===166||n===167));
    const item=document.createElement(available?'a':'span');
    item.textContent=(type==='sermones'?'Sermo ':'Ep. ')+toRoman(n);
    const sub=document.createElement('small');sub.textContent=(n===24&&type==='sermones')?'Texto bilingüe completo · revisión abierta':available?(n>=16&&n<=21?'Texto bilingüe completo · revisión abierta':(n>=12&&n<=15)?'Texto bilingüe completo · revisión abierta':(n===82||n===84)?'Texto completo · revisión abierta':type==='epistolae'?(n===28?'Texto bilingüe completo · revisión abierta':'Texto bilingüe completo · revisión abierta'):'Edición completa'):'Pendiente';
    item.append(sub);
    if(available)item.href=type==='epistolae'?(n===167?'./epistolae/epistola-clxvii/':n===166?'./epistolae/epistola-clxvi/':n===159?'./epistolae/epistola-clix/':n===113?'./epistolae/epistola-cxiii/':n===28?'./epistolae/epistola-xxviii/':n===14?'./epistolae/epistola-xiv/':'./epistolae/epistola-x/'):n>=28&&n<=44?'./sermones/sermo-'+toRoman(n).toLowerCase()+'/':n===27?'./sermones/sermo-xxvii/':n===26?'./sermones/sermo-xxvi/':n===25?'./sermones/sermo-xxv/':n===24?'./sermones/sermo-xxiv/':n===23?'./sermones/sermo-xxiii/':n===82?'./sermones/sermo-lxxxii/':n===84?'./sermones/sermo-lxxxiv/':n===22?'./sermones/sermo-xxii/':n===21?'./sermones/sermo-xxi/':n===20?'./sermones/sermo-xx/':n===19?'./sermones/sermo-xix/':n===18?'./sermones/sermo-xviii/':n===17?'./sermones/sermo-xvii/':n===16?'./sermones/sermo-xvi/':n===15?'./sermones/sermo-xv/':n===14?'./sermones/sermo-xiv/':n===13?'./sermones/sermo-xiii/':n===12?'./sermones/sermo-xii/':n===11?'./sermones/sermo-xi/':n===10?'./sermones/sermo-x/':n===1?'./sermones/sermo-i/':n===2?'./sermones/sermo-ii/':n===3?'./sermones/sermo-iii/' :n===4?'./sermones/sermo-iv/':n===5?'./sermones/sermo-v/':n===6?'./sermones/sermo-vi/':n===7?'./sermones/sermo-vii/':n===8?'./sermones/sermo-viii/':'./sermones/sermo-ix/';
    container.append(item);
  }
}
function toRoman(num){let out='';for(const [value,glyph] of [[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']])while(num>=value){out+=glyph;num-=value;}return out;}
buttons.forEach(b=>b.addEventListener('click',()=>render(b.dataset.show)));
render('sermones');
})();