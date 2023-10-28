<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="wrapper">
        <div class="top-navbar">
            <div class="wrapper-left">
                <img src="../assets/name.png" alt="name" class="pfp">
                <div class="profile">
                    <h1 class="name">Dr Aravind Krish</h1>
                    <h3 class="desc">MBBS, General Medicine</h3>
                </div>
            </div>
            <img src="../assets/sidebar.png" alt="Sidebar" class="sidebar">
        </div>
        <h1 class="title">New Consultation Requests</h1>
        <div class="row">
            <img src="../assets/req1.png" @click="$router.push('/docanalysis')" alt="" class="request">
            <img src="../assets/req2.png" alt="" class="request">
        </div>
        <div class="row">
            <img src="../assets/req3.png" alt="" class="request">
            <img src="../assets/req4.png" alt="" class="request">
        </div>
        <h1 class="title">Your Completed Requests</h1>
        <div class="row">
            <img src="../assets/creq5.png" alt="" class="request">
            <img src="../assets/creq6.png" alt="" class="request">
        </div>

    </div>
</template>

<style scoped>
.top-navbar {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.profile {
    display: flex;
    flex-direction: column;
    margin-left: 0.8rem;
    margin-top: 0.4rem;
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
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem;
}

.desc {
    color: #A0A0A0;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.consult {
    height: 9.375rem;
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
    margin-bottom: 0.63rem;
    display: flex;
    flex-direction: row;
}

.request {
    height: 9.3rem;
    width: 9.3rem;
    margin-right: 0.75rem;
}
</style>
