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
          <a style="color: white;" href="futurepost.html" class="stretched-link">Continue reading</a>
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
        <h2 class="blog-post-title" style="color:white">Problems with the page transitions....</h2>
        <p style = "color:white" class="blog-post-meta">October 1, 2020 by <a href="about.html">Blake Thomas</a></p>

        <p class = "border-bottom">
          This whole site has been a serise of differnt problems that keep up coming at as a try to intergrate all the diferent things.
          I am trying to make things more stream line in order to make things more clean and just trying to get all the bugs fixed.
          I am using this to show off my skills this is just one of the many projects that I have going on. I don't want to get deep into my other ideas
          until I have this site all up and running. The main problem I am haivng right now is getting the page transitions working the way that it needs to be working.
          My idea on how to fix this would be to remove the navigation bar from all of the page except for the index page that way it will remain static and it will
          bring the content in and out with only having the nav bar on the home page. Will run a few tests to see if this will fix my issue. Will post back if this fixes are not. 
          Will make another post soon. And if we want to know anything feel free to contact me from the contact page I look forward to hearing from you.
          Talk to everyone soon.
        </p>
    
        <div class="blog-post">
          <h2 class="blog-post-title" style="color:white">Ideas for the future..</h2>
          <p style = "color:white" class="blog-post-meta">October 1, 2020 by <a href="about.html">Blake Thomas</a></p>
  
          <p>
            I have many things that I want to do for the future. One of them is that I want to build an AI that will help me with my every day to day life.
            It is kind of like Siri or Alexa but I want to be able to make it do everything i want to do to fit my needs. I will take a lot research and will have to go through many different versions before I get a final build.
            I even want to maybe possibly build a whole thing for the whole thing to live in so it can go beyond just my computer but that will happen with time. I will be updating this with other ideas that I come up with as I come up with them.
            Talk to you all later Bye.
          </p>
    </div>
      </div>

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