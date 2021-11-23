<template>
  <div class="rating">
    <ul class="list d-flex">
      <li
        @click="rate(star)"
        v-for="star in maxStars"
        :class="{ active: star <= stars }"
        :key="star.stars"
        class="star"
      >
        <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i>
      </li>
    </ul>
    <!-- <div v-if="hasCounter" class="info counter">
      <span class="score-rating">{{ stars }}</span>
      <span class="divider">/</span>
      <span class="score-max">{{ maxStars }}</span>
    </div> -->
  </div>
</template>

<script>
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
  name: 'Rating',
  props: ['grade', 'maxStars', 'hasCounter'],
  data() {
    return {
      stars: this.grade,
    };
  },
  methods: {
    rate(star) {
      // if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
      //   this.stars = this.stars === star ? star - 1 : star;
      // }
    },
  },
};
</script>

<style lang="scss">
@import 'rating.scss';
</style>
