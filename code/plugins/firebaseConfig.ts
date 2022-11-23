import { initializeApp } from "firebase/app"
import { initUser } from "~~/composables/firebaseFunctions"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyBlyL3cfAkl_lht1vK_bJNkBNjgTL0tBxc",
        projectId: "pruebafirebase-439ae"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)

    const auth = getAuth();

    nuxtApp.provide('auth', auth);
    nuxtApp.provide('app',app);
    nuxtApp.provide("db",db);

    initUser();
})

