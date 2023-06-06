<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  color: #282828;
}

.text {
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
}

.h2 {
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
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
</style>
