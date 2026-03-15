import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', () => {
    const user = ref(null) // state 
    const isLoggedIn = computed(() => user.value !== null) // getter
    function login(name) { // action
        user.value = {name}
    }   
    function logout() { // action
        user.value = null
    }

    watch(user, (newUser) => {
        if (newUser) {
            console.log(`User logged in: ${newUser.name}`)
            localStorage.setItem('user', JSON.stringify(newUser))

        }
        else {
            console.log('User logged out')
            localStorage.removeItem('user')
        }
    }
    )
    // load user from localStorage 
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
        user.value = JSON.parse(savedUser)
    }
    else {
        user.value = null
    }   
    return { user, isLoggedIn, login, logout }
})