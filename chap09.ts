// 유니온 타입의 단점 : 타입이 섞여들어가도  error가 발생하지 않는다.
// const result4: Track4 | Artist4 = {
//   title: 'hey',
//   releaseDate: '2025',
//   name: '누나',
//   debutDate: '2026',
// };

type Track4 = {
  // 해결방법 : 식별하는 유니온 (식별자)
  type: 'track'; // 리터럴 타입으로 지정
  title: string;
  releaseDate: string;
};

type Artist4 = {
  type: 'artist';
  name: string;
  debutDate: string;
};

const result4: Track4 | Artist4 = {
  type: 'track',
  title: 'hey',
  releaseDate: '2025',
};

// 유니온 타입의 단점 받아드리는 타입이 늘어날 수록 각각의 처리가 필요
interface Radio {
  type: 'radio';
  title: string;
  numberOfSongs: number;
}

type SearchResult4 = Track4 | Artist4 | Radio;

function getTypeName(result: SearchResult4) {
  if (result.type === 'track') return '트랙';
  else if (result.type === 'artist') return '아티스트';
  else if (result.type === 'radio') return 'radio';
  // 따로 구분을 추가하지 않을 시 Radio를 지나칠수 있다.
  else {
    exhaustiveCheck(result);
    return '결과';
  }
}

// 처리 안 한 내용을 확인하기 위해 매개변수 never 타입의 함수를 else와 같은 곳에 둬서 완전성 체크를 한다.
function exhaustiveCheck(param: never) {
  throw new Error('error');
}

// 1번. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.

/*
입력은 다음 세 가지 형태 중 하나입니다:

  숫자 배열: 배열의 합계를 반환합니다.
  문자열 배열: 배열의 모든 문자열을 연결한 결과를 반환합니다.
  객체 { message: string }: message 속성을 대문자로 변환한 문자열을 반환합니다.
*/

// 매개변수, 리턴타입 정의필요

// 이걸 쓰려면 테스트 코드 변경 필요
// type messageType = {
//   type: 'message';
//   message: string;
// };

type messageType = {
  message: string;
};

type InputType = number[] | string[] | messageType;

function processInput(input: InputType): number | string {
  // 여기에 작성
  if (Array.isArray(input)) {
    if (typeof input[0] === 'number') {
      return (input as number[]).reduce((total, num) => total + num, 0);
    } else if (typeof input[0] === 'string') {
      return (input as string[]).join('');
    }
  } else if ('message' in input) {
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
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

class Bike {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}

// 여기에 작성

function processVehicle(vehicle: Car | Bike): string {
  // 여기에 구현
  if (vehicle instanceof Car) {
    return vehicle.brand.toUpperCase();
  } else if (vehicle instanceof Bike) {
    return `Bike: ${vehicle.type}`;
  }

  throw new Error('새로운 타입');
}

// 테스트 코드
const myCar = new Car('Tesla');
const myBike = new Bike('Mountain');

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
// console.log(processVehicle('unknown')); // 에러 발생

// 3번. in을 활용한 사용자 관리

/*
1. 시스템에는 두 종류의 사용자가 있습니다:

  Admin 사용자: { type: "admin"; permissions: string[] }
  User 사용자: { type: "user"; email: string }

2. processUser라는 함수를 작성하세요. 함수는 입력으로 Admin 또는 User 객체를 받아 다음과 같이 처리합니다:

  Admin: 권한 목록(permissions)을 ,로 연결한 문자열을 반환합니다.
  User: 이메일 주소(email)을 반환합니다.
*/

type Admin = { type: 'admin'; permissions: string[] };
type User = { type: 'user'; email: string };

function processUser(user: Admin | User): string {
  // 여기에 작성
  if (user.type === 'admin') return user.permissions.join(',');
  else if (user.type === 'user') return user.email;

  throw new Error('새로운 타입');
}

// 테스트 코드
console.log(processUser({ type: 'admin', permissions: ['read', 'write'] })); // "read,write"
console.log(processUser({ type: 'user', email: 'user@example.com' })); // "user@example.com"
// console.log(processUser({ type: 'guest' })); // 에러 발생

// 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요:

/*
Rectangle 객체: { width: number; height: number }
Circle 객체: { radius: number }

함수는 다음 규칙에 따라 동작합니다:

  Rectangle이면 넓이를 반환합니다. (가로 × 세로)
  Circle이면 넓이를 반환합니다. (π × 반지름²)
*/

type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  // 여기에 작성
  return (shape as Rectangle).width !== undefined;
}

function calculateArea(shape: Rectangle | Circle): number {
  // 여기에 작성
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  } else {
    return Math.PI * shape.radius ** 2;
  }
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

// 5번. 유니온 타입의 문제점과 해결 방법

/*
유니온 타입의 문제점
아래와 같은 두 가지 유니온 타입을 처리하는 함수가 있습니다:

  Square: { type: "square"; side: number }
  Circle: { type: "circle"; radius: number }
  calculateArea라는 함수는 두 타입의 넓이를 계산하려고 하지만, 유니온 타입을 제대로 처리하지 않고 사용할 경우 런타임 에러가 발생할 가능성이 생길 수 있다. 이를 해결 방법을 작성하세요.

해결 방법:

식별 가능한 유니온(type 속성)을 사용하여 타입을 안전하게 좁히는 코드를 작성하세요.
exhaustiveness check를 추가하여, 새로운 타입이 추가되더라도 타입 안정성을 유지하도록 구현하세요.
*/

type Square5 = { type: 'square'; side: number };
type Circle5 = { type: 'circle'; radius: number };

type Shape = Square5 | Circle5;

// 넓이를 계산하는 함수
function calculateArea5(shape: Shape): number {
  // 여기에 구현
  if (shape.type === 'square') return shape.side ** 2;
  else if (shape.type === 'circle') return Math.PI * shape.radius ** 2;
  else {
    exhaustiveCheck5(shape);
    return 0;
  }
}

function exhaustiveCheck5(input: never) {
  throw new Error('분기점 없는 타입');
}

// 테스트 코드
console.log(calculateArea5({ type: 'square', side: 5 })); // 기대 출력: 25
console.log(calculateArea5({ type: 'circle', radius: 7 })); // 기대 출력: 153.93804002589985
