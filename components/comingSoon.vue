<template>
  <main>
    <!-- <div class="post-detail">
      <div class="breadcrumb m-0">
        Home /
        <span v-if="$route.name == 'coming-soon'">
          &nbsp;More /&nbsp;
        </span>  
        Coming Soon
      </div>
    </div> -->

    <div class="about-content"> 
    </div>

    <div class="col-md-12 mt-10 bg-coming">
        <img src="https://cdn-store.thefthing.com/media/frontend/web/assets/images/Soulyu-Comingsoon-edit.jpg" width="100%" alt="Coming-Soon" />
    </div> 

    <div class="col-md-12 mt-10 bg-coming-m">
        <img src="https://cdn-store.thefthing.com/media/frontend/web/assets/images/Soulyu-Comingsoon-msite-edit.jpg" width="100%" alt="Coming-Soon" />
    </div> 

    <!-- <div class="footer-about">
      <img src="~/assets/images/header-logo-soulyou.png" class="fabout-logo" alt="Soulyou" width="125">

      <p>Copyright @ 2021 Soulyu All Rights Reserved</p>
    </div> -->
  </main>
</template>
<script>
export default {
  name: 'comingSoon',
  mounted(){
    console.log('rout moe', this.$route)
  }
}
</script>
<style scoped lang="scss">
  @import '~assets/css/aboutus.scss';

  .bg-coming{
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    margin: 0;
    padding: 0;
  }
  .bg-coming-m {
      display: none;
  }
  @media screen and (min-width: 320px) and (max-width: 720px) {
  .bg-coming-m {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    margin: 0;
    padding: 0;
    background: #c4aeff;
    top: 0;
    padding-top: 40%;
  }
  .bg-coming{
      display: none;
  }
  body{
      background: red !important;
  }
  .footer-about{
      display: none;
  }
}
</style>