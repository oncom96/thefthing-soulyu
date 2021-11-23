<template>
  <div class="bottom-navbar d-md-none">
    <div class="col-12">
      <ul class="list-menu d-flex justify-content-around">
        <li>
          <nuxt-link to="/">
            <div class="image-wrap">
              <img src="~/assets/images/icon-logo-s-active.png" alt="Soulyou" v-if="routeActive == 'index'"/>
              <img src="~/assets/images/icon-logo-s.png" alt="Soulyou" v-else/>
            </div>
            <span :class="routeActive == 'index' ? 'text-willow' : 'text-nobel'">Home</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/news">
            <div class="image-wrap">
              <img src="~/assets/images/icon-newspaper-active.png" alt="Soulyou" v-if="routeActive == 'news'"/>
              <img src="~/assets/images/icon-newspaper.png" alt="Soulyou" v-else/>
            </div>
            <span :class="routeActive == 'news' ? 'text-willow' : 'text-nobel'">News</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">
            <div class="image-wrap">
            </div>
            <span :class="routeActive == 'products' ? 'text-willow' : 'text-nobel'">Product</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/events">
            <div class="image-wrap">
              <img src="~/assets/images/icon-calendar-active.png" alt="Soulyou" v-if="routeActive == 'events'"/>
              <img src="~/assets/images/icon-calendar.png" alt="Soulyou" v-else/>
            </div>
            <span :class="routeActive == 'events' ? 'text-willow' : 'text-nobel'">Events</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/more">
            <div class="image-wrap">
              <img src="~/assets/images/icon-more-active.png" alt="Soulyou" v-if="routeActive == 'more'"/> 
              <img src="~/assets/images/icon-more.png" alt="Soulyou" v-else />
            </div>
            <span :class="routeActive == 'more' ? 'text-willow' : 'text-nobel'">More</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-link to="/products">
      <div class="product-menu">
        <img src="~/assets/images/icon-makeup.png" alt="Soulyou" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BottomNavbar',

  computed:{
    routeActive(){
      return this.$route.name.split('-')[0]
    }
  },
};
</script>
