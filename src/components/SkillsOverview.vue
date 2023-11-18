<template>
  <div style=" min-height: 800px; width: fit-content;">
    <v-banner-text id="text" class="custom-banner-text">
      References
    </v-banner-text>
    <v-container class="skill-container">

      <div class="splide">
        <div class="splide__track">
          <div class="splide__list">
            <div class="splide__slide" v-for="(item, index) in itemList" :key="index"
              style="display: inline-block; width: 400px;">
              <v-card id="skill-card" style="margin: 1rem; padding: 1rem;">
                <div :class="item.imagePath"></div>
                <v-card-title>{{ item.skill }}</v-card-title>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>

import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default {

  components: {},
  data() {
    return {
      itemList: [
        {
          skill: 'Java',
          imagePath: 'icon-java'
        },
        {
          skill: 'Vue.js',
          imagePath: 'icon-vue'
        },
        {
          skill: 'CSS',
          imagePath: 'icon-css'
        },
        {
          skill: 'Docker',
          imagePath: 'icon-docker'
        },
        {
          skill: 'Elasticsearch',
          imagePath: 'icon-elastic'
        },
        {
          skill: 'Git',
          imagePath: 'icon-git'
        },
        {
          skill: 'Html',
          imagePath: 'icon-html5'
        },
        { skill: 'Jenkins', imagePath: 'icon-jenkins' },
        { skill: 'Kafka', imagePath: 'icon-kafka' },
        { skill: 'Kotlin', imagePath: 'icon-kotlin' },
        {
          skill: 'MongoDB',
          imagePath: 'icon-mongo'
        },
        {
          skill: 'Oracle',
          imagePath: 'icon-oracle'
        },
        {
          skill: 'PostgreSQL',
          imagePath: 'icon-postgre'
        },
        {
          skill: 'Redis',
          imagePath: 'icon-redis'
        },
        { skill: 'Spring', imagePath: 'icon-spring' },

      ],
    };
  },
  mounted() {

    const splide = new Splide('.splide', {

      type: 'loop',
      drag: 'free', // Auto-scroll sırasında kaç kart kaydırılacağı
      gap: "1rem",
      autoWidth: true, // Kartların otomatik genişlik ayarı
      pagination: false,
      rewind: true,
      rewindSpeed: 5000,

      perMove: 1,
      arrows: false,
      pauseOnHover: false, // Mouse ile üzerine gelince durdurma
      easing: "linear", // Kaydırma hareketinin eğrisi
      autoScroll: {
        speed: 3,
      },
      extensions: [AutoScroll],
    });
    splide.mount({ AutoScroll });

  },
};
</script>
<style scoped>
@import "@/assets/styles/icon.css";


#skill-card {
  list-style: none;
  /* opacity: 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  width: 100%;
  word-wrap: break-word;
  max-width: 400px;
  max-height: 500px;
  border: 1px solid rgb(228, 227, 227);
  border-radius: 10px;
  padding: 1em 3em;
  transition: transform 500ms ease-in;
  background-color: #ffffff !important;

}

.skill-container {
  margin: auto;
  width: 100%;
  background-color: white;
  top: 300px;
  position: fixed;
  max-width: max-content;
  height: max-content;

}

#skill-card:hover {
  transform: scale(1.08);
  transition: transform 0.6s ease-in-out;
  border-radius: 8px;

}

@media (max-width: 1200px) {
  .custom-banner-text {
    text-align: unset !important;
    font-size: 1.8rem;
    margin-bottom: 15px;
    /* line-height: 2.25rem; */
    padding: 0px;
    font-family: Arial;
    z-index: 1;
  }

  .v-application {
    display: flex;
    background: rgb(var(--v-theme-background));
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
    width: fit-content !important;
  }

  .skill-container {
    top: unset !important;
    padding: 0;
    margin: 0;
    position: fixed !important;
  }

  .splide {
    padding-left: 0;
    padding-right: 0;
    margin: 0;
    top: 0px !important;
    position: relative;
  }

  #skill-card {
    width: 100%;
    max-width: unset;
    max-height: unset;
  }

  .splide__track {
    overflow: hidden;
    position: relative;
    z-index: 0;
    top: 110px;
  }
}</style>
