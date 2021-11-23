import Vue from "vue";
import moment from 'moment';

Vue.filter("currency",  function(value)  {
    if (value) {
      return 'Rp ' + value.toLocaleString('id-ID', {maximumFractionDigits:0})
    }
});

Vue.filter('formatDate', function(value) {
    if (value) {
        moment.locale('id')
        return moment(String(value)).format('dddd, MMMM DD, YYYY')
    }
});