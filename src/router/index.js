import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import UserList from '../components/Users/UserList.vue';
import CreateCompany from '../components/Companies/CreateCompany.vue';
import EditUsers from '../components/Users/EditUser.vue';
import CompanyList from '../components/Companies/CompanyList.vue';
import EditCompany from '../components/Companies/EditCompany.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/EditUsers/:id', component: EditUsers, props: true },
  { path: '/UserList', component: UserList, props: true },
  { path: '/EditCompany/:id', component: EditCompany, props: true },
  { path: '/CompanyList', component: CompanyList },
  { path: '/CreateCompany', component: CreateCompany },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router