<template>
  <main class="w-100">
    <div class="post-detail">
      <div class="breadcrumb m-0">
        <nuxt-link to="/">Home</nuxt-link>&nbsp;/&nbsp;
        <nuxt-link to="/news"> News </nuxt-link>&nbsp;/&nbsp;
        <nuxt-link
          v-if="category"
          :to="'/news/' + category + '-' + category_id"
          >{{ category }}</nuxt-link
        >
        &nbsp;/ {{ newsActive }} News
      </div>
    </div>

    <List :category_name="category" />
  </main>
</template>

<script>
import Post from "~/components/News/post";
import List from "~/components/News/list";

export default {
  components: {
    Post,
    List,
  },
  data() {
    return {
      category: "",
      category_id: "",
    };
  },
  computed: {
    newsActive: {
      get: function() {
        if (this.$route.query.sort == "latest") {
          this.$store.commit("news/setNewsSort", "latest");
          return "latest";
        } else if (this.$route.query.sort == "popular") {
          this.$store.commit("news/setNewsSort", "popular");
          return "popular";
        } else {
          this.$store.commit("news/setNewsSort", "latest");
          return "latest";
        }
      },
      set: function(val) {
        this.$store.commit("news/setNewsSort", val);
        this.changeSort(val);
      },
    },
  },
  watch: {},
  mounted() {},
  methods: {},
  async asyncData({ store, params }) {
    let categoryId = params.category.split("-").pop();
    let category = params.category.split("-");
    category.pop();

    store.commit("news/setNewsCategory", categoryId);
    store.commit("news/setNewsCategoryName", category);

    return {
      category: category[0],
      category_id: categoryId,
    };
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/news.scss";
</style>
