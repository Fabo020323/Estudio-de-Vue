<template>
    <div>
        <h1>{{ counter }}</h1>
        <button @click="incrementCounterOption">Incrementar</button>
        <button @click="decrementCunterOprion">Decrementar</button>
    </div>
</template>
<script>
import {defineComponent} from 'vue'
import PostButton from './PostButton.vue'
import { ref } from 'vue';

export default defineComponent({
    name:"CounterComposition",
    components:{PostButton},
    setup(){
        let counter = ref(0);
        const incrementCounterOption = () =>{
              counter.value++;
        }
        const decrementCunterOprion = () =>{
            counter.value--;
        }
        return {counter,incrementCounterOption,decrementCunterOprion}
    }
})

</script>