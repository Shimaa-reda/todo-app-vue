<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// parent component
// import { ref,computed, reactive, watch } from 'vue'
// import ChidComponent from './components/ChidComponent.vue'
import TodoListComponent from './components/TodoListComponent.vue'

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
    <nav class="navbar navbar-dark bg-dark px-3">
    <RouterLink class="navbar-brand text-white" to="/">Todos</RouterLink>

    <div class="gap-3 d-flex">
      <RouterLink to="/" class="">Home</RouterLink>
      <RouterLink to="/about" class="">About</RouterLink>
    </div>
  </nav>

  <main class="py-4">
    <RouterView />
  </main>
  <!-- todo -->
  <!-- <TodoListComponent/> -->
</template>

<style scoped>
a{
  color: white;
  text-decoration: none;
}
.router-link-exact-active {
  color: blue;
  font-weight: bold;
}
</style>
