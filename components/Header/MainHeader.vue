<template>
  <div 
    class="header-component" 
    :class="$route.name == 'index' && $device.isMobile ? 'bg' : $route.name == 'index' && $device.isDesktop ? 'bg-transparent' : 'bg'">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-10 col-md-5">
          <div class="brand-logo">
            <nuxt-link to="/" class="header-logo">
              <img src="~/assets/images/header-logo-soulyou.png" alt="Soulyou" />
            </nuxt-link>
          </div>
        </div>
        <div class="col-2 col-md-7">
          <ul class="list-unstyled d-none d-md-block justify-content-around m-0 headerDesktop">
            <li>
              <nuxt-link to="/products">
                <span :class="routeActive == 'products' ? 'text-willow' : $route.name !== 'index' ? 'text-white' : 'text-blackNew'">Product</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/news">
                <span :class="routeActive == 'news' ? 'text-willow' : $route.name !== 'index' ? 'text-white' : 'text-blackNew'">News</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/events">
                <span :class="routeActive == 'events' ? 'text-willow' : $route.name !== 'index' ? 'text-white' : 'text-blackNew'">Events</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about-us">
                <span :class="routeActive == 'about-us' ? 'text-willow' : $route.name !== 'index' ? 'text-white' : 'text-blackNew'">About Us</span>
              </nuxt-link>
            </li>
            <li>
              <img 
                src="~/assets/images/icon-search.png" 
                alt="Soulyou" width="17px" 
                @click="$router.push('/search')" 
                class="searchWhite cursor-pointer"
                :class="$route.name == 'index' && $device.isDesktop ? 'd-none': ''"/>
              <img 
                src="~/assets/images/icon-search-black.png" 
                alt="Soulyou" width="17px" 
                @click="$router.push('/search')"
                class="searchBlack cursor-pointer"
                :class="$route.name !== 'index' && $device.isDesktop ? 'd-none': ''"/>
            </li>
          </ul>
          <div class="search-bar d-sm-block d-md-none" @click="$router.push('/search')">
            <img src="~/assets/images/icon-search.png" alt="Soulyou" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  computed:{
    routeActive(){
      return this.$route.name.split('-')[0]
    }
  },
  mounted(){
    console.log('device desktop',this.$device.isDesktop)
    if(this.$route.name == 'index' && this.$device.isDesktop){
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
          if (scroll >= 60) {
            $(".header-component").removeClass("bg-transparent");
            $(".searchWhite").removeClass("d-none");
            $(".searchBlack").addClass("d-none");
            $(".headerDesktop span").removeClass("text-blackNew");
            $(".headerDesktop span").addClass("text-white");
          } else {
            $(".header-component").addClass("bg-transparent");
            $(".searchWhite").addClass("d-none");
            $(".searchBlack").removeClass("d-none");
            $(".headerDesktop span").removeClass("text-white");
            $(".headerDesktop span").addClass("text-blackNew");
          }
      });
    } else {
      $(window).unbind( "scroll" );
    }
  }
};
</script>

<style scoped lang="scss">

  .headerDesktop {
    float:right;

    li{
        display:inline;
        margin-left: 60px
    }
  }

</style>
