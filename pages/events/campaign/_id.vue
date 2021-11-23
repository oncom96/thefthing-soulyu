<template>
  <div class="w-100">
    <div class="post-detail">
      <div class="breadcrumb">
        <nuxt-link to="/">Home</nuxt-link>&nbsp;/&nbsp;<nuxt-link to="/events"
          >Events</nuxt-link
        >&nbsp;/ Campaign & Promotion / {{ eventDetail.title }}
      </div>

      <div>
        <Post :dataPost="eventDetail" />
      </div>
    </div>

    <div class="row">
      <div class="other-news col-12">
        <div class="news-sort">
          <button class="btn-news">
            Newer Video
          </button>
          <button class="btn-news">
            Older Older
          </button>
        </div>
        <div class="other-post">
          <div v-if="eventsList">
            <Post
              :short="true"
              :dataPost="event"
              v-for="event in eventsList.data"
              :key="event.id"
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
          <button class="btn-news">
            See All
          </button>
        </div>
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
    this.fetchEventsList();
  },
  methods: {
    async fetchEventsList() {
      let eventVar = {
        pageSize: 5,
        page: 1,
      };
      await this.$store.dispatch("events/fetchEventsList", eventVar);
    },
  },
  async asyncData({ store, params }) {
    let eventId = params.id.split("-").pop();
    let fetchEvents = await store.dispatch("events/fetchEventDetail", eventId);
    return {
      eventDetail: fetchEvents,
    };
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/news.scss";
</style>
