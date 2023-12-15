import Category from '../src/models/Category.js';

describe('Category 클래스를 테스트한다.', () => {
  test('뽑힌 숫자 어레이의 길이가 5개인지 확인한다.', () => {
    expect(new Category().pickNumbers()).toHaveLength(5);
  });

  test('뽑은 숫자 어레이에서 중복되는 숫자가 3개 이상이 아닌지 확인한다.', () => {
    const numbersArr = new Category().pickNumbers();
    const numberMap = new Map();
    numbersArr.forEach((number) => {
      if (numberMap.has(number))
        numberMap.set(number, numberMap.get(number) + 1);
      if (!numberMap.has(number)) numberMap.set(number, 1);
    });
    numberMap.forEach((count, number) => {
      expect(count).toBeLessThanOrEqual(2);
    });
  });

  test('뽑힌 숫자 어레이와 카테고리가 잘 매칭되었는지 확인한다.', () => {
    const pickedNumberArr = [1, 2, 3, 4, 5];
    expect(new Category().makeCategory(pickedNumberArr)).toEqual([
      '일식',
      '한식',
      '중식',
      '아시안',
      '양식',
    ]);
  });
});
