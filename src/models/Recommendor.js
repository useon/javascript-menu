import { Random } from '@woowacourse/mission-utils';
import { TYPE_MENU } from '../constants/Setting.js';

class Recommendor {
  #recommendMenuMap;
  #cantMenuMap;

  constructor(coachDataMap, categoryArr) {
    this.#recommendMenuMap = new Map();
    this.#cantMenuMap = coachDataMap;
    this.#makeRecommendList(coachDataMap, categoryArr);
  }

  #makeRecommendList(coachDataMap, categoryArr) {
    coachDataMap.forEach((cantFood, coach) => {
      categoryArr.forEach((category, index) => {
        const recommendMenu = this.#recommend(
          category,
          this.#cantMenuMap.get(coach),
        );
        if (index === 0) {
          this.#recommendMenuMap.set(coach, [recommendMenu]);
        } else {
          this.#recommendMenuMap.set(coach, [
            ...this.#recommendMenuMap.get(coach),
            recommendMenu,
          ]);
        }
        this.#cantMenuMap.set(coach, [
          ...this.#cantMenuMap.get(coach),
          recommendMenu,
        ]);
      });
    });
  }

  #recommend(category, cantMenu) {
    const menus = TYPE_MENU.get(category);
    const menusNumberArr = menus.map((menu, index) => index);
    const pickedMenuIndex = Random.shuffle(menusNumberArr)[0];
    const pickedMenu = menus[pickedMenuIndex];
    if (cantMenu.includes(pickedMenu)) this.#recommend(category, cantMenu);
    if (!cantMenu.includes(pickedMenu)) return pickedMenu;
  }

  get result() {
    return this.#recommendMenuMap;
  }
}

export default Recommendor;
