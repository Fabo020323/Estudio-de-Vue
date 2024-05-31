<template>
    <div class="informacion">
        <h1>User Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ipsam et tempora enim ut omnis repudiandae corrupti fugit reprehenderit molestias saepe dolorem, sunt atque, maiores quis ullam deserunt! Officiis, laudantium.</p>
        <PostButton/>
    </div>
</template>
<script setup>
import PostButton from './PostButton.vue';
</script>
<style scoped>
.informacion{
    width: 50%;
    outline: auto;
    border-radius: 5%;
}
p,h1{
    margin: 10px;
}
</style>