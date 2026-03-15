<script setup>
import CounterComponent from '../components/CounterComponent.vue'
</script>
<template>
 
    <div class="container mt-4">
    <h1>About</h1>
    <p>just for practice Vue Router.</p>
    <CounterComponent/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

