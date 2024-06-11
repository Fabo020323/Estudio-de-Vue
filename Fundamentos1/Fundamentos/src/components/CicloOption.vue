<template>
  <div></div>
</template>

<script setup>
import { onMounted, onBeforeMount, onUpdated, onBeforeUpdate } from "vue";


onMounted(() => {
  console.log("monunted");
});
onUpdated(() => {
  console.log("updated");
});
</script>

<style scoped>
</style>