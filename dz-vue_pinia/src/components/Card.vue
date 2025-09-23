<script setup>
const emit = defineEmits(["rotate", "changeStatus"]);

function handleCardClick() {
  emit("rotate");
  emit("changeStatus");
}
</script>
<template>
  <div class="card" @click="handleCardClick">
    <div class="card__ramka">
      <h3 class="card__text">unadmitted</h3>
      <h4 class="card__text-rotate">ПЕРЕВЕРНУТЬ</h4>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 250px;
  height: 376px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__ramka {
  width: 212px;
  height: 320px;
  border-radius: 12px;
  border: 1px solid #cce8ff;
  /* margin: 28px 19px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.card__text {
}
.card__text-rotate {
  position: absolute;
  bottom: -30px;
  background: #fff;
  padding: 0px 5px;
}
</style>
