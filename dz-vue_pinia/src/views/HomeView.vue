<script setup>
import Button from "../components/Button.vue";
import { ref } from "vue";
import Score from "../components/Score.vue";
import Card from "../components/Card.vue";
// Домашняя страница — простая заглушка
let countRef = ref(100);

function handleRotate() {
  console.log("Emit rotate");
}
function handleChangeStatus() {
  console.log("Emit ChangeStatus");
}
</script>

<template>
  <header class="header">
    <h2>Запомни слово</h2>
    <Score v-bind:countLikes="countRef" />
  </header>
  <section class="main">
    <Button>Кнопка</Button>
  </section>
  <Card @rotate="handleRotate" @changeStatus="handleChangeStatus" />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
