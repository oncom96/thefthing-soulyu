<template>
  <div class="padding-bar">
    <MainHeader />
    <BottomNavbar />
    <div class="container">
      <div class="row">
        <nuxt />
      </div>
    </div>
    <Contact />
    <Footer />
  </div>
</template>

<script>
import MainHeader from '~/components/Header/MainHeader';
import BottomNavbar from '~/components/BottomNavbar/BottomNavbar';
import Footer from '~/components/Footer/MainFooter';
import Contact from '~/components/contact';


export default {
  components: {
    MainHeader,
    BottomNavbar,
    Footer,
    Contact
  },
  data(){
    return{
      GTM_ID : "",
    }
  },
  beforeMount() {
      this.GTM_ID = process.env.GTM_ID
  },
};
</script>
