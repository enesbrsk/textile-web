<template>
  <div class="bg-ip">
    <AboutInfo />
  </div>
</template>

<script setup>
import AboutInfo from "@/components/AboutInfo.vue";
</script>

<style scoped>
.bg-ip {

  background: url('@/assets/images/ip.png') no-repeat center center;
  background-size: cover;
  background-color: white;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.bg-ip {
  background-color: rgb(255 255 255 / 42%);
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

@media (max-width: 800px) {
  .bg-ip {
    background-color: rgb(255 255 255 / 75%) !important;
    padding: 20px;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
