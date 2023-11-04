<template>
  <v-banner-text id="text" class="custom-banner-text">
                 Contact Me</v-banner-text>
  <div class="mockup-window border bg-base-600">
    <div class="flex justify-between px-4 py-16 bg-top-gray-400">
      <v-row>
        <v-col cols="12" md="6">
          <div class="mockup-phone border-primary">
            <div class="camera"></div>
            <div class="display">
              <div class="artboard artboard-demo phone-1">
                <div
                  class="flex flex-col justify-between w-full h-full bg-gradient-to-tl from-purple-400/70 to-purple-100/40">
                  <div class="my-12 mx-5">
                    <div class="flex flex-wrap gap-x-2 gap-y-8 animate__animated animate__fadeInDownBig">
                      <div v-for="(contact, index) in contactList" :key="index">
                        <a :href="contact.url"
                          class="flex flex-col gap-y-1 items-center justify-center h-16 w-16 hover:animate-bounce-slow transition-all"
                          target="_blank">
                          <img class="w-12 h-12" :src="contact.image" />
                          <h1 class="text-sm font-semibold text-gray-700">{{ contact.name }}</h1>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="mb-10 mx-5">
                    <div class="flex flex-wrap gap-x-2 gap-y-8">
                      <a href="#" class="flex flex-col gap-y-1 items-center justify-center h-16 w-16 cursor-not-allowed"
                        target="_blank">
                        <img class="w-14 h-14" :src="require('@/assets/images/social/phone.svg')" />
                        <h1 class="text-sm font-semibold text-gray-700">Phone</h1>
                      </a>
                      <a href="https://spring.io/" class="flex flex-col gap-y-1 items-center justify-center h-16 w-16"
                        target="_blank">
                        <img class="w-14 h-14" :src="require('@/assets/images/social/safari.svg')" />
                        <h1 class="text-sm font-semibold text-gray-700">Safari</h1>
                      </a>
                      <a href="mailto:enesbrsk@hotmail.com"
                        class="flex flex-col gap-y-1 items-center justify-center h-16 w-16" target="_blank">
                        <img class="w-14 h-14" :src="require('@/assets/images/social/mail.svg')" />
                        <h1 class="text-sm font-semibold text-gray-700">Mail</h1>
                      </a>
                      <a href="https://open.spotify.com/"
                        class="flex flex-col gap-y-1 items-center justify-center h-16 w-16" target="_blank">
                        <img class="w-14 h-14" :src="require('@/assets/images/social/spotify.svg')" />
                        <h1 class="text-sm font-semibold text-gray-700">Spotify</h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <img :src="require('@/assets/images/8.png')" alt="Developer" />
          <h1 style="max-width: 500px;margin-top: 30px;" id="text">Hello,<br><br>
            If you have any questions, suggestions, feel free to get in touch with me through this page.<br>
            As a Java developer, I have experience with technologies such as Spring and Spring Boot. You can use the form
            below to contact me, or you can email me directly.Additionally, you can connect with me on social media. I
            will get back to you as soon as possible.
            <br><br>Thank you!
          </h1>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactList: [
        {
          "id": 1,
          "name": "GitHub",
          "image": require('@/assets/images/social/github.svg'),
          "url": "https://github.com/enesbrsk"
        },
        {
          "id": 2,
          "name": "LinkedIn",
          "image": require('@/assets/images/social/linkedin.svg'),
          "url": "https://www.linkedin.com/in/enes-biri%C5%9Fik-094b20168/"
        },
        {
          "id": 4,
          "name": "Medium",
          "image": require('@/assets/images/social/medium.svg'),
          "url": "https://medium.com/@enesbrsk69"
        },
        {
          "id": 5,
          "name": "Instagram",
          "image": require('@/assets/images/social/instagram.svg'),
          "url": "https://www.instagram.com/enessbrsk/"
        },
        {
          "id": 6,
          "name": "YouTube",
          "image": require('@/assets/images/social/youtube.svg'),
          "url": "https://www.youtube.com/@java"
        },
        {
          "id": 7,
          "name": "Twitter",
          "image": require('@/assets/images/social/twitter.svg'),
          "url": "https://twitter.com/"
        }
      ]
    }
  }
}

</script>
<style scoped>
#phone {}
.v-col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
    text-align: center;
}
@media (max-width: 1600px) {
  .border-primary {
    --v-border-color: var(--v-theme-primary);
    width: 333px;
  }

  .v-col-md-6  {
    flex-basis: 0;
    flex-grow: 1;
    max-width: -webkit-fill-available;
    text-align: center;
  }
}
</style>