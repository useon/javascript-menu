import { TYPE_MENU } from '../constants/Setting.js';

class CantFood {
  #cantFood;
  constructor(inputValue) {
    this.#cantFood = [];
    this.#validate(inputValue);
    this.#cantFood = this.#convert(inputValue);
  }

  #validate(inputValue) {
    if (!inputValue.includes(',') && inputValue !== '') {
      const validMenu = [];
      TYPE_MENU.forEach((menus, type) => {
        if (menus.includes(inputValue)) validMenu.push(true);
      });
      if (validMenu.length === 0)
        throw new Error(
          '[ERROR] 못 먹는 메뉴는 메뉴판에 있는 메뉴여야 합니다.',
        );
    }
    if (inputValue.includes(',')) {
      const convertStringToArr = inputValue.split(',');
      if (convertStringToArr.length > 2)
        throw new Error(
          '[ERROR] 못 먹는 메뉴는 최소 0개, 최대 2개여야 합니다.',
        );
      const validMenu = [];
      convertStringToArr.forEach((inputMenu) => {
        TYPE_MENU.forEach((menus, type) => {
          if (menus.includes(inputMenu)) validMenu.push(true);
        });
      });
      if (validMenu.length === 0)
        throw new Error(
          '[ERROR] 못 먹는 메뉴는 메뉴판에 있는 메뉴를 입력해야 합니다.',
        );
    }
  }

  #convert(inputValue) {
    if (inputValue.includes(',')) return inputValue.split(',');
    if (!inputValue.includes(',')) return [inputValue];
  }

  get result() {
    return this.#cantFood;
  }
}

export default CantFood;
