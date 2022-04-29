import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'
import CreatePost from "../views//CreatePost.vue"
import AboutView from "../views/AboutView.vue"
import DemoView from "../views/DemoView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/HomeView",
    name: "HomeView",
    component: HomeView,
    meta: {
      title: "Home"
    }
  },
 {
   path: "/BlogView",
   name: "Blog",
   component: BlogView,
   meta: {
     title: "Blog"
   },
 },
 {
   path:"/ProjectView",
   name: "Project",
   component: ProjectView,
   meta:{
     title: "Projects"

   },
 },
 {
  path:"/ContactView",
  name: "Contact",
  component: ContactView,
  meta:{
    title: "Contact"

  },
},
{
  path:"/CreatePost",
  name: "CreatePost",
  component: CreatePost,
  meta:{
    title: "Create Post"

  },
},
{
  path:"/AboutView",
  name: "About",
  component: AboutView,
  meta:{
    title: "About"

  },
},
{
  path:"/DemoView",
  name: "Demo",
  component: DemoView,
  meta:{
    title: "Demo"

  },
},

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;


