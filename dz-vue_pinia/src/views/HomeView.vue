<script setup>
import Button from "../components/Button.vue";
import { ref } from "vue";
import Score from "../components/Score.vue";
import Card from "../components/Card.vue";

let countRef = ref(100);

const cards = ref([
  {
    word: "car",
    translation: "автомобиль",
    state: "closed",
    status: "pending",
    number: 1,
  },
  {
    word: "house",
    translation: "дом",
    state: "open",
    status: "pending",
    number: 2,
  },
  {
    word: "dog",
    translation: "собака",
    state: "open",
    status: "correct",
    number: 3,
  },
  {
    word: "cat",
    translation: "кот",
    state: "open",
    status: "incorrect",
    number: 4,
  },
]);

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
  <Card
    v-for="card in cards"
    :key="card.number"
    v-bind="card"
    @rotate="handleRotate"
    @changeStatus="handleChangeStatus"
  />
  <!-- <Card /> -->
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
