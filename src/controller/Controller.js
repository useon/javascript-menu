import CantFood from '../models/CantFood.js';
import Category from '../models/Category.js';
import CoachName from '../models/CoachName.js';
import Recommendator from '../models/Recommendator.js';
import handlerErrorAndProceed from '../utils/handleErrorAndProceed.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async progress() {
    OutputView.printStartMessage();
    const categoryArr = new Category().result;
    const coachNameArr = await handlerErrorAndProceed(this.#setCoachNameArr);
    const cantFoodMap = await this.#setTotalCantFoodMap(coachNameArr);
    const totalRecommendationMap = await this.#setTotalRecommendation(
      categoryArr,
      coachNameArr,
      cantFoodMap,
    );
    OutputView.printRecommendation(categoryArr, totalRecommendationMap);
  }

  async #setCoachNameArr() {
    const inputValue = await InputView.readCoachNames();
    return new CoachName(inputValue).result;
  }

  async #setTotalCantFoodMap(coachNameArr) {
    const totalCantFoodMap = new Map();
    for (const name of coachNameArr) {
      const cantFoodArr = await handlerErrorAndProceed(
        this.#setCantFoodArr,
        name,
      );
      totalCantFoodMap.set(name, cantFoodArr);
    }
    return totalCantFoodMap;
  }

  async #setCantFoodArr(name) {
    const inputValue = await InputView.readCantFood(name);
    return new CantFood(inputValue).result;
  }

  async #setTotalRecommendation(categoryArr, coachNameArr, cantFoodMap) {
    const totalRecommendationMap = new Map();
    coachNameArr.forEach((coachName) => {
      const recommendation = new Recommendator(
        categoryArr,
        coachName,
        cantFoodMap.get(coachName),
      ).result;
      totalRecommendationMap.set(coachName, recommendation);
    });
    return totalRecommendationMap;
  }
}

export default Controller;
