<template>
    <div>
        <v-main v-if="gameData" class="d-flex flex-column " style="background-color: rgb(229,229,229);">
            <div class="contenedor">
                <div class="product-overview-bg d-flex align-center">
                    <!-- Usado antes:  :style="{ backgroundImage: `url(${gameData.imageUrl})`, backgroundSize: 'cover' }"-->
                    <img :src="gameData.imageUrl" alt="asdad">

                    <div class="py-12 px-5 d-flex product-overview-container">
                        <img class="product-img ml-10" :src="gameData.imageUrl" alt="imagen producto"
                            style="object-fit:cover">
                        <div class="d-flex flex-column align-start justify-center">
                            <div class="d-flex flex-column title-and-categories">
                                <div class="tituloJuego flex-grow-0 text-white"> {{
                                        pascalCaseToSpacedString(gameData.nombre)
                                }}</div>

                                <div class="categorias mt-3">
                                    <span v-for="category in gameData.categorias"> {{ category }} / </span>
                                </div>

                                <div class="d-flex review-scores mt-5">
                                    <div class="puntuaciones">
                                        <div class="puntuacion">
                                            <p style="font-size: large; font-weight: bold; margin: auto;">Puntuacion
                                                Lesega:
                                            </p>
                                            <div style="margin-left: 10px;" class="puntuacion-cuadrado">
                                                <p> {{ gameData.puntuacionLesega}} </p>
                                            </div>
                                        </div>

                                        <div class="puntuacion">
                                            <p style="font-size: large; font-weight: bold; margin: auto;">Puntuacion de
                                                usuarios: </p>
                                            <div style="margin-left: 10px;" class="puntuacion-cuadrado">
                                                <p>{{ promedioPuntuaciones === -1 ?  '-' : promedioPuntuaciones  }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--button class="botonReview" role="button"><span class="text"> Haz tu propia reseña! </span></button-->
            <div class="d-flex justify-center w-100">
                <div class="d-flex flex-column align-center descInfoEstadis mt-10">
                    <div class="align-self-start">
                        <h2> <b> Descripción </b></h2>
                        <div class="info-text"> {{ gameData.descripcion }} </div>
                        <div class="my-5" style="height: 1.5px;width: 100%; background-color:orange;"></div>
                        <h2> <b> Información </b></h2>
                        <div v-for="(item, key) in gameData.informacion" class="info-text">
                            <div> <b>{{ key[0].toUpperCase() + key.slice(1) }} </b>: {{ item }} </div>
                        </div>

                    </div>

                    <div class="estadisticas mt-10">
                        <ul class="estadisticas2">
                            <p style="font-weight:bold;">Estadisticas</p>
                            <div v-for="(item, key) in gameData.calificacionesLesega">
                                <li class="li"> {{ camelCaseToSpacedString(key) }}: {{ item }} </li>
                                <div style="border-top: 1px solid rgba(0, 0, 0, 0.2);"></div>
                            </div>
                        </ul>
                    </div>


                    <div class="comentarios">
                        <div class="lineaComentario">
                            <p>Crea tu reseña</p>
                        </div>
                        <div class="cajaCrearComentario pb-3">
                            <v-card class="d-flex sliderPuntuacion ">
                                <v-card-text>
                                    <h5 class="text-center"> Deja tu puntuación</h5>
                                    <v-slider v-model="publicarPuntuacion" step="1" thumb-label ticks></v-slider>
                                </v-card-text>
                            </v-card>
                            <!--<input placeholder="Escriba su reseña" v-model="publicarReview" class="escribirReview"type="text">-->
                            <textarea class="escribirReview" name="asdad" id="" cols="30" rows="10" v-model="publicarReview"></textarea>
                            <button class="enviarReview" @click="publicarResena()"> Enviar </button>
                        </div>

                        <p style="margin-bottom: 10px; font-weight: bold; font-size: 18px;">Reseñas de usuarios: </p>
                        <div class="contenedorReviews">
                            <v-card v-if="gameData" v-for="comments in gameData.comentarios" class="reviewUser">
                                <div class="d-flex flex-row nomPuntFech">
                                    <div class="d-flex flex-row nombrePuntuacionFec">
                                        <div class="puntuacionReview">
                                            <p class="parrafPunt"> {{ comments.calificacion }} </p>
                                        </div>
                                        <div class="d-flex flex-column nomFech">
                                            <div class="nombreUsuario">
                                                <p> @{{ comments.userId }} </p>
                                            </div>
                                            <div class="fechaReview mt-2">
                                                <p> {{ comments.fecha.toDate().toLocaleDateString() }} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="textoReview"> {{ comments.texto }} </div>
                            </v-card>
                        </div>
                    </div>
                </div>
            </div>
        </v-main>
        <nuxt-loading-indicator v-else></nuxt-loading-indicator>
    </div>
</template>

<style>
.contenedor {
    width: 100vw;
    position: static !important;
    overflow: hidden;
}

.product-overview-bg {
    position: relative;
}

.product-overview-bg>img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: brightness(15%) opacity(90%);
}

