<template>
  <div class="footer-component text-center pt-5">
    <img
      src="~/assets/images/header-logo-soulyou.png"
      alt="Soulyou"
      width="200px"
    />
    <ul class="list-unstyled d-flex justify-content-center mt-5 mb-3">
      <li class="px-3">
        <a
          href="https://www.facebook.com/profile.php?id=100060894643381"
          target="_blank"
        >
          <img src="~/assets/images/icon-facebook.svg" alt="icon-fb" />
        </a>
      </li>
      <!-- <li class="px-3">
        <a href="">
          <img src="~/assets/images/icon-twitter.svg" alt="icon-twitter" />
        </a>
      </li> -->
      <li class="px-3">
        <a
          href="https://www.youtube.com/channel/UCbDNbA2TK5yuyAokU2KZlgQ"
          target="_blank"
        >
          <img src="~/assets/images/icon-youtube.svg" alt="icon-youtube" />
        </a>
      </li>
      <li class="px-3">
        <a href="https://instagram.com/soulyubeauty" target="_blank">
          <img src="~/assets/images/icon-instagram.svg" alt="icon-ig" />
        </a>
      </li>
      <li class="px-3">
        <a href="https://vt.tiktok.com/ZSeNc58td/" target="_blank">
          <img src="~/assets/images/icon-tiktok.png" alt="icon-tiktok" />
        </a>
      </li>
    </ul>
    <div class="footer-company mb-3 text-medium text-sm">
      PT Nusantara Sarana Outlet
    </div>
    <div class="footer-contact mb-4 text-xs">
      Park Hyatt Tower, 11th Floor
      <br />
      MNC Center Complex
      <br />
      Jl. Kebon Sirih 17-19
      <br />
      Kec. Menteng, Jakarta Pusat 10340
    </div>
    <div class="flex-row my-2 text-center mb-4 supported-by">
      <div class="d-inline px-5">
        <a href="https://www.thefthing.com">
          <img
            src="~/assets/images/logo-fthing.png"
            alt="The F Thing Logo"
            srcset=""
            width="70"
          />
        </a>
      </div>
      <!-- <div class="d-inline px-5">
        <a href="https://letterf.id">
          <img
            src="~/assets/images/logo-letter-f-new.png"
            alt="Letter F Logo"
            srcset=""
            class=""
            width="80"
          />
        </a>
      </div> -->
      <div class="d-inline px-5">
        <img
          src="~/assets/images/logo-soulyu.svg"
          alt="Soulyu Logo"
          srcset=""
          width="65"
        />
      </div>
    </div>

    <div class="footer-copyright text-xs">
      Copyright &copy; {{ year }} Soulyu All Rights Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  computed: {
    year() {
      var d = new Date();
      var n = d.getFullYear();
      return n;
    },
  },
};
</script>

<style lang="scss" scoped>
.supported-by {
  .d-inline {
    a {
      display: inline-block;
      height: 26px;
    }
  }
}
</style>
