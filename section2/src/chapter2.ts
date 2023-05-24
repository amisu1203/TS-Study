// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "su"];

// 제네릭 문법 사용
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소가 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 경우
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
// 배열 메서드가 사용가능하지만 에러를 띄우지 않으니 주의하면서 사용
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["박씨", 1],
  ["이씨", 2],
  ["김씨", 3],
];
// 배열에 들어가는 인덱스에 따라 들어가야할 값이 정해져 있을때 튜플을 사용하면 유용하다.
