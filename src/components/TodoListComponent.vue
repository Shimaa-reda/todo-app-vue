// parent component 
<script setup>
// import { ref,watch,onMounted} from "vue";
import TodoItemComponent from "./TodoItemComponent.vue";
import {useTodos} from "../composables/useTodos";
const {
  todos, newTodo, newDescription, 
  currentTodoId, addOrUpdateTodo,
  editTask, resetDate, deleteTask,
 toggleCompletion} = useTodos();

// const todos = ref([]);
// const newTodo = ref("");
// const newDescription = ref("");
// const currentTodoId = ref(null);
 
// onMounted(() => {
//   const savedTodos = localStorage.getItem("todos");
//   if (savedTodos) {
//     todos.value = JSON.parse(savedTodos);
//   }
// });
// watch(todos, (newTodos) => {
// console.log("Todos changed:", newTodos);
// localStorage.setItem("todos", JSON.stringify(newTodos));
// }, { deep: true });




// const addOrUpdateTodo = () => {
//   if (newTodo.value.trim() == "") return;
// //   add new todo
//   if(currentTodoId.value===null)
//   {
//     todos.value.push({
//     id: Date.now(),
//     title: newTodo.value,
//     description: newDescription.value,
//     completed: false,
//   }); 
//   }
//   else{
//     // update existing todo
//     const todo = todos.value.find(t => t.id === currentTodoId.value)
//     if (todo) {
//       todo.title = newTodo.value
//       todo.description = newDescription.value
//     }
//   }
//   resetDate();
// };
// const editTask = (todo) => {
//     console.log('Editing:', todo.id)
//   newTodo.value = todo.title
//   newDescription.value = todo.description
//   currentTodoId.value = todo.id
//     console.log('newTodo now =', newTodo.value)
//   console.log('currentTodoId now =', currentTodoId.value)
// }

// const resetDate=()=>{
//     newTodo.value = "";
//     newDescription.value = "";  
//     currentTodoId.value = null;
// }
// const deleteTask = (id) => {
//   todos.value = todos.value.filter((todo) => todo.id !== id);
// };
// const toggleCompletion = (todo) => {
//   todo.completed = !todo.completed;
// };

</script>
<template>
  <div class="container">
    <h1 class="mb-3 text-center">Todo List Component</h1>
    <p class="text-muted text-center">This is a simple todo list component.</p>

    <!-- form doto -->
    <form @submit.prevent="addOrUpdateTodo" class="row g-2 align-items-center mb-3">
      <input
        type="text"
        v-model="newTodo"
        placeholder="add new task"
        class="form-control"
      />
      <input
        type="text"
        v-model="newDescription"
        placeholder="add description of the task"
        class="form-control"
      />

      <div class="d-flex justify-content-end mt-3">
        <button type="submit" class="btn btn-primary">
                {{ currentTodoId ===null ? 'Add Task' : 'Update Task' }}
        </button>
        <button v-if="currentTodoId!==null" type="button" @click="resetDate" class="btn btn-secondary ms-2">Cancel</button>

      </div>
      
    </form>
    <h2>tasks display</h2>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12 mb-3"
          v-for="todo in todos"
          :key="todo.id"
        >
          <!-- display cards -->
          <TodoItemComponent 
          :todo="todo"
          @toggle-completion="toggleCompletion"
          @edit-task="editTask"
          @delete-task="deleteTask"

           />

        </div>
      </div>
  </div>

 
</template>
