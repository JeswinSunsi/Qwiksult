<template>
    <div class="wrapper">
        <div class="top-navbar">
            <div class="wrapper-left">
                <img src="../assets/leftArrow.png" alt="name" class="pfp" @click="$router.go(-1)">
                <div class="profile">
                    <h1 class="name">CASE #RW231</h1>
                </div>
            </div>
            <img src="../assets/sidebar.png" alt="Sidebar" class="sidebar">
        </div>
        <h1 class="title">PATIENT OUTLOOK</h1>
        <h3 class="content" style="margin-bottom: 2rem;">Healthy 18-year-old with no history of heart issues, smoking,
            alcohol use, surgeries, or known
            allergies.</h3>
        <h1 class="title">AILMENT DETAILS</h1>
        <h3 class="content" style="margin-bottom: 2rem;">Experiencing mild cough and sore throat for 3 days. Feeling
            feverish. Resting heart rate at 65, back pain, and dark yellow urine. Travelled in direct rainfall before
            getting sick.</h3>
        <h1 class="title" style="margin-bottom: 1.5rem;">Prescription Details</h1>
        <div class="input-box">
            <input type="text" v-model="fluThree" class="input-symptom" placeholder="Fill in your answer here">
        </div>
        <h1 class="title" style="margin-bottom: 1.5rem;">Patient Report Content</h1>
        <div class="input-box">
            <input type="text" v-model="fluThree" class="input-symptom" placeholder="Fill in your answer here">
        </div>
        <div class="button" @click="submitBtn">Continue</div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()

const fluTwo = ref(null);

function submitBtn() {
    console.log(fluTwo.value);

}
</script>

<style scoped>
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

.title {
    color: #1D1D1D;
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
}

.content {
    color: #7A7A7A;
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
    margin-bottom: 2rem;
}
</style>