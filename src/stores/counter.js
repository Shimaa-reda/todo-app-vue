import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) //state
  const doubleCount = computed(() => count.value * 2) //getter
  function increment() { //action
    count.value++
  }
  function decrement() { //action
    count.value--
  } 
// i want to return all the state, getters and actions that i want to use in my components
  return { count, doubleCount, increment ,decrement}
})
