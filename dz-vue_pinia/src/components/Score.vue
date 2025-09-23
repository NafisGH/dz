<script setup>
import IconHeart from "../utils/iconHeart.vue";

const props = defineProps({
  countLikes: Number,
});

const { countLikes } = props;
</script>
<template>
  <div class="container-icon">
    <div>{{ countLikes }}</div>
    <IconHeart />
  </div>
</template>
<style scoped>
.container-icon {
  background: var(--color-background-light);
  display: flex;
  align-items: center;
  max-width: fit-content;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 36px;
  color: var(--color-text-blue);
}
</style>
