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
//con argumentos
app.directive('con_argumentos',{
    beforeMount: (el,binding) =>{
        let size = 18
        switch(binding.arg){
            case 'sm':
                size = 10
                break
            case 'md':
                size = 18
                break
            case 'lg':
                size = 24
                break
            case 'xl':
                size = 30
                break
            case 'xxl':
                size = 40
                break
        }
        el.style.fontSize = size+"px"
    }
})

//con modificadores
app.directive('modifiers',{
    beforeMount:(el,binding) =>{
        let size = 18

        if(binding.modifiers.sm){
            size = 10
        }else if(binding.modifiers.md){
            size = 20
        }else if(binding.modifiers.lg){
            size = 30
        }
        el.style.fontSize = size +'px';

        if(binding.modifiers.red){
            el.style.color = '#ff0000'
        }else if(binding.modifiers.green){
            el.style.color = '#00ff00'
        }else if(binding.modifiers.blue){
            el.style.color = ' #0000ff'
        }
    }

   
})

app.mount('#app');
