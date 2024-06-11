import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.directive('mi_directiva',{
    beforeMount: (el,binding) =>{
        el.style.fontSize = '70px'
    }
});

app.directive('mi_directiva_con_parametro',{
    beforeMount: (el,binding) =>{
        el.style.fontSize = binding.value + "px"
    }
});


app.mount('#app');
