export default {
  mounted() {
    const baseTitle = '正規表現';
    if (typeof this.title !== 'undefined' && this.title.length > 0) {
      document.title = `${this.title} | ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }
  },
};
