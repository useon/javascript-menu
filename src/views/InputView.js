import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCoachNames() {
    const inputValue = await Console.readLineAsync(
      '코치의 이름을 입력해 주세요. (, 로 구분)\n',
    );
    return inputValue;
  },
};

export default InputView;
