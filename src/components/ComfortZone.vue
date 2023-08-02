<template>
    <div>
        <div class="main">
            <h2 class="h2">Путешествие в мир безупречного вкуса, начинается с лобби: стены украшает покрытие из натурального
                камня,
                зеркальные декоративные панно, выполненные по авторскому дизайну.</h2>

            <div class="wrapper">
                <p class="text">В доме предусмотрена собственная фитнес зона, на первом этаже, к услугам жителей и их
                    гостей: кафе и
                    продуктовый магазин, аптека, химчистка, салон красоты и медицинский центр.</p>

                <p class="text">В северной части дома, для маленьких жителей, удачно расположилась оборудованная площадка
                    для
                    развлечений. Открытая эко-терраса в восточной, тихой и защищенной от городского шума части дома.</p>
            </div>
        </div>

        <div class="carousel">
            <img @click="moveLeft" src="../assets/ArrowLeft.svg" id="arrowLeft" alt="">
            <div class="carousel-items">
                <div id="carouselLine" class="carousel-line">
                    <img src="../assets/Rectangle.svg" alt="">
                    <img src="../assets/Rectangle.svg" alt="">
                    <img src="../assets/Rectangle.svg" alt="">
                    <img src="../assets/Rectangle.svg" alt="">
                </div>
            </div>
            <img @click="moveRight" src="../assets/ArrowRight.svg" id="arrowRight" alt="">
        </div>

        <div style="text-align: center;">
            <p class="text" style="margin-bottom: 140px;">{{ counter }} / 4</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const offset = ref(0)
const counter = ref(1)

const moveLeft = () => {
    if (offset.value > 0) {
        offset.value = offset.value - 1260;
        carouselLine.style.right = offset.value + "px";
        counter.value--
    }
}

const moveRight = () => {
    if (offset.value <= 3720) {
        offset.value = offset.value + 1260;
        carouselLine.style.right = offset.value + "px";
        counter.value++
    }
}
</script>

<style lang="scss" scoped>
.main {
    margin-bottom: 40px;
}

.carousel {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.carousel-items {
    overflow: hidden;
}

.carousel-line {
    transition: all ease 1s;
    position: relative;
    gap: 60px;
    display: flex;
    right: 0;
}

#arrowLeft:hover,
#arrowRight:hover {
    cursor: pointer;
}
</style>
