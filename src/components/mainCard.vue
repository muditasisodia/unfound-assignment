<template>
  <div class="container">
    <div class="card m-3">
      <div class="card-body">
      <div class="row">
        <div class="col-md-6 imgHolder" @mouseover="isSelected = true" @mouseleave="isSelected = false" v-bind:style="{opacity: isSelected ? 0.5 : 1}">
            <!--Image comes here-->
            <div class="shareIcon" v-if="isSelected">
              <i class="fa fa-share-alt" aria-hidden="true" style="color:white; padding-top: 12px;"></i>
            </div>
        </div>
        <div class="col-md-5">
          <p>
          <h3 class="card-title px-3">Lorem ipsum dolor</h3>
          </p>
          <p>
          <div class="card-subtitle my-2 px-3">
            <!--News Tag-->
            <span style="color: white; background-color: orange;" class="py-1 px-2 mr-3">World</span>
            <span style="color: rgba(0,0,0,0.7);">01 May 2018</span>
          </div>
          </p>
          <p class="card-text pb-3 px-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab saepe cum reprehenderit voluptate repudiandae praesentium excepturi blanditiis vitae quaerat, fugiat, natus tempore quod quos, facilis nesciunt aut consequuntur maiores animi error qui! Accusamus enim sequi itaque aspernatur id perspiciatis accusantium eum omnis qui. Maxime tempora voluptas pariatur, voluptate culpa quos, dolorem non placeat autem consequuntur natus sint cupiditate nisi velit! Itaque ipsum eveniet, minima dolores quis maiores nisi asperiores magni.
          </p>
        </div>
        <div class="col-md-1 text-center">
        <ul class="list-unstyled">
          <li id="what" @mouseover="isSelected = true" @mouseleave="isSelected = false">
            <a href="#">What</a>
          </li>
          <li id="why" @mouseover="isSelected = true" @mouseleave="isSelected = false">
            <a href="#">Why</a>
          </li>
          <li id="when" @mouseover="isSelected = true" @mouseleave="isSelected = false">
            <a href="#">When</a>
          </li>
          <li id="where" @mouseover="isSelected = true" @mouseleave="isSelected = false">
            <a href="#">Where</a>
          </li>
          <li id="who" @mouseover="isSelected = true" @mouseleave="isSelected = false">
            <a href="#">Who</a>
          </li>
          <li id="how" @mouseover="isSelected = true" @mouseleave="isSelected = false">
            <a href="#">How</a>
          </li>
        </ul>
        </div>
      </div>
      </div>
    </div>

</div>
</template>

<script>

  export default{
    name : 'mainCard',
    data(){
      return{
      isSelected: false
    }
    }
  }

</script>

<style scoped>

.card-body{
  padding: 0px !important;
}
.card-title{
  font-family: serif;
}
.card-subtitle{
  font-size: 15px;
}
.card-text{
  line-height: 200%;
}
ul{
  height:100%;
}
li{
  height: 16.6667%;
  padding-top: 25%;
  display: block;
}
li:hover{
  cursor: pointer;
  opacity: 0.75;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
  text-decoration: none;
  color: white;
}
#what{
  background-color: #CE6D8B;
}
#why{
background-color: #8FB0BA;
}
#when{
  background-color: #C3E991;
}
#where{
  background-color: #DD4949;
}
#who{
background-color: #2B4570;
}
#how{
background-color: #7180AC;
}
.card{
  border-radius: 0;
}
.col-md-1{
  margin: 0px;
  padding: 0px;
}
.shareIcon{
  position: absolute;
  width: 40px;
  height: 40px;
  top: 5px;
  right: 7px;
  background-color: rgba(0,0,0,0.8);
  border-radius: 100%;
  text-align: center;
}
.imgHolder{
  background-color:  #ddd;
  transition: opacity 1s;
}

@media only screen and (max-width: 768px) {
  .col-md-5{
    padding: 3%;
  }
  li{
    height: 80px;
    padding-top: 5%;
  }
}
</style>
