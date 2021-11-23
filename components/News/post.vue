<template>
  <div class="news-container">
    <div class="img-thumb" v-if="short">
      <img
        :src="dataPost.thumbnail_auto"
        :alt="dataPost.title"
        class="img-fluid w-100 h-100 cursor-pointer"
        @click="goToProduct"
      />
    </div>
    <div class="img-detail" v-else>
      <img
        :src="dataPost.thumbnail_single_upload"
        :alt="dataPost.title"
        class="img-fluid w-100 h-100"
      />
    </div>
    <div class="news-category bg-primary text-willow text-uppercase">
      <nuxt-link
        class="text-willow"
        :to="
          '/news/' +
            dataPost.category_id[0].name +
            '-' +
            dataPost.category_id[0].id
        "
        v-if="dataPost.category_id.length && dataPost.category_id[0]"
      >
        <span>
          {{ dataPost.category_id[0].name }}
        </span>
      </nuxt-link>
      <span v-else>
        -
      </span>
    </div>
    <div class="news-content w-100">
      <h1
        class="news-title"
        :class="short ? 'text-truncate cursor-pointer' : ''"
        @click="short ? goToProduct() : ''"
      >
        {{ dataPost.title }}
      </h1>
      <span class="news-author d-block text-capitalize">
        {{ dataPost.author }}
      </span>
      <span class="news-date text-nobel d-block">
        {{ dataPost.created_at | formatDate }}
      </span>
      <div class="news-post ellipsis-text" v-if="short">
        <div>{{ dataPost.content_heading }}</div>
      </div>
      <div class="news-post" v-else>
        <div v-html="dataPost.description"></div>
      </div>
    </div>

    <div class="post-border"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    short: {
      type: Boolean,
      default: false,
    },
    dataPost: {
      default: null,
      required: true,
    },
    newsSort: {
      type: String,
      default: "",
      required: false,
    },
    category_name: {
      type: String,
      default: "",
      required: false,
    },
  },
  methods: {
    goToProduct() {
      if (this.newsSort) {
        this.$store.commit("news/setNewsSort", this.newsSort);
      }
      if (this.category_name) {
        this.$store.commit("news/setNewsCategoryName", this.category_name);
      }
      let category = this.$store.state.news.newsCategoryName;
      let categoryId = this.$store.state.news.newsCategory;
      let routeDetail;

      if (category) {
        routeDetail = category + "-" + categoryId;
      } else {
        routeDetail = "detail";
      }
      this.$router.push("/news/" + routeDetail + "/" + this.dataPost.url_key);
    },
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/post.scss";
</style>
