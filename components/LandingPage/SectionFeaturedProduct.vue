<template>
  <main class="w-100">
    <div class="featured-section">
        <h1 class="text-medium">Featured Products</h1>
        <span>
          Find and choose our New Products. Get your perfect make up and skin with Soulyu Beauty.
        </span>

        <div id="FeaturedProduct" class="cover owl-carousel owl-theme owl-dots">
          <div
            v-for="featuredProduct in productList"
            :key="featuredProduct.id"
            class="featured-product"
          > 
            <div class="featured-img">
              <img :src="featuredProduct.image_origin" :alt="featuredProduct.name" />
            </div>
            <div class="featured-field py-3">
              <div class="featured-title text-truncate px-4">
                {{ featuredProduct.name }}
              </div>
              <div class="featured-desc px-4">
                {{ featuredProduct.content_heading }}
              </div>
              <div class="featured-link mt-4 text-uppercase text-medium">
                <a :href="featuredProduct.url_target" class="pr-3">shop now</a>
                <button 
                  class="btn btn-secondary text-uppercase" 
                  @click="goToProduct(featuredProduct.url_key)">
                  product detail
                </button>
              </div>
            </div>
          </div>
        </div> 
    </div>
  </main>
</template>

<script>
export default {
  name: 'SectionFeaturedProduct',
  data(){
    return{
      productList : []
    }
  },
  props: {
    data_featured: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  mounted() {
    this.getFeaturedProduct();
  },
  methods: {
    callCarousel() {
      $('#FeaturedProduct').owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        margin: -40,
        responsive: {
          768: {
            items: 2,
            loop: false,
            dots: true,
            nav: true,
            margin: 20,
          },
          1024: {
            items: 3,
            loop: false,
            dots: true,
            nav: true,
            margin: 20,
          },
          1280: {
            items: 4,
            loop: false,
            dots: true,
            nav: true,
            margin: 20,
          },
        },
      });
    },
    async getFeaturedProduct() {
      let productVar = {
        catId : 9,
        pageSize: 12,
        page: 1
      }
      let res = await this.$store.dispatch('products/fetchProductHome', productVar)
      this.productList = res

      if (this.productList.length) {
        setTimeout(() => {
          this.callCarousel();
        }, 100);
      }
    },
    goToProduct(url){
      this.$router.push('/products/detail/'+url)
    }
  },
};
</script>
