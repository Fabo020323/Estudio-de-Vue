<template>
    <div>
        <h1 v-mi_directiva > Mi directiva</h1>
        <input type="text"  v-model="msg">
        <h1 v-mi_directiva_con_parametro="70">{{ msg }}</h1>
        <h1>{{ reverse }}</h1>
    </div>
</template>

<script setup>
import {ref,computed} from 'vue';
const msg = ref('');

const reverse = computed(() => msg.value.split('').reverse().join(''))

</script>

<style scoped>

</style>