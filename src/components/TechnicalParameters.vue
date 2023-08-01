<template>
    <div id="params" class="main">
        <h2 class="h2 border">Технические характеристики</h2>
        <div class="box border">
            <h3 class="h3 content">Сервис</h3>
            <p class="text content">Две зоны ресепшн 24/7</p>
        </div>

        <div class="box border">
            <h3 class="h3 content">Паркинг</h3>
            <p class="text content">Наземный, охраняемый паркинг</p>
        </div>

        <div class="box border">
            <h3 class="h3 content">Система безопасности</h3>
            <p class="text content">
                Видеонаблюдение, охранная сигнализация по периметру дома, современная
                система контроля доступа
            </p>
        </div>

        <div class="box border">
            <h3 class="h3 content">Лифты</h3>
            <p class="text content">Бесшумные премиальные лифты OTIS</p>
        </div>

        <div class="box border">
            <h3 class="h3 content">Территория</h3>
            <p class="text content">Огороженная и охраняемая территория</p>
        </div>

        <div class="box border">
            <h3 class="h3 content">Окна</h3>
            <p class="text content">
                Высококачественные стеклопакеты с повышенным уровнем шумоизоляции
            </p>
        </div>

        <div class="box border">
            <h3 class="h3 content">Пожарная сигнализация</h3>
            <p class="text content">
                Автоматическая система пожаротушения в каждом апартаменте
            </p>
        </div>

        <div class="box border">
            <h3 class="h3 content">Кондиционирование</h3>
            <p class="text content">Центральная система кондиционирования</p>
        </div>

        <div class="box border">
            <h3 class="h3 content">Вентиляция</h3>
            <p class="text content">
                Система принудительной приточно-вытяжной вентиляции
            </p>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.h3 {
    opacity: 1;
}

.box {
    display: flex;
    align-items: center;
}

.border {
    padding: 40px 0;
    border-bottom: 1px solid #909090;
}

.content {
    width: 600px;
}

.text {
    opacity: 0.8;
}
</style>
