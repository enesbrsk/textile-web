<template>

  <div class="nav">
    <v-row align="center" style="margin: auto !important; width: 100%;">
      <v-col cols="auto">
        <v-row >
          <v-col>
          </v-col>
          <v-col cols="center" v-for="item in items" :key="item.title">
            <router-link :to="item.link">
              <v-btn id="text" text>{{ item.title }}</v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="auto" class="ml-auto">
        <v-btn icon href="https://github.com">
          <v-icon dark>mdi-github</v-icon>
        </v-btn>
        <v-btn icon href="https://linkedin.com">
          <v-icon dark>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon href="https://twitter.com">
          <v-icon dark>mdi-twitter</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  name: 'NavbarMenu',
  data: () => ({
    items: [
      { title: 'Home', link: '/' },
      { title: 'About', link: '/about' },
      { title: 'Projects', link: '/projects' },
      { title: 'Skills', link: '/skills' },
      { title: 'Certification', link: '/certification' },
      { title: 'Contact', link: '/contact' },
    ],
  }),
}
</script>

<style>
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: unset !important
}
.v-col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
    margin-left: auto;
    right: 0px;
}
.nav{
  width: 100%;
  display: flex;
  padding: 10px 40px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;

}

</style>