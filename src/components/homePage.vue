<template>
  <div id="homePage">
    <mainCard></mainCard>
    <div class="container">
      <div class="row" v-for="set in details">
        <div class="col-md-4 px-4" v-for="d in set">
          <secCard :newsdata="d"></secCard>
        </div>
      </div>
    </div>

    <button class="btn btn-danger p-2 my-3">Load More</button>
  </div>

</template>

<script>
import mainCard from './mainCard.vue'
import secCard from './secCard.vue'

export default{
  name: "homePage",
  components: {
    mainCard, secCard
  },
  data() {
    return{
      details:[
        [
          {
        title: "Lorem ipsum dolor",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eius rerum sunt dolore inventore, saepe autem corporis minus repellat quos, dolores similique, itaque perferendis dolor odit molestiae officia adipisci. Autem, optio. Exercitationem, error a soluta accusantium sint, laudantium suscipit beatae, assumenda explicabo tempore officia reiciendis itaque. Pariatur beatae quas aut eius atque autem modi quam quae culpa omnis quod provident, repellendus fuga ex doloribus deleniti quia perferendis nisi cupiditate vel soluta maxime nostrum. Sint nostrum minima, nulla cumque nesciunt, delectus provident praesentium in nam nihil. Quaerat ea eligendi velit nam autem fuga veritatis, et repellendus possimus. Laborum velit voluptas natus.",
        date : "01 May 2018",
        newstag: "Environment",
        imgURL: "https://www.newsecuritybeat.org/wp-content/uploads/2013/02/canada-tar-sands.jpg"
      },
      {
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, libero, rerum. Facere saepe, eaque iusto quaerat mollitia excepturi ipsa exercitationem praesentium voluptas nesciunt ut nemo dicta suscipit, aliquam dolorum unde fugiat nam architecto earum doloribus porro! Commodi impedit exercitationem perferendis adipisci nesciunt. Praesentium natus placeat dicta commodi, cum magnam et saepe, dolorum fuga, suscipit obcaecati impedit nesciunt officiis minima animi incidunt est sed perspiciatis numquam ad odio officia dolore laboriosam distinctio quisquam? Debitis provident ratione tempore harum, cupiditate repellat excepturi recusandae et similique eum reprehenderit, voluptate esse, adipisci, sed dolor laborum obcaecati? Rerum nesciunt placeat pariatur, consequuntur adipisci magni vero!",
        date : "02 May 2018",
        newstag: "On This Day",
        imgURL: "https://www.nasa.gov/sites/default/files/thumbnails/image/1-bluemarble_west.jpg"
      },
      {
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi perspiciatis magni expedita nisi qui a officia quos similique incidunt ducimus cum accusamus, placeat quibusdam vel dicta, voluptatibus vitae. Nesciunt minima eius eligendi perferendis qui itaque commodi ea laboriosam, deserunt. Officia porro obcaecati cum optio maiores incidunt, quod delectus vel, deserunt, perferendis amet consequatur quo magni facere excepturi eaque soluta maxime quibusdam dolores suscipit in. Consectetur, corporis nisi, nam itaque suscipit delectus, provident, sunt dolor assumenda perspiciatis magni nesciunt sint libero. Voluptates eveniet minima quaerat placeat ipsam, fuga consectetur aliquam, laborum corporis assumenda itaque sit voluptate ipsa cumque. Laudantium at perferendis dicta, velit sit recusandae incidunt porro rerum necessitatibus consequatur minima officiis, amet ex nobis vitae illum placeat labore enim error cumque neque? Sint, qui, nostrum.",
        date : "01 May 2018",
        newstag: "Sports",
        imgURL: "http://ste.india.com/sites/default/files/2018/01/28/656634-saina.jpg"
      }
    ],
        [
          {
        title: "Lorem ipsum dolor",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eius rerum sunt dolore inventore, saepe autem corporis minus repellat quos, dolores similique, itaque perferendis dolor odit molestiae officia adipisci. Autem, optio. Exercitationem, error a soluta accusantium sint, laudantium suscipit beatae, assumenda explicabo tempore officia reiciendis itaque. Pariatur beatae quas aut eius atque autem modi quam quae culpa omnis quod provident, repellendus fuga ex doloribus deleniti quia perferendis nisi cupiditate vel soluta maxime nostrum. Sint nostrum minima, nulla cumque nesciunt, delectus provident praesentium in nam nihil. Quaerat ea eligendi velit nam autem fuga veritatis, et repellendus possimus. Laborum velit voluptas natus.",
        date : "01 May 2018",
        newstag: "Environment",
        imgURL: "http://www.prsindia.org/administrator/uploads/media/images/hpenvis_nic_in.jpg"
      },
      {
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, libero, rerum. Facere saepe, eaque iusto quaerat mollitia excepturi ipsa exercitationem praesentium voluptas nesciunt ut nemo dicta suscipit, aliquam dolorum unde fugiat nam architecto earum doloribus porro! Commodi impedit exercitationem perferendis adipisci nesciunt. Praesentium natus placeat dicta commodi, cum magnam et saepe, dolorum fuga, suscipit obcaecati impedit nesciunt officiis minima animi incidunt est sed perspiciatis numquam ad odio officia dolore laboriosam distinctio quisquam? Debitis provident ratione tempore harum, cupiditate repellat excepturi recusandae et similique eum reprehenderit, voluptate esse, adipisci, sed dolor laborum obcaecati? Rerum nesciunt placeat pariatur, consequuntur adipisci magni vero!",
        date : "28 April 2018",
        newstag: "Business",
        imgURL: "http://static.dnaindia.com/sites/default/files/styles/full/public/2017/09/27/612722-559539-mukesh-ambani-reuters-edit.jpg"
      },
      {
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi perspiciatis magni expedita nisi qui a officia quos similique incidunt ducimus cum accusamus, placeat quibusdam vel dicta, voluptatibus vitae. Nesciunt minima eius eligendi perferendis qui itaque commodi ea laboriosam, deserunt. Officia porro obcaecati cum optio maiores incidunt, quod delectus vel, deserunt, perferendis amet consequatur quo magni facere excepturi eaque soluta maxime quibusdam dolores suscipit in. Consectetur, corporis nisi, nam itaque suscipit delectus, provident, sunt dolor assumenda perspiciatis magni nesciunt sint libero. Voluptates eveniet minima quaerat placeat ipsam, fuga consectetur aliquam, laborum corporis assumenda itaque sit voluptate ipsa cumque. Laudantium at perferendis dicta, velit sit recusandae incidunt porro rerum necessitatibus consequatur minima officiis, amet ex nobis vitae illum placeat labore enim error cumque neque? Sint, qui, nostrum.",
        date : "01 May 2018",
        newstag: "Technology",
        imgURL: "https://www.washingtonpost.com/resizer/1Tz0CTgAaA4_hMyMr-PWi3eR_WA=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TGMIGVMOC44YHL4VCDROTDIUOM.jpg"
      }
    ],
        [
          {
        title: "Lorem ipsum dolor",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eius rerum sunt dolore inventore, saepe autem corporis minus repellat quos, dolores similique, itaque perferendis dolor odit molestiae officia adipisci. Autem, optio. Exercitationem, error a soluta accusantium sint, laudantium suscipit beatae, assumenda explicabo tempore officia reiciendis itaque. Pariatur beatae quas aut eius atque autem modi quam quae culpa omnis quod provident, repellendus fuga ex doloribus deleniti quia perferendis nisi cupiditate vel soluta maxime nostrum. Sint nostrum minima, nulla cumque nesciunt, delectus provident praesentium in nam nihil. Quaerat ea eligendi velit nam autem fuga veritatis, et repellendus possimus. Laborum velit voluptas natus.",
        date : "01 May 2018",
        newstag: "Environment",
        imgURL: "http://news.mit.edu/sites/mit.edu.newsoffice/files/styles/news_article_image_top_slideshow/public/images/2016/MIT-PPA-1_0.jpg?itok=tIJwQDmn"
      },
      {
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, libero, rerum. Facere saepe, eaque iusto quaerat mollitia excepturi ipsa exercitationem praesentium voluptas nesciunt ut nemo dicta suscipit, aliquam dolorum unde fugiat nam architecto earum doloribus porro! Commodi impedit exercitationem perferendis adipisci nesciunt. Praesentium natus placeat dicta commodi, cum magnam et saepe, dolorum fuga, suscipit obcaecati impedit nesciunt officiis minima animi incidunt est sed perspiciatis numquam ad odio officia dolore laboriosam distinctio quisquam? Debitis provident ratione tempore harum, cupiditate repellat excepturi recusandae et similique eum reprehenderit, voluptate esse, adipisci, sed dolor laborum obcaecati? Rerum nesciunt placeat pariatur, consequuntur adipisci magni vero!",
        date : "30 April 2018",
        newstag: "Burning Issues",
        imgURL: "https://d27bygd3qv5fha.cloudfront.net/Apr-09-2018/5acbc743b202e95ddf131656/optimizesection2"
      },
      {
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi perspiciatis magni expedita nisi qui a officia quos similique incidunt ducimus cum accusamus, placeat quibusdam vel dicta, voluptatibus vitae. Nesciunt minima eius eligendi perferendis qui itaque commodi ea laboriosam, deserunt. Officia porro obcaecati cum optio maiores incidunt, quod delectus vel, deserunt, perferendis amet consequatur quo magni facere excepturi eaque soluta maxime quibusdam dolores suscipit in. Consectetur, corporis nisi, nam itaque suscipit delectus, provident, sunt dolor assumenda perspiciatis magni nesciunt sint libero. Voluptates eveniet minima quaerat placeat ipsam, fuga consectetur aliquam, laborum corporis assumenda itaque sit voluptate ipsa cumque. Laudantium at perferendis dicta, velit sit recusandae incidunt porro rerum necessitatibus consequatur minima officiis, amet ex nobis vitae illum placeat labore enim error cumque neque? Sint, qui, nostrum.",
        date : "01 May 2018",
        newstag: "Sports",
        imgURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201706/hockeyfb-story_647_062017113112_0.jpg"
      }
    ]
    ]
    }
  }
}

</script>

<style>
  button{
  margin-right: auto;
  margin-left: 47%;
  display: block;
  }
</style>
