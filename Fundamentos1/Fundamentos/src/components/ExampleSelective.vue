<template>
    <div>
        <h1>{{ age }}</h1>
        <h1 v-if="age<=18">Eres menor de edad</h1>
        <h1 v-else>Eres mayor de edad</h1>

        <button v-show="age>5 || age < 35" @click="Aumentar" >Aumentar</button>
        <button v-show="age>35  " @click="Disminuir">Disminuir</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const age = ref(18)
const Aumentar = () =>{
    age.value++;
}
const Disminuir = () =>{
    age.value--;
}

</script>

<style lang="scss" scoped>

</style>