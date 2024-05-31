<template>
    <div>
        <input type="text" v-model="texto">
        <h1>{{ texto}}</h1>
        <input type="checkbox" v-model="check" >
        <button @click ="marcar">Cambiar</button>
        <select name="pais" id="pais" v-model="select">
            <option value="Spain">Spain</option>
            <option value="Uk">Uk</option>
            <option value="Cuba">Cuba</option>
        </select>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const texto = ref('');
const check = ref(true)
const select = ref('Spain')

const marcar = ()=>{
    check.value = !check.value;
}

</script>

<style  scoped>

</style>