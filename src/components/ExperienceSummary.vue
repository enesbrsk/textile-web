<template>
  <v-banner-text id="text" class="custom-banner-text">
    Experiences
  </v-banner-text>
  <div class="experience">
    <v-expansion-panels class="mb-6">
      <v-expansion-panel
          class="custom-expansion-panel"
          v-for="(item,index) in experienceList"
          :key="index"
      >
        <v-expansion-panel-title expand-icon="mdi-menu-down">
          <v-row v-if="width > 1024" align="center">
            <v-col cols="1">
              <v-img width="140" :src="item.image" aspect-ratio="1"></v-img>
            </v-col>
            <v-col cols="7">
              <div  id="text" class="text-h6 font-weight-bold" style="text-align: left;">{{ item.title }}</div>
              <v-col>
                <h2>{{ item.company }}</h2>
              </v-col>
            </v-col>
            <v-col  cols="4" class="text-right">
              <div  class="text-h10">{{ item.date }}</div>
            </v-col>
          </v-row>
          <v-row v-if="width < 1024" align="center">
            <v-col cols="4">
              <v-img width="140" :src="item.image" aspect-ratio="1"></v-img>
            </v-col>
            <v-col cols="8">
              <div  id="text" class="text-h6 font-weight-bold" style="text-align: left;font-size: 17px !important;">{{ item.title }}</div>
              <v-col>
                <h2 style="text-align: left;">{{ item.company }}</h2>
              </v-col>
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>


</template>
<script>
export default {
  data() {
    return {
      width:0,
      experienceList: [
        {
          title: 'Junior Back End Developer',
          company: '• Eureko Sigorta',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: require('@/assets/images/experience/eureko.png'),
          date: 'Jul 2022 - Aug 2022',
        },
        {
          title: 'Junior Back End Developer',
          company: '• Medya Takip Merkezi',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: require('@/assets/images/experience/medyatakip.jpg'),
          date: 'Jul 2022 - Aug 2022',

        },
        {
          title: 'Intern Web Developer',
          company: '• Cybersoft',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: require('@/assets/images/experience/cybersoft.jpg'),
          date: 'Jul 2022 - Aug 2022',
        },
        {
          title: 'Junior Back End Developer',
          company: '• Medya Takip Merkezi',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: require('@/assets/images/experience/medyatakip.jpg'),
          date: 'Jul 2022 - Aug 2022',

        },
      ],
    };
  },

  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    }
  }
};
</script>
<style scoped>
.experience {
  margin-left: 50px;
  margin-right: 50px
}

.panel-header img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 16px;
}

@media (max-width: 1200px) {
  .experience {
    padding: 0;
    margin: 0;
  }

  .panel-header img {
    padding: 0;
    margin: 0;

  }

}
</style>