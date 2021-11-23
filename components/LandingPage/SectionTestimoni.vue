<template>
  <div class="testimoni-component">
    <h1>Testimony</h1>
    <p class="subtitle py-3 px-5 m-0">
      Write a product reviews as much as you can & Get a
      <strong>FREE PRODUCTS</strong>
    </p>
    <div id="Testimoni" class="cover owl-carousel owl-theme owl-dots">
      <div
        v-for="testimonyList in productList"
        :key="testimonyList.id"
        class="testimoni-field mx-4"
      >
        <div class="testimoni-product-field mt-3 pb-3">
          <img class="mr-3 cursor-pointer" :src="testimonyList.image_origin" :alt="testimonyList.name" @click="$router.push('/products/detail/'+testimonyList.url_key)"/>
          <div class="testimoni-product">{{ testimonyList.brand }}</div>
          <div class="testimoni-variant cursor-pointer" @click="$router.push('/products/detail/'+testimonyList.url_key)">{{ testimonyList.name }}</div>
          <Rating :grade="testimonyList.rating_avg_score_rating" :maxStars="5" :hasCounter="true" />
        </div>
        <div class="my-3" v-if="testimonyList.rating.length">
          <div class="testimoni-title">" {{testimonyList.rating[0].title}}</div>
          <p class="text-justify testimoni-content ellipsis-text">
            {{testimonyList.rating[0].testimony}}
          </p>
          <span class="testimoni-name">
            {{testimonyList.rating[0].customer_name}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '~/elements/Rating/Rating';

export default {
  name: 'SectionTestimoni',
  components: { Rating },
  props: {
    data_testimoni: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      testimonial: this.data_testimoni,
      list_testimonial: [],
      productList: []
    };
  },
  mounted() {
    this.getTestimoni();
  },
  methods: {
    callCarousel() {
      $('#Testimoni').owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        nav: false,
        responsive: {
          768: {
            items: 3,
            loop: false,
            dots: false,
            nav: false,
          },
        },
      });
    },
    async getTestimoni() {
      let productVar = {
        catId : 11,
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
  },
};
</script>
