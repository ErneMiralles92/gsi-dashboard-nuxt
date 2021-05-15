export default {
  functional: true,
  props: {
    currentIndex: {
      type: Number,
      required: 0,
    },
  },
  render(createElement, context) {
    return createElement('div', [context.children[context.props.currentIndex]])
  },
}
