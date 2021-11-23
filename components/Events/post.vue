<template>
  <div class="news-container events-container w-100">
    <div class="img-thumb" v-if="short">
      <img 
        :src="dataPost.thumbnail_auto" 
        :alt="dataPost.title" 
        class="img-fluid w-100 h-100 cursor-pointer" 
        @click="$router.push('/events/'+dataPost.url_key)"
      >
    </div>
    <div class="event-video" v-else>
      <div v-html="dataPost.description">
      </div>
    </div>
    <!-- <img 
      :src="dataPost.thumbnail_single_upload" 
      :alt="dataPost.title" 
      class="img-fluid w-100" 
      v-else
    > -->
    <div class="news-content">
      <h1 
        class="events-title" 
        :class="short ? 'text-truncate cursor-pointer': ''"
        @click="short ? $router.push('/events/'+dataPost.url_key) : ''">
        {{dataPost.title}}
      </h1>

      <div class="news-post" v-if="!short">
        <div>{{dataPost.content_heading}}</div>
      </div>
    </div>
    <div class="post-border">
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    short: {
      type: Boolean,
      default: false
    },
    dataPost: {
      default: null,
      required : true
    },
    eventsRoute: {
      default: null,
      required : false
    },
  },
  computed:{
    bcEvents(){
      if(this.eventsRoute == 'video' || !this.eventsRoute){
        return 'video'
      } else if(this.eventsRoute == 'campaign & promotion'){
        return 'campaign'
      }
    }
  }
};
</script>
<style scoped lang="scss">
  @import '~assets/css/post.scss';

  .event-video ::v-deep iframe {
    width: 100%;
  }
</style>
