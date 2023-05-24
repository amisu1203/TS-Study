// 객체 리터럴 타입으로 정의
// ts : 구조를 기준으로 타입을 정의 한다 -> 구조적 타입 시스템 -> property based type system
// c언어/자바 : 이름을 기준으로 타입을 정의 -> 명목적 타입 시스템

// 선택적 프로퍼티
let user: { id?: number; name: string } = {
  id: 1,
  name: "su",
};
user = {
  // id 값이 없어도 되고 있으면 반드시 number
  name: "홍길동",
};

// 읽기전용 프로퍼티
let config: { readonly apikey: string } = {
  apikey: "api key",
};
