<template>
  <div class="news-container">
    <div class="img-thumb cursor-pointer">
      <img
        :src="dataPost.image_origin"
        :alt="dataPost.title"
        :class="
          searchType !== 'products'
            ? 'img-fluid w-100 h-100'
            : 'img-fluid img-thumb-product h-100'
        "
        @click="$router.push('/' + dataUrl + '/' + dataPost.url_key)"
      />
    </div>
    <div class="news-category bg-primary text-willow text-uppercase">
      <nuxt-link :to='searchType' class="text-willow">
        <span>
          {{ searchType }}
        </span>
      </nuxt-link>
    </div>
    <div class="news-content w-100">
      <h1
        class="news-title text-truncate cursor-pointer"
        @click="$router.push('/' + dataUrl + '/' + dataPost.url_key)"
      >
        {{ dataPost.title }}
      </h1>
    </div>

    <div class="post-border"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    searchType: {
      type: String,
      default: "",
      required: true,
    },
    dataPost: {
      default: null,
      required: true,
    },
  },
  computed: {
    dataUrl() {
      if (this.searchType !== "events") {
        return this.searchType + "/detail";
      } else {
        return this.searchType;
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/post.scss";
</style>
