import Category from '../models/Category.js';
import CoachName from '../models/CoachName.js';
import handlerErrorAndProceed from '../utils/handleErrorAndProceed.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async progress() {
    OutputView.printStartMessage();
    const categoryArr = new Category().result;
    const coachNameArr = await handlerErrorAndProceed(this.#setCoachNameArr);
    const cantFoodMap = await this.#setTotalCantFoodMap(coachNameArr);
  }

  async #setCoachNameArr() {
    const inputValue = await InputView.readCoachNames();
    return new CoachName(inputValue).result;
  }

  async #setTotalCantFoodMap(coachNameArr) {
    const totalCantFoodMap = new Map();
    for (const name of coachNameArr) {
      const cantFoodArr = await this.#setCantFoodArr(name);
      totalCantFoodMap.set(name, cantFoodArr);
    }
    return totalCantFoodMap;
  }

  async #setCantFoodArr(name) {
    const inputValue = await InputView.readCantFood(name);
    return inputValue;
  }
}

export default Controller;
