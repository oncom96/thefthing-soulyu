<template>
  <main class="w-100">
    <div class="post-detail">
      <div class="breadcrumb m-0">
        Home /
        <span v-if="$route.name == 'more-about-us'">
          &nbsp;More /&nbsp;
        </span>
        About Us
      </div>
    </div>

    <div class="about-content">
      <h2>ABOUT US</h2>
      <img src="~/assets/images/about-us/about-us-img-top-20211019.jpg" alt="About Soulyou" />
      <div class="body-content">
        <center>
          <img
            src="~/assets/images/header-logo-soulyou.png"
            class="content-logo"
            alt="Soulyou"
            width="200px"
          />
        </center>
        <p>
          Terinspirasi dari tren Korean makeup yang memiliki hasil makeup yang
          minimalis namun tetap flawless juga glowing, The F Thing menghadirkan
          merek in-house khusus kecantikan yaitu Soulyu. Makeup ala Korea yang
          bersertifikasi halal, terbuat dari bahan alami terbaik yaitu ekstrak
          Vitamin E, jojoba oil dan Ginseng, Soulyu juga memiliki manfaat
          skincare juga di dalam nya. <br> <br> Kami percaya bahwa cantiknya perempuan
          hadir dalam berbagai bentuk dan ukuran. Soulyu hadir untuk memancarkan
          kecantikan alami, untuk menamani di perjalanan hidupmu. Membuat kamu
          lebih percaya diri dan lebih mencintai versi terbaik dari dirimu.
          Soulyu, Cantik, ya kamu.
        </p>
        <img
          src="~/assets/images/about-us/about-us-img-middle-20211019.jpg"
          class="story-about"
          alt="Story"
        />
        <p>
          Get ready with us to be So Pretty So You!
          <ol>
            <li>Korean makeup looks! Hasil makeup flawless dan glowing dengan warna yang soft.</li>
            <li>Natural ingredients. Ekstrak Vitamin E, jojoba oil dan Ginseng membuat kulit mu lebih sehat.</li>
            <li>Bersertifikasi halal dari MUI. Seluruh produk Soulyu sudah di memiliki sertifikat halal dari Majelasi Ulama Indonesia.</li>
            <li>Affordable price! Dengan berbagai macam manfaat nya, Soulyu bisa di dapatkan dengan harga yang sangat terjangkau.</li>
          </ol>
        </p>

        <div class="row aboutrow">
          <div class="col-md-6">
            <img src="~/assets/images/about-us/about-us-img-bottom.jpg"
            alt="Story" />
          </div>
          <div class="col-md-6">
            <p>
              Di resmikan pada 30 September 2021 yang disiarkan secara live melalui aplikasi RCTI+. Grand launching Soulyu turut menghadirkan Carla Yules, Anneth Celliecia, Nashwa Zahira, juga makeup artist ternama yaitu Bubah Alfian.<br><br>
              Memperkenalkan identitasnya “So Pretty, So You”, Soulyu hadir sebagai makeup dengan manfaat skincare. Terbuat dari bahan alami yang berkualitas terbaik, Soulyu mengandung ekstrak vitamin E sebagai antioksidan, jojoba oil dan ginseng yang dapat menjadi anti bakterial dan mengurangi kerutan di wajah.<br><br>
              “Beauty industry  bertumbuh sangat pesat di Indonesia dalam beberapa tahun terakhir hingga USD5.5 miliar per 2021, maka kami dari MNC E-commerce, bagian dari MNC Group melihat potensi yang besar untuk berkecimpung di dalam industry beauty.” kutip Valencia Tanoesoedibjo selaku Director of Digital Business PT MNC Tbk & CEO The F Thing.<br><br>
              Selain bertujuan untuk membuat semua wanita merasa cantik dan bersinar, kami harap dapat memenuhi demand dan trend millennials dan Gen Z di Indonesia, yaitu k-wave (atau Hallyu wave) serta atas produk yang memiliki kandungan halal dan alami, aman untuk makeup sehari-hari.<br><br>
              Produk Soulyu bisa di dapatkan di official store Soulyu di Shopee, <a href="https://thefthing.com">www.thefthing.com</a> dan Mister Aladin. Soulyu, so pretty, so you. . 
            </p>
          </div>
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

      <p>Copyright &copy; {{ copyYear }} Soulyu All Rights Reserved</p>
    </div>
  </main>
</template>
<script>
export default {
  data(){
    return {
      copyYear: 0,
    }
  },
  name: "About",
  mounted() {
    this.copyYear = new Date().getFullYear();
    console.log("rout moe", this.$route);
  },
};
</script>
<style scoped lang="scss">
@import "~assets/css/aboutus.scss";
</style>
