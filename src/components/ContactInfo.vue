<template>

  <div class="contact-page">
    <div class="contact-box">
      <v-col>
        <h1 style="color: #1F2229;font-size: 40px">İstanbul</h1>
        <h2 style="color: #6F6F6F;font-size: 16px">Ana Merkez ve Fabrika</h2>
      </v-col>
      <v-row align="center" style="margin-top: 15px">
        <v-col cols="auto">
          <v-icon size="x-large" white left>mdi-email</v-icon>
        </v-col>
        <v-col style="margin-left: 10px" cols="auto">
          <v-row>
            <span tyle="color: #1F2229;font-size: 1rem;line-height: 1.3">E-mail</span>
          </v-row>
          <v-row>
            <span style="color: #6f6f6f;font-size: 1rem;line-height: 1.6">egemen@boztosuntekstil.com</span>
          </v-row>
        </v-col>
        <hr class="gray-line">
      </v-row>
      <v-row align="center" style="margin-top: 15px">
        <v-col cols="auto">
          <v-icon size="x-large" white left>mdi-phone</v-icon>
        </v-col>
        <v-col style="margin-left: 10px" cols="auto">
          <v-row>
            <span tyle="color: #1F2229;font-size: 1rem;line-height: 1.3">Telefon</span>
          </v-row>
          <v-row>
            <span style="color: #6f6f6f;font-size: 1rem;line-height: 1.6">+ 90 532 316 86 62</span>
          </v-row>
        </v-col>
        <hr class="gray-line">
      </v-row>
      <v-row align="center" style="margin-top: 15px">
        <v-col cols="auto">
          <v-icon size="x-large" white left>mdi-map-marker</v-icon>
        </v-col>
        <v-col style="margin-left: 10px" cols="auto">
          <v-row>
            <span tyle="color: #1F2229;font-size: 1rem;line-height: 1.3">Adres</span>
          </v-row>
          <v-row>
            <span style="color: #6f6f6f;font-size: 1rem;line-height: 1.6">Mahmutbey mah. Köprü cad. <br>No: 30-32,Daire:
              52 <br>Bağcılar/ İstanbul</span>
          </v-row>
        </v-col>
        <hr class="gray-line">
      </v-row>

    </div>
    <div class="map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.4395068550925!2d28.82071868931437!3d41.05938464239823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa56e1b2053cb%3A0xb8a4b1b79825688f!2zTWFobXV0YmV5LCBLw7ZwcsO8IENkLiBObzozMCBEOjUyLCAzNDIxOCBCYcSfY8SxbGFyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1699180174655!5m2!1str!2str"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

  <div class="contact-page-form">

    <!-- CONTACT FORM WEB -->
    <div  class="mx-auto" style="width: 90%; margin-top: 60px;margin-bottom: 100px" v-if="width > 1024">
      <v-row>
        <v-col cols="5" style="margin-left: -40px">
          <!-- Sol taraf -->
          <h1 style="font-size: 2.25714286rem;color: #1F2229;font-family: 'Montserrat';margin-bottom: 30px">İletişim Formu
          </h1>
          <v-text-field density="compact" placeholder="Ad-Soyad" prepend-inner-icon="mdi-account-outline"
                        variant="outlined"></v-text-field>
          <v-text-field density="compact" placeholder="E-Mail" prepend-inner-icon="mdi-email-outline" variant="outlined"
                        @click:append-inner="visible = !visible"></v-text-field>
          <v-text-field density="compact" placeholder="Telefon" prepend-inner-icon="mdi-phone-outline" variant="outlined"
                        @click:append-inner="visible = !visible"></v-text-field>
          <v-textarea density="compact" placeholder="Mesaj" prepend-inner-icon="mdi-message-outline" variant="outlined"
                      @click:append-inner="visible = !visible"></v-textarea>
          <v-btn width="100%" class="mb-8" size="large" color="blue-darken-4" variant="outlined">Gönder</v-btn>
        </v-col>
        <v-col cols="7">
          <img style="margin-left: -150px;height: 100%;" :src="require('@/assets/images/iletisimForm.jpg')" />
        </v-col>
      </v-row>
    </div>
  </div>

  <!-- CONTACT FORM MOBILE -->
  <div class="contact-form" v-if="width < 1024">
    <v-row>
      <v-col >
        <!-- Sol taraf -->
        <h1 style="font-size: 2.25714286rem;color: #1F2229;font-family: 'Montserrat';margin-bottom: 30px">İletişim Formu
        </h1>
        <v-text-field density="compact" placeholder="Ad-Soyad" prepend-inner-icon="mdi-account-outline"
                      variant="outlined"></v-text-field>
        <v-text-field density="compact" placeholder="E-Mail" prepend-inner-icon="mdi-email-outline" variant="outlined"
                      @click:append-inner="visible = !visible"></v-text-field>
        <v-text-field density="compact" placeholder="Telefon" prepend-inner-icon="mdi-phone-outline" variant="outlined"
                      @click:append-inner="visible = !visible"></v-text-field>
        <v-textarea density="compact" placeholder="Mesaj" prepend-inner-icon="mdi-message-outline" variant="outlined"
                    @click:append-inner="visible = !visible"></v-textarea>
        <v-btn width="100%" class="mb-8" size="large" color="blue-darken-4" variant="outlined">Gönder</v-btn>
      </v-col>
    </v-row>
  </div>


</template>
<script>
export default {
  data() {
    return {
      width:0,
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
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
  left: 148px;
  position: relative;
}

.gray-line {
  border: 1px solid #ccc;
  margin-top: 5px;
  width: 100%;
}

.light-gray-line {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  border: 1px solid #36393f;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
}

.contact-page {
  display: flex;
  justify-content: space-between;
  padding: 0px;
}
.contact-page-form {
  display: flex;
  width: 100%;
  padding: 0px;
}

.contact-box {
  padding: 20px;
  width: 500px;
  margin: 0 auto;
}

.map {
  width: 50%;
}

@media (max-width: 1024px) {
  .contact-page {
    margin-top: 30px;
    display: block; /* Mobilde blok düzenleme */
  }
  .contact-box{
    padding: 0;
    width: 100%; /* Genişlik tam ekran olacak şekilde ayarlama */
    margin-bottom: 80px; /* İki bölüm arasına boşluk bırakma */
  }

  .map iframe {
    width: 100%;
    max-height: 400px;
    padding: 0;
  }
  .map{
    width: 100%;
    max-height: 400px;
    padding: 0;

  }
  .contact-form {
    margin-top: 40px;
    margin-right: 25px;
    margin-left: 25px;
    max-width: 100%;
    padding: 0;
  }
}
</style>