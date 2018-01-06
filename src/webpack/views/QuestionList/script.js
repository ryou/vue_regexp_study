import titleMixin from '../../mixins/title';
import QuestionManager from '../../libs/QuestionManager';

export default {
  mixins: [titleMixin],
  data() {
    return {
      title: '問題一覧',
      questions: null,
    };
  },
  created() {
    const { category } = this.$route.params;
    this.questions = QuestionManager.getQuestions(category);
  },
};
