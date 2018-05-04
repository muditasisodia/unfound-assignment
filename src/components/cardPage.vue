<template>
  <div>
    <div class="container-fluid">
    <div class="row mt-4">
      <div class="col-md-9">
        <div class="card my-4 ml-4">
          <div class="card-body mx-4">
          <div class="row row-border">
            <h2 class="card-title pb-3">
              Lorem ipsum dolor sit amet
            </h2>
          </div>
          <div class="row row-border py-3">
            <div class="col-md-6">
            <span>04 May 2018</span>
            <span class="px-2">|</span>
            <span style="color: #115dd8">Burning Issues</span>
            <span class="ml-3 min-font">A-</span>
            <span class="ml-2 med-font">A</span>
            <span class="ml-2 max-font">A+</span>
          </div>
          <div class="col-md-6">
            <div class="logo-list">
            <span class="soc-med-logos" style="background-color: #3b5998">
              <i class="fa fa-facebook-f logo"></i>
            </span>
            <span class="soc-med-logos" style="background-color: #55acee">
              <i class="fa fa-twitter logo"></i>
            </span>
            <span class="soc-med-logos" style="background-color: #db3236">
              <i class="fa fa-google logo"></i>
            </span>
            <span class="soc-med-logos" style="background-color: #0077B5">
              <i class="fa fa-linkedin logo"></i>
            </span>
            </div>
          </div>
          </div>
          <div class="row row-border py-3">
            <div class="col-md-5 img-holder">
              <img src="https://www.newsecuritybeat.org/wp-content/uploads/2013/02/canada-tar-sands.jpg" alt="News Image">
            </div>
            <div class="col-md-7 content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet accusantium eos, sit illum quas, non eaque laudantium. Veniam atque, iusto eius repudiandae, minima, quisquam itaque magnam dicta ea facilis, qui rem quas beatae natus vitae accusantium blanditiis deleniti fugit assumenda. Ea sunt fugiat ut nesciunt iure accusamus sed voluptatibus, incidunt, deleniti itaque molestias vero, temporibus velit distinctio a aliquid, assumenda!
              </p>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-md-12">
            <div class="row nav-list py-2">
              <div class="col-md-1">
              <i class="fa fa-arrow-left red-nav-btn"></i>
              </div>
              <div class="col-md-10">
                <span class="red-nav-btn">What</span>
                <span class="red-nav-btn">Why</span>
                <span class="red-nav-btn">When</span>
                <span class="red-nav-btn">Where</span>
                <span class="red-nav-btn">Who</span>
                <span class="red-nav-btn">How</span>
                <span class="red-nav-btn">References</span>
              </div>
              <div class="col-md-1">
              <i class="fa fa-arrow-right red-nav-btn"></i>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      <!--Side Navigation -->
      <div class="col-md-3">
        <div class="card my-4 mr-2">
          <ul class="list-unstyled p-3">
            <li>What does the draft say?</li>
            <li class="add-border">Why lorem ipsum dolor sit amet.?</li>
            <li class="add-border">When lorem ipsum dolor sit amet consectetur?</li>
            <li class="add-border">Where lorem ipsum dolor sit?</li>
            <li class="add-border">Who lorem ipsum dolor sit amet?</li>
            <li class="add-border">How lorem ipsum dolor sit amet consectetur adipisicing?</li>
          </ul>
        </div>
      </div><!--End of side navigation-->
    </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "cardPage"
  }
</script>

<style>
.card{
  /*height: 300px;*/
  border: none;
  border-radius: 0px;
}
li{
  font-weight: 600;
  color: #666;
  line-height: 120%;
  padding-top: 5%;
  padding-bottom: 2%;
}
.add-border{
  border-top: 1px solid #ddd;
}
li:hover{
  color: #c12020;
  cursor: pointer;
}
.card-title{
  font-family: serif;
}
.row-border{
  border-bottom: 1px solid #eee;
}
.min-font, .med-font, .max-font{
  color: #aaa;
}
.min-font{
  font-size: 16px;
}
.med-font{
  font-size: 20px;
}
.max-font{
  font-size: 24px;
}
.min-font:hover, .med-font:hover, .max-font:hover{
  cursor: pointer;
}
.soc-med-logos{
  display: inline-block;
  margin-right: 8px;
}
.logo{
  padding: 10px 30px;
  color: white;
}
.logo-list{
  float: right;
}
img{
  height: 240px;
}
.img-holder{
  overflow: hidden;
}
.content{
  font-size: 17px;
}
.nav-list{
  background-color: #c12020;
}
.fa{
  color: white;
}
.col-md-10{
  text-align: center;
}
.red-nav-btn{
  color: white;
  opacity: 0.7;
  font-size: 20px
}
.fa-arrow-right{
  position: absolute;
  right: 10px;
  top:5px;
}
.fa-arrow-left{
  position: absolute;
  left: 10px;
  top: 5px;
}
.col-md-10 > span{
  padding-left: 10px;
  padding-right: 10px;
}
.fa-arrow-right:hover, .fa-arrow-left:hover{
  opacity: 1;
  cursor: pointer;
}
</style>
