import titleMixin from '../../mixins/title';

export default {
  data() {
    return {
      title: 'トップページ',
    };
  },
  mixins: [titleMixin],
};
