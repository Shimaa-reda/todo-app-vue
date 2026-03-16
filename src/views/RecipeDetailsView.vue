<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// state
const recipe = ref(null)
const isLoading = ref(false)
const error = ref(null)

const fetchRecipeDetails = async () => {
  isLoading.value = true
  error.value = null

  try {
    const id = route.params.id

    const response = await axios.get(
      `https://forkify-api.jonas.io/api/v2/recipes/${id}`
    )

   
    recipe.value = response.data.data.recipe
    console.log("Recipe Details", recipe.value)  ;

  } catch (err) {
    error.value = err?.message || 'Failed to load recipe'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchRecipeDetails()
})
</script>

<template>
  <div class="container py-4">
    <button class="btn btn-link mb-3" @click="router.back()">
      ← Back
    </button>

<!-- loading -->
   <div
      v-if="isLoading"
      class="d-flex justify-content-center align-items-center"
      style="min-height: 60vh"
    >
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
<!-- error -->
    <div v-else-if="error" class="text-danger">
      Error: {{ error }}
    </div>

<!-- display details -->
    <div v-else-if="recipe" class="row">
      <div class="col-md-5">
        <img
          :src="recipe.image_url"
          :alt="recipe.title"
          class="img-fluid rounded mb-3"
        />
      </div>

      <div class="col-md-7">
        <h1 class="h3 mb-2">{{ recipe.title }}</h1>
        <p class="text-muted mb-3">By {{ recipe.publisher }}</p>

        <p><strong>Servings:</strong> {{ recipe.servings }}</p>
        <p><strong>Cooking time:</strong> {{ recipe.cooking_time }} minutes</p>

       

        <h2 class="h5 mt-4">Ingredients</h2>
        <ul >
          <li
            v-for="(ing, index) in recipe.ingredients"
            :key="index"
          >
            
            <span v-if="ing.quantity">{{ ing.quantity }} </span>
            <span v-if="ing.unit">{{ ing.unit }} </span>
            {{ ing.description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
