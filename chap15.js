// extends
var result15 = {
    title: 'hey',
    releaseDate: '2024',
};
function getUserInfo() {
    return { name: 'ali', age: 25 };
}
// as ==> 강제로 타입추론
var someValue = 'Hello';
// console.log(someValue.length);
var newValue = someValue;
console.log(newValue.length);
// 2번. 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수를 작성하세요.
/*
요구사항:
  객체 타입과 키를 동적으로 받아, 해당 키에 해당하는 값을 반환하는 함수.
  주어진 키가 객체에 반드시 존재한다는 조건에서 작동합니다.
  타입스크립트는 동적 키를 사용하는 상황에서 기본적으로 안전성을 보장하지 않으므로, as를 사용해야 합니다.
*/
function getValue(obj, key) {
    return obj[key];
}
// 테스트 코드
var user15 = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
};
console.log(getValue(user15, 'name')); // 기대 출력: "Alice"
console.log(getValue(user15, 'email')); // 기대 출력: "alice@example.com"
// 3번. API 요청에서 들어오는 데이터의 형식에 따라 처리 로직이 달라집니다. 요청 타입에 따라 처리할 수 있는 데이터의 타입을 결정하세요.
/*
요구사항:

  요청 타입: "text", "json", "binary".
  각 요청 타입에 따른 데이터 형식:
    "text" → string.
    "json" → Record<string, any> (객체).
    "binary" → Uint8Array (바이너리 데이터).
  타입 이름: RequestData<T>.
  요청 타입 T에 따라 위 데이터 형식을 반환.

함수 작성:

  함수 이름: processRequest.
  입력: 요청 타입(T)과 데이터(RequestData<T>).
  출력: 데이터 처리 결과 (단순히 "Processed: [data]" 형태로 반환).
 */
//   type RequestData<T> = /* 여기에 작성 */;
// function processRequest<T extends "text" | "json" | "binary">(
//   type: T,
//   data: RequestData<T>
// ): string {
//   // 여기에 구현
// }
// // 테스트 코드
// console.log(processRequest("text", "Hello")); // "Processed: Hello"
// console.log(processRequest("json", { key: "value" })); // "Processed: [object Object]"
// console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
