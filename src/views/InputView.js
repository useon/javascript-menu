import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCoachName() {
    const inputValue = await Console.readLineAsync(
      '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
    );
    return inputValue;
  },

  async readCantFood(name) {
    const inputValue = await Console.readLineAsync(
      `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
    );
    return inputValue;
  },
};

export default InputView;
