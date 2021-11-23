<template>
  <main>
    <div
      class="product-list cursor-pointer"
      :class="shopNow ? 'mb-4' : ''"
      @click="goToProduct(product_list.url_key)"
    >
      <div class="img-product">
        <img :src="product_list.image_origin" :alt="product_list.name" />
      </div>
      <div class="list-category">
        <span class="text-uppercase product-brand">
          {{ product_list.brand }}
        </span>
        <span class="product-name">{{ product_list.name }} </span>
      </div>
      <Rating
        :grade="product_list.rating_avg_score_rating"
        :maxStars="5"
        :hasCounter="true"
        style="flex-direction: column; align-items: center;"
      />
    </div>
    <a :href="product_list.url_target" v-if="shopNow" class="d-block">
      <button class="btn btn-secondary text-xxxs px-4 py-2">SHOP NOW</button>
    </a>
  </main>
</template>

<script>
import Rating from '~/elements/Rating/Rating';

export default {
  components: { Rating },
  data() {
    return {
    };
  },
  props: {
    product_list: {
      type: Object,
      default: () => null,
      required: true,
    },
    shopNow: {
      type: Boolean,
      default: false,
      required: false,
    },
    category_name: {
      type: String,
      default: "",
      required: false,
    },
  },
  methods: {
    goToProduct(url){
      this.$router.push('/products/detail/'+url);
      this.$store.commit('products/setCategoryName', this.category_name);
    },
  }
};
</script>

<style scoped lang="scss">
@import '~assets/css/products-card.scss';
</style>
