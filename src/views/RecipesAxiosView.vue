<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
// state variables
const recipesPasta = ref([]);
const isLoading = ref(false);
const error = ref(null);
const searchQuery = ref("pasta");

const fetchRecipes = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await axios.get(
      "https://forkify-api.jonas.io/api/v2/recipes",
      {
        params: {
          search: searchQuery.value,
        },
      },
    );
    // get data from response
    console.log("Response API", response);
    ((recipesPasta.value = response.data.data.recipes),
      console.log("Recipes Pasta", recipesPasta.value));
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};
onMounted(() => {
  fetchRecipes();
});
</script>

<template>
  <h1 class="text-center">API Integration with Axios</h1>
  <div class="container py-4">
    <form class="row g-2 mb-4" @submit.prevent="fetchRecipes">
      <div class="col-md-10 col-sm-12">
        <input
          type="text"
          class="form-control"
          placeholder="Search recipes (e.g. pasta, pizza, burger)"
          v-model="searchQuery"
        />
      </div>

      <div class="col-md-2 col-sm-12">
        <button
          type="submit"
          class="btn btn-primary w-100"
          :disabled="isLoading"
        >
          Search
        </button>
      </div>
    </form>
    <h1 class="mb-3">Recipes (Axios)</h1>

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
    <div v-else-if="error" class="text-danger">Error: {{ error }}</div>

    <!-- display data-->
    <div v-else>
      <div class="row g-3">
        <div
          v-for="recipe in recipesPasta"
          :key="recipe.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="card h-100">
            <img
              :src="recipe.image_url"
              class="card-img-top"
              :alt="recipe.title"
              style="height: 200px; object-fit: cover"
            />
            <div class="card-body">
              <h5 class="card-title">
                {{ recipe.title }}
              </h5>
              <p class="card-text text-muted">
                {{ recipe.publisher }}
              </p>
              <RouterLink
                class="btn btn-sm btn-primary"
                :to="{ name: 'recipeDetails', params: { id: recipe.id } }"
              >
                View Details
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <p v-if="!recipesPasta.length" class="mt-3">No recipes found.</p>
    </div>
  </div>
</template>
