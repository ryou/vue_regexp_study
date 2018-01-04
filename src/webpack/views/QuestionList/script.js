import QuestionManager from '../../libs/QuestionManager';

export default {
  data() {
    return {
      questions: null,
    };
  },
  created() {
    const { category } = this.$route.params;
    this.questions = QuestionManager.getQuestions(category);
  },
};
