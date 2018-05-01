<!--Center align elements when in drop down-->
<!--Control width of vert nav with vue instead of jquery-->

<template>
  <div class="hello">

  <!--Vertical Navbar-->
  <div class="close-nav sidenav" v-bind:style="{width: w}">
  <a href="#" v-on:click="closeNav()">&times;</a>
  <a href="#">All Stories</a>
  <a href="#">Politics</a>
  <a href="#">Business</a>
  <a href="#">Burning Issues</a>
  <a href="#">Sports</a>
  <a href="#">Technology</a>
  <a href="#">Society</a>
  <a href="#">World</a>
  <a href="#">Entertainment</a>
  <a href="#">Law</a>
  <a href="#">Environment</a>
  <a href="#">On This Day</a>
  <a href="#">Personalities</a>
  <a href="#">This!</a>
</div>

    <nav class="navbar navbar-expand-lg navbar-light">
      <a href="#" v-on:click='openNav()'>
        <span class="navbar-toggler-icon"></span>
      </a><!--for vertical navbar on click-->

      <!--Modal Code-->
      <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Looking for something in particular?</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>

      </div>
      <div class="modal-body">
        <input class="form-control mr-sm-2" type="search" aria-label="Search">
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
  <a class="navbar-brand" href="#">UnFound</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> <!--For collapsable navbar for mobile screen-->

  <div class="collapse navbar-collapse" id="navbarSupportedContent"><!--All things collapsible come under this-->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <button class="btn btn-danger">Books</button>
      </li>

    </ul>
    <a href="#" class="nav-item" data-toggle="modal" data-target="#myModal"><i class="fa fa-search" aria-hidden="true"></i>Search</a>

    <button class="btn btn-danger nav-item" style="display: block;">Get App</button>

  </div>
</nav>

  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        w: '0px'
      }
    },
    methods: {
      closeNav() {
        this.w = '0px'
        console.log(this.w)
      },
      openNav() {
        this.w= '230px'
        console.log(this.w)
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
  }

  .btn {
    margin: 0.5%;
  }

  .navbar-brand {
    margin-left: 1%;
  }

  .navbar {
    background-color: white;
  }

  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 15px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #f1f1f1;
    background-color: #333;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}


</style>
