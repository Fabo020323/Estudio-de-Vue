<template>
  <div>
    <ul>
      <li
        v-for="(list,index) in lista"
        :key="index"
        :class="{
                'danger': danger
            }"
      >
        <h1
          v-if="list.code === 'fa'"
          :style="{
                'color':color
            }"
        >{{list.name}}
        </h1>
        <h1 v-else>{{ list.name }}</h1>
      </li>
    </ul>
    <button @click="Variar"> Cambiar color</button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const danger = ref(false);
const color = ref("aqua");

const lista = ref([
  {
    code: "fa",
    name: "Fabian"
  },
  {
    code: "ka",
    name: "Tata"
  },
  {
    code: "fa",
    name: "Fabian"
  }
]);

const Variar = () => {
  danger.value = !danger.value;
};
</script>

<style scoped>
.danger {
  color: red;
}
</style>