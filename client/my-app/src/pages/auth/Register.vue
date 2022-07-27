<template>
  <main>
    <h1>Register</h1>
    <form @submit.prevent="registerEvent">
      <div>
        <label for="username">username</label>
        <input type="text" name="username" v-model="authState.username" id="" placeholder="username...">
      </div>
      <div>
        <label for="password">password</label>
        <input type="text" name="password" v-model="authState.password" id="" placeholder="password...">
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
      <div>
        <router-link to="sign-in">Login</router-link>
      </div>
    </form>
    <div>
      <p>{{ authState.message }}</p>
    </div>
  </main>
</template>

<script setup>

  import { reactive } from 'vue'
  import axios from 'axios'

  const authState = reactive({
    username: "",
    password: "",
    success: false,
    message: "",
    accessToken: ""
  })

  const { username, password } = authState

  const registerEvent = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        username: authState.username,
        password: authState.password
      })
      const { success, message, accessToken } = response.data

      authState.success = success

      if (authState.success) {
        authState.message = message,
        authState.accessToken = accessToken
      }

      console.log(accessToken)

    } catch (error) {
      console.log(error)
    }
  }
</script>

<style>
  
</style>