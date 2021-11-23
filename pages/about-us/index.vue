<template>
  <main>
    <About />
  </main>
</template>

<script>
import About from '~/components/about'

export default {
  components: {
    About
  },
  head() {
    return {
      title: "About Us",
      meta: [
        {
          hid: "title",
          name: "title",
          property: "title",
          content: "About Us",
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: "Soulyu | So Pretty, So You",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "About Us",
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "About Us",
        },
        {
          hid: "og:url",
          name: "og:url",
          property: "og:url",
          content: "http://soulyubeauty.com/about-us",
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: "Soulyu | So Pretty, So You",
        },
        {
          hid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "Website",
        },
      ],
      link: [{ rel: "canonical", href: "" }],
    };
  },
}
</script>