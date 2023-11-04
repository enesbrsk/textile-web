<template>
  <v-navigation-drawer :style="{ width: drawer ? '100%' : '400px' }" color="white">
    <div class="video-container" >
      <video autoplay loop muted id="video-bg" class="video-card">
        <source :src=tekstil type="video/mp4">
      </video>
    </div>
    <a @click="toggleDrawer()" class="toggle-drawer-a">
      <span class="hidden-xs-only toggle-drawer-text">
        <v-icon class="toggle-drawer-i" style="margin-bottom: 5px">
          <template v-if="!drawer">
            <v-icon>mdi-menu</v-icon> <!-- Üç çizgi (hamburger menü) ikonu -->
          </template>
          <template v-else>
            <v-icon>mdi-close</v-icon> <!-- Kapatma (çarpı) ikonu -->
          </template>
        </v-icon>
      </span>
    </a>



  </v-navigation-drawer>

</template>

<script setup>
import { ref } from 'vue';
import tekstil from '../../assets/videos/tekstil.mp4';
const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
</script>


<style scoped>
@import "@/assets/styles/navigation.css";

.toggle-drawer .v-tab.v-tab {
  --v-btn-height: var(--v-tabs-height);
  min-width: 90px;
  position: relative !important;
  width: 70px;
  font-weight: 700;
  font-size: 12px;
  line-height: 105.9%;
  text-align: center;
  letter-spacing: -0.025em;
  color: #00468a !important;
  text-transform: capitalize;
}

.tab-text {
  font-size: 12px;
  color: black;
}


@media (max-width: 1024px) {
  .v-icon i {
    --v-icon-size-multiplier: 1;
    align-items: center;
    display: table;
    font-feature-settings: "liga";
    height: 15px !important;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    position: relative;
    text-indent: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    vertical-align: middle;
    width: 1em;
  }
}
 .navigation{
   padding-top:130px;
   padding-bottom:30px;
   position:absolute;
   top:0;
   width:100%;
   z-index:1;
 }
.video-card{
  position: static;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.navbar-right{
  float:right;
  padding-right:10%;
}

.navbar-right a{
  text-decoration:none;
  padding:10px;
  color: #ff0000;
  font-family:Arial;
  font-weight:900;
}

.navbar-right a:hover{
  text-decoration:underline;
}
.navbar-logo{
  padding-left:10%;
  font-family:Arial;
  font-size:30px;
  font-weight:bold;
  text-decoration:none;
  color: #e12323;
}
.video-container{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.video-container::before {
  position: fixed!important;
  display: block;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Saydamlık burada ayarlanabilir */
  height: 100%;
  width: 100%;
  object-fit: cover;
}


#video-bg{
  width:100%;

}

</style>
