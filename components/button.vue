<template>
  <main>
    <button :class="classBtn" @click="click">
      {{text}}
    </button>
  </main>
</template>

<script>
export default {
  props:{
    text:{
      type: String,
      default: ''
    },
    classBtn: {
      type: String,
      default: ''
    }
  },
  methods:{
    click() {
      this.$emit('click')
    }
  }
};
</script>
<style scoped lang="scss">
  // @import '~assets/css/button.scss';
</style>
