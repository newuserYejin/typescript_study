/*
string
number
boolean
null, undefined   <- 타입으로 인식
symbol <- 절대 변경 불가한 값
bigint <- int 로 다루기 어려운 큰 숫자
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = 3;
a = 32.2;
// a = "asd" -> number 타입에 string을 넣을 수 없기 때문에 오류
function fu(n) {
    return n * 2;
}
console.log(fu(4));
// 문제 1번
var userName; // 예: 이름
var userAge; // 예: 나이
var isAdmin; // 예: 관리자 여부
userName = 'Alice';
userAge = 25;
isAdmin = true;
// 문제 2번 변수 선언과 초기값 지정
var productName = '예에'; // 상품 이름
var productPrice; // 상품 가격
productPrice = 2000;
var isAvailable = true; // 상품 재고 여부
// 예시 출력
console.log("\uC0C1\uD488\uBA85: ".concat(productName, ", \uAC00\uACA9: ").concat(productPrice, ", \uC7AC\uACE0 \uC5EC\uBD80: ").concat(isAvailable));
// 문제 3번
var addNumbers = function (a, b) {
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
var products = [
    ['Laptop', 1000, true],
    ['Shoes', 50, false],
    ['Book', 20, true],
];
// 1. 상품 이름과 가격만 반환,리턴타입 정의필요
function getProductNamesAndPrices(products) {
    // 여기에 구현
    return products.map(function (item) { return [item[0], item[1]]; });
}
// 2. 재고가 있는 상품만 반환,리턴타입 정의필요
function getAvailableProducts(products) {
    // 여기에 구현
    return products.filter(function (item) { return item[2] === true; });
}
// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]
console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]
//매개변수, 리턴 타입 정의 필요
function updateUser(user) {
    // 나이가 제공되지 않으면 18로 설정
    var result = __assign(__assign({}, user), { age: user.age ? user.age : 18 });
    return result;
}
// 테스트 코드
console.log(updateUser({ name: 'Charlie' })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: 'Dana', age: 25 })); // { name: "Dana", age: 25 }
// proudcts 타입정의  필요
var productsList = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Shoes', price: 50, category: 'Fashion' },
    { name: 'Book', price: 20 },
];
//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(bookCategory) {
    // 여기에 구현
    return productsList
        .filter(function (_a) {
        var name = _a.name, price = _a.price, category = _a.category;
        return category === bookCategory;
    })
        .map(function (_a) {
        var name = _a.name, price = _a.price, category = _a.category;
        return name;
    });
}
// 테스트 코드
console.log(getProductsByCategory('Electronics')); // ["Laptop"]
console.log(getProductsByCategory('Fashion')); // ["Shoes"]
console.log(getProductsByCategory('Books')); // []
