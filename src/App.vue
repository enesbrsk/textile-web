<template>
  <v-app>

    <NavigationDrawer/>
    <v-main >
      <v-container class="custom-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

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
    NavigationDrawer
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    }
  }
}
</script>

<style>
html,
body {
  overflow: hidden !important; /* Hide vertical scrollbar */
  height: 100%;
  margin: 0;
}

.custom-container {
  margin-top: 20px !important;
  width: 75% !important;
}

@media (max-width: 1024px) {
  .custom-container {
    margin-top: 20px !important;
    width: 100% !important;
  }
}
</style>