.title-and-categories {
    margin-left: 60px;
    z-index: 1;
}

.puntuaciones {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.puntuacion {
    display: flex;
    flex-direction: row;
}

.descInfoEstadis {
    width: 70%;
    height: auto;
}


.estadisticas {
    background-color: #35363b;
    color: white;
    /*background-color:rgb(210, 210, 210);*/
    border: solid 1px #c0c0c0;
    margin-bottom: 60px;
    padding: 10px;
    border-radius: 15px;
    width: 100% !important;
    gap: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.estadisticas .estadisticas2 {
    counter-reset: index;
    padding: 0;
    max-width: 99%;
}

.estadisticas .estadisticas2 li {
    counter-increment: index;
    display: flex;
    align-items: center;
    padding: 12px 0;
    box-sizing: border-box;
}

.estadisticas .estadisticas2 li:before {
    content: counters(index, ".", decimal-leading-zero);
    font-size: 1.5rem;
    text-align: right;
    font-weight: bold;
    min-width: 50px;
    padding-right: 12px;
    font-variant-numeric: tabular-nums;
    align-self: flex-start;
    background-image: linear-gradient(to bottom, rgb(255, 225, 143), orangered);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}






.reviewUser {
    background-image: url();
    color: white !important;
    width: 100%;
    border: solid 1px #000000 !important;
    background-color: #35363b !important;
    margin-bottom: 10px;
}

.nomPuntFech {
    align-items: center;
    justify-content: space-between;
}

.nombreUsuario {
    font-size: 16px;
    font-weight: bold;

}


.nombrePuntuacion {
    margin-left: 15px;
    align-items: center;
    gap: 20px;
    margin-top: 5px;
}

.parrafPunt {
    background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(186, 69, 69));
    background-clip: text;
    -webkit-text-fill-color: transparent;
}



.textoReview {
    background-color: #494a4e;
    border: solid 1px #303030;
    padding: 10px;
    margin: 8px;
}

.review-scores {
    color: white;
    z-index: 2;
}

.product-img {
    z-index: 1;
    width: 250px;
    height: 353px;
    border-radius: 12px;
}

.tituloJuego {
    z-index: 1;
    font-size: 45px;
    font-weight: bold;
    line-height: 1;
}

.categorias {
    opacity: 70%;
    color: white;
}

.puntuacion-cuadrado {
    font-weight: bold;
    width: 60px;
    height: 60px;
    background-color: #e68019;
    border-radius: 12px;
    text-align: center;
    color: white;

    font-size: 1.6em !important;
    display: flex;
    justify-content: center;
    align-items: center;
}



.info-text {
    font-size: 18px;
    height: auto;
    padding: 10px;
    border-radius: 10px;
}



.comentarios {
    width: 100%;
    margin-bottom: 100px;
}

.lineaComentario {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 40px;
    background-color: #35363b;
    color: white;
    display: flex;
    align-items: center;
}

.lineaComentario p {
    font-weight: bold;
    margin: 15px;
    font-size: 15px;
    text-transform: uppercase;
}

.cajaCrearComentario {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: solid 1px #c5c5c5;
    background-color: rgb(210, 210, 210);
    margin-bottom: 40px;
    position: relative;
}


.sliderPuntuacion {
    height: 1px !important;
    width: 100% !important;
    background-color: transparent;
    box-shadow: none;
    padding-bottom: 60px;
    padding-top: 15px;
}

.enviarReview {
    border: solid 1px #c5c5c5;
    color: white;
    border-radius: 20px;
    background-color: #e68019;
    width: 100px;
    padding: 5px;
    margin-right: 20px;
}

.escribirReview {
    border: solid 1px #c5c5c5;
    margin: auto;
    font-size: 14px;
    padding: 5px;
    background-color: rgb(229, 229, 229);
    width: 98%;
    height: 100px;
    margin-bottom: 10px;
}

/*.contenedorReviews{
        display: flex;
        flex-direction: row;
        gap: 20px;    
    }*/
.reviewUser {
    color: white !important;
    width: auto;
    border: solid 1px #000000 !important;
    background-color: #35363b !important;
    margin-bottom: 10px;
    height: auto;
}

.nomPuntFech {
    align-items: center;
    justify-content: space-between;
}

.nombreUsuario {
    font-size: 16px;
    font-weight: bold;
}

.fechaReview {
    font-size: 16px;
    opacity: 40%;
    font-weight: bold;
}

.nombrePuntuacionFec {
    margin-left: 10px;
    gap: 2%;
    margin-top: 5px;
    margin-bottom: 2px;
}

.nomFech {
    width: 100%;
}

.puntuacionReview {
    width: 50px !important;
    height: 50px !important;
    box-sizing: content-box !important;
    flex-shrink: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;
    font-weight: bold;
    color: #4e4e52;
    font-size: 20px;
    border-radius: 10px;
}





@media(max-width:1000px) {
    .puntuaciones {
        align-items: flex-start !important;
        flex-direction: column;
        gap: 40px;
    }
}

@media(max-width:900px) {
    .product-overview-container {
        width: 100%;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    .title-and-categories {
        margin-left: 0px;
    }

    .review-scores {
        justify-content: center;
    }

    .puntuaciones {
        align-items: center !important;
    }

    .tituloJuego,
    .categorias {
        text-align: center;
    }

    .product-overview-container>img {
        margin-left: 0px !important;
    }
}
</style>


<script setup>
import { getGameData } from '~~/composables/firebaseFunctions';
import { getAuth } from '@firebase/auth';
import { pushComentario } from '~~/composables/firebaseFunctions';
import { crearComentario } from '~~/composables/commentsFunctions';
import { Timestamp } from '@firebase/firestore';

const publicarPuntuacion = ref(-1); 
const publicarReview = ref("");
const promedioPuntuaciones = ref(-1)

const id = useRoute().params.id;
const gameData = ref(null)
const publicarResena = () => { 
        
    const usr = getAuth().currentUser.displayName;
    if (publicarPuntuacion.value != -1 && publicarReview.value != "") {
        publicarPuntuacion.value = publicarPuntuacion.value/10;
        const cum = crearComentario(publicarPuntuacion.value, publicarReview.value, usr);
        pushComentario(cum, `juegos/${id}`);
        console.log("anda")
    }
};
const value = ref(1)

console.error("ESTOY EN LA PAGINA")

onMounted(() => {

    getGameData(id).then(gameDataFirebase => {
        gameData.value = gameDataFirebase.data()
        console.log(gameDataFirebase.data())
        const comentarios = gameDataFirebase.data().comentarios
        console.log(comentarios)
        if (!comentarios) return 

        const numComentarios = comentarios.length
        let sumPuntuacionComentarios = 0
        comentarios.forEach(comentario => {
            if (comentario.calificacion) sumPuntuacionComentarios += comentario.calificacion
        })
        const roundedPromedio = Math.round(sumPuntuacionComentarios / numComentarios * 10) / 10
        promedioPuntuaciones.value = roundedPromedio
        console.log(sumPuntuacionComentarios / numComentarios)
    }).catch(err => console.error(err))
})

    //datos[0][0].toUpperCase() + datos.substr(1);

</script>