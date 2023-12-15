class CoachName {
  #coachNameArr;

  constructor(inputValue) {
    this.#coachNameArr = [];
    this.#validate(inputValue);
    this.#coachNameArr = this.#convert(inputValue);
  }

  #validate(inputValue) {
    if (!inputValue.includes(','))
      throw new Error(
        '코치는 최소 2명 이상 최대 5명까지 식사를 함께해야 합니다.',
      );
    if (inputValue.includes(',')) {
      const convertStringToArr = inputValue.split(',');
      if (convertStringToArr.length < 2 || convertStringToArr.length > 5)
        throw new Error(
          '코치는 최소 2명 이상 최대 5명까지 식사를 함께해야 합니다.',
        );
      convertStringToArr.forEach((coachName) => {
        if (coachName.length < 2 || coachName.length > 4)
          throw new Error(
            '코치의 이름은 최소 2글자 이상 최대 4글자여야 합니다.',
          );
      });
    }
  }

  #convert(inputValue) {
    return inputValue.split(',');
  }

  get result() {
    return this.#coachNameArr;
  }
}

export default CoachName;
