<script setup lang="ts">
import { useUserDataStore } from '~~/stores/userDataStore';


const COOLDOWN = 1000
const contenido = ref("juego")

const contenidoList = ["ese juego", "ese libro", "esa serie", "esa pelicula"]
let contenidoIndex = 0

function changeContent() {
    contenidoIndex++
    if (contenidoIndex > 3) contenidoIndex = 0
    console.log("Leto is Sussy Baka")

    contenido.value = contenidoList[contenidoIndex]
}

const intervalId = window.setInterval(changeContent, COOLDOWN);

onUnmounted(() => {
    clearInterval(intervalId)
})

definePageMeta({
    //@ts-ignore
    layout: 'landing'
})
</script>

<template>
    <div class="w-100 d-flex flex-column align-center landing-container">
        <h1 class="fachaFont bigFont landing-title text-center"> Reseñas Lesega </h1>
        <h2 class="text-center"> Mira las reseñas de <span class=""> {{ contenido }} </span> que te recomendaron</h2>
        <v-btn v-if="!useUserDataStore().loggedIn" @click="useRouter().replace('/register')" class="mt-10"
            color="orange"> Comenzar ahora </v-btn>

        <img src="ElPeladoTemplario.png" lazy-src="ElPeladoTemplario.png" alt="Magia" class="mt-2 pelado">
    </div>
</template>
  
<style>
.landing-container {
    height: 100vh !important;
}

.landing-title {
    margin-top: 200px;
}

.pelado {
    position: absolute;
    bottom: 0px;
    height: fit-content !important;
    max-width: 500px;
    width: 80vw !important;

}
</style>
