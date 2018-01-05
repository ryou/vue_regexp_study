export default {
  data() {
    return {
      drawer: false,
      transitionName: 'fade',
    };
  },
  methods: {
    historyBack() {
      window.history.back();
    },
    beforeEnter() {
      window.scrollTo(0, 0);
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
