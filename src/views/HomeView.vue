<template>
<div style="myStyle">
  <div class="home">
    <body>
    <div class="jumbotron p-4 p-md-5 text-white" :style="{backgroundImage:'url(https://images.pexels.com/photos/5366526/pexels-photo-5366526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}">
    <div class="col-md-6 px-0">
      <h1 class="display-4 font-italic">Hello I am Blake Thomas</h1>
      <h2 class="display-4 font-italic">Web Developer</h2>
    </div>
  </div>
  <!-- The three columns of the page -->
  <div class="row" style="color: white;">
    <div class="col-lg-4">
      <img class = "profile center" src = "../assets/images/internet.jpg" height="auto" width="50%" style="padding-top: 50px;">
      <h2 class="center">Personal Projects</h2>
      <p class="center"> Find out what projects I am currently working on right now</p>
      <p class="center"><a class="btn btn-secondary" href="html/ideapost.html" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-lg-4">
      <img class = "profile center" src = "../assets/images/monitor.jpg" height="auto" width="50%" style="padding-top: 50px;">
      <h2 class="center">Blog</h2>
      <p class="center">Check out the blog where I discuss everything from personal projects to new thing I am learning</p>
      <p class="center"><router-link class="btn btn-secondary" to="BlogView">Read More &raquo;</router-link></p>
    </div>
    <div class="col-lg-4">
      <img class = "profile center" src = "../assets/images/message.jpg" height="auto" width="50%" style="padding-top: 50px;">
      <h2 class="center">Contact Me</h2>
      <p class="center"> If you want to contact me about a project or about anything feel free to reach out click below to contact me.</p>
      <p class="center"><a class="btn btn-secondary" href="ContactView" role="button">View details &raquo;</a></p>
    </div>
    
    
  </div>
    </body>
  </div>
</div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      myStyle:{
        backgroundColor: "#5a5a5a"
      }

    }
  }
}
</script>



<style src = '../assets/css/bootstrap.min.css'></style>
<style lang="scss" scoped>


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

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
      
  </style>