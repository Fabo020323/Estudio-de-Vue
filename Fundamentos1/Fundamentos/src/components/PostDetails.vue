<template>
    <div class="post" >
        <h1>{{ props.title }} <hr>
            {{ props.contenido }}
            <input type="text " v-model="msg">
           <button @click="emitir_al_click">Aceptar</button>
        </h1>
    </div>
</template>

<script setup>
import{defineProps,defineEmits,ref} from 'vue';
//import { emit } from "vue"
const msg = ref('')

const emit = defineEmits();

const props = defineProps(['title','contenido'])
const emitir_al_click = () =>{
    emit('eventoQueYoDefino',msg.value)
}


</script>

<style scoped>
.post{
    width: 200px;
    height: 300px;
    border-radius: 10px;
    background-color: antiquewhite;
    margin: 10px;
    padding: 10px;
    color: black;
}

</style>