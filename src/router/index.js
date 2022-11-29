import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import UserList from '../components/products/UserList.vue';
import CreateCompany from '../components/products/CreateCompany.vue';
import EditUsers from '../components/products/EditUsers.vue';
import CompanyList from '../components/products/CompanyList.vue';
import CompanyList from '../components/products/CompanyList.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/EditUsers/:id', component: EditUsers, props: true },
  { path: '/UserList', component: UserList, props: true },
  { path: '/EditCompany/:id', component: EditCompanies, props: true },
  { path: '/CompanyList', component: CompanyList },
  { path: '/CreateCompany', component: CreateCompany },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router