<template>
  <div class="col-12 product-detail">
    <div class="breadcrumb m-0">
      <nuxt-link to="/">Home</nuxt-link>&nbsp;/&nbsp;
        <nuxt-link to="/products">Product</nuxt-link>
        &nbsp;/&nbsp;<nuxt-link :to="'/products/detail/'+$route.params.id">&nbsp;{{ productDetail.name }}&nbsp;</nuxt-link> / Add Rating
      <!-- {{ this.$route.params.id }} -->
    </div>

    <div class="product-header">
      <h1>ADD RATING</h1>
    </div>

    <div class="product-rating row">
      <div class="product-rating-img col-2">
        <img :src="productDetail.image_origin" alt="" class="img-fluid" />
      </div>
      <div class="product-rating-detail col-7">
        <h4 class="text-capitalize">{{ productDetail.name }}</h4>
        <span>{{ productDetail.content_heading }}</span>
        <div class="product-rating-detail-star">
          <input type="radio" id="star5" name="rate" v-model="productDetail.rating_avg_score_rating" value="5" disabled />
          <label for="star5">5 stars</label>
          <input type="radio" id="star4" name="rate" v-model="productDetail.rating_avg_score_rating" value="4" disabled />
          <label for="star4">4 stars</label>
          <input type="radio" id="star3" name="rate" v-model="productDetail.rating_avg_score_rating" value="3" disabled />
          <label for="star3">3 stars</label>
          <input type="radio" id="star2" name="rate" v-model="productDetail.rating_avg_score_rating" value="2" disabled />
          <label for="star2">2 stars</label>
          <input type="radio" id="star1" name="rate" v-model="productDetail.rating_avg_score_rating" value="1" disabled />
          <label for="star1">1 star</label>
        </div>
      </div>
      <div class="product-rating-action col-3">
        <!-- <button class="btn" @click="showModal = true">
          Rating this product
        </button> -->
        <span class="product-rating-action-link" @click="showModal = true"
          >Rating this product &gt;</span
        >
      </div>
    </div>

    <!-- add rating modal -->
    <div
      id="addRatingModal"
      :class="showModal ? 'show showModal' : ''"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addRatingModalLabel"
      aria-hidden="true"
    >
      <div class="backdrop" @click="showModal = false"></div>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="close" @click="showModal = false">
              <img
                src="~/assets/images/icon-close.png"
                alt="icon-close"
                width="20px"
              />
            </button>
            <div class="modal-rating-product">
              <div class="row">
                <div class="col-3">
                  <img
                    :src="productDetail.image_origin"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="modal-rating-product-detail col-9">
                  <h4>{{ productDetail.name }}</h4>
                  <span>{{ allproduct[0].item[0].description }}</span>
                </div>
              </div>
            </div>
            <div class="modal-rating-content">
              <h4>Overall Rating</h4>
              <div class="modal-rating-content-star">
                <input type="radio" id="rating5" name="rate" value="5" />
                <label for="rating5" title="5 stars">5 stars</label>
                <input type="radio" id="rating4" name="rate" value="4" />
                <label for="rating4" title="4 stars">4 stars</label>
                <input type="radio" id="rating3" name="rate" value="3" />
                <label for="rating3" title="3 stars">3 stars</label>
                <input type="radio" id="rating2" name="rate" value="2" />
                <label for="rating2" title="2 stars">2 stars</label>
                <input type="radio" id="rating1" name="rate" value="1" />
                <label for="rating1" title="1 star">1 star</label>
              </div>
              <button class="btn btn-secondary" @click="submitRating">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "~/json/products.json";
export default {
  layout: "default",
  data() {
    return {
      showModal: false,
      allproduct: products.allproduct,
      productRating: 3,
      productDetail: null
    };
  },
  watch: {
    showModal(val) {
      if (val) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    },
  },
  mounted() {
  },
  methods: {
    shopNow() {
      console.log("shop now button clicked");
    },
    submitRating() {
      this.showModal = false;
    },
  },
  async asyncData({ store, params}) {
	  let fetchProd = await store.dispatch('products/fetchProductDetail', params.id)
    return{
      productDetail : fetchProd
    }
	}
};
</script>

<style scoped lang="scss">
@import "~assets/css/products.scss";
.showModal {
  display: block !important;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.backdrop {
  background: #00000099;
  height: 100%;
  width: 100%;
  position: fixed;
}
.modal {
  &-dialog {
    max-width: 600px;
  }
  &-rating {
    &-product {
      display: table;
      margin: 0 auto;
      clear: both;
      .row {
        padding: 16px 0;
        margin-right: 0;
        margin-left: 0;
      }
      &-detail {
        h4 {
          font-weight: 600;
          margin-bottom: 0;
        }
        span {
          display: block;
          color: #999;
        }
        @media (max-width: 768px) {
          h4 {
            font-size: 14px;
          }
          span {
            font-size: 10px;
          }
        }
      }
    }
    &-content {
      border-top: 1px dotted #999;
      padding-top: 16px;
      h4 {
        text-align: center;
        margin-bottom: 16px;
      }
      &-star {
        height: 46px;
        display: table;
        margin: 0 auto 32px auto;
        &:not(:checked) {
          > input {
            position: absolute;
            top: -9999px;
          }
          > label {
            float: right;
            width: 1em;
            overflow: hidden;
            white-space: nowrap;
            cursor: pointer;
            font-size: 30px;
            color: #ccc;
            &:before {
              content: "★ ";
            }
            &:hover,
            &:hover ~ label {
              color: #deb217;
            }
          }
        }
        > input:checked {
          ~ label {
            color: #ffc700;
            &:hover,
            &:hover ~ label {
              color: #c59b08;
            }
          }
          + label:hover,
          + label:hover ~ label {
            color: #c59b08;
          }
        }
        > label:hover ~ input:checked ~ label {
          color: #c59b08;
        }
      }
      button {
        display: block;
        margin: 0 auto 16px auto;
        border-radius: 20px;
        font-size: 12px;
        width: 80px;
      }
    }
  }

  @media(max-width: 768px) {
    .modal-content {
      border-radius: 0px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
}
</style>
