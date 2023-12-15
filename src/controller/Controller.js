import Category from '../models/Category.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async progress() {
    OutputView.printStartMessage();
    const categoryArr = new Category().result;
  }
}

export default Controller;
