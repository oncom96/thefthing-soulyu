<template>
  <main>
    <div class="news-header">
      <h1>News</h1>
      <span>
        Kalian bisa upadate dan baca semua berita seputar beauty terbaru dan
        terkini
      </span>
    </div>

    <div class="other-news">
      <div class="news-sort">
        <button
          :class="newsActive !== 'latest' ? 'btn-news-unfill' : 'btn-news'"
          @click="newsActive = 'latest'"
        >
          Latest
        </button>
        <button
          :class="newsActive !== 'popular' ? 'btn-news-unfill' : 'btn-news'"
          @click="newsActive = 'popular'"
        >
          Popular
        </button>
      </div>
      <div class="other-post">
        <div class="row" v-if="!isLoading">
          <div
            class="col-sm-12 col-lg-4"
            v-for="news in newsList.data"
            :key="news.id"
          >
            <Post
              :short="true"
              :dataPost="news"
              :newsSort="newsActive"
              :category_name="category_name"
            />
          </div>
        </div>
        <div class="row" v-else>
          <div
            class="col-sm-12 col-lg-4"
            v-for="(news, index) in 6"
            :key="index"
          >
            <vue-content-loading :width="300" :height="275">
              <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />
              <rect x="0" y="225" rx="5" ry="5" width="300" height="25" />
            </vue-content-loading>
          </div>
        </div>
      </div>
      <div class="see-other text-center">
        <paginate
          v-model="page"
          :page-count="totalPage"
          :click-handler="changePage"
          :container-class="'pagination'"
        >
        </paginate>
      </div>
    </div>
  </main>
</template>

<script>
import Post from "~/components/News/post";

export default {
  components: {
    Post,
  },
  data() {
    return {
      pageSize: 9,
      totalPage: 1,
      isLoading: true,
    };
  },
  props: {
    category: {
      type: String,
      default: "",
    },
    category_name: {
      type: String,
      default: "",
      required: false,
    },
  },
  computed: {
    newsList() {
      return this.$store.getters["news/getNewsList"];
    },
    page: {
      get: function() {
        return this.$route.query.page ? parseInt(this.$route.query.page) : 1;
      },
      set: function() {},
    },
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
  watch: {
    $route() {
      this.isLoading = true;
      this.fetchNewsList();
    },
  },
  mounted() {
    this.fetchNewsList();
  },
  methods: {
    async fetchNewsList() {
      let newsVar = {
        sort: this.newsActive,
        pageSize: this.pageSize,
        page: this.page,
      };
      await this.$store.dispatch("news/fetchNewsList", newsVar);
      if (this.newsList) {
        this.totalPage = this.newsList.last_page;
      }
      this.isLoading = false;
    },
    async changePage(page) {
      this.scrollToTop();
      this.page = page;
      let queryParams = {
        page: page,
      };
      this.$router.push({
        path: this.$route.fullPath,
        query: queryParams,
      });
    },
    async changeSort(val) {
      this.scrollToTop();
      this.page = 1;
      let queryParams = {
        page: 1,
        sort: val,
      };
      this.$router.push({
        path: this.$route.fullPath,
        query: queryParams,
      });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/news.scss";
</style>
