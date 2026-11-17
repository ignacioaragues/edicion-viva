# León I · Obras — procedimiento editorial

## Propósito
Leer la totalidad del corpus latino tradicional de León I de modo que resulte útil para estudiar su **voz**, estilo argumentativo, manejo de la autoridad, temperamento público y recursos retóricos al construir un personaje dramático. El objetivo NO es producir una crónica autónoma del encuentro con Atila ni escribir la obra del usuario.

## Corpus
- Sermones: 96 números de la tradición Ballerini–Migne, PL 54. Cotejar agrupación y numeración modernas cuando corresponda.
- Epistolae: 173 números de la colección tradicional; especificar autor, destinatario, fecha y autenticidad al incorporar cada texto.
- Mantener registros separados para obras atribuidas, dubia/spuria y otros materiales relacionados si se consideran pertinentes. No atribuir automáticamente textos de otros autores a León.

## Edición base y métodos
1. Texto base: edición Ballerini–Migne, PL 54; primer sermón: https://la.wikisource.org/wiki/Patrologia_Latina/54/Sermo_I y cotejo https://la.wikisource.org/wiki/Sermones_-_Migne/1 . Los volúmenes y la numeración histórica no sustituyen a una edición crítica moderna: consignar variantes significativas y correspondencias cuando se verifiquen.
2. **Antes de editar** leer el progress.json de esta carpeta y los archivos actuales de la pieza.
3. Continuar desde Sermo I, `Ago igitur Deo nostro gratias`. Terminar cada sermón completo antes de marcarlo como completo; mantener sus unidades discursivas y, cuando las haya, secciones tradicionales.
4. Cada fragmento publicado debe contener latín cotejado, traducción española propia alineada, fichas de cada token con lema y morfología contextual, y un número moderado de notas. Nunca dar por revisado lo que solo tiene glosa automática.
5. Las notas de **voz y personalidad** deben identificar recursos concretos: antítesis, vocativos, fórmulas de modestia, formas pronominales, confrontación doctrinal, ritmos, preguntas retóricas, referencias bíblicas, términos recurrentes y cambios de registro. Separar dato textual de inferencia y comparar entre géneros; evitar las conjeturas psicológicas sin apoyo.
6. Mantener diseño compatible con `Aulularia`: paneles colapsables, popovers junto a la palabra, enlaces a formas/paradigmas, diccionario latino compartido, resaltados, seguimiento de lectura por obra y dispositivo, navegación móvil y alternancia columnas/bloques.
7. Actualizar `progress.json` y página/índices de corpus. Auditar URLs, sintaxis JS, pasajes completos y que no se duplique texto. Conservar los otros proyectos de Edición Viva sin modificar contenidos ajenos.
8. El enfoque debe privilegiar la utilidad para dramaturgia basada en fuentes, pero **sin reducir** el corpus a textos diplomáticos o al episodio histórico de 452.
9. No crear tarea recurrente sin petición del usuario. Las transcripciones de la tradición histórica son de dominio público; no copiar traducciones modernas sujetas a derechos.

## Estado inicial
Sermo I: primeras cinco unidades sintácticas, 70 tokens latinos, todos con fichas de primera pasada. Siguiente: `Ago igitur Deo nostro gratias`. Revisar progresivamente valor sintáctico y textual de las entradas, sin reemplazar evidencia verificada.

## Navegación entre sermones (convención obligatoria)

- Cada página `sermones/sermo-*/index.html` carga `../../sermon-navigation.js` con `defer`. El módulo sustituye `.main-content > .endnote` por «Anterior / Siguiente» y jamás muestra el sermón actual como destino de navegación.
- La fuente de las piezas enlazables es `progress.json` (`published`, `group: "sermones"`). Registrar una nueva pieza como publicada únicamente cuando su página está disponible. No crear botones que lleven a sermones inexistentes; dejar desactivada la dirección sin destino.
- Evitar puntos decorativos a la derecha en todos los índices laterales presentes y futuros; la entrada activa se distingue de forma tipográfica o por fondo/borde.

## Prioridad excepcional vigente (18 noviembre 2026)
Antes de continuar la secuencia ordinaria, editar **Sermo LXXXII (82)**, **Epistola X (10)** y **Epistola XIV (14)**, en ese orden, con los mismos requisitos de texto latino cotejado, traducción original completa, morfología contextual y notas de voz. Terminar cada pieza antes de pasar a la siguiente; dejar `partial` si no se completa. Comprobar en las epístolas remitente, destinatario, autenticidad y numeración Ballerini–Migne. Una vez publicadas y terminadas las tres, **retomar Sermo X, capítulo IV**, y continuar el recorrido secuencial. Cuando la secuencia ordinaria alcance Sermo 82 o Epistolae 10 y 14, **saltarlas**: no volver a traducirlas ni duplicar archivos o registros. Conservarlas en cola de revisión crítica general, si procede. `progress.json` es la fuente de estado actual y prevalece sobre el párrafo de «Estado inicial» anterior.
