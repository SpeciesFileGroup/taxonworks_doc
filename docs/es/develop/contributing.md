---
sidebarPosition: 30
---

# Contribuyendo

_Las contribuciones pueden ser de diferentes maneras, no todas son tecnicas. Como puedo contribuir? [Puede contactarnos](/about/Contact) con cualquier pregunta._

## Ideas, solicitud de caracteristicas

### Proveer una interfaz o una idea de flujo de trabajo

Primeramente, queremos agradecerle por esta tarea complicada. Interfaces (Por ejemplo, formularios, reportes, busquedas) los mockups son formas graficas de pedir por nuevas funcionalidades. Nos encanta verlos. Para crear un mock-up puede utilizar herramientas como Illustrator, Photoshop, o herramientas mas sofisticadas para este fin como Adobe XD, [Pencil](https://pencil.evolus.vn/), [Figma](https://www.figma.com/) o [Sketch](https://www.sketch.com/), o simplemente puede dibujarla en un papel y tomarle una fotografia con su telefono. Los issue templates tienen campos para procesar imagenes, simplemente arrastrelas a la ventana y sueltelas allí. Escriba una pequeña historia de caso de uso, o agregue multiples imagenes que ayuden a describir como podrias utilizar esta interfaz.

### Provea una sugerencia para una funcionalidad o una mejora por medio de un video

Envielo! Es muy util que nos envie una grabación de su pantalla, o posicione la camara para que capture su trabajo en panalla y su entorno. Puede enviarnos los videos a traves de servicios como [http://www.dropsend.com/](http://www.dropsend.com/). Busque la forma de [contactarnos aqui](/about/Contact)

## Codigo

### Siga las convenciones de codigo de TaxonWorks

- Varios archivos README.md existen en el codigo base.
- Tenemos un linter de codigo(Rubocop), pero no es muy utilizado. Con el crecimiento esto podria cambiar. Tambien utilizamos ESLint para nuestro ecosistema de JavaScript moderno.

### Submit changes to the code base or repository

- Haga un [Fork](https://help.github.com/articles/fork-a-repo/) del repositorio en Github
- Haga una nueva rama a partir de la rama `development`
- - Ayuda trackear el issue si la rama del branch comienza con el numero de este, por ejemplo `1234_my_feature_request`
- Si tiene experiencia, haga un rebase de su rama a partir de development antes de hacer un [pull request](/about/Glossary#Pull-request)
- Desde su repositorio en GitHub, seleccione su rama y utilice allí para realizar un [pull request](/about/Glossary#Pull-request).

### Documentar el codigo?

La [documentación](http://rdoc.taxonworks.org) del codigo de TaxonWorks se hace en linea con [Yard tags](http://rdoc.info/gems/yard/file/docs/Tags.md).

## Documentación

_Este software junto a su flujo de trabajo hacen posible para todos contribuir a TaxonWorks Doc. Notese que todas las paginas aquí en docs.taxonworks.org tienen la funcionalidad de "Edita esta pagina en GitHub". Scrollea abajo del todo para verla._

### Editando

_Puede editar los archivos fuera de linea, en su propia computadora, o en linea dentro del navegador._

Necesitará una cuenta en [Github](http://github.com).

NOTA: Usando este metodo también se garantiza que todos obtengan crédito y reconocimiento de contribución junto con la posibilidad de generar métricas y realizar un seguimiento de su trabajo.

#### En linea

_Un breve resumen de los pasos._

- Inicie session con su cuenta de [Github](https://github.com/login).
- Vuelva a [docs.taxonworks.org](https://docs.taxonworks.org)
- En cualquier pagina de documento, scrollee hasta abajo y haga click en "Editar esta pagina" donde vea que sea necesario.
- Agregue o edite el texto deseado.
- Asegúrese de que sus ediciones sigan el formato de [la convención de estilo](#style-conventions). Use el formato [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).
- Si necesita agregar una imagen, vea la sección [incluyendo una captura de pantalla](#incluyendo-una-captura-de-pantalla).
- Haga click en `Commit changes` para hacer un "pull request."
  - Rellene los campos utilizando el idioma ingles.
  - Agregue una muy breve descripción de sus cambios en el campo de texto que tiene `Update ...`
  - Opcionalmente, si lo desea, agregue una descripción mas larga en el campo de texto mas grande.
  - En su mensaje no utilice palabras como "Changed, tweaked, updated", describa `que cosa` fue hecha.
  - Elija la segunda opción `Create a new branch ...`. Hay una excepción a esto, si sus cambios fueron pequeños y están listos para ir directo al sitio publico, entonces puede realizar un commit directamente a la rama `development`.
  - Haga click en `Commit changes` nuevamente.

Un miembro del [repositorio de TaxonWorks Docs](https://github.com/SpeciesFileGroup/taxonworks_doc) lo revisará, hará ediciones, le hará preguntas de ser necesario, y luego aceptará el pull request para fusionarlo en la documentación.

#### Que rama debería utilizar?

Al momento de decidir en que rama hacer el cambio, comience preguntándose: "¿Mi cambio está listo para publicarse ahora mismo?". Si la respuesta es _si_(Y tiene permisos), entonces puede hacer un _commit a la rama development_. Si la respuesta es _no_ (Por ejemplo, quiere refinar aun mas el texto), entonces debería hacer el commit a una rama nueva.

Adicionalmente:

- La rama _development_ es el escenario de la rama _main_.
- Siempre debe asumir que la rama _development_ será publicada en cualquier momento.
- Los cambios en _development_ pueden acumularse antes de moverse a _main_.
- La rama _main_ nunca debe commitearse directamente. Los cambios a la rama _main_ suceden cuando la rama _development_ es funcionada dentro de esta.
- Siempre es mas seguro y esta bien comenzar una rama nueva.
- Siempre es mejor limitar el limite de tus cambios en cada nueva rama.
- Si tiene una larga lista de cambios en su rama es util comenzar su session de edición funcionando _development_ dentro de _su rama_ de trabajo. Esto mantiene las diferencias entre _development_ y _su rama_ al mínimo.
- Si está editando localmente, asegúrese de sincronizar sus cambios con los del servidor remoto (`gil pull`) antes de comenzar su session de edición.

#### Fuera de linea

_La edición fuera de linea sigue el flujo de trabajo de git que está detallado en GitHub y en muchos otros lugares en linea_

- Haga un fork del repositorio
- Haga un clon del fork en su computadora
- Cree una nueva rama de característica
- Edite y haga un commit a la rama
- Haga un push de sus archivos editados a su fork en GitHub
- Haga un pull request

### Incluyendo una captura de pantalla

Agregando documentación, notará que en todas las paginas de [docs.taxonworks.org](https://docs.taxonworks.org) puede hacer un click en el **icono del pincel** para agregar/editar el texto. Para manejar los archivos de imagenes que agregamos a la documentación, utilizamos `TaxonWorks Meta Project` alojado en [sfg.taxonworks.org](sfg.taxonworks.org). Para agregar imágenes a este, envíe un correo electrónico a dlpaul ARROBA illinois PUNTO edu o escribanos a traves de [gitter](https://app.gitter.im/#/room/#SpeciesFileGroup_taxonworks:gitter.im). Cuando tome capturas de pantalla, tenga en cuenta que la resolución del monitor de su computadora marca la diferencia si estas imágenes son nítidas y claras o están pixeladas.

- Tome las capturas de pantalla deseadas.
- Suba esas imágenes(Todas o una por ves) a `TaxonWorks Meta Project` usando la tarea `New Image`.

En taxonWorks, busque el link de la imagen generada utilizando la tarea `Filter Image`. Utilice la faceta `Housekeeping` para limitar los resultados buscando las imágenes subidas por usted.

- En el set resultante, haga click en la imagen deseada
- Haga click en el `Navegador radial` debajo de la imagen y seleccione `Show`.
- En `Attributes` copie el `short URL to original` URL link.
- Vuelva a la edición de la documentación y use el formato markdown o HTML debajo para insertar las imágenes (Los ejemplos se encuentran debajo).
- Note que ambos métodos permiten especificar el tamaño de la imagen

#### Markdown para imágenes con subtitulo

Los ejemplos aqui muestran en formato Markdown(md) como agregar una imagen con subtitulo.

- Seleccione una de las cuatro opciones debajo para su subtitulo. Ponga esa linea de texto dentro de la documentación como texto descriptivo.
- Con la opción `position`, elija `left`, `center`, o `right` para alinear el subtitulo de acuerdo a la opción elegida.
- Escriba el texto de su elección dentro de los corchetes `[el texto del subtitulo va aquí]`
- Peguelo en el `short URL to original` URL link (Desde `Filter Image` > `Navegador radial` > `Show` > `Attributes`).
- Agregue el texto `alt` dentro de los corchetes, es buena practica incluirlo para accesibilidad.
- (Opcional) Declare el ancho y alto o ambas de la imagen para controlar el tamaño en el que se mostraran.
- El tamaño por defecto funciona bien. Algunas veces dependiendo de la captura de pantalla podría aparecer muy larga y entonces esta opción permite la opción de modificar su tamaño.

`#position[caption text goes here](link [alt text if you want it])`  
`#position[caption text goes here](link [alt text if you want it] w{60%})`  
`#position[caption text goes here](link [alt text if you want it] h{50%})`  
`#position[caption text goes here](link [alt text if you want it] w{80%} h{50%})`

#### HTML para imágenes con subtitulo

```html
<figure>
  <img
    src="https://sfg.taxonworks.org/s/rdc03q"
    alt="Sample image"
    style="width:100%"
  />
  <figcaption>Fig.1 - A TaxonWorks Interface</figcaption>
</figure>
```

### Agregar un archivo

- Después de hacer un fork al repositorio, puede utilizar Github [directamente para agregar un archivo](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository). También puede agregar un archivo nuevo dentro de la interfaz de GitHub.

### Ordenando el contenido del menu lateral

Esto se controla alfabéticamente, o se puede sobrescribir a través de 2 parámetros de frontmatter, `sidebarPosition` y `sidebarParentPosition`.

#### sidebarPosition

Dentro de cualquier archivo de documentación, puede modificar el orden dentro del contexto de los otros archivos en el mismo directorio.

#### sidebarParentPosition

Unicamente en los archivos README.md. Utilícelo cuando quiera cambiar la posición del directorio dentro del contexto de otros directorios y archivos a nivel de ese directorio.

#### Orden por nombre de archivo.

Por defecto, el sistema tomará los archivos dentro del directorio y los ordenará por alfabetico segun el nombre del archivo para generar el menu lateral. Por ejemplo:

Estructura de carpeta:

```
-- Mi carpeta de ejemplo
---- bar.md
---- foo.md
```

Nombre de archivo: foo.md

```
# A es la primera letra de este titulo
```

Nombre de archivo: bar.md

```
# B es la primera letra de este titulo
```

##### Resultado del menu lateral:

```
Mi carpeta de ejemplo
  B es la primera letra de este titulo
  A es la primera letra de este titulo
```

#### Ordenar por medio de la variable sidebarPosition

`sidebarPosition` permite que cambie el orden del menu lateral _independientemente del orden alfabético de los archivos_.
Tomemos el ejemplo de arriba, pero ahora vamos a agregar `sidebarPosition` en cada archivo para cambiar su orden:

Nombre de archivo: foo.md

```
---
sidebarPosition: 200
---
# A es la primera letra de este titulo
```

Nombre de archivo: bar.md

```
---
sidebarPosition: 100
---
# B es la primera letra de este titulo
```

##### Resultado del menu lateral:

```
Mi carpeta de ejemplo
  B es la primera letra de este titulo
  A es la primera letra de este titulo
```

### Convenciones de estilo

Para escribir la documentación utilizamos Markdown. Existen muchas guías sobre como redactar un documento en este formato, por ejemplo en [GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).

- Negrita - ?
- Itálicas - As typically used in English writing, to add emphasis, or draw attention.
- "Doble comillas"
- 'Simple comillas' son valores literales para ser ingresados u observados
- Balas - Acciones que instruyen al usuario a tomar. Como en este listado.
- Lista numerada - Sin uso?
- Tildes ` Se utiliza para envolver texto, vea el siguiente ejemplo.
- `Highlighted words` (envuelto por tildes) se refiere típicamente a texto o elementos, típicamente literales, en la aplicación, que generalmente son parte de la interfaz de usuario (a diferencia de los datos dinámicos que se muestran). Por ejemplo, pueden estar en nombres de botones o campos como `Data`, `Tasks`, `Favourite` tabs
- Citas en linea - ?? (use "> ")
  > Esta es una cita en linea
- Bloque de triple comillas - úselo para ejemplos literales. Ponga tres comillas ``` antes del bloque de texto y 3 comillas al final del mismo. Esto dará como resultado el siguiente bloque de codigo.

```
Algún ejemplo de codigo o literal.
```

## Gestión de proyecto

_Cómo se clasifican, priorizan y discuten los issues._

### Categorizar un issue en GitHub

_No todos tienen permiso para etiquetar un issue_.
[Vea su descripción.](https://github.com/SpeciesFileGroup/taxonworks/labels)
