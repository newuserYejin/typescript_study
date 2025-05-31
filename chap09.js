"use strict";
// 유니온 타입의 단점 : 타입이 섞여들어가도  error가 발생하지 않는다.
// const result4: Track4 | Artist4 = {
//   title: 'hey',
//   releaseDate: '2025',
//   name: '누나',
//   debutDate: '2026',
// };
const result4 = {
    type: 'track',
    title: 'hey',
    releaseDate: '2025',
};
function getTypeName(result) {
    if (result.type === 'track')
        return '트랙';
    else if (result.type === 'artist')
        return '아티스트';
    else if (result.type === 'radio')
        return 'radio';
    // 따로 구분을 추가하지 않을 시 Radio를 지나칠수 있다.
    else {
        exhaustiveCheck(result);
        return '결과';
    }
}
// 처리 안 한 내용을 확인하기 위해 매개변수 never 타입의 함수를 else와 같은 곳에 둬서 완전성 체크를 한다.
function exhaustiveCheck(param) {
    throw new Error('error');
}
function processInput(input) {
    // 여기에 작성
    if (Array.isArray(input)) {
        if (typeof input[0] === 'number') {
            return input.reduce((total, num) => total + num, 0);
        }
        else if (typeof input[0] === 'string') {
            return input.join('');
        }
    }
    else if ('message' in input) {
        // 이렇게 했을때 message 뿐만이 아니라 다른것도 같이 있으면 어쩌지? ==> type:"message" 추가
        return input.message.toUpperCase();
    }
    throw new Error('분기가 없는 타입');
}
// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(['hello', 'world'])); // "helloworld"
console.log(processInput({ message: 'TypeScript' })); // "TYPESCRIPT"
// console.log(processInput(42)); // 에러 발생 (애초에 받아드릴 수 없도록해뒀기 때문에 에러발생)
// 2번. 다음 조건을 만족하는 코드를 작성하세요.
/*
1. 아래와 같은 두 개의 클래스를 정의합니다:

  Car 클래스: brand(브랜드 이름, 문자열) 속성을 가집니다.
  Bike 클래스: type(바이크 종류, 문자열) 속성을 가집니다.

2. 입력값이 Car 또는 Bike의 인스턴스일 수 있는 vehicle을 받아 다음 규칙에 따라 처리하는 함수를 작성하세요:

  Car이면 브랜드 이름을 대문자로 반환합니다.
  Bike이면 바이크 종류 앞에 "Bike: "를 추가하여 반환합니다.
*/
// 클래스 정의
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}
class Bike {
    constructor(type) {
        this.type = type;
    }
}
// 여기에 작성
function processVehicle(vehicle) {
    // 여기에 구현
    if (vehicle instanceof Car) {
        return vehicle.brand.toUpperCase();
    }
    else if (vehicle instanceof Bike) {
        return `Bike: ${vehicle.type}`;
    }
    throw new Error('새로운 타입');
}
// 테스트 코드
const myCar = new Car('Tesla');
const myBike = new Bike('Mountain');
console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
function processUser(user) {
    // 여기에 작성
    if (user.type === 'admin')
        return user.permissions.join(',');
    else if (user.type === 'user')
        return user.email;
    throw new Error('새로운 타입');
}
// 테스트 코드
console.log(processUser({ type: 'admin', permissions: ['read', 'write'] })); // "read,write"
console.log(processUser({ type: 'user', email: 'user@example.com' })); // "user@example.com"
// 사용자 정의 타입 가드
function isRectangle(shape) {
    // 여기에 작성
    return shape.width !== undefined;
}
function calculateArea(shape) {
    // 여기에 작성
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    else {
        return Math.PI * shape.radius ** 2;
    }
}
// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)
// 넓이를 계산하는 함수
function calculateArea5(shape) {
    // 여기에 구현
    if (shape.type === 'square')
        return shape.side ** 2;
    else if (shape.type === 'circle')
        return Math.PI * shape.radius ** 2;
    else {
        exhaustiveCheck5(shape);
        return 0;
    }
}
function exhaustiveCheck5(input) {
    throw new Error('분기점 없는 타입');
}
// 테스트 코드
console.log(calculateArea5({ type: 'square', side: 5 })); // 기대 출력: 25
console.log(calculateArea5({ type: 'circle', radius: 7 })); // 기대 출력: 153.93804002589985
