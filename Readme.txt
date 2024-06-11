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

2-Componentes y Estructuras(Composition Api y Option Api)

Option Api: Es un objeto que tiene el contenido

Composition Api: Es el mas usado y parecido a otros Frameworks
Proporciona mayor control de la reactividad


3-Directivas
Funcionan en vue como atributos, que tienen la nomenclatura v-, modifica el Renderizadoen el virtual Dom
Su estructura ser etiqueta html + directiva + nombre + modificador + valor 


Renderizado condicional
V-if: se usa cuando el cambio no ocurrira tanto
v-show:  Cuando el cambio se realiza bastantes veces en la aplicacion
v-bind:para los estilos

Recorrido de estructura
v-for: para las listas

4-Formularios, V-movel
Snipper Generator app para crear nuestros propios snipers o atajos

5-Comunicación Vertical y ciclo de vida
        Comineza al ser llamado el componente de Vue
        El pimer ciclo al que se puede acceder es el beforeCreated que es antes de crear el Componentes
        El created que es despues que ya se creo(El virtual DOM aun no ha creado nada , no se ha 
        puesto nada en pantalla), por lo que se puede hacer las peticiones a las Api
        Ahora vue realiza una serie de comprobaciones y pasa al siguiente paso que es montar el elemento
        para esto se tiene el beforeMount que es antes de que sea pintado el componente pero ya es aceptado 
        y el mount que es cuando ya se monta
        El mounted tiene como parte del ciclo el beforeUpdated que es justo antes de que se realicen los cambios
        , justo antes de que se cargue el componente o algo asi, el update es cuando ya se actualzo,
        ese ciclo de comprobacion de cambio se realiza constantemente hasta que se vaya a eliminar el componente 
        de la interfaz que es donde se aplica el beforeDestroy y el Destroy.

        Comunicación Vertical:
        -Comunicacion vertical descendente, para esto se usa, las props, esta inforamcion es en formato solo de
        lectura lo que quiere devir que el hijo no debe modificar la informacion
        -Comunicacion Vertical ascendente, esto se hace a traves de los emits, 
        En caso de que se desee modificar la informacion que se encuentra en modo lectura desde el hijo, ese hijo
        debe emitir al padre el cambio para que el padre lo realice

6- Computed

Permite realizar cambios en un elemento a traves de la refenrecia de otro(mal explicado)

7-Directivas personalizadas
 En el main.js por ahora, para poder usar esas directivas en todo la aplicacion, en el propio componente si se 
 desea utilizarla solamente en el mismo

 Para crearlas se hace del siguiente modo
 app.directive('mi_directiva',{
    beforeMount: (el,binding) =>{
        el.style.fontSize = '70px'
    }
});

donde el - es la etiqueta que se modificara
binding es el parametro de entrada