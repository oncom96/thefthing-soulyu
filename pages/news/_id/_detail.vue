<template>
  <div class="w-100">
    <div class="post-detail">
      <div class="breadcrumb">
        <nuxt-link :to="'/'"> Home </nuxt-link>&nbsp;/&nbsp;
        <nuxt-link :to="'/news'">
          News
        </nuxt-link>
        &nbsp;/&nbsp;
        <span v-if="$store.state.news.newsCategoryName">
          <nuxt-link :to="'/news/' + categoryName + '-' + categoryId">
            {{ $store.state.news.newsCategoryName }}
          </nuxt-link>
          /&nbsp;
        </span>
        <nuxt-link :to="newsSortUrl">
          {{ $store.state.news.newsSort }} News
        </nuxt-link>
        <!-- <nuxt-link
          :to="'/news/' + categoryName + '-' + categoryId"
          v-if="categoryName"
        >
          &nbsp;/ {{ categoryName[0] }}
        </nuxt-link> -->
        &nbsp;/ {{ newsDetail.title }}
      </div>
      <div class="d-md-none">
        <Post :dataPost="newsDetail" />
      </div>
    </div>

    <div class="row">
      <div class="d-none d-md-block col-md-8">
        <Post :dataPost="newsDetail" />
        <div class="news-sort">
          <button
            class="btn-news"
            :class="!newsDetail.next ? 'btn-inactive' : ''"
            @click="nextPost()"
          >
            Newer Post
          </button>
          <button
            class="btn-news"
            :class="!newsDetail.previous ? 'btn-inactive' : ''"
            @click="prevPost()"
          >
            Older Post
          </button>
        </div>
      </div>

      <div class="other-news col-md-4">
        <div class="news-sort d-md-none">
          <button
            class="btn-news"
            :class="!newsDetail.next ? 'btn-inactive' : ''"
            @click="nextPost()"
          >
            Newer Post
          </button>
          <button
            class="btn-news"
            :class="!newsDetail.previous ? 'btn-inactive' : ''"
            @click="prevPost()"
          >
            Older Post
          </button>
        </div>
        <div class="other-post">
          <div class="other-title">
            <span>
              {{ otherList }}
            </span>
          </div>
          <div v-if="newsList">
            <Post
              :short="true"
              :dataPost="news"
              v-for="news in newsList.data"
              :key="news.id"
              :newsSort="otherList"
            />
          </div>
          <div v-else>
            <div v-for="(event, index) in 3" :key="index">
              <vue-content-loading :width="300" :height="275">
                <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />
                <rect x="0" y="225" rx="5" ry="5" width="300" height="25" />
              </vue-content-loading>
            </div>
          </div>
        </div>
        <div class="see-other text-center">
          <button class="btn-news" @click="seeAll()">
            See All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "~/components/News/post";

export default {
  components: {
    Post,
  },
  data() {
    return {
      newsDetail: null,
    };
  },
  head() {
    return {
      title: this.newsDetail.meta_title,
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: this.newsDetail.meta_title,
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: this.newsDetail.meta_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.newsDetail.meta_keywords,
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.newsDetail.title,
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
          content: this.newsDetail.meta_description,
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
  computed: {
    newsList() {
      return this.$store.getters["news/getNewsList"];
    },
    otherList() {
      if (this.$store.state.news.newsSort == "latest") {
        return "popular";
      } else if (this.$store.state.news.newsSort == "popular") {
        return "latest";
      } else {
        return "popular";
      }
    },
    categoryId() {
      return this.$store.state.news.newsCategory;
    },
    categoryName() {
      return this.$store.state.news.newsCategoryName;
    },
    newsSortUrl() {
      let breadcrumb_url = "";
      let cat_name_url = `/news/${this.categoryName}-${this.categoryId}`;

      if (this.$store.state.news.newsCategoryName) {
        if (this.$store.state.news.newsSort === "popular") {
          breadcrumb_url = `${cat_name_url}?page=1&sort=popular`;
        } else if (this.$store.state.news.newsSort === "latest") {
          breadcrumb_url = `${cat_name_url}?page=1&sort=latest`;
        }
      } else {
        if (this.$store.state.news.newsSort === "popular") {
          breadcrumb_url = "/news?page=1&sort=popular";
        } else if (this.$store.state.news.newsSort === "latest") {
          breadcrumb_url = "/news?page=1&sort=latest";
        }
      }

      return breadcrumb_url;
    },
  },
  mounted() {
    this.fetchNewsList();
    console.log("route id", this.$route);
  },
  methods: {
    async fetchNewsList() {
      let newsVar = {
        sort: this.otherList,
        pageSize: 3,
        page: 1,
      };
      await this.$store.dispatch("news/fetchNewsList", newsVar);
    },
    seeAll() {
      this.$router.push("/news?sort=" + this.otherList);
    },
    nextPost() {
      if (this.newsDetail.next) {
        let category = this.$store.state.news.newsCategoryName;
        let categoryId = this.$store.state.news.newsCategory;
        let routeDetail;

        if (category) {
          routeDetail = category + "-" + categoryId;
        } else {
          routeDetail = "detail";
        }
        this.$router.push(
          "/news/" + routeDetail + "/" + this.newsDetail.next.url_key
        );
      }
    },
    prevPost() {
      if (this.newsDetail.previous) {
        let category = this.$store.state.news.newsCategoryName;
        let categoryId = this.$store.state.news.newsCategory;
        let routeDetail;

        if (category) {
          routeDetail = category + "-" + categoryId;
        } else {
          routeDetail = "detail";
        }
        this.$router.push(
          "/news/" + routeDetail + "/" + this.newsDetail.previous.url_key
        );
      }
    },
  },
  async asyncData({ store, params }) {
    let newsId = params.detail;
    let fetchNews = await store.dispatch("news/fetchNewsDetail", newsId);
    return {
      newsDetail: fetchNews,
    };
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/news.scss";
</style>
