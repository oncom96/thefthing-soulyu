<template>
  <div class="video-component">
      <h1>Our Video</h1>
      <div class="row">
        <div class="col-lg-7 col-sm-12 pt-3">
          <iframe
            width="100%"
            height="427"
            src="https://www.youtube.com/embed/eIGZ8IIDkJ4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-lg-5 col-sm-12 pt-3">
          <div class="video-title">
            Watch and see all the reviews from our idols, Luna Maya, Nikita Willy, and Melissa Hart for Soulyu Beauty!
          </div>

          <div class="video-desc">
            Soulyu is halal-certified and natural makeup for Korean beauty looks! <br>
            Shop Soulyu now at <a href="https://bit.ly/TheFThingSoulyu">The F Thing</a>  & <a href="https://bit.ly/SoulyuShopee">Shopee</a> 
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'SectionVideo',
  props: {},
};
</script>
