import { Timestamp } from "firebase/firestore"

interface commentario {
    calificacion: Number,
    texto: String,
    userId: String,
    fecha: Timestamp
}

export const crearComentario = (calificacion:number,texto:String,userId:String)=>{
    const comentarioFinal: commentario = {calificacion:calificacion,texto:texto,userId:userId,fecha:Timestamp.now()}; return comentarioFinal;
}