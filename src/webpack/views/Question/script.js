import _ from 'lodash';
import QuestionManager from '../../libs/QuestionManager';

export default {
  data() {
    return {
      quiz: null,
      inputValue: '',
      isAnswered: false,
      showErrorToast: false,
      hasNextQuestion: false,
    };
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
  },
};
