<template>
    <section>
      <div class="container">
        <form ref="form">
          <h2 class="mt-3 mt-lg-5">Edit User</h2>
          <h5 class="mb-4"></h5>
  
          <div class="input-group mb-3">
            <span class="input-group-text">First Name</span>
            <input type="text" class="form-control" v-model="user.Firstname" />
          </div>
  
          <div class="input-group mb-3">
            <span class="input-group-text">Last Name</span>
            <input type="text" class="form-control" v-model="user.Lastname" />
          </div>
  
          <div class="input-group mb-3">
            <span class="input-group-text">Email</span>
            <input type="text" class="form-control" v-model="user.Email" />
          </div>
  
          <div class="input-group mb-3">
            <span class="input-group-text">Role</span>
            <input type="text" class="form-control" v-model="user.Role" />
          </div>

          <div class="input-group mt-4">
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="this.$router.push('/products')"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "EditUser",
    props: {
      id: Guid,
    },
    data() {
      return {
        product: {
          Firstname: "",
          Lastname: "",
          Email: "",
          Role: "",
        },
        categories: [],
      };
    }  
  };
  </script>
  
  <style>
  </style>