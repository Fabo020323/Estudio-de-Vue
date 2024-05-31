<template>
  <div>
    <section>
      <h1>Añadir Profesor</h1>
      <div>
        <label for>Name:</label>
        <input type="text" v-model="profesor.name" @click="vaLLenar" />
      </div>
      <div>
        <label for>Apellidos:</label>
        <input type="text" v-model="profesor.apellidos" @click="vaLLenar" />
      </div>
      <div>
        <label for>NIF:</label>
        <input type="text" v-model="profesor.NIF" @click="vaLLenar" />
      </div>
      <div>
        <label for>Materias:</label>
        <input type="text" v-model="materia" @click="vaLLenar" />
        <button @click="annadirMateria">Agregar</button>
      </div>
      <ul v-for="(materia,index) in profesor.materias" :key="index">
        <li>{{ materia}}</li>
      </ul>

      <input type="checkbox" v-model="profesor.documentacion" />Documentación Entregada
      <button @click="guardarProfesor">Entregar</button>
      <h1>{{ mensaje }}</h1>
    </section>
    <section>
      <h3>Listado de Profesores</h3>
      <table>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>NIF</th>
            <th>Materias</th>
            <th>Documentación Entregada</th>
        </tr>
        <tr v-for="elm in lista_de_profesores" :key="elm.NIF">
            <th>{{elm.name}}</th>
            <th>{{ elm.apellidos }}</th>
            <th>{{ elm.NIF }}</th>
            <th>
                <ul>
                    <li v-for="(item,index) in elm.materias" :key="index">{{ item }}</li>
                </ul>
            </th>
            <th>{{elm.documentacion}}</th>
        </tr>
      </table>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const lista_de_profesores = ref([]);
const profesor = ref({
  name: "",
  apellidos: "",
  NIF: "",
  materias: [],
  documentacion: false
});
const mensaje = ref("");
const materia = ref("");
const vaLLenar = () => {
  mensaje.value = "";
};
const guardarProfesor = async() => {
  console.log(profesor.value);
  if (profesor.value) {
    await lista_de_profesores.value.push({
        name:profesor.value.name,
        apellidos:profesor.value.apellidos,
        NIF:profesor.value.NIF,
        materias:profesor.value.materias,
        documentacion: profesor.value.documentacion,


    });
    profesor.value.name = '';
    profesor.value.apellidos = '';
    profesor.value.documentacion = false;
    profesor.value.materias = [];
    profesor.value.NIF = '';
  }else{
    mensaje.value = 'Debe llenar los datos antes de intentar guardar'
  }
};
const annadirMateria = () => {
  if (
    materia.value &&
    profesor.value.name &&
    profesor.value.apellidos &&
    profesor.value.NIF
  ) {
    profesor.value.materias.push(materia.value);
    materia.value = '';
  } else {
    console.log(materia.value, profesor.name, profesor.apellidos, profesor.NIF);
    mensaje.value = " LLene los datos del profesor ";
  }
};


</script>

<style scoped>
</style>