const a = 1;

// 전역 모듈로 받아들여지기 때문에
// 블록 범위 변수 'a'을(를) 다시 선언할 수 없습니다. 에러
// 첫번째 해결은 export,import 모듈 키워드 사용
// 독립된 모듈로 인지하게 됨 에러 X
// 두번째 해결은 tsconfig.jsondml moduleDetection설정force로

// tsconfig.jsondml module이 ESnext인 상태로
// ts/node src/index.ts를 실행하면
// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// 이런에러가뜸 따라서 package.json을 설정해줌 하지만 에러 어겐
// Unknown file extension ".ts" ts 자체를 못 읽음
// 이부부은 우리가 module 설정이 ESnext라서 그럼
// tsconfig.json에서 ts-node : {esm:true}로 설정
