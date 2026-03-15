<script setup>
const props=defineProps({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})
const emit=defineEmits(['change-name','change-age'])
const ChangeNameFromChild=()=>{
    emit('change-name','Shimaa Reda')
}

const ChangeAgeFromChild=()=>{
    emit('change-age',15)
}











</script>
<template>
    <h1>Child Component</h1>
    <p>Name: {{props.name}}</p>
    <p>Age: {{props.age}}</p>
    <p>Lives in: {{props.city}}</p>

    <button @click="ChangeNameFromChild">change Name from child to "Shimaa Reda"</button> <br>
    <button @click="ChangeAgeFromChild">change Name from child to "15" years</button>


</template>