<template>
  <div>
    <div class="bg-white">
      <div class="container text-center pt-5 shop-section">
        <h2 class="d-block" style="margin-bottom:-20px;">
          Shop at The F Thing
        </h2>
        <div>
          <iframe
            id="myiFrame"
            src="https://www.thefthing.com/widget/iframe/fresh-arrivals-4197"
          >
          </iframe>
        </div>
      </div>
    </div>
    <div class="bottom-component">
      <h4>Find Our Products at</h4>
      <p class="subtitle p-0">Ecommerce</p>
      <!-- <div class="d-flex flex-row my-2"> -->
      <div class="d-flex flex-row">
        <a
          href="https://www.thefthing.com/store/detail/soulyu-4197?utm_source=logo&utm_medium=soulyu-website&utm_campaign=soulyu-website"
          target="_blank"
        >
          <img
            src="~/assets/images/logo-fthing.png"
            alt=""
            srcset=""
            class="px-2 thefthing-logo"
          />
        </a>
        <a href="https://shopee.co.id/soulyubeauty" target="_blank">
          <img
            src="~/assets/images/footer-logo-shopee.png"
            alt=""
            srcset=""
            class="px-2"
          />
        </a>
        <a href="https://www.tokopedia.com/soulyu" target="_blank">
          <img
            src="~/assets/images/footer-logo-tokopedia.png"
            alt=""
            srcset=""
            class="px-2"
          />
        </a>
        <!-- <img
          src="~/assets/images/footer-logo-blibli.png"
          alt=""
          srcset=""
          class="px-2"
        />
        <img
          src="~/assets/images/footer-logo-zalora.png"
          alt=""
          srcset=""
          class="px-2"
        />
        <img
          src="~/assets/images/footer-logo-lazada.png"
          alt=""
          srcset=""
          class="px-2"
        /> -->
      </div>
      <!-- <div class="d-flex flex-row my-3">
        <img
          src="~/assets/images/footer-logo-jdid.png"
          alt=""
          srcset=""
          class="px-3"
        />
        <nuxt-link to="https://www.tokopedia.com/soulyu">
          <img
            src="~/assets/images/footer-logo-tokopedia.png"
            alt=""
            srcset=""
            class="px-3"
          />
        </nuxt-link>
      </div> -->

      <!-- <p class="subtitle pt-3 m-0">Offline Stores</p>
      <div class="d-flex flex-row my-3">
        <img
          src="~/assets/images/footer-logo-guardian.png"
          alt=""
          srcset=""
          class="px-3"
        />
        <img
          src="~/assets/images/footer-logo-watsons.png"
          alt=""
          srcset=""
          class="px-3"
        />
      </div> -->
    </div>

    <div class="instagram-component">
      <div class="header-instagram">
        <img
          src="~/assets/images/icon-instagram.png"
          alt=""
          srcset=""
          class="logo-instagram"
        />
        <h1>@soulyubeauty</h1>
      </div>
      <span>
        Tag us on instagram to be featured on our gallery
      </span>
      <!-- LightWidget WIDGET -->
      <div class="instagram-container">
        <!-- LightWidget WIDGET -->
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
          src="https://cdn.lightwidget.com/widgets/08157cf62f95578b9c673678404ac24b.html"
          scrolling="no"
          allowtransparency="true"
          class="lightwidget-widget"
          style="width:100%;border:0;overflow:hidden;"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionBottom",
};
</script>
