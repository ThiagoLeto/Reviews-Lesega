<template>
    <!--<v-footer class="menu-section "></v-footer>-->
    <v-footer color="primary lighten-1" padless class="menu-section">

        <v-row justify="center" no-gutters>

            <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2 botonesFooter"> {{ link }}
            </v-btn>

            <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                {{ new Date().getFullYear() }} — <strong>Reseñas Lesega</strong>
            </v-col>

        </v-row>

    </v-footer>
</template>

<script>
export default {
    data: () => ({
        links: [
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us',
        ],
    }),
}
</script>

<style>
.menu-section {
    background-color: #35363b !important;
    width: 100%;
    position: fixed;
    bottom: 0;
}

.botonesFooter {
    color: white !important;
    background-color: #35363b !important;
    box-shadow: none !important;
}
</style>