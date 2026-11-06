# Futuras ediciones

Las páginas de autor y los lectores específicos se incorporarán aquí cuando tengan contenido verificable.

Estructura prevista (no implementada todavía):

```text
autores/
  shakespeare/
    index.html
    obras/
      coriolanus/
  milton/
    index.html
    obras/
      paradise-lost/
```

No migrar Shakespeare por ahora: su edición continua sigue en `ignacioaragues/shakespeare-edicion-viva`, con su propia publicación y automatización. La portada general le enlaza desde `collection.js`.

Cada nueva obra deberá declarar: autor, título original, título español, idioma, género, estado editorial, URL, procedencia y condiciones de uso de su texto fuente, criterios de traducción y notas. Con el crecimiento del catálogo, las fichas se podrán separar de `collection.js` y generar páginas de autor sin cambiar las URL públicas existentes.

Los enlaces de una obra solo deben activarse cuando la edición esté disponible.
