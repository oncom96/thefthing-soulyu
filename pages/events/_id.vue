<template>
  <div class="w-100">
    <div class="post-detail">
      <div class="breadcrumb">
        <nuxt-link to="/">Home</nuxt-link>&nbsp;/&nbsp;<nuxt-link to="/events"
          >Events</nuxt-link
        >&nbsp;/&nbsp;{{ $store.state.events.eventType }} / {{ eventDetail.title }}
      </div>

      <div>
        <Post :dataPost="eventDetail" />
      </div>
    </div>

    <div class="row">
      <div class="other-news col-12">
        <div class="news-sort">
          <button
            class="btn-news"
            :class="!eventDetail.next ? 'btn-inactive' : ''"
            @click="nextPost()"
          >
            Newer Video
          </button>
          <button
            class="btn-news"
            :class="!eventDetail.previous ? 'btn-inactive' : ''"
            @click="prevPost()"
          >
            Older Video
          </button>
        </div>
        <!--
        <div class="other-post">
          <div v-if="eventsList">
              <Post :short="true" :dataPost="event" v-for="event in eventsList.data" :key="event.id"/>
          </div>
          <div v-else>
            <div v-for="(event,index) in 3" :key="index">
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
        -->
      </div>
    </div>
  </div>
</template>

<script>
import Post from "~/components/Events/post";

export default {
  components: {
    Post,
  },
  head() {
    return {
      title: this.eventDetail.title,
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: this.eventDetail.title,
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: this.eventDetail.meta_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.eventDetail.meta_keywords,
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.eventDetail.title,
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
          content: this.eventDetail.meta_description,
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
      eventDetail: null,
    };
  },
  computed: {
    eventsList() {
      return this.$store.getters["events/getEventsList"];
    },
  },
  mounted() {
    // this.fetchEventsList()
  },
  methods: {
    async fetchEventsList() {
      let eventVar = {
        pageSize: 5,
        page: 1,
      };
      await this.$store.dispatch("events/fetchEventsList", eventVar);
    },
    seeAll() {
      this.$router.push("/events?type=" + this.$store.state.events.eventType);
    },
    nextPost() {
      if (this.eventDetail.next) {
        this.$router.push("/events/" + this.eventDetail.next.url_key);
      }
    },
    prevPost() {
      if (this.eventDetail.previous) {
        this.$router.push("/events/" + this.eventDetail.previous.url_key);
      }
    },
  },
  async asyncData({ store, params }) {
    let fetchEvents = await store.dispatch(
      "events/fetchEventDetail",
      params.id
    );
    return {
      eventDetail: fetchEvents,
    };
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/news.scss";
</style>
