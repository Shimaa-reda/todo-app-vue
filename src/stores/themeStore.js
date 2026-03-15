import { defineStore } from "pinia";
import { watch,ref,computed } from "vue";

export const useThemeStore =defineStore('theme',()=>{
    const theme =ref('light')  // state
    const isDarkMode = computed(() => theme.value === 'dark') // getter
    function toggleTheme  ()  { // action
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
    function setTheme(value) { // action
        theme.value = value
    }
    // load theme from localStorage 
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        theme.value = savedTheme
    }
// save theme to localStorage 
    watch(theme, (newTheme) => {
       localStorage.setItem('theme', newTheme)
        document.body.className = newTheme === 'dark' ? 'bg-dark' : 'bg-light'
    })


    return { theme, isDarkMode, toggleTheme, setTheme }
})