import _ from 'lodash';

export default {
  data() {
    return {
      inputValue: '',
    };
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // TODO
    // ここQuestionのmethodsと被っているので、共通化したい
    testRegExp() {
      const pattern = new RegExp(this.inputValue);
      const testResult = this.question.samples.filter(sample => pattern.test(sample));
      const xor = _.xor(testResult, this.question.results);
      if (xor.length === 0) {
        this.$emit('correct');
      } else {
        console.log('emit');
        this.$emit('incorrect');
      }
    },
  },
};
