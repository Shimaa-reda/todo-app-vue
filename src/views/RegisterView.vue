<script setup>
import {useForm,useField} from 'vee-validate'
import {useRouter} from 'vue-router'
import { ref } from 'vue'
import * as yup from 'yup'

const router=useRouter()
const successMessage=ref("")

const schema=yup.object({
  name:yup.string().required("Name is required"),
  email:yup.string().email("Email must be valid").required("Email is required"),
  password:yup.string().min(6,"Password must be at least 6 characters")
                       .required("Password is required"),
  confirmPassword:yup.string().oneOf([yup.ref('password'),null],"Passwords must match")
                       .required("Confirm Password is required")
})

const {handleSubmit,isSubmitting }=useForm({
  validationSchema:schema
})

const {value:name,errorMessage:nameError,handleBlur:nameBlur}=useField("name")
const {value:email,errorMessage:emailError,handleBlur:emailBlur}=useField("email")
const {value:password,errorMessage:passwordError,handleBlur:passwordBlur}=useField("password")
const {value:confirmPassword,errorMessage:confirmPasswordError,handleBlur:confirmPasswordBlur}=useField("confirmPassword")


const onSubmit = handleSubmit((values) => {
  // values = { name, email, password, confirmPassword }

  const registeredUser = {
    name: values.name,
    email: values.email,
    password: values.password
  }

  localStorage.setItem('registeredUser', JSON.stringify(registeredUser))

//   console.log('User registered:', registeredUser)
  successMessage.value = 'Account created successfully, redirecting to login...'

  setTimeout(() => {
    router.push('/login')   
  }, 1000)
})



</script>

<template>
   <div class="container py-5" style="max-width: 500px">
    <h1 class="mb-4 text-center" v-once>Register</h1>

<div v-if="successMessage" class="alert alert-success mb-3">
  {{ successMessage }}
</div>

  <form @submit.prevent="onSubmit" novalidate>
    <div class="mb-3">

        <label for="name">Name</label>
        <input 
        type="text"
        id="name"
        class="form-control"
        v-model="name"
        @blur="nameBlur"
        :class="{'is-invalid': nameError}"
        placeholder="Your Name"
        >
        <div v-if="nameError" class="invalid-feedback">
          {{ nameError }}
        </div>
    </div>

    <div class="mb-3">
        <label for="email">Email</label>
        <input 
        type="email"
        id="email"
        class="form-control"
        v-model="email"
        @blur="emailBlur"
        :class="{'is-invalid': emailError}"
        placeholder="you@gmail.com"
        >
        <div v-if="emailError" class="invalid-feedback">
          {{ emailError }}
        </div>
    </div>

    <div class="mb-3">
        <label for="password">Password</label>
        <input 
        type="password"
        id="password"
        class="form-control"
        v-model="password"
        @blur="passwordBlur"
        :class="{'is-invalid': passwordError}"
        placeholder="Your Password at least 6 chars"
        >
        <div v-if="passwordError" class="invalid-feedback">
          {{ passwordError }}
        </div>
    </div>

    <div class="mb-3">
        <label for="password">confirmPassword</label>
        <input 
        type="password"
        id="confirmPassword"
        class="form-control"
        v-model="confirmPassword"
        @blur="confirmPasswordBlur"
        :class="{'is-invalid': confirmPasswordError}"
        placeholder="Confirm Your Password"
        >
        <div v-if="confirmPasswordError" class="invalid-feedback">
          {{ confirmPasswordError }}
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
         <span v-else>Register</span>
        
    </button>
    <p class="mt-3 text-center">
  Already have an account?
  <RouterLink to="/login">Login</RouterLink>
</p>


  </form>
 
</div>

    
</template>