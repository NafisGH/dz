<script setup></script>
<template>
  <button class="button">
    <slot />
  </button>
</template>
<style scoped>
.button {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 335px;
  height: 53px;
  gap: 9px;
  border: none;
  border-radius: 100px;
  background: var(--color-background-blue);
  padding: 16px 10px;
  font-family: var(--font);
  font-size: 20px;
  color: var(--color-primary);
  cursor: pointer;
}
</style>
