"use strict";
// 제네릭 활용
const Movie1 = { title: '기생충', genre: '액션' };
const Movie2 = { rate: 4 };
const pair = {
    first: 'noona',
    second: 2,
    display() {
        console.log(this.first + '는 ' + this.second + '살');
    },
};
pair.display();
// 1번. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다.
/*
1.함수 이름: getFirstElement
2.입력: 제네릭 배열
3.출력: 배열의 첫 번째 요소
*/
// 매개변수, 리턴타입 정의 필요
function getFirstElement(array) {
    // 여기에 구현
    return array[0];
}
// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(['a', 'b', 'c'])); // "a"
console.log(getFirstElement([])); // undefined
// 2번. 숫자 배열인지 문자열 배열인지 확인하는 함수를 작성하세요.
/*
함수 이름: isNumberArray
입력: 제네릭 배열
출력:
  배열이 숫자 배열이면 true.
  그렇지 않으면 false.
*/
// 매개변수, 리턴타입 정의 필요
function isNumberArray(array) {
    // 여기에 구현
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            return false;
        }
    }
    return true;
}
// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(['a', 'b', 'c'])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)
// 조건부 타입을 활용한 함수
function checkArrayType(value) {
    // 여기에 작성
    if (Array.isArray(value)) {
        return 'This is an array.';
    }
    else {
        return 'This is not an array.';
    }
}
// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType('Hello')); // "This is not an array."
console.log(checkArrayType({ key: 'value' })); // "This is not an array."
// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }
// 5. 키와 값을 받아 객체를 생성하는 함수를 작성하세요.
/*
함수 이름: createObject

입력:
  key: 키 (제네릭 타입 K)
  alue: 값 (제네릭 타입 V)
  출력: { key: value } 형태의 객체
*/
// function createObject<K, V>(key: K, value: V): {[P in K]: V}{
//   // 여기에 구현
//   return {[key] : value} as {[P in K] : V};
// }
function createObject(key, value) {
    return { [key]: value };
}
// 테스트 코드
console.log(createObject('id', 123)); // { id: 123 }
console.log(createObject('name', 'Alice')); // { name: "Alice" }
// 6. 사용자 정보를 나타내는 객체 배열에서 특정 속성만 추출하는 함수를 작성하세요.
/*
함수 이름: pluck

입력:
  객체 배열: 제네릭 타입 배열
  속성 이름: 제네릭 타입
  출력: 속성 값 배열
*/
// 매개변수, 리턴 타입 정의 필요
// k가 T 내부에 있다는 제한 조건이 필요한기 때문에 K extends keyof T
function pluck(array, key) {
    return array.map((item) => item[key]);
}
// 테스트 코드
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];
console.log(pluck(users, 'id')); // [1, 2]
console.log(pluck(users, 'name')); // ["Alice", "Bob"]
