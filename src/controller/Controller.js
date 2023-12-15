import Category from '../models/Category.js';
import CoachName from '../models/CoachName.js';
import handlerErrorAndProceed from '../utils/handleErrorAndProceed.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async progress() {
    OutputView.printStartMessage();
    const categoryArr = new Category().result;
    const coachNameArr = await handlerErrorAndProceed(this.setCoachNameArr);
  }

  async setCoachNameArr() {
    const inputValue = await InputView.readCoachNames();
    return new CoachName(inputValue).result;
  }
}

export default Controller;
