<template>
  <div class="best-product">
        <div class="title-best-product">
          Best Product
        </div>
    <div id="BestProduct" class="owl-carousel owl-dots">
      <card 
        v-for="product_list in product"
        :key="product_list.id"
        :shopNow="true"
        :product_list="product_list"/>
    </div>
  </div>
</template>

<script>
import Rating from '~/elements/Rating/Rating';
import card from '~/components/Product/card';


export default {
  name: 'BestProduct',
  components: { Rating ,card},
  props: {
    data_bestproduct: {
      type: Array,
      default: () => [],
      required: true,
    },
    product: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      current_tab: 1,
      best_product: this.data_bestproduct,
      list_product: [],
    };
  },
  mounted() {
    this.getBestProductDetail();
  },
  methods: {
    callCarousel() {
      $('#BestProduct').owlCarousel({
        items: 1,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
      });
    },
    getBestProductDetail() {
      this.list_product = this.data_bestproduct[this.current_tab].items;
      if (this.list_product != '') {
        setTimeout(() => {
          this.callCarousel();
        }, 100);
      }
    },
    shopNow() {
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'bestProduct.scss';

#BestProduct ::v-deep{
  .nav-btn{
    height: 40px;
    position: absolute;
    width: 40px;
    cursor: pointer;
    top: 150px !important;
  }
  
  .owl-prev.disabled,
  .owl-next.disabled{
    pointer-events: none;
    opacity: 0.2;
  }
  
  .prev-slide{
    background: url(../../assets/images/icon-prev.png) no-repeat scroll 0px 0px;
    background-size: contain;
    left: -10px;
  }
  .next-slide{
    background: url(../../assets/images/icon-next.png) no-repeat scroll 0px 0px;
    background-size: contain;
    right: -10px;
  }
}
</style>
