"use strict";
// extends
const result15 = {
    title: 'hey',
    releaseDate: '2024',
};
function getUserInfo() {
    return { name: 'ali', age: 25 };
}
// as ==> 강제로 타입추론
let someValue = 'Hello';
// console.log(someValue.length);
let newValue = someValue;
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
const user15 = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
};
console.log(getValue(user15, 'name')); // 기대 출력: "Alice"
console.log(getValue(user15, 'email')); // 기대 출력: "alice@example.com"
function processRequest(type, data) {
    // 여기에 구현
    switch (type) {
        case 'text':
            return `Processed: ${data}`;
        case 'json':
            return `Processed: ${JSON.stringify(data)}`;
        case 'binary':
            return `Processed: ${data.join(',')}`;
        default:
            throw new Error('에러 발생');
    }
}
// 테스트 코드
console.log(processRequest('text', 'Hello')); // "Processed: Hello"
console.log(processRequest('json', { key: 'value' })); // "Processed: [object Object]"
console.log(processRequest('binary', new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
