<template>
  <div class="back">
    <Header />

    <div class="main">
      <div>
        <h1 class="h1">Тихий дом в самом центре Москвы</h1>
        <p class="text">
          Создатели проекта хотели создать для вас атмосферу бесконечного
          космического пространства, спокойствия и уединения в окружении
          элегантных интерьеров.
        </p>
        <button class="btn-text btn">Записаться на просмотр</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
</script>

<style lang="scss" scoped>
.text {
  color: #ffffff;
  max-width: 509px;
  margin-bottom: 40px;
}

.btn {
  background: #ffffff;
  margin-bottom: 283px;
}

.btn-text {
  color: #282828;
}

.h1 {
  max-width: 903px;
  margin-bottom: 20px;
}

.back {
  background-image: url(@/assets/cover.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
