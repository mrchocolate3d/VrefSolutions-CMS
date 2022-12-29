<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Role</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <user
      v-for="u in users"
      :key="user.id"
      :user="u"
    />
  </tbody>
    </table>
  </template>
  
  <script>
import axios from 'axios'
import user from './User.vue'
export default {
  name: "UserList",
  components: {
    user,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted(){
    axios.get('#TODO DATA').then(res => console.log(res))
  }
};
  </script>
  
  <style>
  </style>