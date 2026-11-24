export const passages = [
{id: 'prosper-451', reference: 'r029', period: '451 · Galia',
    title: 'La invasión de la Galia y la batalla',
    author: 'Próspero de Aquitania', work: 'Chronicon, s. a. 451 (Marciano y Adelfio)',
    source: 'https://la.wikisource.org/wiki/Chronicum_integrum',
    sourceLabel: 'Texto latino · Chronicon',
    latin: [
      'Attila post necem fratris, auctus opibus interempti, multa vicinarum sibi gentium millia cogit in bellum, quod Gothis tantum se inferre, tamquam custos Romanae amicitiae denuntiabat. Sed cum transito Rheno saevissimos ejus impetus multae Gallicanae urbes experirentur, cito et nostris et Gothis placuit, ut furori superborum hostium consociatis exercitibus repugnaretur. Tantaque Aetii patricii providentia fuit, ut raptim congregatis undique bellatoribus viris, adversae multitudini non impar occurreret.',
      'In quo conflictu, quamvis neutris cedentibus, inaestimabiles strages commorientium factae sint, Chunnos tamen eo constat victos fuisse, quod amissa praeliandi fiducia, qui super fuerant ad propria reverterunt.'
    ],
    spanish: [
      'Atila, tras matar a su hermano y acrecentar su poder con los recursos del muerto, reunió para la guerra a muchos millares de hombres de los pueblos vecinos. Anunció que únicamente iba a combatir contra los godos, presentándose como defensor de la amistad con Roma. Pero, una vez cruzado el Rin, numerosas ciudades de la Galia padecieron sus violentísimas incursiones, y pronto tanto los nuestros como los godos acordaron oponer ejércitos unidos a la furia de aquellos enemigos arrogantes. Tan grande fue la previsión del patricio Aecio que, reuniendo apresuradamente guerreros de todas partes, hizo frente a las fuerzas contrarias con un ejército que no estaba en inferioridad.',
      'En aquel enfrentamiento, aunque ninguno de los bandos cedió y las pérdidas de vidas fueron incalculables, consta sin embargo que los hunos resultaron derrotados, pues los supervivientes, perdida la confianza en continuar la lucha, regresaron a sus territorios.'
    ],
    note: 'Próspero no presenta la batalla como una aniquilación militar del ejército de Atila: declara que ninguno de los bandos cedió, pero considera vencidos a los hunos porque se retiraron. También contrasta su elogio de Aecio en 451 con la crítica que le dirige al año siguiente.'
},
{id: 'prosper-452', reference: 'r029', period: '452 · Italia',
    title: 'La embajada de León I ante Atila',
    author: 'Próspero de Aquitania', work: 'Chronicon, s. a. 452 (Herculano y Esporacio)',
    source: 'https://la.wikisource.org/wiki/Chronicum_integrum',
    sourceLabel: 'Texto latino · Chronicon',
    latin: [
      'Attila redintegratis viribus quas in Gallia amiserat, Italiam ingredi per Pannonias intendit, nihil duce nostro Aetio secundum prioris belli opera prospiciente; ita ut ne clusuris quidem Alpium, quibus hostes prohiberi poterant, uteretur: hoc solum spei suis superesse existimans, si ab omni Italia cum imperatore discederet. Sed cum hoc plenum dedecoris et periculi videretur, continuit verecundia metum, et tot nobilium provinciarum latissima eversione credita est saevitia et cupiditas hostilis expleta: nihilque inter omnia consilia principis ac senatus, populique Romani salubrius visum est, quam ut per legatos pax truculentissimi regis expeteretur.',
      'Suscepit hoc negotium cum viro consulari Avieno, et viro praefectorio Trigetio beatissimus papa Leo auxilio Dei fretus, quem sciret numquam piorum laboribus defuisse. Nec aliud secutum est quam praesumpserat fides. Nam tota legatione dignanter accepta, ita summi sacerdotis praesentia rex gavisus est, ut et bello abstineri praeciperet, et ultra Danubium promissa pace discederet.'
    ],
    spanish: [
      'Atila, después de reconstituir las fuerzas que había perdido en la Galia, se dispuso a entrar en Italia a través de Panonia. Nuestro general Aecio no había tomado precauciones a la altura de sus actuaciones en la guerra anterior: ni siquiera recurrió a los pasos fortificados de los Alpes, con los que habría podido impedir la entrada de los enemigos. Consideraba que su única esperanza consistía en abandonar toda Italia junto con el emperador. Pero, como esto parecía lleno de deshonra y peligro, la vergüenza contuvo el miedo. Se creyó que la crueldad y la codicia de los enemigos habían quedado saciadas con la extensa devastación de tantas provincias ilustres. Entre todas las propuestas del emperador, el Senado y el pueblo romano, ninguna pareció más conveniente que solicitar la paz al feroz rey por medio de una embajada.',
      'Asumió esta misión el bienaventurado papa León, acompañado por Avieno, varón de rango consular, y Trigecio, antiguo prefecto, confiando en la ayuda de Dios, de quien sabía que nunca había faltado a los esfuerzos de los hombres piadosos. Y no sucedió otra cosa que lo que su fe había anticipado. En efecto, Atila recibió dignamente a toda la embajada y se alegró tanto de la presencia del sumo sacerdote que ordenó abandonar la guerra y se retiró más allá del Danubio, tras prometer la paz.'
    ],
    note: 'Es un testimonio próximo a los acontecimientos. León no actúa solo: los diplomáticos Avieno y Trigecio integran la embajada. Próspero atribuye gran importancia a la presencia del papa, pero no narra aquí una aparición milagrosa ni reproduce las palabras de la negociación. «Nuestro general Aecio» revela asimismo el punto de vista romano del cronista.'
}
];


const esc = value => String(value).replace(/[&<>"']/g, char => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
}[char]));
export function renderPassage(p) {
  const article = document.createElement('article');
  article.className = 'iv-fragment';
  article.id = 'fragmento-' + p.id;
  article.dataset.reference = p.reference;
  article.innerHTML = `
    <div class="iv-fragment-meta"><span>${esc(p.author)}</span><span>${esc(p.period)}</span></div>
    <h3>${esc(p.title)}</h3>
    <p class="iv-fragment-work">${esc(p.work)}</p>
    <div class="iv-translation"><span class="overline">TRADUCCIÓN PROPIA · ESPAÑOL</span>${p.spanish.map(s=>`<p>${esc(s)}</p>`).join('')}</div>
    <details class="iv-original"><summary>${p.originalLang === 'grc' ? 'Mostrar / ocultar original griego' : 'Mostrar / ocultar original latino'}</summary>
      <div lang="${esc(p.originalLang || 'la')}">${(p.original || p.latin).map(s=>`<p>${esc(s)}</p>`).join('')}</div>
    </details>
    <div class="iv-fragment-note"><strong>Nota de lectura</strong><p>${esc(p.note)}</p></div>
    <div class="iv-fragment-foot"><a href="${esc(p.source)}" target="_blank" rel="noopener noreferrer">${esc(p.sourceLabel)} ↗</a><span>Referencia del inventario: ${esc(p.reference)}</span></div>
  `;
  return article;
}
