<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">index</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Username</th>
        <th scope="col">Role</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(result, index) in results" :key="result.id">
        <td>{{ index }}</td>
        <td>{{ result.firstname }} {{ result.lastname }}</td>
        <td>{{ result.email }}</td>
        <td>{{ result.username }}</td>
        <td>{{ result.role }}</td>
        <td>{{ result.Lastname }}</td>
        <td>
          <Button
            class="btn btn-danger"
            href="javascript:;"
            v-on:click="DeleteUser(result.id, index)"
            >Delete</Button
          >
          <button
            type="button"
            class="btn btn-primary"
            @click="this.$router.push('/EditUser')"
          >
            Update
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
  
  <script>
import axios from "axios";
import user from "./User.vue";
export default {
  name: "UserList",
  components: {
    user,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    async DeleteUser(id, index) {
      let tokenStr =
        "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJST0xFX1NVUEVSQURNSU4iLCJDb21wYW55SWQiOiJkNjg0ZGFlMy03NDJiLTQ4ZDQtYjVjMC0wYmJkMDZiYzVjM2EiLCJVc2VySWQiOiIyZGE5MTViZC0yNjhmLTQ1NjUtYmJjNS1lZWViYTkxMGQ4NmQiLCJuYmYiOjE2NzI3ODI4NTgsImV4cCI6MTY3Mjg2OTI1OCwiaWF0IjoxNjcyNzgyODU4LCJpc3MiOiJodHRwczovL3ZyZWZzb2x1dGlvbnNkZXYwMDEuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpLyIsImF1ZCI6Imh0dHBzOi8vdnJlZnNvbHV0aW9uc2RldjAwMS5henVyZXdlYnNpdGVzLm5ldC9hcGkvIn0.bxcbrtyvxzFrGkb7oPlOBJbrUPeyvEjvC9WDk8S5Ew4";
      if (confirm("Do you want to delete this User??")) {
        axios
          .delete(
            "https://vrefsolutionsdev001.azurewebsites.net/api/DeleteUser/" +
              id,
            {
              headers: { Authorization: `Bearer ${tokenStr}` },
            }
          )
          .then((response) => {
            this.results.data.splice(index, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  async mounted() {
    let tokenStr =
      "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJST0xFX1NVUEVSQURNSU4iLCJDb21wYW55SWQiOiJkNjg0ZGFlMy03NDJiLTQ4ZDQtYjVjMC0wYmJkMDZiYzVjM2EiLCJVc2VySWQiOiIyZGE5MTViZC0yNjhmLTQ1NjUtYmJjNS1lZWViYTkxMGQ4NmQiLCJuYmYiOjE2NzI3ODI4NTgsImV4cCI6MTY3Mjg2OTI1OCwiaWF0IjoxNjcyNzgyODU4LCJpc3MiOiJodHRwczovL3ZyZWZzb2x1dGlvbnNkZXYwMDEuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpLyIsImF1ZCI6Imh0dHBzOi8vdnJlZnNvbHV0aW9uc2RldjAwMS5henVyZXdlYnNpdGVzLm5ldC9hcGkvIn0.bxcbrtyvxzFrGkb7oPlOBJbrUPeyvEjvC9WDk8S5Ew4";
    console.log(tokenStr);
    const response = await axios
      .get("https://vrefsolutionsdev001.azurewebsites.net/api/GetAllUsers", {
        headers: { Authorization: `Bearer ${tokenStr}` },
      })
      .then((response) => {
        this.results = response.data.results;
        console.log(this.results.data);
      });
    console.log(this.results.results);
  },
};
</script>
  
  <style>
</style>