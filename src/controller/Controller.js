import OutputView from '../views/OutputView.js';

class Controller {
  async progress() {
    OutputView.printStartMessage();
  }
}

export default Controller;
