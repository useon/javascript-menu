import { TYPE_MENU } from '../constants/Setting.js';

class InfoCoach {
  #coachData;
  constructor(coachName, inputCantFood) {
    this.#validate(inputCantFood);
    this.#coachData = this.#makeInofList(coachName, inputCantFood);
  }

  #validate(inputCantFood) {
    if (inputCantFood.includes(',')) {
      const convertStrToArr = inputCantFood.split(',');
      if (convertStrToArr.length > 2)
        throw new Error('[ERROR] 못 먹는 메뉴는 최대 2개여야 합니다.');
      convertStrToArr.forEach((cantFood) => {
        const validCantFoodArr = [];
        TYPE_MENU.forEach((menus, type) => {
          if (menus.includes(cantFood)) {
            validCantFoodArr.push(true);
          }
        });
        if (validCantFoodArr.length === 0)
          throw new Error(
            '[ERROR] 못 먹는 메뉴는 메뉴판에 있는 메뉴여야 합니다.',
          );
      });
    }
    if (!inputCantFood.includes(',')) {
      const validCantFoodArr = [];
      TYPE_MENU.forEach((menus, type) => {
        if (menus.includes(inputCantFood)) {
          validCantFoodArr.push(true);
        }
      });
      if (validCantFoodArr.length === 0)
        throw new Error(
          '[ERROR] 못 먹는 메뉴는 메뉴판에 있는 메뉴여야 합니다.',
        );
    }
  }

  #makeInofList(coachName, inputCantFood) {
    if (inputCantFood.includes(','))
      return [coachName, inputCantFood.split(',')];
    if (!inputCantFood.includes(',')) return [coachName, [inputCantFood]];
  }

  get result() {
    return this.#coachData;
  }
}

export default InfoCoach;
