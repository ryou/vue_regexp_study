export default {
  data() {
    return {
      headerTitle: '',
      drawer: false,
      transitionName: 'fade',
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    changeTitle(title) {
      this.headerTitle = title;
    },
  },
  computed: {
    prevPageName() {
      const prevMap = {
        top: null,
        list: 'top',
        question: 'list',
        game: 'top',
      };

      return prevMap[this.$route.name];
    },
  },
  watch: {
    $route(to, from) {
      const transitionMap = {
        top: {
          list: 'slideleft',
          game: 'slideleft',
        },
        list: {
          top: 'slideright',
          question: 'slideleft',
        },
        question: {
          list: 'slideright',
        },
        game: {
          top: 'slideright',
        },
      };

      const transition = transitionMap[from.name][to.name];
      if (typeof transition !== 'undefined') {
        this.transitionName = transition;
      } else {
        this.transitionName = 'fade';
      }
    },
  },
  created() {
    this.$store.commit('initScore');
  },
};
