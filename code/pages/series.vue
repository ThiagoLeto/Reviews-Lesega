<template>
    <muestras :lista="lista" tipo-producto="series"> </muestras>
</template>
  
<style>

</style>

<script setup>
import { getColection } from '~~/composables/firebaseFunctions';

const searchInput = ref("")
const lista = (await getColection("muestrasSeries")).docs
const datosSeries = lista.map(doc => doc.data())
console.log(datosSeries)

</script>