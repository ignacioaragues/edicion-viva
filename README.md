# Edición Viva

Biblioteca de ediciones bilingües y anotadas de clásicos literarios. Una lectura del original con traducción de apoyo y notas filológicas consultables.

## Estado

- **Disponible:** Shakespeare · *Coriolanus*, en edición continua: https://ignacioaragues.github.io/shakespeare-edicion-viva/
- **Disponible en curso:** Evangelio según Marcos, 1,1–13: `autores/evangelios/marcos/`. Griego SBLGNT, traducción española original y Vulgata Clementina opcional.
- **En consideración:** Mateo, Lucas y Juan; Milton · *Paradise Lost*; Marlowe · *Doctor Faustus* y *Tamburlaine the Great*; Corneille · *Attila*; Whitman · *Leaves of Grass*; Dickinson · poemas; Petrarca · *Canzoniere* (selección por confirmar); Chaucer · *The Canterbury Tales*; Ariosto · *Orlando furioso*; Wyspiański · *Wesele*; Hugo · *La Légende des siècles*; Melville · *The Confidence-Man: His Masquerade*; Shakespeare · *Sonnets*.

La portada general y el lector de Shakespeare son proyectos independientes. Este repositorio **no modifica** el flujo editorial ni las actualizaciones automáticas de Shakespeare.

## Estructura

- `index.html` — portada general.
- `styles.css` — diseño editorial compartido: papel cálido, verde oscuro y terracota.
- `collection.js` — catálogo de autores y obras, con estado y URL.
- `autores/` — lugar previsto para futuras páginas de autor y lectores.

El catálogo se actualiza editando las entradas de `collection.js`. Las obras con `status: 'considering'` aparecen sin enlace. Una edición solo se marca `available` cuando existe contenido legible y se indica una URL real. Esa URL puede apuntar a una ruta dentro del sitio o a una página independiente, como sucede con Shakespeare.

## Publicación

Sitio HTML/CSS/JS estático, sin instalación ni compilación. Se puede servir directamente desde la raíz. Para alojar esta portada en GitHub Pages, configurar **Settings → Pages → Deploy from a branch → main / (root)**. La publicación de esta portada es independiente de la de Shakespeare.

## Registro de lectura compartido

`reading-tracker.js` gestiona las sesiones de lectura de todas las obras con la clave `edicion-viva:reading:v1` en `localStorage`. Las páginas de Plauto y Shakespeare comparten el origen `https://ignacioaragues.github.io`, aunque se publiquen desde repositorios diferentes. El lector de Shakespeare carga el contador de este repositorio por `../edicion-viva/reading-tracker.js` y solo registra minutos mientras está abierto el lector de *Coriolanus*, no su portada.

`mis-lecturas.html` muestra el resumen común y barras diarias/semanales apiladas, con un color estable por obra. Los datos pertenecen a cada navegador/dispositivo; se pueden exportar e importar en JSON, pero no se sincronizan automáticamente. Los nuevos lectores deben declarar `data-reading-id` y `data-reading-title` en `<body>` y cargar `reading-tracker.js` sin modificar el formato del registro.

Marcos usa `data-reading-id="evangelios-marcos"`; el diccionario griego emplea la clave independiente `edicion-viva:dictionary:gr:v1`. La vista latina opcional se recuerda mediante `edicion-viva:marcos:vulgate:v1`. La navegación, paleta y la vista en bloques/columnas mantienen el diseño compartido con Plauto.

## Investigación externa y rondas de revisión

**Regla obligatoria para Marcos, Aulularia, Coriolanus y las futuras ediciones:** cada fragmento nuevo se coteja con su texto base y se investiga activamente en Internet antes de redactar las notas. Se consultan, cuando son pertinentes, ediciones críticas y sus comentarios, diccionarios históricos, aparatos textuales, fuentes antiguas y artículos académicos. La publicación de un pasaje no equivale a revisión definitiva.

Las rondas de revisión regresan progresivamente a los pasajes ya publicados para enriquecer sus notas con bibliografía, variantes, contexto histórico, intertextualidades, interpretaciones contrastadas y observaciones propias de análisis filológico. Debe registrarse el alcance de cada revisión en el checkpoint correspondiente. No duplicar notas ni añadir información marginal para aumentar artificialmente su cantidad.

