<template>
  <main class="w-100">
    <div class="product-detail">
      <div class="breadcrumb m-0">
        <nuxt-link to="/">Home</nuxt-link>&nbsp;/&nbsp;
        <nuxt-link to="/products">Product</nuxt-link>
        &nbsp;/&nbsp;
        <nuxt-link to="/products">Makeup</nuxt-link>
        &nbsp;/
        {{ categoryDetail.name }}
      </div>
    </div>

    <div class="product-header">
      <h1>{{ categoryDetail.name }}</h1>
      <span>
        Introducing all products by Soulyou
      </span>
    </div>

    <div class="row product-container" v-if="!loadProduct">
      <div
        v-for="product_list in productList.data"
        :key="product_list.id"
        class="product-list"
      >
        <card
          :product_list="product_list"
          :category_name="categoryDetail.name"
        />
      </div>
      <div class="d-block text-center w-100">
        <paginate
          v-model="page"
          :page-count="totalPage"
          :click-handler="changePage"
          :container-class="'pagination'"
        >
        </paginate>
      </div>
    </div>
    <div class="row product-container" v-else>
      <div v-for="(event, index) in 10" class="product-list" :key="index">
        <productLoading />
      </div>
    </div>
  </main>
</template>

<script>
import Rating from "~/elements/Rating/Rating";
import card from "~/components/Product/card";
import productLoading from "~/components/Product/loading";

export default {
  components: { Rating, card, productLoading },
  head() {
    return {
      title: this.categoryDetail.name,
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: this.categoryDetail.name,
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: this.categoryDetail.meta_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.categoryDetail.meta_keywords,
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.categoryDetail.name,
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
          content: this.categoryDetail.meta_description,
        },
        {
          hid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "News Detail",
        },
      ],
      link: [{ rel: "canonical", href: "" }],
    };
  },
  data() {
    return {
      categoryDetail: null,
      pageSize: 15,
      totalPage: 1,
      loadProduct: true,
    };
  },

  computed: {
    productList() {
      return this.$store.getters["products/getProductList"];
    },
    page: {
      get: function() {
        return this.$route.query.page ? parseInt(this.$route.query.page) : 1;
      },
      set: function(newValue) {},
    },
  },
  watch: {
    $route() {
      this.fetchProductList();
    },
  },
  mounted() {
    this.fetchProductList();
  },
  methods: {
    async fetchProductList() {
      let productVar = {
        catId: this.categoryDetail.id,
        pageSize: this.pageSize,
        page: this.page,
      };
      await this.$store.dispatch("products/fetchProductList", productVar);
      this.loadProduct = false;
      if (this.productList) {
        this.totalPage = this.productList.last_page;
      }
    },
    async changePage(page) {
      this.loadProduct = true;
      this.page = page;
      let queryParams = {
        page: page,
      };
      this.$router.push({
        path: this.$route.fullPath,
        query: queryParams,
      });
    },
  },
  async asyncData({ store, params }) {
    let catId = params.id;
    let fetchCat = await store.dispatch(
      "categories/fetchCategoryDetail",
      catId
    );
    if (fetchCat.name === "Make Up") {
      fetchCat.name = "All Make Up";
    }
    return {
      categoryDetail: fetchCat,
    };
  },
};
</script>

<style scoped lang="scss">
@import "~assets/css/products.scss";
</style>
