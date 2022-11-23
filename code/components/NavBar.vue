<script setup>
import { useUserDataStore } from '~~/stores/userDataStore';
import { mergeProps } from 'vue'
import { getDoc } from '@firebase/firestore';

const busqueda = ref()

const items = [
    { title: 'Click Me1' },
    { title: 'Click Me2' },
    { title: 'Click Me3' },
    { title: 'Click Me4' },
]


const linkList = ref([
    "libros", "series", "peliculas", "juegos"
])

function signOut() {
    signOutUser()
}


const tab = ref(null)

const buscar=async (producto)=>{ const nameProducto = useRoute().path.slice(1); useRouter().push( useRoute().path.slice(1).concat(`?producto=${producto}`) );location.replace(useRoute().path.slice(1).concat(`?producto=${producto}`)) ;
} 

</script>

<template>
    <v-toolbar color="primary" id="navbar" class="d-flex align-center w-100">
        <v-toolbar-title>
            <span class="d-flex align-center menu-title">
                <nuxt-link to="/" style="text-decoration: none; color: white;" class="fachaFont">
                    Reseñas Lesega
                </nuxt-link>

                <span v-if="['/juegos', '/libros', '/series','/peliculas'].includes(useRoute().fullPath.split('?')[0] )"
                    class="d-flex align-center ml-5" style="max-height:40px">
                    <input class="search-box" :placeholder="'Busque su ' + useRoute().path.slice(1, -1)" v-model="busqueda">
                    <button @click="buscar(busqueda)"><v-icon color="black" class="icon-magnify" icon="mdi-magnify"></v-icon></button>
                </span>
            </span>
        </v-toolbar-title>



        <v-tabs v-model="tab" align-with-title class=" d-flex align-center mr-10 navigationBtns">

            <v-tab v-for="link in linkList" class="navigationBtn" @click="useRouter().push(`/${link}`)">
                {{ link }}
            </v-tab>
        </v-tabs>

        <span v-if="!useUserDataStore().loggedIn">
            <!--  <nuxt-link to="/login">
                <v-btn class="navBarBtn text-white" style="text-decoration: none;">
                    Login
                </v-btn>
            </nuxt-link>
            <nuxt-link to="/register">
                <v-btn class="navBarBtn text-white mx-5" style="text-decoration: none;">
                    Register
                </v-btn>
            </nuxt-link> -->
        </span>
        <span v-else>
            <v-btn class="ml-5 text-white non-colored-link" style="min-height:60px !important">
                <v-avatar color="info" class="mr-2" size="small">
                    <v-icon icon="mdi-account-circle"></v-icon>
                </v-avatar>
                <span class="navbar-username">
                    {{ useUserDataStore().userData.email }}
                </span>

                <v-menu activator="parent">
                    <v-list>
                        <!---<nuxt-link to="/profile/myprofile" class="non-colored-link">

                               <v-list-item>
                                    <v-list-item-action>
                                        <v-btn class="text-black">
                                            Administrar perfil
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </nuxt-link>


                            <v-divider size="x-large" color="#3D0315"></v-divider>-->

                        <v-list-item @click="signOutUser()">
                            <v-list-item-action>
                                <v-btn class="text-black" @click="signOutUser()">
                                    Cerrar sesión
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
        </span>

        <span class="navigation-links-responsive-menu mx-5 navbarResponsive">
            <!--div> 
        <v-btn class="d-flex justify-center">
            <v-icon icon="mdi-menu" color="white"> </v-icon>

            <v-menu actvator="parent"> 
                <template >
                    <v-btn
                    color="primary"
                    >
                        Leto Sus
                    </v-btn>
                </template>

                <v-list> 
                    <nuxt-link to="/libro"> <v-list-item> <v-list-item-action> <v-btn> libros </v-btn> </v-list-item-action> </v-list-item>  </nuxt-link> 
                    <nuxt-link to="/series"><v-list-item> <v-list-item-action> <v-btn> series </v-btn></v-list-item-action> </v-list-item> </nuxt-link>
                    <nuxt-link to="/peliculas"><v-list-item> <v-list-item-action> <v-btn> peliculas </v-btn></v-list-item-action> </v-list-item> </nuxt-link>
                    <nuxt-link to="/juegos"><v-list-item> <v-list-item-action> <v-btn> juegos </v-btn></v-list-item-action> </v-list-item> </nuxt-link>
                </v-list>   
            </v-menu>
        </v-btn>
    </div-->

            <v-menu>
                <template v-slot:activator="{ props: menu }">
                    <v-btn color="primary" v-bind="mergeProps(menu, tooltip)">
                        <v-icon icon="mdi-menu" color="white"> </v-icon>

                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="link in linkList" :key="link">
                        <nuxt-link :to="link" class="non-colored-link">
                            <v-list-item>
                                <v-list-item-action>
                                    <v-btn> {{ link }} </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </nuxt-link>
                        <!-- <v-list-item-action> {{ link }} </v-list-item-action> -->
                    </v-list-item>
                </v-list>
            </v-menu>
        </span>

        <!--template v-slot:extension></template-->
    </v-toolbar>
</template>

<style>
.menu-title a {
    height: 50px !important;
    display: flex;
    align-items: center;
}

.navbarResponsive {
    display: none;
}


@media (max-width:1400px) {
    .navbarResponsive {
        display: block;
    }

    .navigationBtns {
        display: none !important;
    }
}

.navigationBtn {
    border: none !important;
}

.v-tab--selected {
    border: none !important;
}

.navigationBtn:hover {
    color: orange;
    border-bottom: 2px solid orange;
}

#navbar {
    background-color: #35363b !important;
    border-radius: 0px;
    position: fixed;
    top: 0px;
    z-index: 999999;
}

.navBarBtn {
    max-width: 50px;
    font-size: 0.6rem;
}

.tabLink {
    color: orange;
    text-decoration: none;
}

.search-box {
    box-sizing: border-box;

    border-end-start-radius: 15px;
    border-start-start-radius: 15px;
    background-color: #ababb4;
    padding: 8px;
    height: 40px !important;
    color: rgb(0, 0, 0);
    width: 400px;

}

.search-box:focus {
    outline: none;
}

.icon-magnify {
    box-sizing: border-box;
    height: 40px !important;
    padding-right: 20px;
    background-color: #ababb4;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
</style>