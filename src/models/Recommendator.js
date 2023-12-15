import { Random } from '@woowacourse/mission-utils';
import { TYPE_MENU } from '../constants/Setting.js';

class Recommendator {
  #coachRecommendationArr;
  constructor(categoryArr, cantFoodArr) {
    this.#coachRecommendationArr = [];
    const cantMenu = cantFoodArr;
    this.#makeRecommedation(categoryArr, cantMenu);
  }

  #makeRecommedation(categoryArr, cantMenu) {
    categoryArr.forEach((category) => {
      const pickedMenu = this.#pickMenu(category, cantMenu);
      this.#coachRecommendationArr.push(pickedMenu);
    });
  }

  #pickMenu(category, cantMenu) {
    const categoryIndexArr = Array(TYPE_MENU.get(category).length)
      .fill(0)
      .map((_, i) => i + 1);
    const pickedIndex = Random.shuffle(categoryIndexArr)[0];
    const pickedMenu = TYPE_MENU.get(category)[pickedIndex - 1];
    if (cantMenu.includes(pickedMenu))
      return this.#pickMenu(category, cantMenu);
    const duplicationCount = this.#coachRecommendationArr.filter(
      (menu) => menu === pickedMenu,
    ).length;
    if (duplicationCount === 2) cantMenu.push(pickedMenu);
    return pickedMenu;
  }

  get result() {
    return this.#coachRecommendationArr;
  }
}

export default Recommendator;
