<template>
    <muestras :lista="lista" tipo-producto="libros"> </muestras>
</template>
  
<style>

</style>

<script setup lang="ts">
import { getColection } from '~~/composables/firebaseFunctions';

const searchInput = ref("")
const lista = (await getColection("muestrasLibros")).docs
const datosLibros = lista.map(doc => doc.data())
console.log(datosLibros)

definePageMeta({
    layout: "default"
})
</script>