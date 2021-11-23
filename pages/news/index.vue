<template>
  <main class="w-100">
    <div class="post-detail">
      <div class="breadcrumb m-0">
        <nuxt-link :to="'/'">
          Home </nuxt-link
        >&nbsp;/&nbsp;
        <nuxt-link :to="'/news'">
          News
        </nuxt-link>
        <span class="news-active"> &nbsp;/ {{ newsActive }} News </span>
      </div>
    </div>

    <List />
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
  head() {
    return {
      title: "News",
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: "News",
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
          content: "News",
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "News",
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
    return {};
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
  async asyncData({ store }) {
    store.commit("news/setNewsCategory", "");
    store.commit("news/setNewsCategoryName", "");
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/news.scss";
</style>
