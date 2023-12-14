import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWelcomeMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  printMenuRecommendation(categoryArr, recommendMenuMap) {
    Console.print('\n메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    const categoryArrToString = ['카테고리', ...categoryArr].join(' | ');
    Console.print(`[ ${categoryArrToString} ]`);
    recommendMenuMap.forEach((recommendMenu, coach) => {
      const coachAndRecommendMenuArr = [coach, ...recommendMenu].join(' | ');
      Console.print(`[ ${coachAndRecommendMenuArr} ]`);
    });
  },
};

export default OutputView;
