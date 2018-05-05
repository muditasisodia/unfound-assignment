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
            <span class="ml-3 min-font" v-on:click="fChange(1)" v-bind:style="{color: fSel==1? fActvColor: fInactvCol}">A-</span>
            <span class="ml-2 med-font" v-on:click="fChange(2)" v-bind:style="{color: fSel==2? fActvColor: fInactvCol}">A</span>
            <span class="ml-2 max-font" v-on:click="fChange(3)" v-bind:style="{color: fSel==3? fActvColor: fInactvCol}">A+</span>
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
            <div class="col-md-7 content" v-bind:style="{fontSize: fSize}">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet accusantium eos, sit illum quas, non eaque laudantium. Veniam atque, iusto eius repudiandae, minima, quisquam itaque magnam dicta ea facilis, qui rem quas beatae natus vitae accusantium blanditiis deleniti fugit assumenda. Ea sunt fugiat ut nesciunt iure accusamus sed voluptatibus, incidunt, deleniti itaque molestias vero, temporibus velit distinctio a aliquid, assumenda!
              </p>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-md-12">
            <div class="row nav-list py-2">
              <div class="col-md-1">
              <i class="fa fa-arrow-left red-nav-btn" v-on:click="changeBtn(-1)" ></i>
              <!--Passing -1 because we need to decrease the value-->
              </div>
              <div class="col-md-10">
                <span class="red-nav-btn" v-bind:style="{opacity: btnClicked==2? 1: 0.7}">What</span>
                <span class="red-nav-btn" v-bind:style="{opacity: btnClicked==3? 1: 0.7}">Why</span>
                <span class="red-nav-btn" v-bind:style="{opacity: btnClicked==4? 1: 0.7}">When</span>
                <span class="red-nav-btn" v-bind:style="{opacity: btnClicked==5? 1: 0.7}">Where</span>
                <span class="red-nav-btn" v-bind:style="{opacity: btnClicked==6? 1: 0.7}">Who</span>
                <span class="red-nav-btn" v-bind:style="{opacity: btnClicked==7? 1: 0.7}">How</span>
                <span class="red-nav-btn" v-bind:style="{opacity: btnClicked==8? 1: 0.7}">References</span>
              </div>
              <div class="col-md-1">
              <i class="fa fa-arrow-right red-nav-btn" v-on:click="changeBtn(1)"></i>
              </div>
            </div>
          </div>
          </div>

          <div class="row">

            <div class="col-md-12" v-bind:style="{fontSize: fSize}">

              <div v-if="btnClicked==2">
                <h3>What</h3>
                <img src="https://d27bygd3qv5fha.cloudfront.net/May-04-2018/5aec0c65a7fa4e38c19b54e7/India-s-draft-Telecom-wish-list-2018-May-04-13-08-05-section1.png" alt="News Img" class="main-art-img">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sed assumenda, exercitationem, veniam, consequuntur alias officia beatae aliquid quisquam dolores dicta minus odio. A nemo fugit laborum deserunt tenetur eum.

                Soluta quas aliquid quis aperiam facilis voluptates voluptatem quisquam possimus veritatis temporibus molestiae assumenda dolores minus! Pariatur, reiciendis molestiae voluptatum veniam molestias obcaecati facilis eos id repellat inventore maiores explicabo fuga ratione alias ab, ullam? Veritatis inventore, doloremque quod illum.
                Nesciunt optio obcaecati beatae quos ea voluptas deserunt fugit dolores fugiat nihil error nobis, labore amet maxime, pariatur nulla! Quae praesentium animi minus, optio beatae repellat quidem rerum atque dolores iste et ducimus, vel magnam vero laborum quos odit adipisci ex aperiam sed fuga repellendus mollitia, similique unde officia! Distinctio odio saepe deserunt, aspernatur, sit blanditiis at. Recusandae veniam atque dolorem esse accusantium, nulla nesciunt modi deserunt sed, repudiandae pariatur numquam deleniti porro tempore harum sequi inventore tempora ducimus consequuntur vero cum a repellendus.
               Aperiam, quae! Necessitatibus earum culpa voluptatum, numquam. In repellat inventore praesentium cupiditate, magni iste quisquam id harum quis quibusdam quam autem dolore? Sunt consequatur tenetur vel repudiandae architecto repellat adipisci porro quod, fuga sapiente, nemo iusto suscipit omnis nisi! Et ad autem minima vitae alias unde, corporis suscipit quaerat officia porro. Deserunt nobis dolorum quaerat quia, aliquam, veniam quod accusantium, perferendis rerum beatae, accusamus nam illo! Quam facere mollitia rerum aperiam aspernatur assumenda cupiditate error, adipisci libero fuga nam! Dignissimos laboriosam, sunt ad, fugiat sit corporis laborum accusantium natus mollitia incidunt nesciunt quaerat unde repudiandae quo non beatae voluptatem, nulla est aliquid ratione! Cumque distinctio vero necessitatibus minima repellendus cupiditate totam quae in eum sed voluptate obcaecati id quo quis sapiente tempora quaerat earum mollitia libero nisi unde, accusantium, sint ullam? Fugiat fugit, repellat! Expedita rerum quasi eligendi vitae repellat eveniet perferendis officiis et asperiores reprehenderit.
              </div>
              <div v-if="btnClicked==3">
                <h3>Why</h3>
                <img src="https://d27bygd3qv5fha.cloudfront.net/May-03-2018/5aeb5f1c806a9a181f2ca548/optimizegeneral" alt="News Img" class="main-art-img">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sed assumenda, exercitationem, veniam, consequuntur alias officia beatae aliquid quisquam dolores dicta minus odio. A nemo fugit laborum deserunt tenetur eum.

                Soluta quas aliquid quis aperiam facilis voluptates voluptatem quisquam possimus veritatis temporibus molestiae assumenda dolores minus! Pariatur, reiciendis molestiae voluptatum veniam molestias obcaecati facilis eos id repellat inventore maiores explicabo fuga ratione alias ab, ullam? Veritatis inventore, doloremque quod illum.
                Nesciunt optio obcaecati beatae quos ea voluptas deserunt fugit dolores fugiat nihil error nobis, labore amet maxime, pariatur nulla! Quae praesentium animi minus, optio beatae repellat quidem rerum atque dolores iste et ducimus, vel magnam vero laborum quos odit adipisci ex aperiam sed fuga repellendus mollitia, similique unde officia! Distinctio odio saepe deserunt, aspernatur, sit blanditiis at. Recusandae veniam atque dolorem esse accusantium, nulla nesciunt modi deserunt sed, repudiandae pariatur numquam deleniti porro tempore harum sequi inventore tempora ducimus consequuntur vero cum a repellendus.
               Aperiam, quae! Necessitatibus earum culpa voluptatum, numquam. In repellat inventore praesentium cupiditate, magni iste quisquam id harum quis quibusdam quam autem dolore? Sunt consequatur tenetur vel repudiandae architecto repellat adipisci porro quod, fuga sapiente, nemo iusto suscipit omnis nisi! Et ad autem minima vitae alias unde, corporis suscipit quaerat officia porro. Deserunt nobis dolorum quaerat quia, aliquam, veniam quod accusantium, perferendis rerum beatae, accusamus nam illo! Quam facere mollitia rerum aperiam aspernatur assumenda cupiditate error, adipisci libero fuga nam! Dignissimos laboriosam, sunt ad, fugiat sit corporis laborum accusantium natus mollitia incidunt nesciunt quaerat unde repudiandae quo non beatae voluptatem, nulla est aliquid ratione! Cumque distinctio vero necessitatibus minima repellendus cupiditate totam quae in eum sed voluptate obcaecati id quo quis sapiente tempora quaerat earum mollitia libero nisi unde, accusantium, sint ullam? Fugiat fugit, repellat! Expedita rerum quasi eligendi vitae repellat eveniet perferendis officiis et asperiores reprehenderit.
              </div>
              <div v-if="btnClicked==4">
                <h3>When</h3>
                <img src="https://d27bygd3qv5fha.cloudfront.net/May-04-2018/5aec0c65a7fa4e38c19b54e7/optimizesection3" alt="News Img" class="main-art-img">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sed assumenda, exercitationem, veniam, consequuntur alias officia beatae aliquid quisquam dolores dicta minus odio. A nemo fugit laborum deserunt tenetur eum.

                Soluta quas aliquid quis aperiam facilis voluptates voluptatem quisquam possimus veritatis temporibus molestiae assumenda dolores minus! Pariatur, reiciendis molestiae voluptatum veniam molestias obcaecati facilis eos id repellat inventore maiores explicabo fuga ratione alias ab, ullam? Veritatis inventore, doloremque quod illum.
                Nesciunt optio obcaecati beatae quos ea voluptas deserunt fugit dolores fugiat nihil error nobis, labore amet maxime, pariatur nulla! Quae praesentium animi minus, optio beatae repellat quidem rerum atque dolores iste et ducimus, vel magnam vero laborum quos odit adipisci ex aperiam sed fuga repellendus mollitia, similique unde officia! Distinctio odio saepe deserunt, aspernatur, sit blanditiis at. Recusandae veniam atque dolorem esse accusantium, nulla nesciunt modi deserunt sed, repudiandae pariatur numquam deleniti porro tempore harum sequi inventore tempora ducimus consequuntur vero cum a repellendus.
               Aperiam, quae! Necessitatibus earum culpa voluptatum, numquam. In repellat inventore praesentium cupiditate, magni iste quisquam id harum quis quibusdam quam autem dolore? Sunt consequatur tenetur vel repudiandae architecto repellat adipisci porro quod, fuga sapiente, nemo iusto suscipit omnis nisi! Et ad autem minima vitae alias unde, corporis suscipit quaerat officia porro. Deserunt nobis dolorum quaerat quia, aliquam, veniam quod accusantium, perferendis rerum beatae, accusamus nam illo! Quam facere mollitia rerum aperiam aspernatur assumenda cupiditate error, adipisci libero fuga nam! Dignissimos laboriosam, sunt ad, fugiat sit corporis laborum accusantium natus mollitia incidunt nesciunt quaerat unde repudiandae quo non beatae voluptatem, nulla est aliquid ratione! Cumque distinctio vero necessitatibus minima repellendus cupiditate totam quae in eum sed voluptate obcaecati id quo quis sapiente tempora quaerat earum mollitia libero nisi unde, accusantium, sint ullam? Fugiat fugit, repellat! Expedita rerum quasi eligendi vitae repellat eveniet perferendis officiis et asperiores reprehenderit.
              </div>
              <div v-if="btnClicked==5">
                <h3>Where</h3>
                <img src="https://d27bygd3qv5fha.cloudfront.net/May-04-2018/5aec0c65a7fa4e38c19b54e7/India-s-draft-Telecom-wish-list-2018-May-04-13-08-05-section1.png" alt="News Img" class="main-art-img">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sed assumenda, exercitationem, veniam, consequuntur alias officia beatae aliquid quisquam dolores dicta minus odio. A nemo fugit laborum deserunt tenetur eum.

                Soluta quas aliquid quis aperiam facilis voluptates voluptatem quisquam possimus veritatis temporibus molestiae assumenda dolores minus! Pariatur, reiciendis molestiae voluptatum veniam molestias obcaecati facilis eos id repellat inventore maiores explicabo fuga ratione alias ab, ullam? Veritatis inventore, doloremque quod illum.
                Nesciunt optio obcaecati beatae quos ea voluptas deserunt fugit dolores fugiat nihil error nobis, labore amet maxime, pariatur nulla! Quae praesentium animi minus, optio beatae repellat quidem rerum atque dolores iste et ducimus, vel magnam vero laborum quos odit adipisci ex aperiam sed fuga repellendus mollitia, similique unde officia! Distinctio odio saepe deserunt, aspernatur, sit blanditiis at. Recusandae veniam atque dolorem esse accusantium, nulla nesciunt modi deserunt sed, repudiandae pariatur numquam deleniti porro tempore harum sequi inventore tempora ducimus consequuntur vero cum a repellendus.
               Aperiam, quae! Necessitatibus earum culpa voluptatum, numquam. In repellat inventore praesentium cupiditate, magni iste quisquam id harum quis quibusdam quam autem dolore? Sunt consequatur tenetur vel repudiandae architecto repellat adipisci porro quod, fuga sapiente, nemo iusto suscipit omnis nisi! Et ad autem minima vitae alias unde, corporis suscipit quaerat officia porro. Deserunt nobis dolorum quaerat quia, aliquam, veniam quod accusantium, perferendis rerum beatae, accusamus nam illo! Quam facere mollitia rerum aperiam aspernatur assumenda cupiditate error, adipisci libero fuga nam! Dignissimos laboriosam, sunt ad, fugiat sit corporis laborum accusantium natus mollitia incidunt nesciunt quaerat unde repudiandae quo non beatae voluptatem, nulla est aliquid ratione! Cumque distinctio vero necessitatibus minima repellendus cupiditate totam quae in eum sed voluptate obcaecati id quo quis sapiente tempora quaerat earum mollitia libero nisi unde, accusantium, sint ullam? Fugiat fugit, repellat! Expedita rerum quasi eligendi vitae repellat eveniet perferendis officiis et asperiores reprehenderit.
              </div>
              <div v-if="btnClicked==6">
                <h3>Who</h3>
                <img src="https://d27bygd3qv5fha.cloudfront.net/May-04-2018/5aec0c65a7fa4e38c19b54e7/India-s-draft-Telecom-wish-list-2018-May-04-13-07-40-section4.jpeg" alt="News Img" class="main-art-img">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sed assumenda, exercitationem, veniam, consequuntur alias officia beatae aliquid quisquam dolores dicta minus odio. A nemo fugit laborum deserunt tenetur eum.

                Soluta quas aliquid quis aperiam facilis voluptates voluptatem quisquam possimus veritatis temporibus molestiae assumenda dolores minus! Pariatur, reiciendis molestiae voluptatum veniam molestias obcaecati facilis eos id repellat inventore maiores explicabo fuga ratione alias ab, ullam? Veritatis inventore, doloremque quod illum.
                Nesciunt optio obcaecati beatae quos ea voluptas deserunt fugit dolores fugiat nihil error nobis, labore amet maxime, pariatur nulla! Quae praesentium animi minus, optio beatae repellat quidem rerum atque dolores iste et ducimus, vel magnam vero laborum quos odit adipisci ex aperiam sed fuga repellendus mollitia, similique unde officia! Distinctio odio saepe deserunt, aspernatur, sit blanditiis at. Recusandae veniam atque dolorem esse accusantium, nulla nesciunt modi deserunt sed, repudiandae pariatur numquam deleniti porro tempore harum sequi inventore tempora ducimus consequuntur vero cum a repellendus.
               Aperiam, quae! Necessitatibus earum culpa voluptatum, numquam. In repellat inventore praesentium cupiditate, magni iste quisquam id harum quis quibusdam quam autem dolore? Sunt consequatur tenetur vel repudiandae architecto repellat adipisci porro quod, fuga sapiente, nemo iusto suscipit omnis nisi! Et ad autem minima vitae alias unde, corporis suscipit quaerat officia porro. Deserunt nobis dolorum quaerat quia, aliquam, veniam quod accusantium, perferendis rerum beatae, accusamus nam illo! Quam facere mollitia rerum aperiam aspernatur assumenda cupiditate error, adipisci libero fuga nam! Dignissimos laboriosam, sunt ad, fugiat sit corporis laborum accusantium natus mollitia incidunt nesciunt quaerat unde repudiandae quo non beatae voluptatem, nulla est aliquid ratione! Cumque distinctio vero necessitatibus minima repellendus cupiditate totam quae in eum sed voluptate obcaecati id quo quis sapiente tempora quaerat earum mollitia libero nisi unde, accusantium, sint ullam? Fugiat fugit, repellat! Expedita rerum quasi eligendi vitae repellat eveniet perferendis officiis et asperiores reprehenderit.
              </div>
              <div v-if="btnClicked==7">
                <h3>How</h3>
                <img src="https://d27bygd3qv5fha.cloudfront.net/May-04-2018/5aec0c65a7fa4e38c19b54e7/India-s-draft-Telecom-wish-list-2018-May-04-13-08-05-section1.png" alt="News Img" class="main-art-img">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sed assumenda, exercitationem, veniam, consequuntur alias officia beatae aliquid quisquam dolores dicta minus odio. A nemo fugit laborum deserunt tenetur eum.

                Soluta quas aliquid quis aperiam facilis voluptates voluptatem quisquam possimus veritatis temporibus molestiae assumenda dolores minus! Pariatur, reiciendis molestiae voluptatum veniam molestias obcaecati facilis eos id repellat inventore maiores explicabo fuga ratione alias ab, ullam? Veritatis inventore, doloremque quod illum.
                Nesciunt optio obcaecati beatae quos ea voluptas deserunt fugit dolores fugiat nihil error nobis, labore amet maxime, pariatur nulla! Quae praesentium animi minus, optio beatae repellat quidem rerum atque dolores iste et ducimus, vel magnam vero laborum quos odit adipisci ex aperiam sed fuga repellendus mollitia, similique unde officia! Distinctio odio saepe deserunt, aspernatur, sit blanditiis at. Recusandae veniam atque dolorem esse accusantium, nulla nesciunt modi deserunt sed, repudiandae pariatur numquam deleniti porro tempore harum sequi inventore tempora ducimus consequuntur vero cum a repellendus.
               Aperiam, quae! Necessitatibus earum culpa voluptatum, numquam. In repellat inventore praesentium cupiditate, magni iste quisquam id harum quis quibusdam quam autem dolore? Sunt consequatur tenetur vel repudiandae architecto repellat adipisci porro quod, fuga sapiente, nemo iusto suscipit omnis nisi! Et ad autem minima vitae alias unde, corporis suscipit quaerat officia porro. Deserunt nobis dolorum quaerat quia, aliquam, veniam quod accusantium, perferendis rerum beatae, accusamus nam illo! Quam facere mollitia rerum aperiam aspernatur assumenda cupiditate error, adipisci libero fuga nam! Dignissimos laboriosam, sunt ad, fugiat sit corporis laborum accusantium natus mollitia incidunt nesciunt quaerat unde repudiandae quo non beatae voluptatem, nulla est aliquid ratione! Cumque distinctio vero necessitatibus minima repellendus cupiditate totam quae in eum sed voluptate obcaecati id quo quis sapiente tempora quaerat earum mollitia libero nisi unde, accusantium, sint ullam? Fugiat fugit, repellat! Expedita rerum quasi eligendi vitae repellat eveniet perferendis officiis et asperiores reprehenderit.
              </div>

              <div v-if="btnClicked==8">
                <h3>
                  References
                </h3>
                <p><a href="#">www.abc.com</a></p>
                <p><a href="#">www.pizza.com</a></p>
                <p><a href="#">www.doggo.com</a></p>
                <p><a href="#">www.xyz.com</a></p>

              </div>

            </div>

          </div>

          <div class="row py-3">
            <div class="col-md-1">
              <i class="fa fa-arrow-left a-bot" v-on:click="changeBtn(-1)" ></i>
            </div>
            <div class="col-md-10 text-center">
              <span class="soc-med-logos logo-down" style="background-color: #3b5998">
                <i class="fa fa-facebook-f logo"></i>
              </span>
              <span class="soc-med-logos logo-down" style="background-color: #55acee">
                <i class="fa fa-twitter logo"></i>
              </span>
              <span class="soc-med-logos logo-down" style="background-color: #db3236">
                <i class="fa fa-google logo"></i>
              </span>
              <span class="soc-med-logos logo-down" style="background-color: #0077B5">
                <i class="fa fa-linkedin logo"></i>
              </span>
            </div>
            <div class="col-md-1">
              <i class="fa fa-arrow-right a-bot" v-on:click="changeBtn(1)"></i>
            </div>
          </div>

        </div>
        </div>
      </div>
      <!--Side Navigation -->
      <div class="col-md-3">
        <div class="card my-4 mr-2">
          <ul class="list-unstyled p-3">
            <li v-bind:style="{color: btnClicked==2? activeCol: inactiveCol}" v-on:click="changeBtn(2)">What does the draft say?</li>
            <li class="add-border" v-bind:style="{color: btnClicked==3? activeCol: inactiveCol}" v-on:click="changeBtn(3)">Why lorem ipsum dolor sit amet.?</li>
            <li class="add-border" v-bind:style="{color: btnClicked==4? activeCol: inactiveCol}" v-on:click="changeBtn(4)">When lorem ipsum dolor sit amet consectetur?</li>
            <li class="add-border" v-bind:style="{color: btnClicked==5? activeCol: inactiveCol}" v-on:click="changeBtn(5)">Where lorem ipsum dolor sit?</li>
            <li class="add-border" v-bind:style="{color: btnClicked==6? activeCol: inactiveCol}" v-on:click="changeBtn(6)">Who lorem ipsum dolor sit amet?</li>
            <li class="add-border" v-bind:style="{color: btnClicked==7? activeCol: inactiveCol}" v-on:click="changeBtn(7)">How lorem ipsum dolor sit amet consectetur adipisicing?</li>
          </ul>
        </div>
      </div><!--End of side navigation-->
    </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "cardPage",
    data(){
      return{
        btnClicked: 2,
        activeCol: '#c12020',
        inactiveCol: '#666',
        fSize: '17px',
        fActvColor: '#000',
        fInactvCol: '#aaa',
        fSel:2
      }
    },
    methods: {
      changeBtn(i){
/*Started numbering of sections from 2 in order to reserve 1 and -1 for increment and decrement*/
        if(i>=2 && i<=7){
          this.btnClicked = i;
        }
        else{

        this.btnClicked+=i;
        if(this.btnClicked > 8){
          this.btnClicked = 2;
        }
        else if(this.btnClicked<2){
          this.btnClicked = 8;
        }
      }
    },
    fChange(s){
      this.fSel=s;
      if(s==1){
        this.fSize='14px'
      }
      else if(s==3){
        this.fSize='20px'
      }
      else{
        this.fSize='17px'
      }
    }
    }
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
.soc-med-logos:hover{
  cursor: pointer;
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
.main-art-img{
  float: right;
  margin: 0px 0px 10px 10px;
}
.a-bot{
  color: #888;
}
.logo-down{
  border-radius: 100% !important;
  padding: 3px !important;
}
.col-md-3{
  /*position: fixed;*/
}
</style>
