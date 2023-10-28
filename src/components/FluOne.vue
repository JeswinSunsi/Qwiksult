<template>
    <div class="wrapper">
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <div class="top-navbar">
            <div class="wrapper-left">
                <img src="../assets/leftArrow.png" alt="name" class="pfp" @click="$router.go(-1)">
                <div class="profile">
                    <h1 class="name">Consult a Doctor</h1>
                </div>
            </div>
            <img src="../assets/sidebar.png" alt="Sidebar" class="sidebar">
        </div>
        <h1 class="title">Do you have a temperature?</h1>
        <div class="input-box">
            <input type="text" v-model="fluOne" class="input-symptom" placeholder="Fill in your answer here">
        </div>
        <div class="tips">
            <img src="../assets/tip.png" alt="" class="tip-icon">
            <h3 class="tip-text">If available, include a thermometer reading by placing one into your armpit.</h3>
        </div>
        <div class="button" @click="submitBtn">Continue</div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useMainStore } from "../store/useMainStore";
const main = useMainStore();
const { addToFluDatabase } = main;

import { useRouter } from "vue-router";
const router = useRouter()
const fluOne = ref(null);

function submitBtn() {
    console.log(fluOne.value);
    addToFluDatabase(0, fluOne.value)
    router.push('/flutwo')
}
</script>

<style scoped>
.tips {
    display: flex;
    margin-top: 7rem;
    width: 85%;
}

.tip-icon {
    height: 2.5rem;
    margin-right: 0.8rem;
}

.tip-text {
    color: #73B1FF;
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.progress-bar {
    height: 1.2rem;
    width: 100%;
    border-radius: 0.4rem;
    background-color: #fff;
}

.progress {
    height: 1.2rem;
    width: 9.9rem;
    background-color: #0A75FA;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
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
    margin-top: 2.8rem;
    margin-bottom: 0.9rem;
    color: #1D1D1D;
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.button {
    height: 4.1rem;
    width: 92%;
    background-color: #0A75FA;
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

.input-symptom {
    border: none;
    outline: none;
    width: 95%;
    background-color: transparent;
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    color: #1D1D1D;
    font-weight: 500;
    line-height: normal;
}

.input-symptom::placeholder {
    color: #A8A8A8;
}

.input-box {
    border-bottom: 1px solid #DDDDDD;
}
</style>