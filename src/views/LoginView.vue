<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore' //use pinia store
import { useRouter } from 'vue-router'
import router from '@/router'
const name=ref("")
const password=ref("")
const email=ref("")

const errors=ref({
  name:"",
  email:"",
  password:""
})
const userStore=useUserStore()
const Router=useRouter()

const isSubmitting=ref(false)
// manually validate form inputs
const validateForm=()=>{
  let isValid=true
  if(name.value.trim()===""){
    errors.value.name="Name is required"
    isValid=false
  }else{
    errors.value.name=""
  }

  if(email.value.trim()===""){
    errors.value.email="Email is required"
    isValid=false
  }else if(!/\S+@\S+\.\S+/.test(email.value)){
    errors.value.email="Email is invalid"
    isValid=false
  }else{
    errors.value.email=""
  }

  if(password.value.trim()===""){
    errors.value.password="Password is required"
    isValid=false
  }else if(password.value.length<6){
    errors.value.password="Password must be at least 6 characters"
    isValid=false
  }else{
    errors.value.password=""
  }

  return isValid
}


const handleSubmit = () => {
  if (!validateForm()) return

  isSubmitting.value = true

  setTimeout(() => {
    // 1) get registered user from localStorage
    const saved = localStorage.getItem('registeredUser')
    if (!saved) {
      // if no registered user found → show error
      errors.value.form = 'No registered user found. Please register first.'
      isSubmitting.value = false
      return
    }

    const registeredUser = JSON.parse(saved)

    // 2) check email/password
    if (email.value !== registeredUser.email ||password.value !== registeredUser.password)
     {
      errors.value.form = 'Invalid email or password'
      isSubmitting.value = false
      return
    }

    // 3) login success
    userStore.login(registeredUser.name)
    isSubmitting.value = false
    router.push('/')
  }, 600)
}



</script>


<template>
  <div class="container py-5" style="max-width: 500px">
    <h1 class="mb-4 text-center">Login</h1>
    <div v-if="errors.form" class="alert alert-danger">
  {{ errors.form }}
</div>



  <form @submit.prevent="handleSubmit" novalidate>
    <div class="mb-3">

        <label for="name">Name</label>
        <input 
        type="text"
        id="name"
        class="form-control"
        v-model="name"
        :class="{'is-invalid': errors.name}"
        placeholder="Your Name"
        >
        <div v-if="errors.name" class="invalid-feedback">
          {{ errors.name }}
    </div>
    </div>

    <div class="mb-3">
        <label for="email">Email</label>
        <input 
        type="email"
        id="email"
        class="form-control"
        v-model="email"
        :class="{'is-invalid': errors.email}"
        placeholder="you@gmail.com"
        >
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
        </div>
    </div>

    <div class="mb-3">
        <label for="password">Password</label>
        <input 
        type="password"
        id="password"
        class="form-control"
        v-model="password"
        :class="{'is-invalid': errors.password}"
        placeholder="Your Password at least 6 chars"
        >
        <div v-if="errors.name" class="invalid-feedback">
          {{ errors.name }}
    </div>
    </div>

    <button
    type="submit"
    class="btn btn-primary w-100"
    :disabled="isSubmitting"
    >
        <span v-if="isSubmitting"> 
            <div class="spinner-border text-white" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
       </span>
         <span v-else>Login</span>
        
    </button>
    <p class="mt-3 text-center">
  Don't have an account?
  <RouterLink to="/register">Register</RouterLink>
</p>


  </form>
  </div>
</template>