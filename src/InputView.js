const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  reEnter(error, readMethod, callback) {
    Console.print(error.message);
    readMethod(callback);
  },

  readName(callback) {
    Console.readLine('\n코치의 이름을 입력해 주세요. (, 로 구분)\n', (name) => {
      try {
        Validator.name(name);
        callback(name);
      } catch (error) {
        InputView.reEnter(error, InputView.readName, callback);
      }
    });
  },
};

module.exports = InputView;