Las afirmaciones documentales deben ser verificables. Siempre que corresponda, consignar **autor, título, fecha, referencia de sección o página realmente consultada, y enlace estable o DOI** en la nota o en una bibliografía navegable del pasaje. Diferenciar datos, hipótesis, controversias textuales y propuestas propias. Las citas de publicaciones académicas deben ser breves, exactas, atribuidas y compatibles con los permisos de uso; nunca fabricar bibliografía ni reproducir traducciones modernas protegidas.

Cuando una fuente no pueda consultarse o verificarse, indicarlo en el checkpoint y posponer esa parte de la revisión, sin presentarla como hecha. Esta norma rige también para la edición de Shakespeare, aunque su lector siga administrándose desde un repositorio independiente.

## Glosas españolas en fichas léxicas

**Estándar visual para todas las ediciones clásicas de Edición Viva (8 nov. 2026):** junto al lema y el análisis morfológico o lingüístico, el popup de cada palabra o expresión anotada mostrará una glosa o traducción breve en español debajo, alineada a la izquierda. Esta ayuda es distinta de la traducción literaria del pasaje y debe respetar el sentido contextual; cuando haya varios sentidos posibles, se pueden explicar en una nota. Las fichas permanecen cerca de la palabra seleccionada y mantienen el estilo sobrio, sin subrayado permanente (solo al pasar el cursor o enfocar con teclado).

En las ediciones con análisis exhaustivo palabra por palabra, todas las palabras publicadas deben tener ficha y glosa; el control de integridad debe impedir la publicación de fragmentos nuevos con entradas ausentes. En otras ediciones, las fichas léxicas selectivas también llevarán glosa; no se impone convertir en popups todas las palabras de obras sin análisis exhaustivo.

*Aulularia*: `autores/plauto/aulularia/glosses.js` contiene glosas orientativas por lema; el cuarto elemento opcional de cada entrada `words` puede suministrar una glosa contextual distinta, `[forma, lema, morfología, glosa contextual]`. Revisar progresivamente la pertinencia de las glosas durante las rondas filológicas.

## Enlaces a paradigmas y flexión

Las fichas léxicas tendrán, debajo de la glosa española, un **enlace pequeño y externo al lema**: «Ver conjugación» para verbos, «Ver declinación» para nombres, adjetivos y pronombres, o «Ver entrada» para voces invariables. Emplear `https://en.wiktionary.org/wiki/` seguido del lema codificado y la sección de idioma correspondiente (por ejemplo `#Latin` o `#Ancient_Greek`), o una fuente académica más específica cuando proporcione un paradigma verificable y apropiado. Mantener siempre un enlace real, nunca uno inventado.

Las tablas externas no necesariamente incluyen la flexión de todas las variedades históricas; en particular, deben distinguirse el latín clásico de las formas arcaicas plautinas y el griego ático del koiné. En las notas aclarar las excepciones relevantes. Cuando se abra una ficha de una forma flexionada, el enlace lleva al **lema** (no intenta construir una página para la forma aislada). Usar `target="_blank" rel="noopener noreferrer"`, no modificar el lector principal ni el registro de lectura. Para obras futuras sin flexión paradigmática pertinente, puede omitirse o sustituirse por un enlace a un repertorio léxico verificable.

## Criterios editoriales

- Texto original y traducción de apoyo en español general.
- Notas lingüísticas, históricas y textuales donde sean útiles.
- No presentar fragmentos incompletos como obras completas.
- Verificar los derechos de cada edición fuente y traducción antes de reproducirlas.

Las obras de dominio público pueden convivir con ediciones críticas y traducciones modernas sujetas a licencias distintas; esos permisos se documentarán obra por obra.

### Fuentes de Marcos

- Griego: M. W. Holmes, *The Greek New Testament: SBL Edition* (2010), [SBLGNT](https://sblgnt.com/), CC BY 4.0. Los signos de aparato se omiten en el texto de lectura, pero se señalan variantes relevantes en las notas.
- Latín: *Vulgata Clementina*, [Clementine Vulgate Project](https://hermeticcloud.com/library/vulgate/mark/), dominio público. No se fuerza su armonización con SBLGNT.
- Español: traducción propia y provisional de esta edición, sin copiar versiones modernas.
- Estado: Marcos 1,1–13, con notas y glosario inicial verificado. No se anuncia el capítulo 1 como completo.
