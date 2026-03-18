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
      <nav
  class="navbar navbar-expand-lg px-3"
  :class="appThemeStore.isDarkMode ? 'navbar-dark bg-dark-nav' : 'navbar-light bg-light-nav'"
>
  <!-- Logo -->
  <RouterLink class="navbar-brand" to="/">Todos</RouterLink>

  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarContent"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Collapsible Content -->
  <div class="collapse navbar-collapse" id="navbarContent">
    <!-- Links -->
    <div class="navbar-nav me-auto gap-lg-3">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/profile" class="nav-link">Profile</RouterLink>
      <RouterLink to="/recipes" class="nav-link">Recipes</RouterLink>
      <RouterLink to="/recipesAxios" class="nav-link">Axios</RouterLink>
    </div>

    <!-- Right side -->
    <div class="d-flex align-items-center gap-2">
      <button
        class="btn btn-outline-secondary"
        @click="appThemeStore.toggleTheme"
      >
        {{ appThemeStore.isDarkMode ? 'Light' : 'Dark' }}
      </button>

      <span v-if="userStore.isLoggedIn">
        Welcome, {{ userStore.user?.name }}!
      </span>

      <RouterLink
        v-if="!userStore.isLoggedIn"
        class="btn btn-sm btn-primary"
        to="/login"
      >
        Login
      </RouterLink>

      <RouterLink
        v-if="!userStore.isLoggedIn"
        class="btn btn-sm btn-success"
        to="/register"
      >
        Register
      </RouterLink>

      <button
        v-else
        class="btn btn-sm btn-outline-danger"
        @click="userStore.logout"
      >
        Logout
      </button>
    </div>
  </div>
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
.navbar a {
  color: black;
  text-decoration: none;
}

.navbar a.router-link-exact-active {
  color: blue;
  font-weight: bold;
}
/* .bg-dark-nav a.router-link-exact-active,
.bg-light-nav a.router-link-exact-active {
  color: blue !important;
  font-weight: bold;
} */

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
  background-color: #d1d1d1;
}
.app {
  min-height: 100vh;
}

</style>
