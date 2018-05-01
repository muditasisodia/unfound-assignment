<template>
  <div id="app">
    <NavBar></NavBar>
    <mainCard></mainCard>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="d in details1">
          <secCard :newsdata="d"></secCard>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import mainCard from './components/mainCard.vue'
import secCard from './components/secCard.vue'

export default {
  name: 'app',
  components: {
    NavBar, Footer, mainCard, secCard
  }
  ,
  data(){

    return{
    details1:[{
      title: "Lorem ipsum dolor",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eius rerum sunt dolore inventore, saepe autem corporis minus repellat quos, dolores similique, itaque perferendis dolor odit molestiae officia adipisci. Autem, optio. Exercitationem, error a soluta accusantium sint, laudantium suscipit beatae, assumenda explicabo tempore officia reiciendis itaque. Pariatur beatae quas aut eius atque autem modi quam quae culpa omnis quod provident, repellendus fuga ex doloribus deleniti quia perferendis nisi cupiditate vel soluta maxime nostrum. Sint nostrum minima, nulla cumque nesciunt, delectus provident praesentium in nam nihil. Quaerat ea eligendi velit nam autem fuga veritatis, et repellendus possimus. Laborum velit voluptas natus.",
      date : "01 May 2018",
      newstag: "Environment",
      imgURL: ""
    },
    {
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, libero, rerum. Facere saepe, eaque iusto quaerat mollitia excepturi ipsa exercitationem praesentium voluptas nesciunt ut nemo dicta suscipit, aliquam dolorum unde fugiat nam architecto earum doloribus porro! Commodi impedit exercitationem perferendis adipisci nesciunt. Praesentium natus placeat dicta commodi, cum magnam et saepe, dolorum fuga, suscipit obcaecati impedit nesciunt officiis minima animi incidunt est sed perspiciatis numquam ad odio officia dolore laboriosam distinctio quisquam? Debitis provident ratione tempore harum, cupiditate repellat excepturi recusandae et similique eum reprehenderit, voluptate esse, adipisci, sed dolor laborum obcaecati? Rerum nesciunt placeat pariatur, consequuntur adipisci magni vero!",
      date : "01 May 2018",
      newstag: "On This Day",
      imgURL: ""
    },
    {
      title: "Lorem ipsum dolor sit",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi perspiciatis magni expedita nisi qui a officia quos similique incidunt ducimus cum accusamus, placeat quibusdam vel dicta, voluptatibus vitae. Nesciunt minima eius eligendi perferendis qui itaque commodi ea laboriosam, deserunt. Officia porro obcaecati cum optio maiores incidunt, quod delectus vel, deserunt, perferendis amet consequatur quo magni facere excepturi eaque soluta maxime quibusdam dolores suscipit in. Consectetur, corporis nisi, nam itaque suscipit delectus, provident, sunt dolor assumenda perspiciatis magni nesciunt sint libero. Voluptates eveniet minima quaerat placeat ipsam, fuga consectetur aliquam, laborum corporis assumenda itaque sit voluptate ipsa cumque. Laudantium at perferendis dicta, velit sit recusandae incidunt porro rerum necessitatibus consequatur minima officiis, amet ex nobis vitae illum placeat labore enim error cumque neque? Sint, qui, nostrum.",
      date : "01 May 2018",
      newstag: "Sports"
    },
  ]
 }
}
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
body{
  background-color: #eee;
}
</style>
