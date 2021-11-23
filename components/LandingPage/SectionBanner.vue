<template>
  <div class="banner-component">
    <div id="BannerSlider" class="cover owl-carousel owl-dots" v-if="!loadBanner">
      <div v-for="bannerImage in dataBanner" :key="bannerImage._id">
        <a :href="bannerImage.url_target">
          <img :src="bannerImage.image_desktop" :alt="bannerImage.title" v-if="$device.isDesktop"/>
          <img :src="bannerImage.image_mobile" :alt="bannerImage.title" v-else/>
        </a>
      </div>
    </div>
    <vue-content-loading :width="300" :height="275" v-else>
      <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />
    </vue-content-loading>
  </div>
</template>

<script>


export default {
  name: 'SectionBanner',
  components: {
  },
  data(){
    return {
      loadBanner: true,
    }
  },
  props: {
    data_banner: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  mounted() {
    this.getBanner();
  },
  computed:{
    dataBanner() {
			return this.$store.getters["banner/getHomeBanner"]
    }
  },
  methods: {
    callCarousel() {
      $('#BannerSlider').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
      });
    },
    async getBanner() {
      await this.$store.dispatch('banner/fetchHomeBanner')
      this.loadBanner = false
      if (this.dataBanner) {
        setTimeout(() => {
            this.callCarousel();
        }, 100);
      }
    },
  },
};
</script>
