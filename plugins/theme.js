import Vue from 'vue'
const colors = {
  blue: '#1976D2',
  red: '#E53935',
  green: '#4CAF50',
  orange: '#FFA726',
  grey: '#9E9E9E',
}

export default () => {
  Vue.prototype.$colors = colors
  Vue.$colors = colors
}
