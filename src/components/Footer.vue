<template>
  <div class="back">
    <div class="main">
      <div>
        <div><h3 class="h3">Записаться на просмотр</h3></div>
        <div>
          <form action="" style="display: flex; flex-direction: column">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Телефон" />
            <input type="checkbox" />
            <button type="submit" class="btn-text btn">Оставить заявку</button>
          </form>
        </div>
      </div>

      <div class="wrapper">
        <div class="wrapper">
          <a href="#" class="link-title">Окружение</a>
          <a href="#" class="link-title">Предложения</a>
          <a href="#" class="link-title">Технические характеристики</a>
        </div>
        <div class="link-title">Made by Anna Lapshina</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.back {
  background: #282828;
}

.link-title {
  color: #909090;
}

.wrapper {
  gap: 18px;
}

.h3 {
  font-weight: 600;
  opacity: 1;
  color: #ffffff;
}

.btn {
  background: #ffffff;
}

.btn-text {
  color: #282828;
}
</style>
