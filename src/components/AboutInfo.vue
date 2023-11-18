<template>
  <div class="gallery">
    <v-row>
      <v-col cols="12" >
        <div class="card-text">
          <h2 style="font-size: 40px; color: #1F2229;">About Us</h2>
          <v-row>
              <p>
                Boztosun Textile was established in 2018 by Egemen Boztosun as
                a knitted and woven production company in istanbul. Our bussines is manufacturing high qualitiy knitted and woven products with sensitivity against natural and oscial enviroment. Our goal
                is to be a leader in manufacturing of knitted and woven garments by providing enchanted services, relationship and profitability.
              </p>
          </v-row>
          <h2 style="font-size: 40px; color: #1F2229;">Product</h2>
          <p>
            Boztosun Textile has a supply chain starting from collection to ready garment. We Supply knitting and waven ready garment with
            a big coordination between our departments for our customers. Our Strengths are focusing on customer demands, short lead time, providing sustainable service and product quality and competitive prices.
          </p>
          <h2 id="mobile-h2" style="font-size: 40px; color: #1F2229;">Sustainability </h2>
          <p>
            Boztosun Textile cares about the future generations. We care about our nature and out ecosystem on our planet. We make our production according to these delicate issues.
          </p>
        </div>
        <div style="margin-bottom: 500px;"></div>

        <v-row align="center" justify="center">
          <figure >
            <img  :src="require('@/assets/images/Factory.jpg')" alt="Mountains">
            <figcaption>Factory</figcaption>
          </figure>
          <figure style="--c:#fff5">
            <img :src="require('@/assets/images/showroom.jpg')" alt="Mountains">
            <figcaption>Showroom</figcaption>
          </figure>
        </v-row>

      </v-col>
    </v-row>
    <div style="margin-top: 250px;"></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfo: [false, false, false],
      cards: [
        { info: "Fabrika" },
        { info: "Showroom" }
      ],
    };
  },
  methods: {
    showCardInfo(index) {
      this.showInfo[index] = true;
    },
    hideCardInfo(index) {
      this.showInfo[index] = false;
    },
  },
};
</script>

<style scoped>
figure img{
  width: 350px;
  height: 350px;
}
figure {
  margin-bottom: 30px;
  z-index: 5;
  margin-right: 30px;
  display: grid;
  overflow: hidden;
  cursor: pointer;
}
figure > * {
  grid-area: 1/1;
  transition: .4s;
}
figure figcaption {
  display: grid;
  align-items: end;
  font-family: sans-serif;
  font-size: 2.3rem;
  font-weight: bold;
  color: #0000;
  padding: .75rem;
  background: var(--c,#0009);
  clip-path: inset(0 var(--_i,100%) 0 0);
  -webkit-mask:
      linear-gradient(#000 0 0),
      linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask-clip: text, padding-box;
  margin: -1px;
}
figure:hover figcaption{
  --_i: 0%;
}
figure:hover img {
  width: 350px;
  height: 350px;
  transform: scale(1.2);
}
@supports not (-webkit-mask-clip: text) {
  figure figcaption {
    -webkit-mask: none;
    color: #fff;
  }
}

.gallery {
  padding: 16px;
  left: 100px;
  width: fit-content;
  margin: auto;top: 300px;
}

h2{
  margin-top: 40px;
  margin-bottom: 15px;
}
.card-text {
  margin-top: 80px;
  text-align: center;
  background: border-box;
  top: 450px;
  font-family: Montserrat, sans-serif;
  color: gray;
  position: relative;
  padding: 200px;
}
.card-text p{
  text-align: left;
}


.card:hover .card-overlay {
  opacity: 1;
}
@media (max-width: 1024px) {

  figure img{
    width: 350px;
    height: 350px;
  }
  figure {
    margin-bottom: 30px;
    z-index: 5;
    display: grid;
    overflow: hidden;
    cursor: pointer;
  }
  figure > * {
    grid-area: 1/1;
    transition: .4s;
  }
  figure figcaption {
    display: grid;
    align-items: end;
    font-family: sans-serif;
    font-size: 2.3rem;
    font-weight: bold;
    color: #0000;
    padding: .75rem;
    background: var(--c,#0009);
    clip-path: inset(0 var(--_i,100%) 0 0);
    -webkit-mask:
        linear-gradient(#000 0 0),
        linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    -webkit-mask-clip: text, padding-box;
    margin: -1px;
  }
  figure:hover figcaption{
    --_i: 0%;
  }
  figure:hover img {
    width: 350px;
    height: 350px;
    transform: scale(1.2);
  }
  @supports not (-webkit-mask-clip: text) {
    figure figcaption {
      -webkit-mask: none;
      color: #fff;
    }
  }
  .gallery {
    padding: 16px;
    left: unset !important;
    width: fit-content;
    position: relative;
    margin: auto;
  }

  .card-text {
    font-family: Montserrat, sans-serif !important;
    color: #070606 !important;
    position: relative !important;
    padding: 0px !important;
    margin: 30px !important;
    font-weight: normal !important;
  }
}
</style>
