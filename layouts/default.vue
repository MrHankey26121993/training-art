<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="col-2">
        <div class="navbar-brand">
          <div class="brand">á</div>
          <span>ARITA/16</span>
        </div>
      </div>
      <div class="col-6">
         <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="" href="#">Designers</a>
          </li>
          <li class="nav-item">
            <a class="" href="#">History</a>
          </li>
          <li class="nav-item">
            <a class="" href="#">NEWS</a>
          </li>
        </ul>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item"><a href="#">SHOP</a></li>
          <li class="nav-item"><a href="#">About</a></li>
        </ul>
        <span class="btn-menu">
            <burger-icon/>
        </span>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import BurgerIcon from "@/components/icons/burger"
export default {
  components: {
    BurgerIcon
  }
};

</script>
