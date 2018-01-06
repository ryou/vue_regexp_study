import _ from 'lodash';
import marked from 'marked';
import titleMixin from '../../mixins/title';
import QuestionManager from '../../libs/QuestionManager';

export default {
  mixins: [titleMixin],
  data() {
    return {
      title: '',
      quiz: null,
      inputValue: '',
      isAnswered: false,
      showErrorToast: false,
      hasNextQuestion: false,
    };
  },
  computed: {
    explanation() {
      let outValue;
      if (typeof this.quiz.explanation !== 'undefined') {
        outValue = marked(this.quiz.explanation);
      } else {
        outValue = null;
      }
      return outValue;
    },
  },
  methods: {
    testRegExp() {
      const pattern = new RegExp(this.inputValue);
      const testResult = this.quiz.samples.filter(sample => pattern.test(sample));
      const xor = _.xor(testResult, this.quiz.results);
      if (xor.length === 0) {
        this.isAnswered = true;
      } else {
        this.showErrorToast = true;
      }
    },
  },
  created() {
    const { category, id } = this.$route.params;
    this.quiz = QuestionManager.getQuestion(category, id);
    this.hasNextQuestion = QuestionManager.hasNextQuestion(category, id);
    this.title = this.quiz.title;
  },
};
