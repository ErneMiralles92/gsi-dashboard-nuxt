import Vue from 'vue'
const colors = {
  blue: '#1976D2',
  blueLighten: '#E3F2FD',
  blueDarken: '#0D47A1',
  red: '#BF360C',
  redLighten: '#FFCDD2',
  green: '#4CAF50',
  greenLighten: '#E8F5E9',
  orange: '#FFA726',
  orangeLighten: '#FFF3E0',
  grey: '#9E9E9E',
}

export default () => {
  Vue.prototype.$colors = colors
  Vue.$colors = colors
}
