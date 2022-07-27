<template>
  <div>
    <div class="nav">
      <div>
        <router-link to = "/" class="nav-item">Home</router-link>
        <router-link to = "/about" class="nav-item">About</router-link>
      </div>
      <div v-if="accessToken">
        <p>{{ username }}</p>
      </div>
      <div v-else>
        <router-link to = "/auth/sign-in" class="nav-item">sign in</router-link>
        <router-link to = "/auth/sign-up" class="nav-item">sign up</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { getToken } from "./token";
  import { ref, watch, watchEffect } from 'vue'
  import axios from 'axios'

  let username = ref("")
  // console.log(getToken("accessToken"))
  const accessToken = ref(getToken("accessToken"))

  watchEffect(async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/user", {
        headers: {
          "Authorization": `Bearer ${accessToken.value}`
        }
      })

      username.value = response.data.username
      
    } catch (error) {
      console.log("guest")
    }
  })
  
</script>

<style scoped>
  div.nav {
    display: flex;
    justify-content: space-around;
  }

  .nav-item {
    padding: 10px;
  }
</style>