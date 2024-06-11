<template>
  <div class="container">
    <PostDetails v-for="(elm,index) in lista" :key="index"  :title="elm.title"
      :contenido="elm.contenido" @eventoQueYoDefino= "emitir" />
  </div>
</template>

<script setup>
import PostDetails from "./PostDetails.vue";
import { ref } from "vue";
const lista = ref([
  {
    title: "este es mi titulo 1",
    contenido: "Este es mi contenido 1"
  },
  { title: "este es mi titulo 2", contenido: "Este es mi contenido 2" }
]);

const emitir = (msg) =>{
alert(msg)
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /*    border: 10px; */
  flex-direction: row;
}
</style>