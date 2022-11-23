<template>
    <v-main class="w-100 h-100 d-flex align-center justify-center flex-column">
        <h2> Necesitas una cuenta para poder acceder a esta página. </h2>
        <v-btn @click="useRouter().replace('/register')" class="mt-10" color="orange"> Registrarse </v-btn>
    </v-main>
</template>

<script setup>
definePageMeta({
    layout: "only-content"
})
</script>
