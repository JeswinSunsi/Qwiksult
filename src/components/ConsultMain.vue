<template>
    <div class="wrapper">
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <div class="top-navbar">
            <div class="wrapper-left">
                <img src="../assets/leftArrow.png" alt="name" class="pfp" @click="$router.go(-1)">
                <div class=" profile">
                    <h1 class="name">Consult a Doctor</h1>
                </div>
            </div>
            <img src="../assets/sidebar.png" alt="Sidebar" class="sidebar">
        </div>
        <img src="../assets/advert.png" alt="advert" class="advert">
        <h1 class="title">What Best Describes your Ailment?</h1>
        <div class="row">
            <div class="box" :class="{ categoryClicked: activeCategory == 'Cold' }" @click="changeCategory($event, 'Cold')">
                Cold / Flue</div>
            <div class="box" :class="{ categoryClicked: activeCategory == 'Sore' }" @click="changeCategory($event, 'Sore')">
                Sore Throat</div>
        </div>
        <div class="row">
            <div class="box" :class="{ categoryClicked: activeCategory == 'Stomach' }"
                @click="changeCategory($event, 'Stomach')">
                Stomach Ache</div>
            <div class="box" :class="{ categoryClicked: activeCategory == 'Conjunctivitis' }"
                @click="changeCategory($event, 'Conjunctivitis')">
                Conjunctivitis</div>
        </div>
        <div class="row">
            <div class="box" :class="{ categoryClicked: activeCategory == 'Diarrhoea' }"
                @click="changeCategory($event, 'Diarrhoea')">
                Diarrhoea</div>
            <div class="box" :class="{ categoryClicked: activeCategory == 'Vomiting' }"
                @click="changeCategory($event, 'Vomiting')">
                Nausea / Vomiting</div>
        </div>
        <div class="row">
            <div class="box" :class="{ categoryClicked: activeCategory == 'Others' }"
                @click="changeCategory($event, 'Others')">
                Others</div>
        </div>
        <div class="button" :class="{ enabledBtn: activeCategory != null }" @click="$router.push('/fluone')">Continue</div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const activeCategory = ref(null);

function changeCategory(event, categoryName) {
    activeCategory.value = categoryName;
    console.log(activeCategory.value);
}
</script>

<style scoped>
.progress-bar {
    height: 1.2rem;
    width: 100%;
    border-radius: 0.4rem;
    background-color: #fff;
}

.progress {
    height: 1.2rem;
    width: 6.3rem;
    background-color: #0A75FA;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
}

.enabledBtn {
    background-color: #0A75FA !important;
}

.top-navbar {
    margin-top: 1.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.8rem;
}

.profile {
    display: flex;
    flex-direction: column;
    margin-left: 0.8rem;
    margin-top: 0.7rem;
}

.categoryClicked {
    color: #fff !important;
    background-color: #0A75FA !important;
}

.sidebar,
.pfp {
    height: 3rem;
    width: 3rem;
}

.wrapper-left {
    display: flex;
}

.name {
    color: #1D1D1D;
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.desc {
    color: #A0A0A0;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.advert {
    width: 100%;
}

.title {
    margin-top: 1.8rem;
    margin-bottom: 0.9rem;
    color: #1D1D1D;
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.row {
    display: flex;
    margin-bottom: 0.6rem;
}

.box {
    height: 3.1rem;
    background-color: #fff;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4B4B4B;
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 0.63rem;
    padding: 0.9rem 1.5rem;
}

.button {
    height: 4.1rem;
    width: 92%;
    background-color: #B5D6FF;
    position: fixed;
    bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
    color: #FFF;
    font-family: Poppins;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>