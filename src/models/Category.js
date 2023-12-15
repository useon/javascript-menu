import { Random } from '@woowacourse/mission-utils';

class Category {
  #categoryArr;

  constructor() {
    this.#categoryArr = [];
    const pickedNumberArr = this.pickNumbers();
    this.#categoryArr = this.makeCategory(pickedNumberArr);
  }

  pickNumbers() {
    const pickedNumberArr = [];
    while (pickedNumberArr.length < 5) {
      const number = Random.pickNumberInRange(1, 5);
      const duplicationCount = pickedNumberArr.filter(
        (pickedNumber) => pickedNumber === number,
      ).length;
      if (duplicationCount < 2) pickedNumberArr.push(number);
    }
    return pickedNumberArr;
  }

  makeCategory(pickedNumberArr) {
    const categoryArr = [];
    pickedNumberArr.forEach((pickedNumber) => {
      if (pickedNumber === 1) categoryArr.push('일식');
      if (pickedNumber === 2) categoryArr.push('한식');
      if (pickedNumber === 3) categoryArr.push('중식');
      if (pickedNumber === 4) categoryArr.push('아시안');
      if (pickedNumber === 5) categoryArr.push('양식');
    });
    return categoryArr;
  }

  get result() {
    return this.#categoryArr;
  }
}

export default Category;
