import Category from '../models/Category.js';
import Coach from '../models/Coach.js';
import InfoCoach from '../models/InfoCoach.js';
import Recommendor from '../models/Recommendor.js';
import handlerErrorAndProceed from '../utils/handleErrorAndProceed.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  constructor() {}

  async progress() {
    OutputView.printWelcomeMessage();
    const coachNamesArr = await handlerErrorAndProceed(
      Controller.setCoachNames,
    );
    const coachDataMap = await handlerErrorAndProceed(
      Controller.setCantFood,
      coachNamesArr,
    );
    const categoryArr = new Category().result;
    const recommendMenuMap = new Recommendor(coachDataMap, categoryArr).result;
  }

  static async setCoachNames() {
    const inputValue = await InputView.readCoachName();
    return new Coach(inputValue).result;
  }

  static async setCantFood(coachNames) {
    const data = [];
    for (const name of coachNames) {
      const inputValue = await InputView.readCantFood(name);
      data.push(new InfoCoach(name, inputValue).result);
    }
    return new Map(data);
  }
}

export default Controller;
