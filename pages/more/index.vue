<template>
  <main class="w-100">
    <div class="post-detail">
      <div class="breadcrumb m-0">
        Home / <span class="text-capitalize"> More </span>
      </div>
    </div>

    <div>
      <div class="cover more-container">
        <div class="moreNav">
          <ul>
            <li>
              <a @click="showContact"
                >Contact Us
                <span class="icon2more"
                  ><img
                    src="~/assets/images/iconEmail.svg"
                    alt="Contact Us"
                    width="20"
                /></span>
              </a>
            </li>
            <li>
              <nuxt-link to="/more/about-us"
                >About Us
                <span class="icon2more"
                  ><img
                    src="~/assets/images/iconInformation.png"
                    alt="About Us"
                    width="20"
                /></span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="cover more-container">
        <div class="moreNav">
          <ul>
            <li>
              <a @click="showCommunity = true"
                >Community
                <span class="icon2more"
                  ><img
                    src="~/assets/images/logoFjournal.png"
                    alt="F Journal"
                    width="20"
                /></span>
              </a>
            </li>
            <li>
              <a href="https://www.thefthing.com/"
                >Shop Now
                <span class="icon2more"
                  ><img
                    src="~/assets/images/logo-f.svg"
                    alt="About Us"
                    width="20"
                /></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-about">
      <img
        src="~/assets/images/header-logo-soulyou.png"
        class="fabout-logo"
        alt="Soulyou"
        width="125"
      />

      <ul class="list-unstyled d-flex justify-content-center mb-5">
        <li class="px-3">
          <a href="https://www.facebook.com/profile.php?id=100060894643381" target="_blank">
            <img src="~/assets/images/icon-facebook.svg" alt="icon-fb" />
          </a>
        </li>
        <!-- <li class="px-3">
          <a href="">
            <img src="~/assets/images/icon-twitter.svg" alt="icon-twitter" />
          </a>
        </li> -->
        <li class="px-3">
          <a href="https://www.youtube.com/channel/UCbDNbA2TK5yuyAokU2KZlgQ" target="_blank">
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

      <p class="copyright">
        Copyright &copy; {{ year }} Soulyu All Rights Reserved
      </p>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      :class="showCommunity ? 'show notifShow' : ''"
      id="communityModal"
    >
      <div class="backdrop" @click="showCommunity = false"></div>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="close" @click="showCommunity = false">
              <img
                src="~/assets/images/icon-close.png"
                alt="icon-close"
                width="20px"
              />
            </button>
            <div class="text-center text-sm">
              <img
                src="~/assets/images/notif-comingsoon.png"
                alt="Contact-us"
                width="200px"
                class="mt-3"
              />
              <h2 class="mt-4">
                The best is yet to come
              </h2>
              <p>
                We are crafting some new exciting things ahead. Stay tuned!
              </p>
              <ul class="list-unstyled d-flex justify-content-center mt-5">
                <li class="px-4 mx-1">
                  <a href="mailto: soulyu@soulyubeauty.com">
                    <img
                      src="~/assets/images/icon-email.svg"
                      alt="icon-email"
                    />
                    <p class="mt-2">Email</p>
                  </a>
                </li>
                <li class="px-4 mx-1">
                  <a href="https://wa.me/+6281119102288">
                    <img
                      src="~/assets/images/icon-whatsapp.svg"
                      alt="icon-wa"
                    />
                    <p class="mt-2">Whatsapp</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      showCommunity: false,
    };
  },
  computed: {
    year() {
      var d = new Date();
      var n = d.getFullYear();
      return n;
    },
  },
  watch: {
    showCommunity(val) {
      if (val) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    },
  },
  methods: {
    showContact() {
      this.$store.commit("utils/setShowContact", true);
    },
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/more.scss";
</style>
<style lang="scss">
.notifShow {
  display: block !important;

  .modal-dialog {
    bottom: -150px;
    max-width: 600px;

    .modal-content {
      border-radius: 8px;
    }
  }
}

.backdrop {
  background: #00000099;
  height: 100%;
  width: 100%;
  position: fixed;
}

@media (max-width: 768px) {
  .modal-dialog {
    position: fixed !important;
    top: auto;
    right: auto;
    left: auto;
    bottom: 0 !important;
    width: 100% !important;
    margin: 0px !important;
    max-width: none !important;
    z-index: 9999;

    .modal-content {
      border-radius: 0px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
}
</style>
