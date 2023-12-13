import handlerErrorAndProceed from '../utils/handleErrorAndProceed.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  constructor() {}

  async progress() {
    OutputView.printWelcomeMessage();
    const coachNames = await Controller.setCoachNames();
  }

  static async setCoachNames() {
    const inputValue = await InputView.readCoachName();
    return inputValue;
  }
}

export default Controller;
