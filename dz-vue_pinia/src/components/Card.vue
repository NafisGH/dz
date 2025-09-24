<script setup>
import No from "../utils/No.vue";
import Yes from "../utils/Yes.vue";
const emit = defineEmits(["rotate", "changeStatus"]);

function handleCardClick() {
  emit("rotate");
  emit("changeStatus");
}

const props = defineProps({
  word: String,
  translation: String,
  state: String,
  status: String,
  number: Number,
});
const { word, translation, state, status, number } = props;
</script>
<template>
  <div v-if="state === 'closed'" class="card" @click="handleCardClick">
    <div class="card__ramka">
      <h3 class="card__text">{{ word }}</h3>
      <h4 class="card__text-rotate">ПЕРЕВЕРНУТЬ</h4>
      <span class="card__number">{{ number }}</span>
    </div>
  </div>

  <div v-else-if="state === 'open' && status === 'pending'" class="card">
    <div class="card__ramka">
      <h3 class="card__text">{{ translation }}</h3>
      <h4 class="card__rotate-back">
        <No class="no" />
        <Yes class="yes" />
      </h4>
      <span class="card__number">{{ number }}</span>
    </div>
  </div>

  <div v-else-if="status === 'correct'" class="card">
    <div class="card__ramka">
      <h3 class="card__text">{{ translation }}</h3>
      <h4></h4>
      <Yes class="icon-correct" />
      <span class="card__number">{{ number }}</span>
    </div>
  </div>

  <div v-else-if="status === 'incorrect'" class="card">
    <div class="card__ramka">
      <h3 class="card__text">{{ translation }}</h3>
      <h4></h4>
      <No class="icon-incorrect" />
      <span class="card__number">{{ number }}</span>
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

.card__number {
  position: absolute;
  top: -10px;
  left: 20px;
  background: #fff;
  padding: 0px 5px;
}

.icon-incorrect,
.icon-correct {
  position: absolute;
  top: -12px;
  left: 45%;
  background: #fff;
  padding: 0px 5px;
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
