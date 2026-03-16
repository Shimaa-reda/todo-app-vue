<script setup>
import { ref ,onMounted} from 'vue'
// state variables
const recipes = ref([])
const isLoading = ref(false)
const error = ref(null)

// function to fetch recipes from API
const fetchRecipes = async () =>{
    isLoading.value = true
    error.value = null
    try{
        const response = await fetch('https://forkify-api.jonas.io/api/v2/recipes?search=pizza')
        if(!response.ok){
            throw new Error('Failed to fetch recipes')
        }
        console.log(response)
        const data = await response.json()
        recipes.value = data.data.recipes
    }
    catch(err){
        error.value = err.message
    }
    finally{
        isLoading.value = false
    }
}
onMounted(()=>{
    fetchRecipes()
})
</script>


<template>
    <h1 class="text-center"> API Integration with Fetch</h1>
      <div class="container py-4">
    <h1 class="mb-3">Recipes (Fetch)</h1>

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

    <!--error -->
    <div v-else-if="error" class="text-danger">
      Error: {{ error }}
    </div>

    <!-- display data-->
    <div v-else>
      <div class="row g-3">
        <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="card h-100">
            <img
              :src="recipe.image_url"
              class="card-img-top"
              :alt="recipe.title"
              style="height:200px;object-fit:cover;"
            />
            <div class="card-body">
              <h5 class="card-title">
                {{ recipe.title }}
              </h5>
              <p class="card-text text-muted">
                {{ recipe.publisher }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p v-if="!recipes.length" class="mt-3">
        No recipes found.
      </p>
    </div>
  </div>
</template>