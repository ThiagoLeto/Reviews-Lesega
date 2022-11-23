<script setup>

const props = defineProps({
    lista: {
        required: true,
        type: Array
    },

    tipoProducto: {
        required: true,
        type: String
    }
})
</script>

<template>
    <v-card class="w-100 h-100 d-flex flex-column align-center" style="background-color: rgb(229,229,229);">
        <div class="muestras mt-15">
            <div class="gamesFound">
                <p style="font-size:large;">Se han encontrado
                    <span v-if="lista.length === 1"> {{ lista.length }} {{ tipoProducto.slice(0, -1)}} </span>
                    <span v-else> {{ lista.length }} {{ tipoProducto}} </span>

                 </p>
            </div>

            <div class="d-flex flex-wrap justify-center m-auto">
                <item-card v-for="datos in lista" :image="datos.data().imageUrl" :nombre="datos.data().nombre"
                    :puntuacion-lesega="datos.data().puntuacionLesega"
                    :puntuacion-usuarios="datos.data().puntuacionUsuarios" :id-producto="datos.data().id">
                </item-card>

            </div>
        </div>
    </v-card>

</template>

<style>
.muestras {
    width: 80%;
    /*   background-color: rgb(221, 221, 221);
  border-left: solid rgb(197, 197, 197) 1px;
  border-right: solid rgb(197, 197, 197) 1px; */
}
</style>