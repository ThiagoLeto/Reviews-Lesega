<template>
    <muestras :lista="lista" tipo-producto="peliculas"> </muestras>
</template>
  
<style>

</style>

<script setup>
import { getColection } from '~~/composables/firebaseFunctions';

const searchInput = ref("")
const lista = (await getColection("muestrasPeliculas")).docs
const datosPeliculas = lista.map(doc => doc.data())
console.log(datosPeliculas)

</script>