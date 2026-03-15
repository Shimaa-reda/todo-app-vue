<script setup>
import { useUserStore } from '../stores/userStore' //use pinia store
const userStore=useUserStore()


</script>
<template>
    <div class="container mt-4">
    <h1>Profile</h1>

    <div v-if="userStore.isLoggedIn">
      <p>Name: {{ userStore.user.name }}</p>
      <button class="btn btn-outline-danger" @click="userStore.logout">
        Logout
      </button>
    </div>

    <div v-else>
      <p>You are not logged in.</p>
    </div>
  </div>
</template>
