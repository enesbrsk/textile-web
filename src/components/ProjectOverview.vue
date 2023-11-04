<template>
    <v-banner-text id="text" class="custom-banner-text">Check out some of my projects
    </v-banner-text>

      <v-row >
        <v-col v-for="(p, index) in projectList" :key="index">
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="custom-card" v-bind="props">
              <v-expand-transition>
                <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal align-center"
                     style="height: 100%; ">
                  {{ p.projectExplain }}
                </div>
              </v-expand-transition>
              <v-card-text class="text-h5" style="text-align: center; margin: auto;margin: 10px;height: 80px ">
                <div style="font-family: Quicksand, sans-serif; font-size: 18pt; font-weight: bold; color: white; margin: auto;height: 40px ">
                  {{ p.projectTitle }}
                </div>
                <div class="btn-div" style="margin: 10px">
                  <v-img v-for="(i, indexx) in p.projectIcon" :key="indexx" :src="i.path" :width="i.width"></v-img>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
</template>
<script>
/*import projectService from "@/services/ProjectService";*/

export default {

  /*
  mounted() {
    projectService.getProjects().then(response => {
      console.log(response)
      this.projects = response.data;
    })

  },*/

  data() {
    return {
      projects:[],
      projectList: [
        {
          projectTitle: "Personel Devam Kontrol Sistemi",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
        {
          projectTitle: "Certificate of Completion",
          projectExplain: "This certifies that Enes Birisik has successfully completed the Data Science Fundamentals course.",
          projectIcon: [
            {
              path: require('@/assets/images/Visual_Studio_Icon.png'),
              width: 35
            },
            {
              path: require('@/assets/images/logo_asp_dot_net_winforms.png'),
              width: 55
            },
            {
              path: require('@/assets/images/devexpress.png'),
              width: 35
            }

          ]
        },
      ]
    };
  },
};
</script>

<style scoped>


.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

.bg-orange-darken-2 {
  background-color: rgba(0, 0, 0, 0.8) !important;
  color: rgb(255, 255, 255) !important;
  margin: auto;
  text-align: center;
  justify-items: center;
  z-index: 2;
}


.btn-div {
  background-color: #f8fcff;
  display: flex;
  padding: 10px;
  height: 55px;
  border-radius: 7px !important;
  margin: 30px auto !important;
  min-width: 200px !important;

}

.custom-card {
  background-color: red;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px;
  min-width: 320px;
  min-height: 344px;
}


.v-img {
  width: 100%;
  height: 100%;
}

.hover-card .v-card-text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.v-card {
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 15px !important;
  box-shadow: 0px 0px 10px 0px !important;
  background: rgb(16,9,138);
  background: linear-gradient(180deg, rgba(16,9,138,0.7440317191329657) 46%, rgba(89,130,204,0.7496339600293243) 100%, rgba(78,64,207,0.3841911764705882) 100%) !important;

  background-size: cover;
  display: block !important;
  width: 344px !important;

}

.custom-banner-text {
  font-size: 3rem;
  font-weight: normal;
  text-align: center;
  padding-bottom: 10px;
}

.v-card .v-card-text {
  height: 100% !important;
  flex: inherit !important;
  display: grid !important;
  align-content: center !important;
}

.v-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  margin: inherit !important;
}

.custom-card[data-v-0e184748] {
  margin: 20px !important;
  min-width: unset !important;
  min-height: unset !important;
  width: 300px !important;

  height: 200px !important;

}

@media (max-width: 1600px) {
  .custom-card[data-v-0e184748] {

    min-width: unset !important;
    min-height: unset !important;
  }

  .v-col[data-v-0e184748] {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    width: 100% !important;
    margin: inherit !important;
    display: contents !important;
  }

  .btn-div[data-v-0e184748] {
    width: max-content !important;
    justify-content: stretch !important;
    margin: 30px auto !important;
    min-width: 200px !important;
  }
  .small-images {
    width: 50px;
    margin: 10px;
  }
}
</style>