<template>
  <v-app>
   

    <v-main>
      
      <div  class="display-drawer" ><NavigationDrawer /></div>
      <div class="view-drawer"><NavbarMenu/></div>
      <router-view></router-view>
      <div style="" ></div>
      <v-footer style="left: 0;right: 0;width: 100%;padding: 40px" color="#1f2229">
        <v-container>
          <v-row justify="center" align="center">
            <v-col>
              <img style="margin:auto;height: 100px;width: 150px" :src="require('@/assets/images/boztosun.png')" />
              <hr class="light-gray-line">
              <p class="footer-text">Boztosun Textile © 2023</p>
              <hr class="light-gray-line">
              <p class="footer-text">Web Design: ENKA Software 2023</p>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>

import NavbarMenu from './components/menu/NavbarMenu.vue';
import NavigationDrawer from './components/menu/NavigationDrawer.vue';

export default {
  name: 'App',
  data() {
    return {
      width: 0,

    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  components: {
    NavigationDrawer,
    NavbarMenu
},
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    }
  }
}
</script>

<style scoped>
.light-gray-line {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  border: 1px solid #36393f;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
}
.footer-text {
  color: rgba(167, 167, 167, 0.99);
  font-size: 18px;
  text-align: center;
  margin: 10px 0;
}
.view-drawer{
  display: none;
}
.display-drawer{
  display: block;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.left-column {
  flex: 0 0 300px;
  /* İlk div, sabit 300px genişlikte */
  background-color: #f0f0f0;

}

.right-column {
  flex: 1;
  /* İkinci div, kalan alanı kaplar */
  background-color: #e0e0e0;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .custom-container {
    margin-top: 20px !important;
    width: 100% !important;
  }
}

@media (max-width: 1024px) {
  .display-drawer{
  display: none;
}
.view-drawer{
  display: unset;
}
}
</style>
