<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
              <router-link to="/UserList" class="nav-link" active-class="active"
              >UserList</router-link
              >
            </li>      
            <li class="nav-item">
              <router-link to="/EditUser" class="nav-link" active-class="active"
              >EditUser</router-link
              >
          </li>      
          <li class="nav-item">                      
              <router-link to="/CompanyList" class="nav-link" active-class="active"
              >CompanyList</router-link
              >
            </li>
            <li class="nav-item">                      
              <router-link to="/EditCompany" class="nav-link" active-class="active"
              >EditCompany</router-link
              >
          </li>
          <li class="nav-item">                      
              <router-link to="/CreateCompany" class="nav-link" active-class="active"
              >CreateCompany</router-link
              >
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navigation",
  };
  </script>
  
  <style>
  </style>