"use strict";
/*
string
number
boolean
null, undefined   <- 타입으로 인식
symbol <- 절대 변경 불가한 값
bigint <- int 로 다루기 어려운 큰 숫자
*/
let a = 3;
a = 32.2;
// a = "asd" -> number 타입에 string을 넣을 수 없기 때문에 오류
function fu(n) {
    return n * 2;
}
console.log(fu(4));
// 문제 1번
let userName; // 예: 이름
let userAge; // 예: 나이
let isAdmin; // 예: 관리자 여부
userName = 'Alice';
userAge = 25;
isAdmin = true;
// 문제 2번 변수 선언과 초기값 지정
let productName = '예에'; // 상품 이름
let productPrice; // 상품 가격
productPrice = 2000;
let isAvailable = true; // 상품 재고 여부
// 예시 출력
console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);
// 문제 3번
const addNumbers = (a, b) => {
    return a + b;
};
console.log(addNumbers(5, 3));
// 문제 4번
function stringifyValue(value) {
    // 여기에 구현
    if (value == null || value == undefined) {
        return '값이 없습니다.';
    }
    return value;
}
// 함수 호출
console.log(stringifyValue('Hello')); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"
// 문제 5번
function compareValues(a, b) {
    if (a === b) {
        return '엄격한 동등성';
    }
    else if (a == b) {
        return '느슨한 동등성';
    }
    else {
        return '동등하지 않음';
    }
}
// 함수 호출 예시
console.log(compareValues(5, '5')); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 느슨한 동등성
console.log(compareValues(false, 0)); // 느슨한 동등성
console.log(compareValues(NaN, NaN)); // 동등하지 않음
console.log(compareValues(42, 42)); // 엄격한 동등성
// 문제 6번
function isPrimitive(value) {
    return Object(value) !== value;
}
// 함수 호출 예시
console.log(isPrimitive('Hello')); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
// 2강
const products = [
    ['Laptop', 1000, true],
    ['Shoes', 50, false],
    ['Book', 20, true],
];
// 1. 상품 이름과 가격만 반환,리턴타입 정의필요
function getProductNamesAndPrices(products) {
    // 여기에 구현
    return products.map((item) => [item[0], item[1]]);
}
// 2. 재고가 있는 상품만 반환,리턴타입 정의필요
function getAvailableProducts(products) {
    // 여기에 구현
    return products.filter((item) => item[2] === true);
}
// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]
console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]
//매개변수, 리턴 타입 정의 필요
function updateUser(user) {
    // 나이가 제공되지 않으면 18로 설정
    const result = Object.assign(Object.assign({}, user), { age: user.age ? user.age : 18 });
    return result;
}
// 테스트 코드
console.log(updateUser({ name: 'Charlie' })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: 'Dana', age: 25 })); // { name: "Dana", age: 25 }
// proudcts 타입정의  필요
const productsList = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Shoes', price: 50, category: 'Fashion' },
    { name: 'Book', price: 20 },
];
//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(bookCategory) {
    // 여기에 구현
    return productsList
        .filter(({ name, price, category }) => category === bookCategory)
        .map(({ name, price, category }) => name);
}
// 테스트 코드
console.log(getProductsByCategory('Electronics')); // ["Laptop"]
console.log(getProductsByCategory('Fashion')); // ["Shoes"]
console.log(getProductsByCategory('Books')); // []
