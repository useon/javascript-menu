import { Random } from '@woowacourse/mission-utils';

class Category {
  #category;
  constructor() {
    this.#category = [];
    const numbers = this.#pick();
    this.#category = this.#makeCategory(numbers);
  }

  #pick() {
    const numbers = [];
    while (numbers.length < 5) {
      const pickNumber = Random.pickNumberInRange(1, 5);
      const duplicationCount = numbers.filter(
        (number) => number === pickNumber,
      );
      if (duplicationCount < 2) numbers.push(pickNumber);
    }
    return numbers;
  }

  #makeCategory(numbers) {
    const types = [];
    numbers.forEach((number) => {
      if (number === 1) types.push('일식');
      if (number === 2) types.push('한식');
      if (number === 3) types.push('중식');
      if (number === 4) types.push('아시안');
      if (number === 5) types.push('양식');
    });
    return types;
  }

  get result() {
    return this.#category;
  }
}

export default Category;
