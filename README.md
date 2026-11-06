# Edición Viva

Biblioteca de ediciones bilingües y anotadas de clásicos literarios. Una lectura del original con traducción de apoyo y notas filológicas consultables.

## Estado

- **Disponible:** Shakespeare · *Coriolanus*, en edición continua: https://ignacioaragues.github.io/shakespeare-edicion-viva/
- **En consideración:** Milton · *Paradise Lost*; Marlowe · *Doctor Faustus*; Corneille · *Attila*.

La portada general y el lector de Shakespeare son proyectos independientes. Este repositorio **no modifica** el flujo editorial ni las actualizaciones automáticas de Shakespeare.

## Estructura

- `index.html` — portada general.
- `styles.css` — diseño editorial compartido: papel cálido, verde oscuro y terracota.
- `collection.js` — catálogo de autores y obras, con estado y URL.
- `autores/` — lugar previsto para futuras páginas de autor y lectores.

El catálogo se actualiza editando las entradas de `collection.js`. Las obras con `status: 'considering'` aparecen sin enlace. Una edición solo se marca `available` cuando existe contenido legible y se indica una URL real. Esa URL puede apuntar a una ruta dentro del sitio o a una página independiente, como sucede con Shakespeare.

## Publicación

Sitio HTML/CSS/JS estático, sin instalación ni compilación. Se puede servir directamente desde la raíz. Para alojar esta portada en GitHub Pages, configurar **Settings → Pages → Deploy from a branch → main / (root)**. La publicación de esta portada es independiente de la de Shakespeare.

## Criterios editoriales

- Texto original y traducción de apoyo en español general.
- Notas lingüísticas, históricas y textuales donde sean útiles.
- No presentar fragmentos incompletos como obras completas.
- Verificar los derechos de cada edición fuente y traducción antes de reproducirlas.

Las obras de dominio público pueden convivir con ediciones críticas y traducciones modernas sujetas a licencias distintas; esos permisos se documentarán obra por obra.
