import Vue from 'vue'
const colors = {
  blue: '#1976D2',
  blueLighten: '#BBDEFB',
  red: '#E53935',
  redLighten: '#FFCDD2',
  green: '#4CAF50',
  greenLighten: '#C8E6C9',
  orange: '#FFA726',
  orangeLighten: '#FFE0B2',
  grey: '#9E9E9E',
}

export default () => {
  Vue.prototype.$colors = colors
  Vue.$colors = colors
}
