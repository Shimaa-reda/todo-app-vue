<script setup>
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
counterStore.doubleCount
counterStore.count
// counterStore.increment()
</script>

<template>
  <!-- <section class="welcome"> -->
  <!-- <h1>{{counterStore.count}}</h1> -->
  <p>Count: {{ counterStore.count }}</p>
<p>Double: {{ counterStore.doubleCount }}</p>
<div class="buttons d-flex gap-3">
    <button @click="counterStore.increment">+</button>
<button @click="counterStore.decrement">-</button>

</div>

  <!-- </section> -->

</template>
