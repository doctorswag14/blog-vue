<template>

  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <body>
      <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark" :style="{backgroundImage:'url(https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg)'}">
    <div class="col-md-6 px-0">
      <h1 class="display-4 font-italic" style="background:black">This site will Show off my skills</h1>
      <p class="lead my-3" style = "background-color: black;">This is where I will host all my projects and take notes and talk about everything that I am working on</p>
      <p class="lead mb-0" style="background-color: black;"><a href="firstblogpost.html" class="text-white font-weight-bold"> Click here to continue reading...</a></p>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong><h3 style="color: white;" class="mb-0">What are some ideas I have for this site.</h3></strong>
          <p style="color: white;" class="card-text mb-auto">This is where i will write about my brain stormed ideas. And will ask for feedback</p>
          <a style="color: white;" href="ideapost.html" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 style="color: white;" class="mb-0">Future Projects</h3>
          <p style="color: white" class="mb-auto">Talks about future project ideas and discuesses how to submit project ideas</p>
          <router-link style="color: white;" to="ProjectView" class="stretched-link">Continue reading</router-link>
        </div>
        <div class="col-auto d-none d-lg-block">
        </div>
      </div>
    </div>
  </div>
  


<!--This is where the blog posts start for the page-->
  <div class="row">
    <div class="col-md-8 blog-main">
      <h3 style = "color: white; " class="pb-4 mb-4 font-italic border-bottom">
        Blog Posts
      </h3>

      <div class="blog-post">
        <h2 class="blog-post-title" style="color:white">New Look</h2>
        <p style = "color:white" class="blog-post-meta">October 1, 2020 by <router-link to="AboutView">Blake Thomas</router-link></p>

        <p class = "border-bottom">
          I have started giving this site a new look. I used to be built using static HMTL/CSS but now I am starting to reuild it using 
          the Vue.js framework. This a really good thing becxause now the site works really well and mroe stream line when viewing it on mobile so currently I don't need tp try and convert this site to a mobile site as well. At least not unitl I add more features to the site as a whole. If there is anything you would like to see please feel free to reach out ot me. This is going to help add alot more features to the site. My next thing I am going to do it try and ad a more live feeling posting system other then just it being 
          all static that will also mean I need to add a login system in order to control who can an can't post all to allow people to post using there own username and password. That is my next step to come to the site and will have that posted as soon as possible.

        </p>
    

  </div>
  </div>
    </body>
  </div>

</template>

<script>
export default {


}
</script>

<style src = "../assets/css/bootstrap.min.css">
</style>
<style>
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      img{
        max-width: 100%;
        height: auto;
      }
      
html,
body {
  height: 100%;
  background-color: #333;
}


p{
color: white;
}

</style>