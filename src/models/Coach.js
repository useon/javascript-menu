class Coach {
  #coachs;

  constructor(inputValue) {
    this.#validate(inputValue);
    this.#coachs = this.#convert(inputValue);
  }

  #validate(inputValue) {
    if (inputValue.indexOf(',') === -1)
      throw new Error('[ERROR] 코치의 이름은 ,로 구분되어야 합니다.');
    const convertStringToArrValue = inputValue.split(',');
    if (
      convertStringToArrValue.length < 2 ||
      convertStringToArrValue.length > 5
    )
      throw new Error('[ERROR] 식사 인원은 최소 2명, 최대 5명이어야 합니다.');
    const converArrToSetValue = new Set(convertStringToArrValue);
    if (converArrToSetValue.size !== convertStringToArrValue.length) {
      throw new Error('[ERROR] 코치의 이름은 중복되지 않아야 합니다.');
    }
    converArrToSetValue.forEach((name) => {
      if (name.length > 4 || name.length < 2)
        throw new Error(
          '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자여야 합니다.',
        );
    });
  }

  #convert(inputValue) {
    return inputValue.split(',');
  }

  get result() {
    return this.#coachs;
  }
}

export default Coach;
