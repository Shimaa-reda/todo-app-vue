// child component
<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
    todo:{
        type:Object,
        required:true
    }
})
const emit = defineEmits(['edit-task','delete-task','toggle-completion'])
const handleEdit = () => {
    emit('edit-task',props.todo)
}
const handleDelete = () => {
    emit('delete-task',props.todo.id)
}
const handleToggle = () => {
    emit('toggle-completion',props.todo)
}
const router=useRouter()
// navigate using userRouter
const navigateToDetails =() =>{
  router.push(`/todo/${props.todo.id}`)
  //  router.push({ name: 'todo-details', params: { id: props.todo.id } })

}
</script>
<template>
    <!-- <h1>todoitem child componente</h1> -->
    <div class="card">
            <div class="card-body">
              <div class="card-top d-flex justify-content-between align-items-center mb-3">
                 <div class="text">
                  <h5 class="card-title" :style="{textDecoration:todo.completed?'line-through':'none'}"  > {{ todo.title }}</h5>
              <p class="card-text">{{ todo.description }}</p>
              </div>
              <div class="button">
                <!-- navidate using router link -->
                   <!-- <RouterLink :to="`/todo/${todo.id}`" class="btn btn-info">
                    View Details
                  </RouterLink> -->

                  <!-- in case navigate using useRouter() -->
                  <button class="btn btn-info" @click="navigateToDetails"> view Details</button>
              </div>

              </div>
             
            
              <div class="d-flex justify-content-between">
                <button
                  @click="handleToggle"
                  :class="[
                    'btn',
                    todo.completed ? 'btn-success' : 'btn-secondary',
                  ]"
                >
                  {{ todo.completed ? "Completed" : "Mark as Completed" }}
                </button>

                <div class="justify-content-between">
                  <button
                    @click="handleEdit"
                    class="btn btn-outline-primary me-2"
                  >
                    Edit
                  </button>
                  <button @click="handleDelete" class="btn btn-danger">
                    Delete
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
</template>