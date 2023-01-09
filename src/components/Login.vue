<template>
    <form @submit.prevent="login">
      <input type="username" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button class="btn btn-primary" type="button" @click="login">Login</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  import { defineStore } from 'pinia'


  export const useStore = defineStore('store', {
    state: () => ({
    stateUsername: this.username,
    token: '' 
  }),
  getters: {
    
  }
})

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('https://vrefsolutionsdev001.azurewebsites.net/api/LoginUser', {
            username: this.username,
            password: this.password
          })
          .then((res) => {
            console.log(res)
            alert(res.data.jwt)
          })
          const jwt = response.data.token;
          //this.$store.commit('setJwt', jwt);
          this.stateUsername = response.data.username;
          this.token = response.data.jwt;
          console.log(jwt)
          console.log("jwt")
        } catch (error) {
          console.error(error);
        }
      }
      
      
    }
  }
  </script>