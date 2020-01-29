import Vue from "vue";
import VueRouter from "vue-router";

import home from "./home";
import about from "./about";
import user from "./user";
import notFound from "./404";

Vue.use(VueRouter);

const routes = [home, about, user, notFound];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
