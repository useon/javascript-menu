import Controller from './controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  play() {
    this.controller.progress();
  }
}

export default App;

const app = new App();
app.play();
