<template>
  <transition name="drawer" mode="out-in">
    <v-navigation-drawer app :style="{ width: drawer ? '290px' : '100%'  }" class="menu" color="white">
      <div class="video-container">
        <video autoplay loop muted id="video-bg" class="video-card">
          <source :src=tekstil type="video/mp4">
        </video>
      </div>
      <v-row style="position: absolute; top: 10px; width: 100%;">

        <v-col style="color: azure;"> <v-img :src="require('@/assets/images/logo.png')" aspect-ratio="1" style="width: 120px !important;
    height: auto;
    margin-left: 20px;
}"></v-img>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
      <a class="toggle-drawer-a">
        <div @click="toggleDrawer()" class="hidden-xs-only toggle-drawer-text">
          <template v-if="!drawer">
            <v-icon class="toggle-drawer-i">mdi-menu</v-icon>
            <!-- Üç çizgi (hamburger menü) ikonu -->
          </template>
          <template v-else>
            <v-icon class="toggle-drawer-i">mdi-close</v-icon> <!-- Kapatma (çarpı) ikonu -->
          </template>
        </div>
        <v-list v-if="drawer" class="drawer-menu" density="compact" nav>
          <v-list-item to="/about" prepend-icon="mdi-forum" title="About" value="About" description="About"
            style="box-sizing: unset !important;"></v-list-item>
          <v-list-item to="/skills" prepend-icon="mdi-information" title="References"
            style="box-sizing: unset !important;" value="References"></v-list-item>
          <v-list-item to="/certification" prepend-icon="mdi-cube-outline" title="Product"
            style="box-sizing: unset !important;" value="product"></v-list-item>

          <v-list-item to="/contact" prepend-icon="mdi-phone" title="Contact" style="box-sizing: unset !important;"
            value="Contact"></v-list-item>
        </v-list>
        <div></div>
      </a>

      <div class="toggle-drawer-icon">
        <v-icon class="alt-icon">mdi-youtube</v-icon>
        <v-row style="margin-top: 5px;">

          <v-col> <v-icon class="alt-icon">mdi-instagram</v-icon>
          </v-col>
          <v-col style="text-align: end;margin-right: 10px;"> <v-icon class="alt-icon">mdi-earth</v-icon>
          </v-col>
        </v-row>
      </div>


    </v-navigation-drawer>
  
  </transition>
  
</template>

<script setup>
import { ref } from 'vue';
import tekstil from '../../assets/videos/tekstil.mp4';
const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
  const icon = document.querySelector('.toggle-drawer-i');
  icon.classList.toggle('closed');
}
</script>


<style scoped>
@import "@/assets/styles/navigation.css";

.v-navigation-drawer .v-list {

    overflow: hidden;
    background: white !important;
    border-radius: 22px;
}
</style>
