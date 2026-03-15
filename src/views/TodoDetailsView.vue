<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
const route = useRoute()

const todo=ref(null)
// console.log(todoId);

onMounted(()=>{
    const todoId=route.params.id
    // get the todos from local storage
    const savedTodos=localStorage.getItem("todos") || [];
    const todos=JSON.parse(savedTodos);
    // get the todo with the matching id
    todo.value=todos.find(t=>t.id==todoId)

    console.log(todos);
    

})

</script>
<template>
<!-- display todo item details -->
 <div class="container mt-5">
    <h1>Todo Details</h1>
    <div v-if="todo" class="card">
      <div class="card-body">
        <h1 class="card-title">{{ todo.title }}</h1>
        <p class="card-text">{{ todo.description }}</p>
        <p>Status: 
            <span 
                :class="[todo.completed? 'text-success':'text-danger']"
            >
                {{ todo.completed ? "Completed" : "Not Completed" }}
            
            </span></p>
      </div>
 </div>
    <div v-else>
        <p>Todo not found.</p>
    </div>
 </div>
</template>
