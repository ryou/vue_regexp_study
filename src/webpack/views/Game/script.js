import _ from 'lodash';
import questions from '../../data/game';
import GameContentView from './GameContent/template.vue';
import LoopController from '../../libs/LoopController';

const createGameContentView = (question) => {
  return {
    render(h) {
      const self = this;
      return h(
        GameContentView,
        {
          props: { question },
          on: {
            // TODO
            /*
            関数を跨ぐせいで、ここでもemitしないといけない
            のは微妙。改善方法考える。
            また、thisが使えない理由も考える。
            */
            correct() {
              self.$emit('correct');
            },
            incorrect() {
              self.$emit('incorrect');
            },
          },
        },
      );
    },
  };
};

const QUIZ_NUM = 2;
const FPS = 60;
const FRAME_SECOND = 1.0 / FPS;
let loopController = null;

export default {
  data() {
    return {
      quizList: [],
      currentView: null,
      showSuccessToast: false,
      showErrorToast: false,
      isGameOver: false,
      time: 0,
    };
  },
  methods: {
    nextQuiz() {
      if (this.quizList.length > 0) {
        const nextQuestion = this.quizList.shift();
        this.currentView = createGameContentView(nextQuestion);
      } else {
        loopController.pause();
        this.isGameOver = true;
      }
    },
    correct() {
      this.showSuccessToast = true;
      this.nextQuiz();
    },
    incorrect() {
      this.showErrorToast = true;
    },
  },
  filters: {
    parseInt(value) {
      return parseInt(value, 10);
    },
  },
  created() {
    let tmpQuestions = _.cloneDeep(questions);
    tmpQuestions = _.shuffle(tmpQuestions);
    this.quizList = _.slice(tmpQuestions, 0, QUIZ_NUM);

    this.nextQuiz();

    loopController = new LoopController(() => {
      this.time += FRAME_SECOND;
    });
    loopController.start();
  },
};
