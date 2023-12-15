import CantFood from '../src/models/CantFood.js';

describe('CantFood 클래스를 테스트한다.', () => {
  test('입력한 음식 메뉴판에 없는 음식이라면 에러를 던지는지 확인한다.', () => {
    const invalidvalidInputArr = ['호박죽', '팝콘', '고구마'];
    invalidvalidInputArr.forEach((invalidInput) => {
      expect(() => new CantFood(invalidInput)).toThrow('[ERROR]');
    });
  });

  test('입력한 음식이 메뉴판에 있는 음식이라면 에러를 던지지 않는지 확인한다.', () => {
    const validInput = '김치찌개';
    expect(() => new CantFood(validInput)).not.toThrow('[ERROR]');
  });

  test('입력한 음식이 메뉴판에 있는 음식이라면 배열로 변환되는지 확인한다.', () => {
    const validInputArr = ['김치찌개', '볶음면,나시고렝'];
    const validOutputArr = [['김치찌개'], ['볶음면', '나시고렝']];
    validInputArr.forEach((validInput, index) => {
      expect(new CantFood(validInput).result).toEqual(validOutputArr[index]);
    });
  });
});
