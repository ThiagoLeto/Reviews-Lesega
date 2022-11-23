<template>
    <nuxt-link :to="currentSection + '/' + idProducto">
        <div class="card-section">
            <img :src="image">
            <h4 style=" text-align: center; padding-bottom: 0;" class="pa-3"> {{
                    pascalCaseToSpacedString(nombre)
            }} </h4>

            <div
                style="min-height: 1px !important; max-height: 1px !important; height: 1px !important; background-color: gray; opacity: 50; margin-left: 25px; margin-right: 25px; margin-bottom: 10px;">
            </div>
            <!--<hr>-->
            <div class="review">
                <div class="reviewH5">
                    <h5>Review Lesega</h5>
                </div>
                <div class="score">
                    <p> {{ puntuacionLesega }} </p>
                </div>
            </div>

            <!--<hr>-->
            <div class="review">
                <div class="reviewH5">
                    <h5>Review Usuarios</h5>
                </div>
                <div class="score">
                    <p> {{ puntuacionUsuarios }} </p>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<style>
.card-section {
    color: white;
    background-color: #35363b;
    margin: 30px;
    width: 260px;
    border-radius: 18px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    overflow: hidden;
    cursor: pointer;
}

.card-section:hover {
    transform: translateY(-12px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.card-section img {
    width: 100%;
    height: 160px;
    object-fit: cover;
}

.review {
    height: 60px;
    display: flex;
    justify-content: space-between;
}

.review h5 {
    font-size: 0.75em;
    line-height: 60px;
    margin-left: 12px;
}

.score {
    width: 50%;
    height: 100%;
    background-color: orange;
}

.score p {
    border-top: 2px solid #35363b;
    border-bottom: 2px solid #35363b;
    font-size: 24px;
    text-align: center;
    line-height: 60px;
}
</style>

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    puntuacionLesega: {
        type: Number,
        required: true
    },
    puntuacionUsuarios: {
        type: Number,
        required: true
    },
    idProducto: {
        type: String,
        required: true
    }
})

const currentSection = ref(useRoute().path.slice(0, -1))


</script>