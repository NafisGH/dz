<script setup>
import Button from "./components/Button.vue";
const correctDate = new Date();
</script>

<template>
  <h2>{{ correctDate }}</h2>
  <Button>Кнопка</Button>
</template>

<style scoped></style>
