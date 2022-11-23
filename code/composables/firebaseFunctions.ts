//https://firebase.google.com/docs/auth/web/start

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    getAuth,
    signOut,
    updateCurrentUser,
    updateProfile
} from "firebase/auth";
import { collection, getDoc, getDocs, getFirestore, query, setDoc, doc, addDoc, DocumentSnapshot, Timestamp, arrayUnion, updateDoc } from "firebase/firestore";
import { useUserDataStore } from "~~/stores/userDataStore";

interface DatosJuego {
    idJuego: String,
    imageUrl: String,
    nombre: String,
    puntuacionLesega: String,
    puntuacionUsuarios: String
}

interface commentario {
    calficiacion: Number,
    texto: String,
    userId: String,
    fecha: Timestamp
}


export const initUser = () => {
    const auth = useNuxtApp().$auth


    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // useUserDatastore().userData = user
            console.log(user)
            console.log("is logged in!")
            useUserDataStore().loggedIn = true
        } else {
            // User is signed out
            console.log("user signed out :(")
            useUserDataStore().loggedIn = false
        }
    })
}



export const registerUser = (email: string, username: string, pass: string) => {
    const auth = useNuxtApp().$auth

    createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(userCredential)
            updateProfile(user, {
                displayName: username
            }).then( ()=> {useRouter().replace('/libros')})
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)
            // ..
        });
}

export const loginUser = (email: string, pass: string) => {
    const auth = useNuxtApp().$auth

    signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(userCredential);useRouter().replace('/libros')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)

        });
}

export const signOutUser = () => {
    location.replace("/")
    signOut(getAuth());
}

export const getGameList = async () => {
    const db = useNuxtApp().$db;
    const coleccion = collection(db, "juegos");
    return getDocs(coleccion);
}
export const getColection = async (name: string) => {
    const db = useNuxtApp().$db;
    const coleccion = collection(db, name);
    return getDocs(coleccion);
}

export const addJuego = (gameData: DatosJuego) => {
    const gamesCollection = collection(getFirestore(), "juegos")
    addDoc(gamesCollection, gameData).then((docRef) => {
        console.log(docRef)
        console.log(docRef.id)
        const muestrasJuegoCollection = collection(getFirestore(), "muestrasJuegos");
        //const documento = await getDoc(docRef)
        addDoc(muestrasJuegoCollection, { "idJuego": docRef.id, "imageUrl": gameData.imageUrl, "nombre": gameData.nombre, "puntuacionLesega": gameData.puntuacionLesega, "puntuacionUsuarios": gameData.puntuacionUsuarios })
    })
}

export const pushComentario = (comment: commentario ,dir:string) =>{ 
    const refDocumento = doc(getFirestore(),dir); 
    return updateDoc(refDocumento, {
        comentarios: arrayUnion(comment)
    })
 }

export const getGameData = (id: string) => {
    const docJuego = doc(getFirestore(), `juegos/${id}`)
    return getDoc(docJuego)
}
