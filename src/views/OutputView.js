import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStartMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },
  printErrorMessage(message) {
    Console.print(message);
  },
};

export default OutputView;
