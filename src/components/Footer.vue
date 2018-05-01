<template>
  <div>

<!--Footer-->
<footer class="page-footer pt-4 mt-4">

    <!--Footer Links-->
    <div class="container">
        <div class="row">

            <!--First column-->

            <div class="col-md-3 text-center">

                <ul class="list-unstyled">
                    <li>
                        <a href="#"><i class="fa fa-home mr-2"></i>Home</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-book mr-2"></i>Books</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-rss-square mr-2"></i>Blog</a>
                    </li>
                </ul>
            </div>

            <!--/.First column-->

            <!--Second column-->

            <div class="col-md-3 text-center">

                <ul class="list-unstyled">
                    <li>
                        <a href="#"><i class="fa fa-facebook-f mr-2"></i>Facebook</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter mr-2"></i>Twitter</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-youtube mr-2"></i>YouTube</a>
                    </li>
                </ul>
            </div>
            <!--/.Second column-->

            <!--Third column-->
            <div class="col-md-4">

                <h5 class="text-center px-5">Subscribe to get UnFound Newsletter and Printable Books</h5>
                <p>
                  <form>
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control">
                      </div>
                      <div class="form-group">
                      <label>Email Address*</label>
                      <input type="email" class="form-control" required>
                      </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </p>
            </div>
            <!--/.Third column-->
        </div>
    </div>
    <!--/.Footer Links-->

    <!--Copyright-->
    <div class="footer-copyright py-3 pl-3">
        UnFound © 2018
    </div>
    <!--/.Copyright-->

</footer>
<!--/.Footer-->

  </div>
</template>

<script>
</script>

<style scoped>

.page-footer{
  background-color: rgba(0,0,0,0.7);
  color: white;
}

.footer-copyright{
  background-color: rgba(0,0,0,0.3); /*It's adding on to the bgcolour of page-footer anyway*/
}

a{
  text-decoration: none;
  color: white;
}

li{
  margin-top: 5%;
}

</style>
