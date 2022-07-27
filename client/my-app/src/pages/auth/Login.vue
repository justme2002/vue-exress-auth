<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="loginEvent">
      <div>
        <label for="username">username</label>
        <input type="text" v-model="authState.username" name="username" id="" placeholder="username...">
      </div>
      <div>
        <label for="password">password</label>
        <input type="text" v-model="authState.password" name="password" id="" placeholder="password...">
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div>
        <p>New to this website, <router-link to="sign-up">Register</router-link></p>
      </div>
    </form>
  </main>
</template>

<script setup>

  import axios from 'axios'
  import { reactive } from 'vue';
  import { generateAccesstoken } from '../../token'

  const authState = reactive({
    username: "",
    password: "",
    message: "",
    accessToken: ""
  })

  const loginEvent = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/sign_in", {
        username: authState.username,
        password: authState.password
      })

      const { success, message, accessToken } = response.data

      generateAccesstoken(accessToken)

      if (success) {
        authState.message = message
        authState.accessToken = accessToken
      } 

    } catch (error) {
      console.log(error)
    }
  } 
</script>

<style>

</style>