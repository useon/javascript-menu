import { TYPE_MENU } from '../src/constants/Setting.js';
import Recommendator from '../src/models/Recommendator.js';

describe('Recommendator 클래스를 테스트한다.', () => {
  test('추천 메뉴에 못 먹는 음식이 들어있지 않은지 확인한다.', () => {
    expect(
      new Recommendator(
        ['일식', '중식', '한식', '아시안', '한식'],
        ['김치찌개', '규동'],
      ).result,
    ).not.toContain('김치찌개');

    expect(
      new Recommendator(
        ['일식', '중식', '한식', '아시안', '한식'],
        ['김치찌개', '규동'],
      ).result,
    ).not.toContain('규동');
  });

  test('추천 메뉴가 다섯개가 맞는지 확인한다.', () => {
    expect(
      new Recommendator(
        ['일식', '중식', '한식', '아시안', '한식'],
        ['김치찌개', '규동'],
      ).result,
    ).toHaveLength(5);
  });

  test('카테고리별로 추천 메뉴가 들어가 있는지 확인한다.', () => {
    const categoryArr = ['일식', '중식', '한식', '아시안', '한식'];
    const cantFoodArr = ['김치찌개', '규동'];
    const recommedationMenuArr = new Recommendator(categoryArr, cantFoodArr)
      .result;
    recommedationMenuArr.forEach((menu, index) => {
      const categoryMenuArr = TYPE_MENU.get(categoryArr[index]);
      expect(categoryMenuArr).toContain(menu);
    });
  });
});
