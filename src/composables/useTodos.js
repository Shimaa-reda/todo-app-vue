import { ref,watch,onMounted} from "vue";

export function useTodos() {

const todos = ref([]);
const newTodo = ref("");
const newDescription = ref("");
const currentTodoId = ref(null);

// methods
const addOrUpdateTodo = () => {
  if (newTodo.value.trim() == "") return;
//   add new todo
  if(currentTodoId.value===null)
  {
    todos.value.push({
    id: Date.now(),
    title: newTodo.value,
    description: newDescription.value,
    completed: false,
  }); 
  }
  else{
    // update existing todo
    const todo = todos.value.find(t => t.id === currentTodoId.value)
    if (todo) {
      todo.title = newTodo.value
      todo.description = newDescription.value
    }
  }
  resetDate();
};
const editTask = (todo) => {
    console.log('Editing:', todo.id)
  newTodo.value = todo.title
  newDescription.value = todo.description
  currentTodoId.value = todo.id
    console.log('newTodo now =', newTodo.value)
  console.log('currentTodoId now =', currentTodoId.value)
}

const resetDate=()=>{
    newTodo.value = "";
    newDescription.value = "";  
    currentTodoId.value = null;
}
const deleteTask = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
const toggleCompletion = (todo) => {
  todo.completed = !todo.completed;
};

// lifecycle hooks
onMounted(() => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  }
});
// watch for changes in todos and save to localStorage
watch(todos, (newTodos) => {
console.log("Todos changed:", newTodos);
localStorage.setItem("todos", JSON.stringify(newTodos));
}, { deep: true });

return {
    todos,
    newTodo,
    newDescription,
    currentTodoId,
    addOrUpdateTodo,
    editTask,
    resetDate,
    deleteTask,
    toggleCompletion
}
}