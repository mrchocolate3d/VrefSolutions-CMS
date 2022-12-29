import {defineStore} from "pinia"
import axios from "axios"

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        roleUser : null,
    }),
    getters: {
        user: (state) => state.authUser,
        role: (state) => state.roleUser
    },
    action: {

    }
})