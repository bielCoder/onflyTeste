export default {
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    this.$emitter.on('show-loading', this.show);
    this.$emitter.on('hide-loading', this.hide);
  },
  unmounted() {
    this.$emitter.off('show-loading', this.show);
    this.$emitter.off('hide-loading', this.hide);
  },
  methods: {
    show() { this.visible = true; },
    hide() { this.visible = false; }
  }
}