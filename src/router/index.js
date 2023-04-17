import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/HomeComponent.vue";
import Search from "@/pages/Search/SearchComponent.vue";
import Login from "@/pages/Login/LoginComponent.vue";
import Register from "@/pages/Register/RegisterComponent.vue";

const routes = [
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/search:keyword?",
    component: Search,
    meta: { show: true },
    name: "search",
    // Method 1: Passing Params as props
    // You can pass props into the route that you are sending out, but only can get the
    // params which is the keyword!!!
    // So keyword is a prop, therefore you can recevie a prop from SearchComponenet
    // props: true,

    // Method 2: Passing object as props
    // You can also pass in an object for the SearchComponent to get.
    // props: { a: 1, b: 2 },

    // Method 3: Passing the $route object
    // You can pass the keyword and k from the $route to pass to the SearchComponent
    // so you don't need to abstract it from there.
    props: ($route) => {
      return { keyword: $route.params.keyword, k: $route.query.k };
    },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "/",
    redirect: "/home",
    meta: { show: false },
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
