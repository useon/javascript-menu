import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStartMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  printRecommendation(categoryArr, totalRecommendationMap) {
    Console.print('\n메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    const categoryOutPutFormat = ['카테고리', ...categoryArr];
    Console.print(`[ ${categoryOutPutFormat.join(' | ')} ]`);
    totalRecommendationMap.forEach((menus, coach) => {
      const recommendationOutPutFormat = [coach, ...menus];
      Console.print(`[ ${recommendationOutPutFormat.join(' | ')} ]`);
    });
  },

  printEndMessage() {
    Console.print('\n추천을 완료했습니다.');
  },
};

export default OutputView;
