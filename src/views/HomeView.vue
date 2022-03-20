<template>
<div style="myStyle">
  <div class="home">
    <body>
    <div class="jumbotron p-4 p-md-5 text-white" :style="{backgroundImage:'url(https://images.pexels.com/photos/5366526/pexels-photo-5366526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}">
    <div class="col-md-6 px-0">
      <h1 class="display-4 font-italic">Welcome to the future</h1>
      <p class="lead my-3">This is where you can come to track my progress on projects thats that I am working on to help change the future and make the world a better place.</p>
      <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
    </div>
  </div>
  <!-- The three columns of the page -->
  <div class="row" style="color: white;">
    <div class="col-lg-4">
      <img class = "profile" src = "../assets/images/internet.jpg" height="auto" width="50%" style="padding-top: 50px;">
      <h2>Upcoming Features</h2>
      <P> If you want to see new features that are coming click belwo to find out</p>
      <p><a class="btn btn-secondary" href="html/ideapost.html" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-lg-4">
      <img class = "profile" src = "../assets/images/monitor.jpg" height="auto" width="50%" style="padding-top: 50px;">
      <h2>Other Projects</h2>
      <p>I have many other projects going on if you are interested click to view more</p>
      <p><a class="btn btn-secondary" href="ProjectView" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-lg-4">
      <img class = "profile" src = "../assets/images/message.jpg" height="auto" width="50%" style="padding-top: 50px;">
      <h2>Contact Me</h2>
      <p> If you want to contact me about a project or about anything feel free to reach out click below to contact me.</p>
      <p><a class="btn btn-secondary" href="ContactView" role="button">View details &raquo;</a></p>
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
      
  </style>