<template>
  <div>
    <v-container class="skill-container">
      <v-banner-text id="text" class="custom-banner-text">
        Check Out My Skills
      </v-banner-text>
      <div class="splide">
        <div class="splide__track">
          <div class="splide__list">
            <div class="splide__slide" v-for="(item, index) in itemList" :key="index"
                 style="display: inline-block; width: 180px;">
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
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';

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
        {skill: 'Jenkins', imagePath: 'icon-jenkins'},
        {skill: 'Kafka', imagePath: 'icon-kafka'},
        {skill: 'Kotlin', imagePath: 'icon-kotlin'},
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
        {skill: 'Spring', imagePath: 'icon-spring'},

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
    splide.mount({AutoScroll});

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
  max-width: 200px;
  max-height: 205px;
  border: 2px solid rgb(228, 227, 227);
  border-radius: 10px;
  padding: 1em 3em;
  transition: transform 500ms ease-in;
  box-shadow: 0 4px 10px 0px rgba(50, 50, 50, 0.212);
}

.skill-container {
  margin: auto;
  width: 100%;
}

#skill-card:hover {
  transform: scale(1.08);
  transition: transform 0.6s ease-in-out;
  border-radius: 8px;

}
@media (max-width: 1200px) {
  .skill-container{
    padding: 0;
    margin: 0;
  }
  .splide{
    padding-left: 0;
    padding-right: 0;
    margin: 0;
  }
  #skill-card {
    width: 100%;
    max-width: 200px;
    max-height: 205px;
  }

}
</style>
