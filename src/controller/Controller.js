import Coach from '../models/Coach.js';
import InfoCoach from '../models/InfoCoach.js';
import handlerErrorAndProceed from '../utils/handleErrorAndProceed.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  constructor() {}

  async progress() {
    OutputView.printWelcomeMessage();
    const coachNames = await handlerErrorAndProceed(Controller.setCoachNames);
    const coachData = await handlerErrorAndProceed(
      Controller.setCantFood,
      coachNames,
    );
    console.log(coachData);
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
    return data;
  }
}

export default Controller;
