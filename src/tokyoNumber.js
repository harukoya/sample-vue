export const tokyoNumber = {
  data() {
    return {
      title: 'welcome to Tokyo',
      subTitle: 'Hello'
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
}
