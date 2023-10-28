<script setup>

</script>

<template>
  <div class="container">
    <router-view v-slot="{ Component }">
    </router-view>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
}
</style>
