<template>
  <main class="w-100">
    <div class="product-detail">
      <div class="breadcrumb m-0">
        <nuxt-link to="/">Home</nuxt-link>&nbsp;/ Product / Makeup
      </div>
    </div>

    <div class="product-header">
      <h1>Makeup</h1>
      <span>
        Introducing all products by Soulyou
      </span>
    </div>

    <div class="row product-container">
      <div class="col-lg-2 best-product-container" v-if="!loadProduct">
        <BestProduct
          :data_bestproduct="all_best_product"
          :product="productList.data"
        />
      </div>
      <div class="col-lg-2 best-product-container" v-else>
        <vue-content-loading :width="300" :height="500">
          <rect x="0" y="0" rx="5" ry="5" width="300" height="400" />
          <rect x="0" y="425" rx="5" ry="5" width="300" height="25" />
          <rect x="0" y="475" rx="5" ry="5" width="300" height="25" />
        </vue-content-loading>
      </div>

      <div class="col-lg-10 product-category-list">
        <div v-if="categoryList">
          <div
            v-for="category_product in categoryList.child_categories"
            :key="category_product.id"
            class="product-category"
            @click="goToListCategory(category_product.url_key)"
          >
            <img
              :src="category_product.image_origin"
              :alt="category_product.name"
            />
            <span class="title-category">
              {{ category_product.name }}
            </span>
          </div>
        </div>
        <div v-else>
          <div
            v-for="(category_product, index) in 4"
            :key="index"
            class="product-category"
          >
            <div class="d-md-none">
              <vue-content-loading :width="100" :height="14">
                <circle cx="7" cy="7" r="7" />
                <rect x="20" y="5" rx="0" ry="0" width="60" height="4" />
              </vue-content-loading>
            </div>
            <div class="d-none d-md-block">
              <vue-content-loading :width="100" :height="50">
                <rect x="1" y="1" rx="0" ry="0" width="100" height="50" />
              </vue-content-loading>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import json_products from "~/json/products.json";
import json_bestproduct_landing from "~/json/landingpage.json";
import BestProduct from "~/elements/BestProduct/BestProduct";

export default {
  head: { 
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
      },
    ],
    script: [
      {
        type: "text/javascript",
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
        async: true,
        body: true,
      },
    ],
  },
  components: { BestProduct },
  head() {
    return {
      title: "Product",
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: "Product",
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: "Soulyu | So Pretty, So You",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Product",
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "Product",
        },
        {
          hid: "og:url",
          name: "og:url",
          property: "og:url",
          content: "http://soulyubeauty.com/products",
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: "Soulyu | So Pretty, So You",
        },
        {
          hid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "Website",
        },
      ],
      link: [{ rel: "canonical", href: "" }],
    };
  },
  data() {
    return {
      all_product: json_products.allproduct,
      all_category: [],
      all_best_product: json_bestproduct_landing.bestproduct,
      loadProduct: true,
    };
  },
  computed: {
    productList() {
      return this.$store.getters["products/getProductList"];
    },
    categoryList() {
      return this.$store.getters["categories/getCategoryList"];
    },
  },
  mounted() {
    this.getProduct();
    this.getCategory();
  },
  methods: {
    async getProduct() {
      if (this.$device.isDesktop) {
        this.all_category = this.all_product;
        let productVar = {
          catId: 10,
          pageSize: 12,
          page: 1,
        };
        await this.$store.dispatch("products/fetchProductList", productVar);
        this.loadProduct = false;
      }
    },
    async getCategory() {
      await this.$store.dispatch("categories/fetchCategoryList", 4);
    },
    goToListCategory(categoryName) {
      this.$router.push("/products/" + categoryName);
    },
  },
};
</script>

<style scoped lang="scss">
@import "~assets/css/products.scss";
</style>
