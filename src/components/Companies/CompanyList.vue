<template>
  <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Location</th>
    <th scope="col">Actions</th>
  </tr>
</thead>
<tbody>
  <user
    v-for="c in companies"
    :key="c.Id"
    :company="c"
  />
</tbody>
  </table>
</template>

<script>
import axios from 'axios'
import company from './Company.vue'
export default {
name: "CompanyList",
components: {
  company,
},
data() {
  return {
    companies: [],
  };
},
mounted(){
  axios.get('#TODO DATA').then(res => console.log(res))
}
};
</script>

<style>
</style>