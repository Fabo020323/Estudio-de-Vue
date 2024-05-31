Vue:
 Framework para el desarrollo de front reactivas(esto quiere decir que toda nuestra aplicación se va actualizar
 a medida que cambie nuestro codigo)
 Arquitectura (MVVM) Modelot vista vista Modelo
 -Cada componente va actualizar su informacion a medida que cambie en los datos
 Descripcion 
 Vue funciona con un virtual Dom, que se encarga de realizar las composiciones por nosotros, en donde cada componente
 estará a la escucha de cambios en los datos para actualizarse.

 Trabajo de vue a través de un cdn: es prioritario para proyectos pequeños con el objetivo de cargar los nodemodules
 de vue desde internet

 Trabajo de vue a través de un cliente: para aplicaciones mas grandes usando el node modules

 Flujo y punto de Entrada:
index.html: contiene el punto de entrada la pagina donde se carga todo el proyectos
            -Los componente se van injectando en el <div id="app"></div>
maint.js: Aca se crea una app de vue y lo monta en el index.html en el id app a traves del mount("#app);
        -De ese modo se monta el App.vue que es el primer componente de nuestra pagina y que se encarga de 
        administrar el flujo del resto de componentes
app.vue

Estilos
<style scoped> : El atributo scoped indica que los estilos que se apliquen solo se deben usar en ese componente

Nota: Cuando se crea un componente es como estar haciendo una etiqueta

Componentes y Estructuras(Composition Api y Option Api)

Option Api: Es un objeto que tiene el contenido

Composition Api: Es el mas usado y parecido a otros Frameworks