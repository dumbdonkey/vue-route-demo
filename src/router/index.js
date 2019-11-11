import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/abc",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
    props: route => ({
      name: route.query.name,
      hobby: route.query.hobby
    })
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
