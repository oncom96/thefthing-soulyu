<template>
  <main class="w-100">
    <div class="bestproduct-section">
      <h1 class="text-medium">All Products</h1>

      <ul>
        <li
          v-for="(bestProduct, index) in data_best_product"
          :key="bestProduct._id"
          class="best-product-title"
          @click="getBestProductDetailNew(index)"
        >
          <span
            :class="parseInt(currentTab) == parseInt(index) ? 'bestActive' : ''"
            >{{ bestProduct.name }}</span
          >
        </li>
      </ul>

      <div id="BestProduct" class="cover owl-carousel owl-theme owl-dots mt-4" v-if="!isLoading">
        <card 
          v-for="bestProductList in productList" 
          :key="bestProductList.id"
          :product_list="bestProductList"/>
      </div>
      <div class="row mt-4 m-auto" v-show="isLoading">
        <div class="d-md-none col-6" v-for="(event,index) in 2" :key="index+'m'">
          <productLoading />
        </div>
        <div class="d-none d-md-block p-5" v-for="(event,index) in 5" :key="index+'d'" style="width:20%;">
          <productLoading />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import card from '~/components/Product/card';
import productLoading from '~/components/Product/loading';


export default {
  name: 'SectionBestProduct',
  components: {
    card,
    productLoading
  },
  props: {
    data_best_product: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      currentTab: 0,
      best_product: this.data_best_product,
      list_product: [],
      productList : [],
      isLoading: true,
    };
  },
  mounted() {
    this.getBestProductDetail();
  },
  methods: {
    callCarousel() {
      $('#BestProduct').owlCarousel({
        items: 2,
        loop: false,
        rewind: false,
        autoplay: false,
        dots: false,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive: {
          768: {
            items: 5,
            loop: false,
            rewind: false,
            autoplay: false,
            dots: false,
            nav: true,
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
          },
        },
      });
    },
    async getBestProductDetail() {
      let productVar = {
        catId : 14,
        pageSize: 12,
        page: 1
      }
      let res = await this.$store.dispatch('products/fetchProductHome', productVar)
      this.productList = res
      this.isLoading = false

      if (this.productList.length) {
        setTimeout(() => {
          this.callCarousel();
        }, 500);
      }
    },
    async getBestProductDetailNew(index) {
      await this.resetProduct()
      this.isLoading = true
      if (index >= 0) {
        this.currentTab = index;
      }
      let productVar = {
        pageSize: 12,
        page: 1
      }
      if(index == 0){
        productVar.catId = 14
      } else if(index == 1){
        productVar.catId = 16
      } else if(index == 2){
        productVar.catId = 15
      } else{
        productVar.catId = 14
      }
      let res = await this.$store.dispatch('products/fetchProductHome', productVar)
      this.productList = res
      this.isLoading = false
      $("#BestProduct .owl-item").remove()
      $('#BestProduct').trigger('destroy.owl.carousel')
      if (this.productList.length) {
        setTimeout(() => {
          this.callCarousel();
        }, 100);
      }
      return
      // let html = ''
      // if(this.productList.length){
      //   for (let index = 0; index < this.productList.length; index++) {
      //     var list = this.productList[index]
      //     html += '<div>'
      //     html +=  '<img src="'+list.image_origin+'" alt="'+list.name+'" />'
      //     html +=   '<div class="best-product-title">'+list.name+'</div>'
      //     html +=  '<div class="best-product-desc">'
      //     html += list.content_heading
      //     html += '<div class="rating">'
      //     html +=  '<ul class="list">'
      //       for (let y = 0; y < 5; y++) {
      //           if(y <= list.rating_avg_score_rating && list.rating_avg_score_rating){
      //             html += '<li class="star active">'
      //             html += '<i class="fas fa-star"></i>'
      //             html += '</li>'
      //           } else {
      //             html += '<li class="star">'
      //             html += '<i class="far fa-star"></i>'
      //             html += '</li>'
      //           }
      //       }
      //     html += '</ul>'
      //     html += '</div>'
      //     html +=  '</div>'
      //     html += '</div>'
          
      //   }

      //   setTimeout(() => {
      //     // this.callCarousel();
      //     console.log('replace owl')
      //   }, 500);
      // } else {
      //   html = "<div></div>"
      // }
    },
    async resetProduct() {
      this.productList = []
      
      setTimeout(() => {
        $("#BestProduct .owl-item").remove()
        $('#BestProduct').trigger('destroy.owl.carousel')
      }, 100);
      if (this.productList.length) {
        setTimeout(() => {
          this.callCarousel();
        }, 200);
      }
    },
  },
};
</script>
