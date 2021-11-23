<template>
  <main class="w-100">
    <div class="post-detail">
      <div class="breadcrumb m-0">
        Home / Search
      </div>
    </div>

    <div class="news-header">
      <h1>Search</h1>
      <div class="search-field">
        <input 
          type="text" 
          name="Search" 
          id="search" 
          class="w-100 searchBar" 
          placeholder="Search Here"
          v-model="searchData"
          @keyup.enter="search()">

          <img 
            src="~/assets/images/icon-search-black.png" 
            alt="Search" width="17px" 
            class="cursor-pointer"
            @click="search()"/>
      </div>
    </div>

    <div class="other-post search-block">
      <main v-if="!isLoading">
        <div v-if="searchList">
          <div class="mt-4 mb-4 text-center w-100" v-if="searchList.product.length">
            <h2>
              Products
            </h2>
          </div>
          <div class="row">
            <div class="col-sm-12 col-lg-4 mt-2" v-for="dataPost in searchList.product" :key="dataPost.id">
              <Post :searchType="'products'" :dataPost="dataPost"/>
            </div>
          </div>

          <div class="mt-4 mb-4 text-center w-100" v-if="searchList.news.length">
            <h2>
              News
            </h2>
          </div>
          <div class="row">
            <div class="col-sm-12 col-lg-4" v-for="dataPost in searchList.news" :key="dataPost.id">
              <Post :searchType="'news'" :dataPost="dataPost"/>
            </div>
          </div>

          <div class="mt-4 mb-4 text-center w-100" v-if="searchList.event.length">
            <h2>
              Events
            </h2>
          </div>
          <div class="row">
            <div class="col-sm-12 col-lg-4" v-for="dataPost in searchList.event" :key="dataPost.id">
              <Post :searchType="'events'" :dataPost="dataPost"/>
            </div>
          </div>
        </div>

      </main>
      <div class="row mt-4" v-else>
        <div class="col-sm-12 col-lg-4" v-for="(news,index) in 6" :key="index">
          <vue-content-loading :width="300" :height="275">
            <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />
            <rect x="0" y="225" rx="5" ry="5" width="300" height="25" />
          </vue-content-loading>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Post from '~/components/Search/post';


export default {
  components: {
    Post
  },
  head() {
    return {
      title: "Search",
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: "Search",
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
          content: "Search",
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "Search",
        },
        {
          hid: "og:url",
          name: "og:url",
          property: "og:url",
          content: "http://soulyubeauty.com/search",
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
  data(){
    return{
      searchData : '',
      isLoading: false,
    }
  },
  computed:{
    searchList(){
			return this.$store.getters["search/getSearchList"]
    },
  },
  mounted(){
    this.$store.commit('search/setSearchList',null)
  },
  methods:{
    async search(){
      this.isLoading = true
      await this.$store.dispatch('search/fetchSearchList',this.searchData)
      this.isLoading = false
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~assets/css/news.scss';
  @import '~assets/css/post.scss';

  .search-field {
    position: relative;

    img{
      position: absolute;
      right:0px
    }
  }

  .searchBar {
    border: none;
    background: none;
    border-bottom: 1px solid #b9afe4;

    &:focus {
      outline:none;
    }
  }

  .search-block {
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

</style>