<template>
    <form @submit.prevent="login">
      <input type="username" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Log in</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
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
          });
          const jwt = response.data.token;
          this.$store.commit('setJwt', jwt);
          console.log("jwt")
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>