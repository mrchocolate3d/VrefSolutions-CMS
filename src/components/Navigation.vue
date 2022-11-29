<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Users
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link to="/UserList" class="nav-link" active-class="active"
              >UserList</router-link
              >
              <router-link to="/EditUser" class="nav-link" active-class="active"
              >EditUser</router-link
              >
              </div>
          </div>
          </li>      
          <li class="nav-item">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Companies
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link to="/CompanyList" class="nav-link" active-class="active"
              >CompanyList</router-link
              >
              <router-link to="/EditCompany" class="nav-link" active-class="active"
              >EditCompany</router-link
              >
              <router-link to="/CreateCompany" class="nav-link" active-class="active"
              >CreateCompany</router-link
              >
              </div>
          </div>
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