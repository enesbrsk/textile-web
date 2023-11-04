<template>
  <v-container fluid>
    <v-banner-text id="text" class="custom-banner-text">Check out of my certifications</v-banner-text>

    <div class="mockup-window border bg-base-600">
      <div class="flex justify-center px-4 py-16 bg-top-gray-400 no-padding">
        <v-container class="certification-container">
          <v-carousel hide-delimiters class="mx-auto" style="max-width: 1200px" :cycle="true" :autoplay="true" :interval="3000" :items-per-row="2" multi-items>
            <v-carousel-item v-for="(certification, index) in certificationList" :key="index">
              <div class="carousel-image">
                <v-img  id="img-certification" :src="certification.certificateImage" alt="slide image" contain class="rounded-lg" />
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </div>
    </div>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      certificationList: [
        {
          certificateImage: require('@/assets/images/certification/coursea-desingpattern.png'),
          certificateTitle: "Certificate of Completion",
          certificateSubtitle: "Data Science Fundamentals",
          certificateText: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
        },
        {
          certificateImage: require('@/assets/images/certification/hacerRank-java-basic.png'),
          certificateTitle: "Certificate of Completion",
          certificateSubtitle: "Java Basic",
          certificateText: "This certifies that Enes Birisik has successfully completed the Java Basic course.",
        },
        {
          certificateImage: require('@/assets/images/certification/hacerRank-sql-intermediate.png'),
          certificateTitle: "Certificate of Completion",
          certificateSubtitle: "SQL Intermediate",
          certificateText: "This certifies that Enes Birisik has successfully completed the SQL Intermediate course.",
        },
        {
          certificateImage: require('@/assets/images/certification/hackerRank-problemSolving-basic.png'),
          certificateTitle: "Certificate of Completion",
          certificateSubtitle: "Problem Solving Basic",
          certificateText: "This certifies that Enes Birisik has successfully completed the Problem Solving Basic course.",
        },
        {
          certificateImage: require('@/assets/images/certification/turkcell-mongoDB.png'),
          certificateTitle: "Certificate of Completion",
          certificateSubtitle: "MongoDB Fundamentals",
          certificateText: "This certifies that Enes Birisik has successfully completed the MongoDB Fundamentals course.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-image {

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
}
@media(max-width: 1200px){
  .certification-container {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .no-padding {
    padding: 0px !important;

  }
}
</style>
