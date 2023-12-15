import CoachName from '../src/models/CoachName.js';

describe('CoachName 클래스를 테스트한다.', () => {
  test('코치가 최소 2명 최대 5명 입력되지 않으면 에러를 던지는지 확인한다.', () => {
    const invalidInputArr = ['제임스', '가나,다라,마바,사아,자차,타파'];
    invalidInputArr.forEach((invalidInput) => {
      expect(() => new CoachName(invalidInput)).toThrow('[ERROR]');
    });
  });

  test('코치가 최소 2명 최대 5명 입력되었으면 이름을 배열 형태로 변환하는지 확인한다.', () => {
    const validInputArr = ['가나,다라', '마바,사아,자차,타파'];
    const outputArr = [
      ['가나', '다라'],
      ['마바', '사아', '자차', '타파'],
    ];
    validInputArr.forEach((validInput, index) => {
      expect(new CoachName(validInput).result).toEqual(outputArr[index]);
    });
  });

  test('코치의 이름이 최소 2글자 최대 4글자로 입력되지 않으면 에러를 던지는지 확인한다.', () => {
    const invalidInputArr = ['가,다', '가,나,다', '가나랑,마'];
    invalidInputArr.forEach((invalidInput) => {
      expect(() => new CoachName(invalidInput)).toThrow('[ERROR]');
    });
  });

  test('코치의 이름이 최소 2글자 최대 4글자로 입력되었으면 이름을 배열 형태로 변환하는지 확인한다.', () => {
    const validInputArr = ['가나,다라', '마바,사아,자차,타파하키'];
    const outputArr = [
      ['가나', '다라'],
      ['마바', '사아', '자차', '타파하키'],
    ];
    validInputArr.forEach((validInput, index) => {
      expect(new CoachName(validInput).result).toEqual(outputArr[index]);
    });
  });
});
