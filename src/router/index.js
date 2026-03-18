import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import TodoDetailsView from '../views/TodoDetailsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/todo/:id',
      name: 'todo-details',
      component: () => import('../views/TodoDetailsView.vue'),
    },
     { path: '/profile',
       name: 'profile', 
       component: () => import('../views/ProfileView.vue') 
      },
      { path: '/recipes',
       name: 'recipes', 
       component: () => import('../views/RecipesView.vue') 
      },
      { path: '/recipesAxios',
       name: 'recipes-axios', 
       component: () => import('../views/RecipesAxiosView.vue') 
      },
      { path: '/recipes/:id',
       name: 'recipeDetails', 
       component: () => import('../views/RecipeDetailsView.vue') 
      },
       { path: '/login',
       name: 'login', 
       component: () => import('../views/LoginView.vue') 
      },
      { path: '/register',
       name: 'register', 
       component: () => import('../views/RegisterView.vue') 
      },
  ],
})

export default router
