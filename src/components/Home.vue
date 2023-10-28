<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="wrapper">
    <div class="top-navbar">
      <div class="wrapper-left">
        <img src="../assets/name.png" alt="name" class="pfp">
        <div class="profile">
          <h1 class="name">Jeswin Sunsi</h1>
          <h3 class="desc">Male, 18yo</h3>
        </div>
      </div>
      <img src="../assets/sidebar.png" alt="Sidebar" class="sidebar">
    </div>
    <h1 class="title">Consult a Doctor</h1>
    <img src="../assets/consult.png" alt="consult" class="consult" @click="$router.push('/consultmain')">
    <h1 class="title">Your Recent Consultations</h1>
    <div class="recents-wrapper">
      <img src="../assets/recent1.png" alt="recent" class="recent">
      <img src="../assets/recent1.png" alt="recent" class="recent">
    </div>
    <h1 class="title">Weekly Healthcare Updates</h1>
    <div class="healthcare-wrapper">
      <img src="../assets/news1.png" alt="news" class="news">
      <img src="../assets/news2.png" alt="news" class="news">
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

.recent {
  height: 9.375rem;
  width: 9.375rem;
  margin-right: 0.75rem;
}

.news {
  height: 12.9rem;
  min-width: 18.1rem;
  max-width: 18.1rem;
}

.healthcare-wrapper {
  scroll-padding: 3rem;
  display: flex;
  scroll-snap-points-x: repeat(300px);
  scroll-snap-type: x mandatory;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
</style>
