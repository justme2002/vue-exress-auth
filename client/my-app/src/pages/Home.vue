<template>
  <div>
    <h1>Home</h1>
    <div v-if="loading===false">
      <li v-for="todo in todos" :key="todo.id">
        <router-link :to="`/user/${todo.id}`">{{ todo.title }}</router-link>
      </li>
    </div>
    <div v-else-if="loading === true">
      <p>Loading...</p>
    </div>
    
  </div>
</template>

<script setup>
import { watchEffect } from "vue";
import { ref } from 'vue'

  const todos = ref([])
  let loading = ref(true)

  setTimeout(() => {
    loading.value = false

    if (!loading.value) {
      watchEffect(async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
          todos.value = await response.json()
        } catch (error) {
          console.log(error)
        }
      })
    }
  }, 3000)

</script>

<style>

</style>