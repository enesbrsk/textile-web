<template>
  <v-banner-text id="text" class="custom-banner-text"
                 align="center">
    <img :src="require('@/assets/images/ip.png')" alt="Developer" class="about-image"/>
  </v-banner-text>

  <div class=" bg-base-600">
    <div class="flex justify-center px-4 py-16 bg-top-gray-400 no-padding">
      <v-container class="about-container">

        <v-row align="center">

          <v-col cols="12" md="4">
            <img :src="require('@/assets/images/7.png')" alt="Developer" class="about-image"/>
          </v-col>
          <v-col cols="12" md="8" class="about-content">
            <div>
              <v-row align="center">
                <v-col>
                  <div>
                    <h2>Birth:
                      <v-label>16 Dec 1998</v-label>
                    </h2>
                    <h2>City:
                      <v-label>Istanbul/ Turkey</v-label>
                    </h2>
                    <h2>University:
                      <v-label>Duzce University</v-label>
                    </h2>
                    <h2>Department:
                      <v-label>Computer Engineering</v-label>
                    </h2>
                    <h2>Degree:
                      <v-label>Bachelor</v-label>
                    </h2>
                  </div>
                </v-col>
              </v-row>
            </div>

            <v-card-text align="left" class="about-description">
              I have experience building web applications, middleware, and RESTful APIs using languages and frameworks
              including Spring Boot, Hibernate, RDBMS, and NoSql. My strong understanding of fundamental CS concepts
              like
              object-oriented programming, aspect-oriented programming, MVC architecture, REST, SOAP, CI/CD, and TDD
              allows
              me to build software with modern techniques, service-based architecture, and third-party API integration.
              I am
              also extremely rigorous and perfectionist in my code, exactly as a Backend Developer should be.
            </v-card-text>
            <v-btn class="me-2 text-none custom-btn"
                   variant="outlined"
                   prepend-icon="mdi-export-variant"><a href="./EnesBirisik_CV.pdf" target="_blank">Resume</a>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>
.about-container {
  text-align: left;
  padding: 40px;
  font-weight: 600;
  font-family: Arial;
}

.about-image {
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.about-content {
  text-align: center;
}

.about-description {
  font-size: 18px;
  line-height: 1.5;
  margin-top: 30px;
}

.custom-btn[data-v-7e99b488] {
  border: 2px solid purple !important;
  color: purple !important;
}

.custom-btn[data-v-7e99b488]:hover {
  background-color: purple !important;
  color: white !important;
}
@media(max-width: 1200px){
  .about-image{
    width: 70%;
    height: 70%;
    margin: 0 auto;
  }
  .about-container {
     padding-left: 0px !important;
     padding-right: 0px !important;
  }
  .no-padding {
    padding: 0px !important;

  }
}
</style>