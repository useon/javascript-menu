## 점심 메뉴 추천

### 기능 구현 목록

-[x] 점심 메뉴 추천을 시작하는 문구를 출력한다.

-[x] 코치의 이름을 입력받는다.

-[x] 각 코치가 못 먹는 메뉴를 각각 입력받는다.

- 한 주에 같은 카테고리는 최대 2회까지만 고를 수 있다.
- 각 코치에게 한 주에 중복되지 않는 메뉴를 추천해야 한다.

-[x] 랜덤카테고리를 생성한다.

- 임의로 카테고리 순서 또는 데이터를 변경하면 안 된다.
- 같은 카테고리는 최대 2회 고를 수 있다.
- 추천할 수 없는 카테고리인 경우 다시 추천할 카테고리를 정해야 한다.

-[x] 추천할 메뉴를 생성한다.

- 임의의 순서 첫 번째 값을 사용해야 한다.
- 임의로 메뉴의 순서 또는 데이터를 변경하면 안 된다.
- 코치에게 추천할 메뉴를 정할 때 이미 추천한 메뉴, 먹지 못하는 메뉴도 포함된 리스트를 전달해야 한다.
- 추천할 수 없는 메뉴인 경우 다시 섞은 후 첫번째 값을 사용해야 한다.

-[] 메뉴를 추천하는 결과를 출력한다.

### 예외 상황

-[x] 입력된 코치의 수가 최소 2명, 최대 5명이 아닌 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

-[x] 입력된 코치의 이름이 최소 2글자, 최대 4글자가 아닌 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

-[x] 입력된 못 먹는 읍식의 수가 최소 0개, 최대 2개가 아닌 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

- 먹지 못하는 메뉴가 없으면 빈 값을 입력한다.
- 추천을 못하는 경우는 발생하지 않는다.
