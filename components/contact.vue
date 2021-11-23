<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="contact-us cursor-pointer"
      @click="showContact = true"
      v-show="showIcon"
    >
      <img src="~/assets/images/icon-chat.svg" alt="icon-contact" />
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :class="showContact ? 'show contactShow' : ''"
      id="contactModal"
    >
      <div class="backdrop"></div>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="close" @click="showContact = false">
              <img
                src="~/assets/images/icon-close.png"
                alt="icon-close"
                width="20px"
              />
            </button>
            <div class="text-center text-lg">
              <img
                src="~/assets/images/contact-us.png"
                alt="Contact-us"
                width="200px"
                class="mt-1"
              />
              <h2 class="mt-4 text-medium">
                Contact Us
              </h2>
              <p class="text-xs">
                for more information about event
              </p>
              <ul
                class="list-unstyled d-flex justify-content-center mt-5 text-xs contact-url"
              >
                <li class="px-4 mx-1">
                  <a
                    href="mailto: soulyu@soulyubeauty.com"
                    class="text-blackNew"
                  >
                    <img
                      src="~/assets/images/icon-email.svg"
                      alt="icon-email"
                    />
                    <p class="mt-2">Email</p>
                  </a>
                </li>
                <li class="px-4 mx-1">
                  <a href="https://wa.me/+6281119102288" class="text-blackNew">
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    showContact(val) {
      if (val) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    },
    $route() {
      this.showContact = false;
    },
  },
  computed: {
    showContact: {
      get: function() {
        return this.$store.getters["utils/getShowContact"];
      },
      set: function(val) {
        this.$store.commit("utils/setShowContact", val);
      },
    },
    showIcon() {
      if (this.$route.name == "more") {
        return false;
      } else if (this.$route.name.includes("news")) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss">
.contact-us {
  z-index: 999;
  border: none;
  background: none;
  position: fixed;
  top: 50%;
  right: 20px;
}

.contactShow {
  display: block !important;

  .modal-dialog {
    top: 50%;
    transform: translate(0, -50%) !important;
    max-width: 600px;

    .modal-content {
      border-radius: 8px;

      .contact-url {
        a {
          display: block;
          &:hover {
            text-decoration: none;
          }
        }
      }
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
  .contact-us {
    top: 80%;
  }

  .contactShow {
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
      transform: none !important;

      .modal-content {
        border-radius: 0px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
      }
    }
  }
}
</style>
