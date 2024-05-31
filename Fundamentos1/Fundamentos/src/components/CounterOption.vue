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

export default defineComponent({
    name:"CounterOption",
    components:{PostButton},
    data(){
        let counter = 0;
        return {counter};
    },
    methods:{
        incrementCounterOption(){
            this.counter++;
        },
        decrementCunterOprion(){
            this.counter--;
        }
    }
})

</script>