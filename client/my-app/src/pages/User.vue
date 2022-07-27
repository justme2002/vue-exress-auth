<template>
  <div>
    <p>User {{ $route.params.id }}</p>
    <p>{{ todo.title }}</p>
  </div>
</template>

<script setup>
  import { computed, onMounted, onUnmounted, reactive, ref, watch, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'

  const route = useRoute()
  // const props = reactive({
  //   id: route.params.id
  // })
  let id = ref(route.params.id)
  let todo = ref({})
  let loading = ref(true)

  // watch(async () => {
  //   try {
  //     const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`)
  //     todo.value = response.data
  //     console.log(todo.value)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // })

  // console.log(todo.value)

  onMounted(() => {
    watchEffect(async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`)
        
        todo.value = await response.json()

      } catch (error) {
        console.log(error)
      }
    })
  })

  console.log(todo.value)

</script>

<style>

</style>