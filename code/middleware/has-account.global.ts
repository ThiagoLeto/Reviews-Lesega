import { getAuth, onAuthStateChanged } from "firebase/auth"

export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = getAuth()
    onAuthStateChanged(auth, () => {
        const currentUser = auth.currentUser
        const allowedPaths = ["/", "/register", "/login"]

        if (!currentUser && !allowedPaths.includes(to.path) &&
            to.path !== "/account-required") {
            console.error("Unauthenticated request")
            useRouter().replace('/account-required')
        }
    })
})