<script setup>
import No from "../utils/No.vue";
import Yes from "../utils/Yes.vue";
</script>

<template>
  <section>
    <h3>Песочница карточки</h3>
  </section>

  <div class="card">
    <div class="card__ramka">
      <h3 class="card__text">unadmitted</h3>
      <h4 class="card__text-rotate">ПЕРЕВЕРНУТЬ</h4>
      <span class="card__number">1</span>
    </div>
  </div>

  <div class="card">
    <div class="card__ramka">
      <h3 class="card__text">Текст</h3>
      <h4 class="card__rotate-back">
        <No class="no" />
        <Yes class="yes" />
      </h4>
      <span class="card__number">2</span>
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

.card__number {
  position: absolute;
  top: -10px;
  left: 20px;
  background: #fff;
  padding: 0px 5px;
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

.card__text-rotate {
  position: absolute;
  bottom: -30px;
  background: #fff;
  padding: 0px 5px;
}
.card__rotate-back {
  position: absolute;
  bottom: -35px;
  background: #fff;
  padding: 0px 5px;
}
.no {
  margin-right: 30px;
}
</style>
