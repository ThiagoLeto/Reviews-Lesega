<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup>
</script>

<style>
a {
  text-decoration: none !important;
}

.filtros {
  border: solid 0.1px rgb(185, 185, 185);
  margin-left: 3%;
  margin-top: 45px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 8px;
  width: 18vw;
  margin-bottom: 8px;
  padding-left: 12px;
  background-color: #35363b;
  padding: 6px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  justify-content: end;
  max-height: 35px;
}

.filtros a {
  text-decoration: none;
  color: #ffffff;
  position: relative;
  transition: all .35s ease-Out;
}

#circulo {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #ffa031;
  position: absolute;
  transition: all .4s ease-Out;
  top: 20px;
  left: 70px;
}

.filtros:hover #circulo {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -70px;
  left: -70px;
}

.filtros:hover a {
  color: #2D3142;
}

.filtros .icon-magnify2 {
  box-sizing: border-box;
  height: 3px !important;
  margin-left: 64%;
  color: white;
}

.filtros:hover .icon-magnify2 {
  color: black;
}

.gamesFound {
  text-transform: uppercase;
  padding: 5px;
  margin: auto;
  color: #35363b;
  font-weight: bold;
  text-align: center;
  /*box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
    /*box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;*/
  border-radius: 8px;
  width: 56vw;
  background-color: #e68019;
  margin-bottom: 20px;
}

.cardShadow {
  /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;*/
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
}

.cardShadow button {
  background-color: orange !important;
  color: #35363b !important;
  font-weight: bold;
}

.bigFont {
  font-size: 4rem !important;
}

.fachaFont {
  font-family: 'Zen Antique', serif;
  font-weight: 700;
  font-size: larger;
}
</style>

