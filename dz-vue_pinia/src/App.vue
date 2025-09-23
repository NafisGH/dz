<script setup>
import { ref } from "vue";
// import Button from "./components/Button.vue";
import Scoped from "./components/Score.vue";
</script>

<template>
  <nav>
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/cards">Карточки</RouterLink>
    <RouterLink to="/sandbox">Песочница</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped></style>
