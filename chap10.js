"use strict";
// 제네릭 타입 : 타입을 변수 처럼 쓴다.
// 내가 사용(호출)하며 타입을 지정하면 그때 타입이 결정된다.
const numberArray = [1, 2, 3];
const stringArray = ['1', '2'];
function getValue(data) {
    console.log(data.length);
}
console.log(getValue('hello'));
// console.log(getValue(2));
console.log(getValue([1, 2, 5]));
