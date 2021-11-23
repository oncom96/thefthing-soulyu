<template>
  <div class="padding-bar" :class="$device.isDesktop ? 'pt-0' : ''">
    <MainHeader />
    <BottomNavbar />
    <nuxt />
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
};
</script>
