const { Random } = require('@woowacourse/mission-utils');

class MenuRecommend {
  #category = [];
  #coustomRecommend = new Map();

  MENU = {
    일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
    한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
    중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
    아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
    양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
  };

  createCategory() {
    const categories = Object.keys(this.MENU);
    const categoryArr = [];
    while (categoryArr.length !== 5) {
      let count = 0;
      const randomNumber = Random.pickNumberInRange(1, 5);
      for (let index = 0; index < categoryArr.length; index++) {
        if (categoryArr[index] === randomNumber) count += 1;
      }
      if (count < 2) categoryArr.push(randomNumber);
    }
    categoryArr.map((number, index) => {
      categoryArr[index] = categories[number - 1];
    });
    this.#category = categoryArr;
    return this.#category;
  }

  createMenu(dislickFood) {
    const excludeMenu = dislickFood;
    const customMenu = [];

    this.#category.map((category) => {
      const menuArr = this.MENU[category].split(',');
      const menuNumberArr = [];
      for (let i = 0; i < menuArr.length; i++) {
        menuNumberArr.push(i);
      }
      let randomMenuNumber = Random.shuffle(menuNumberArr)[0];
      if (excludeMenu.includes(menuArr[randomMenuNumber])) {
        while (true) {
          randomMenuNumber = Random.shuffle(menuNumberArr)[0];
          if (!excludeMenu.includes(menuArr[randomMenuNumber])) {
            customMenu.push(menuArr[randomMenuNumber]);
            excludeMenu.push(menuArr[randomMenuNumber]);
            break;
          }
        }
      } else {
        customMenu.push(menuArr[randomMenuNumber]);
        excludeMenu.push(menuArr[randomMenuNumber]);
      }
    });
    return customMenu;
  }
}

module.exports = MenuRecommend;
