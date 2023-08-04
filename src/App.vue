<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  color: #282828;
  scroll-behavior: smooth;
}

.text {
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
}

.btn-text {
  font-weight: 600;
  font-size: 17px;
  line-height: 140%;
  color: #ffffff;
  text-decoration: none;
}

.btn {
  width: 320px;
  height: 58px;
  background: #282828;
  border: none;
  cursor: pointer;
}

.h1 {
  font-weight: 500;
  font-size: 72px;
  line-height: 100%;
  color: #ffffff;
}

.h2 {
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
}

.h3 {
  font-weight: 700;
  font-size: 25px;
  line-height: 120%;
  opacity: 0.3;
  margin-bottom: 10px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.main {
  max-width: 1200px;
  margin: 0 auto 180px;
}

.link-title {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #ffffff;
  text-decoration: none;
}
</style>
