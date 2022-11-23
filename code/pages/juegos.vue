<template>
    <v-main>
        <muestras :lista="lista" tipo-producto="juegos"> </muestras>
        <v-btn @click="addJuego({ nombre: 'El consultorio del Dr Cesario' })"> PONE JUEGO</v-btn>
    </v-main>
</template>
  
<style>

</style>

<script setup>
import { getColection } from '~~/composables/firebaseFunctions';

const lista = (await getColection("muestrasJuegos")).docs
const ruta = useRoute().fullPath.slice(1);if(ruta.includes('?')){const prodVar = ruta.split('?')[1]; const prod = prodVar.split('=')[1]; var listaAux = ref([]);lista.forEach( doc=>{ if( doc.data().nombre.includes(prod) ){ listaAux.value.push(doc); console.log(doc.data().nombre );  } } );for (let index = 0; index < lista.length; index++) {console.log(lista[index].data().nombre);;if( !lista[index].data().nombre.includes(prod)) { console.log("borrando" +lista[index].data().nombre);;lista.splice(index,1); index--  }}}

</script>