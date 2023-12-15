import Category from '../models/Category.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async progress() {
    OutputView.printStartMessage();
    const categoryArr = new Category().result;
    const coachNameArr = await InputView.readCoachNames();
  }
}

export default Controller;
