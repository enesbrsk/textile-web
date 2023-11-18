<template>
  <div class="gallery">
    <v-banner-text id="text" class="custom-banner-text" style="z-index: 1; left: 0px !important; top: 0px !important">
      Product
    </v-banner-text>
    <v-row style="margin-bottom: 100px">
      <v-col  v-for="(image, index) in images" :key="index" cols="12" sm="2" md="4">
        <v-card style="height: 100%;width: 100%">
          <v-img :src="image.url" aspect-ratio="1"></v-img>
          <v-card-title>{{ image.title }}</v-card-title>
          <v-card-actions>
            <v-btn @click="openImage(index)">Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="600">
      <v-img :src="images[selectedImage].url" aspect-ratio="1">
        <v-icon @click="closeImage" class="toggle-drawer-i" style="color: brown;">mdi-close</v-icon></v-img>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: require('@/assets/images/showroom.jpg'), title: "1" },
        { url: require('@/assets/images/showroom.jpg'), title: "1" },
        { url: require('@/assets/images/showroom.jpg'), title: "1" },
        { url: require('@/assets/images/showroom.jpg'), title: "1" },
        { url: require('@/assets/images/showroom.jpg'), title: "1" },
        { url: require('@/assets/images/showroom.jpg'), title: "1" },
        { url: require('@/assets/images/showroom.jpg'), title: "1" },
        { url: require('@/assets/images/showroom.jpg'), title: "1" }
      ],
      dialog: false,
      selectedImage: 0,
    };
  },
  methods: {
    openImage(index) {
      this.selectedImage = index;
      this.dialog = true;
    },
    closeImage() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.gallery {
  padding: 16px;
  left: 100px;
  width: fit-content;
  margin: auto;
}

@media (max-width: 1024) {
  .gallery {
    padding: 16px;
    left: unset !important;
    width: fit-content;
    position: relative;
    margin: auto;
  }
}

/* İstediğiniz diğer özel stilleri burada tanımlayabilirsiniz */
</style>
