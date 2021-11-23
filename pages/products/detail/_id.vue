<template>
  <main class="w-100">
    <div class="breadcrumb m-0 text-capitalize">
      <nuxt-link to="/">Home</nuxt-link>&nbsp;/&nbsp;
      <nuxt-link to="/products">Product</nuxt-link>
      &nbsp;/&nbsp;
      <nuxt-link :to="'/products'">
        Makeup
      </nuxt-link>
      &nbsp;/&nbsp;
      <nuxt-link
        v-if="$store.state.products.categoryName === 'All Make Up'"
        to="/products/make-up"
      >
        All Make Up
      </nuxt-link>
      <nuxt-link
        v-else-if="
          $store.state.products.categoryName !==
            productDetail.categories[productDetail.categories.length - 1].name
        "
        :to="`/products/${$store.state.products.categoryName.toLowerCase()}`"
      >
        {{ $store.state.products.categoryName }}
      </nuxt-link>
      <nuxt-link
        v-else
        :to="
          `/products/${
            productDetail.categories[productDetail.categories.length - 1].name
          }`
        "
      >
        {{ productDetail.categories[productDetail.categories.length - 1].name }}
      </nuxt-link>
      &nbsp;/ {{ productDetail.name }}
      <!-- {{ this.$route.params.id }} -->
    </div>
    <div class="col-12 product-detail">
      <div class="product-header">
        <h1>{{ productDetail.name }}</h1>
        <span>
          Introducing all products by Soulyou
        </span>
      </div>

      <!-- <img
        src="~/assets/images/product-detail.png"
        alt="product detail content"
        class="product-detail-img"
      /> -->
      <div class="product-detail-btn">
        <div v-html="productDetail.description"></div>
        <button class="btn btn-add-rating" @click="addRating">
          ADD RATING
        </button>
        <a :href="productDetail.url_targer">
          <button class="btn btn-secondary" @click="shopNow">SHOP NOW</button>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import products from "~/json/products.json";
export default {
  layout: "default",
  data() {
    return {
      allproduct: products.allproduct,
      productDetail: null,
    };
  },
  head() {
    return {
      title: this.productDetail.meta_title,
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: this.productDetail.meta_title,
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: this.productDetail.meta_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.productDetail.meta_keywords,
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.productDetail.name,
        },
        {
          hid: "og:url",
          name: "og:url",
          property: "og:url",
          content: this.$route.fullPath,
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: this.productDetail.meta_description,
        },
        {
          hid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "Product Detail",
        },
      ],
      link: [{ rel: "canonical", href: window.location.href }],
    };
  },
  mounted() {},
  methods: {
    addRating() {
      this.$router.push("/products/rating/" + this.$route.params.id);
    },
    shopNow() {},
  },
  async asyncData({ store, params }) {
    let fetchProd = await store.dispatch(
      "products/fetchProductDetail",
      params.id
    );
    return {
      productDetail: fetchProd,
    };
  },
};
</script>

<style scoped lang="scss">
@import "~assets/css/products.scss";
</style>
