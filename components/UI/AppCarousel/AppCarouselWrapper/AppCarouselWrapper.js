export default {
  functional: true,
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  render(createElement, context) {
    return createElement('div', context.data, [
      context.children[context.props.currentIndex],
    ])
  },
}
