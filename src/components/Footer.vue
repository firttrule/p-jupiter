<template>
  <div class="back">
    <div class="main">
      <div class="wrapper" style="border-bottom: 1px solid #909090; margin-bottom: 25px; justify-content: start">
        <h3 class="h3" style="margin-right: 320px;">Записаться на просмотр</h3>
        <form action="" style="display: flex; flex-direction: column; gap: 40px; margin-bottom: 80px; width: 420px;">
          <div style="display: flex; flex-direction: column; gap: 20px">
            <input type="text" class="input-text input" placeholder="Имя" />
            <input type="text" class="input-text input" placeholder="Телефон" />
          </div>

          <div style="display: flex;">
            <input id="toggle" type="checkbox" class="checkbox" style="margin-right: 10px" />
            <label for="toggle" class="label-text">
              Даю согласие на обработку
              <a href="#" class="label-text" style="color: #ffffff">Персональных данных</a>
            </label>
          </div>

          <button type="submit" class="btn-text btn">Оставить заявку</button>
        </form>
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
  align-items: start;
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

.main {
  padding: 80px 0;
  margin-bottom: 0;
}

.label-text {
  font-size: 14px;
  line-height: 140%;
  color: #909090;
}

.input {
  background-color: inherit;
  border: none;
  border-bottom: 1px solid #909090;
}

.input-text {
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #909090;
  padding: 17px 0px 10px;
  transition: 0.3s;
}

.input-text:focus {
  padding-left: 10px;
}

.checkbox {
  border: 1px solid #909090;
  width: 20px;
  height: 20px;
}
</style>
