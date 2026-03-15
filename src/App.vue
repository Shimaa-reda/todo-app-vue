<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// parent component
// import { ref,computed, reactive, watch } from 'vue'
// import ChidComponent from './components/ChidComponent.vue'
import { computed } from 'vue'
import TodoListComponent from './components/TodoListComponent.vue'
import { useThemeStore } from './stores/themeStore' //use pinia store
import { useUserStore } from './stores/userStore' //use pinia store
const appThemeStore=useThemeStore()
const userStore=useUserStore()

const appClass= computed(()=>{
  return appThemeStore.isDarkMode ? 'app app-dark' : 'app app-light'
})



// props example
// const parentName= ref("Mohamed Essam")
// const parentAge= ref(24)
// const city= ref("Cairo")  

// const ChangeName=(newName)=>{
//   parentName.value=newName
// }

// const ChangeAge=(newAge)=>{
//   parentAge.value=newAge
// }
// const count = ref(0)
// const increment =()=>{
//   count.value++;
// }

// const doubleCount = computed(() => count.value * 2);

// const user=reactive({
//   name:'John',
//   age:30
// })
// const updateName=()=>{
//   user.name='Shimaa'
// }
// const increaseAge=()=>{
//   user.age++
// }
// watch(user.age, (newValue, oldValue) => {
//   console.log('User Age changed from', oldValue, 'to', newValue);
// }, { deep: true });
</script>

<template>
<!-- <h1>Reactivity (ref ,computed) Exmaple </h1>
<p>Count: {{count}}</p>
<p>DoubleCount: {{doubleCount}}</p>
<button @click="increment">increase count by 1</button>

<h1>Watch ,Reactive Exmaple </h1>
<p>UserName: {{user.name}}</p>
<p>UserAge: {{user.age}}</p>
<button @click="increaseAge">increase Age by 1</button> <br>
<button @click="updateName">Change Name</button> -->


<!-- calling child -->
<!-- <h2>props & emits</h2>
 <ChidComponent 
 :name="parentName"
  :age="parentAge"
  :city="city"
  @change-name="ChangeName"
  @change-age="ChangeAge"
  /> -->
  <div :class="appClass">
      <nav class="navbar px-3" :class="appThemeStore.isDarkMode ? 'navbar-light bg-light-nav' : 'navbar-dark bg-dark-nav '">
    <RouterLink class="navbar-brand text-white " to="/">Todos</RouterLink>

    <div class="gap-3 d-flex">
      <RouterLink to="/" class="">Home</RouterLink>
      <RouterLink to="/about" class="">About</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>

    </div>
    <button class="btn btn-outline-secondary" @click="appThemeStore.toggleTheme">
        Toggle Theme ({{ appThemeStore.isDarkMode ? 'Light' : 'Dark' }})
    </button>
    <span v-if="userStore.isLoggedIn">Welcome, {{ userStore.user?.name }}!</span>
        <button
          v-if="!userStore.isLoggedIn"
          class="btn btn-sm btn-primary"
          @click="userStore.login('Shimaa')"
        >
          Login
        </button>
        <button
          v-else
          class="btn btn-sm btn-outline-danger"
          @click="userStore.logout"
        >
          Logout
        </button>
  </nav>

  <main class="py-4">
    <RouterView />
  </main>

  </div>
  
  <!-- todo -->
  <!-- <TodoListComponent/> -->
</template>

<style scoped>
a{
  /* color: white; */
  text-decoration: none;
}
.bg-dark-nav a.router-link-exact-active,
.bg-light-nav a.router-link-exact-active {
  color: blue !important;
  font-weight: bold;
}

.bg-dark-nav,.bg-dark-nav a {
  color: #ffffff;
}

.bg-light-nav  {
  color: #000000;
}

.app-light {
  background-color: #f8f9fa;
  color: #212529;
}

.app-dark {
  background-color: #212529; 
  color: #f8f9fa;
  }
.bg-dark-nav {
  background-color: #343a40;
}


.bg-light-nav {
  background-color: #f1f1f1;
}
.app {
  min-height: 100vh;
}

</style>
