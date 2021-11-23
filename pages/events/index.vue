<template>
  <main class="w-100">
    <div class="post-detail">
      <div class="breadcrumb m-0">
        <nuxt-link to="/">Home</nuxt-link>&nbsp;/ Events /
        <span class="text-capitalize">&nbsp;{{ eventsActive }}</span>
      </div>
    </div>

    <div class="news-header">
      <h1>Events</h1>
      <span>
        Kalian bisa upadate dan melihat semua video seputar beauty terbaru dan
        terkini
      </span>
    </div>

    <div class="other-news">
      <div class="news-sort">
        <button
          :class="eventsActive !== 'video' ? 'btn-news-unfill' : 'btn-news'"
          @click="eventsActive = 'video'"
        >
          Video
        </button>
        <button
          :class="
            eventsActive !== 'campaign & promotion'
              ? 'btn-news-unfill'
              : 'btn-news'
          "
          @click="eventsActive = 'campaign & promotion'"
        >
          Campaign & Promotion
        </button>
      </div>
      <div class="other-post">
        <div class="row" v-if="!isLoading">
          <div
            class="col-sm-12 col-lg-4"
            v-for="event in eventsList.data"
            :key="event.id"
          >
            <Post :short="true" :dataPost="event" :eventsRoute="eventsActive" />
          </div>
        </div>
        <div class="row" v-else>
          <div
            class="col-sm-12 col-lg-4"
            v-for="(event, index) in 3"
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
        <client-only>
          <paginate
            v-model="page"
            :page-count="totalPage"
            :click-handler="changePage"
            :container-class="'pagination'"
          >
          </paginate>
        </client-only>
      </div>
    </div>
  </main>
</template>

<script>
import Post from "~/components/Events/post";

export default {
  components: {
    Post,
  },
  head() {
    return {
      title: "Events",
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: "Events",
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
          content: "Events",
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "Events",
        },
        {
          hid: "og:url",
          name: "og:url",
          property: "og:url",
          content: "http://soulyubeauty.com/events",
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
      pageSize: 9,
      totalPage: 1,
      isLoading: true,
    };
  },
  computed: {
    eventsList() {
      return this.$store.getters["events/getEventsList"];
    },
    page: {
      get: function() {
        return this.$route.query.page ? parseInt(this.$route.query.page) : 1;
      },
      set: function() {},
    },
    eventsActive: {
      get: function() {
        console.log("this.$route.query.type", this.$route.query.type);
        if (this.$route.query.type == "video") {
          this.$store.commit("events/setEventType", "video");
          return "video";
        } else if (this.$route.query.type == "campaign & promotion") {
          this.$store.commit("events/setEventType", "campaign & promotion");
          return "campaign & promotion";
        } else {
          this.$store.commit("events/setEventType", "video");
          return "video";
        }
      },
      set: function(val) {
        this.$store.commit("events/setEventType", val);
        this.changeType(val);
      },
    },
  },
  watch: {
    $route() {
      this.isLoading = true;
      this.fetchEventsList();
    },
  },
  mounted() {
    this.fetchEventsList();
  },
  methods: {
    async fetchEventsList() {
      let eventVar = {
        type: this.eventsActive,
        pageSize: this.pageSize,
        page: this.page,
      };
      await this.$store.dispatch("events/fetchEventsList", eventVar);
      this.totalPage = this.eventsList.last_page;
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
    async changeType(val) {
      this.scrollToTop();
      this.page = 1;
      let queryParams = {
        page: 1,
        type: val,
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
