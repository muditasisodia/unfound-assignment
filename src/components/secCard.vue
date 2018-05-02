<template>
<div>

  <div class="card my-2" @mouseover="isSelected = true" @mouseleave="isSelected = false">
    <div class="newsTag px-2 py-1">{{newsdata.newstag}}</div>
    <div class="dateTag" v-bind:style="{opacity: isSelected ? 1 : 0}">{{newsdata.date}}</div>
    <div class="shareIcon" v-if="isSelected">
      <i class="fa fa-share-alt" aria-hidden="true" style="color:white; padding-top: 12px;"></i>
    </div>
    <div class="img-holder"  v-bind:style="{opacity: isSelected ? 0.5 : 1}">
    <!--<img src="" alt="News Image" class="card-img-top">-->

    </div>
    <div class="card-body">

      <h3 class="card-title">{{newsdata.title}}</h3>
      <p class="card-text limit-char">{{newsdata.content}}</p>
    </div>
  </div>

  <!--<h3>{{ newsdata.title }}</h3>-->

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
}
.card-title{
  font-family: serif;
}
.img-holder{
  height: 230px;
  background-color: #ddd;
  transition: opacity 1s;
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
  color: #444;
  position: absolute;
  right: 10px;
  bottom: 355px;
  opacity: 0;
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

@media only screen and (min-width: 768px){

}
</style>
