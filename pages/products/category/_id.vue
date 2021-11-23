<template>
  <main class="w-100">
    <div class="product-detail">
      <div class="breadcrumb m-0">
        <nuxt-link to="/">Home</nuxt-link>&nbsp;/&nbsp;
        <nuxt-link to="/products">Product</nuxt-link>
        &nbsp;/
      </div>
    </div>

    <div class="product-header">
      <h1>All Makeup</h1>
      <span>
        Introducing all products by Soulyou
      </span>
    </div>

    <div class="row product-container" v-if="productList">
      <div
        v-for="product_list in productList.data"
        :key="product_list.id"
        class="product-list"
        @click="goToListCategory(product_list.category)"
      >
        <img :src="product_list.image_origin" :alt="product_list.name" />
        <div class="list-category">
          {{ product_list.brand }}
          <span>{{ product_list.name }} </span>
        </div>
        <Rating
          :grade="product_list.rate"
          :maxStars="5"
          :hasCounter="true"
          style="flex-direction: column; align-items: center;"
        />
      </div>
    </div>
    <div class="row product-container" v-else>
      <div
        v-for="(event,index)  in 3"
        :key="index"
      >
        <vue-content-loading :width="300" :height="275">
          <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />
          <rect x="0" y="225" rx="5" ry="5" width="300" height="25" />
        </vue-content-loading>
      </div>
    </div>
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
  computed: {
    productList(){
      return this.$store.getters["products/getProductList"]
    }
  },
  mounted() {
    this.fetchProductList()
  },
  methods: {
    async fetchProductList() {
      let productVar = {
        pageSize: 12,
        page: 1
      }
      await this.$store.dispatch('products/fetchProductList', productVar)
    }
  },
};
</script>

<style scoped lang="scss">
@import '~assets/css/products.scss';
</style>
