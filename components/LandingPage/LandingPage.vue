<template>
  <div>
    <SectionBanner :data_banner="bannerImage" />
    <!-- <SectionFeaturedProduct :data_featured="featuredProduct" /> -->
    <SectionBestProduct :data_best_product="bestProduct" />
    <SectionTestimoni :data_testimoni="testimonyList" />
    <SectionVideo />
    <SectionBottom />
  </div>
</template>

<script>
import SectionBanner from '~/components/LandingPage/SectionBanner';
import SectionBottom from '~/components/LandingPage/SectionBottom';
import SectionFeaturedProduct from '~/components/LandingPage/SectionFeaturedProduct';
import SectionBestProduct from '~/components/LandingPage/SectionBestProduct';
import SectionTestimoni from '~/components/LandingPage/SectionTestimoni';
import SectionVideo from '~/components/LandingPage/SectionVideo';
import landingpage from '~/json/landingpage.json';

export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
    ],
    script: [
      {
        type: 'text/javascript',
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
        async: true,
        body: true,
      },
      {
        type: 'text/javascript',
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js',
      },
    ],
  },
  components: {
    SectionBottom,
    SectionBanner,
    SectionFeaturedProduct,
    SectionBestProduct,
    SectionTestimoni,
    SectionVideo,
  },
  data() {
    return {
      bannerImage: landingpage.banner,
      featuredProduct: landingpage.featured,
      bestProduct: landingpage.bestproduct,
      testimonyList: landingpage.testimony,
    };
  },
};
</script>

<style lang="scss">
@import '~assets/css/landingpage.scss';
</style>
