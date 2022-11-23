import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserDataStore = defineStore("userDataStore", () => {
    const loggedIn = ref(false)
    const userData = reactive({
        email: "",
    })

    return { loggedIn, userData }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserDataStore, import.meta.hot))
}