import extend from '~/utils/extend-vue-app'

export default async function ({
  app
}, inject) {
  extend(app, {
    watch: {
      // send ga from all page view
      '$route'(to, from) {
        let titlePage = to.params.id == undefined ? to.name : to.params.id
        let setDataLayer = {
          'action': 'send_all_page_view',
          'title': titlePage,
        }
        this.$store.dispatch('analytics/sendDataLayerGa', setDataLayer)
      }
    },
    async mounted() {
      let titlePage = this.$route.params.id == undefined ? this.$route.name : this.$route.params.id
      let setDataLayer = {
        'action': 'send_all_page_view',
        'title': titlePage,
      }
      this.$store.dispatch('analytics/sendDataLayerGa', setDataLayer)
    },
    methods: {
    }
  })
}