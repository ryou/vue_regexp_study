import questionData from '../data/questions';

export default class QuestionManager {
  static getQuestions(category) {
    return questionData[category];
  }

  static getQuestion(category, index) {
    return questionData[category][index];
  }

  static hasNextQuestion(category, index) {
    const questions = QuestionManager.getQuestions(category);
    return index < (questions.length - 1);
  }

  static hasPrevQuestion(category, index) {
    return index > 0;
  }
}
