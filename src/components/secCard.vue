<template>
<div>
  <a href="/newsDetails">
  <div class="card my-2" @mouseover="isSelected = true" @mouseleave="isSelected = false">
    <div class="newsTag px-2 py-1" v-bind:style="{ backgroundColor: newsdata.shade}">{{newsdata.newstag}}</div>
    <div class="dateTag" v-bind:style="{opacity: isSelected ? 1 : 0}">{{newsdata.date}}</div>
    <div class="shareIcon" v-if="isSelected">
      <i class="fa fa-share-alt" aria-hidden="true" style="color:black; padding-top: 12px;"></i>
    </div>
    <div class="img-holder">
    <img v-bind:src="newsdata.imgURL" alt="News Image" class="card-img-top" v-bind:style="{opacity: isSelected ? 0.7 : 1}"/>

    </div>
    <div class="card-body">

      <h3 class="card-title">{{newsdata.title}}</h3>
      <p class="card-text limit-char">{{newsdata.content}}</p>
    </div>
  </div>
  </a>
  </div>
</template>

<script scoped>
  export default{
    name: 'secCard',
    props: ['newsdata'],
    data(){
      return{
        isSelected: false
      }
    },
    mounted: function(){
      /*Ensuring thatcontent in div does not overflow*/

      $(".limit-char").each(function(){
    var len=$(this).text().length;
    var lim;

  if(len>400)
  {
    $(this).text($(this).text().substr(0,400)+'...');
    console.log(lim)
  }
    });
    }  }


</script>

<style scoped>
.card{
  height: 575px;
  border-radius: 0px;
  border: none;
}
.card-title{
  font-family: serif;
}
.img-holder{
  height: 230px;
  background-color: black;
  overflow: hidden;
}
.card-body{
  height: 345px;
}
.card-text{
  line-height: 1.6;
  /*white-space: nowrap;*/
}
.newsTag{
  background-color: #636363;
  color: white;
  position:absolute;
  left: 10px;
  font-size: 13px;
  bottom: 330px;
  z-index: 1;
}
.dateTag{
  color: white;
  position: absolute;
  right: 10px;
  bottom: 355px;
  opacity: 0;
  z-index: 1;
}
.shareIcon{
  position: absolute;
  width: 40px;
  height: 40px;
  top: 5px;
  right: 7px;
  background-color: white;
  border-radius: 100%;
  text-align: center;
  z-index: 1;
}
img{
  transition: opacity 1s;
  width: auto;
  height: 100%;
  border-radius: 0px;
}

@media only screen and (min-width: 768px){

}

a{
  text-decoration: none;
  color: black;
}
</style>
