<template>
  
<footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <router-link class="btn btn-outline-light btn-floating m-1" :to="{name: 'HomeView'}"
        >Home</router-link>

      <!-- Twitter -->
      <router-link class="btn btn-outline-light btn-floating m-1" :to="{name: 'BlogView'}">Blog</router-link>

      
      <router-link class="btn btn-outline-light btn-floating m-1" :to="{name: 'ProjectView'}" 
        >Projects</router-link>

        <router-link class="btn btn-outline-light btn-floating m-1" :to="{name: 'DemoView'}" 
        >Demo</router-link>

      <!-- Instagram -->
      <router-link class="btn btn-outline-light btn-floating m-1" :to="{name: 'ContactView'}" 
        >Contact</router-link>

         <router-link class="btn btn-outline-light btn-floating m-1" :to="{name: 'AboutView'}" 
        >About</router-link>

      <!-- Linkedin -->
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-white">ThomasTech</a>
  </div>
  <!-- Copyright -->
</footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
