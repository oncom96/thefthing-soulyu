export const actions = {
  sendDataLayerGa: ({
    commit
  }, data) => {
    try {
      // set function total qty
      let setDataLayer
      
      if (data['action'] == 'send_all_page_view') {
        setDataLayer = {
          'event': 'ee.allPageView',
          'PageTitle': data['title']
        }
      } else {
        throw 'invalid action'
      }
      
      // push data layer to GA
      console.log('set dat', setDataLayer);
      dataLayer.push(setDataLayer);
    } catch (err) {
      return err
    }

  }
}