<template>
  <header>
    <div class="header">
      <nav class="navigation">
        <a href="#" class="navbar-logo">Logo</a>
        <div class="navbar-right">
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div class="video-container">
        <video  muted id="video-bg" class="video-card">
          <source :src=tekstil type="video/mp4">
        </video>
      </div>
    </div>
  </header>
</template>

<script setup>
import tekstil from '../assets/videos/tekstil.mp4'

</script>

<style scoped>
.navigation{
  padding-top:130px;
  padding-bottom:30px;
  position:absolute;
  top:0;
  width:100%;
  z-index:1;
}
.video-card{
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
}
.navbar-right{
  float:right;
  padding-right:10%;
}

.navbar-right a{
  text-decoration:none;
  padding:10px;
  color: #ff0000;
  font-family:Arial;
  font-weight:900;
}

.navbar-right a:hover{
  text-decoration:underline;
}
.navbar-logo{
  padding-left:10%;
  font-family:Arial;
  font-size:30px;
  font-weight:bold;
  text-decoration:none;
  color: #e12323;
}

.video-container::before {
  position: fixed!important;
  display: block;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Saydamlık burada ayarlanabilir */
}


#video-bg{
  width:100%;

}



</style>






