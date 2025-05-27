let b: { name: string; age?: number } = { name: 'nooona' };
let c: { name: string; age: number } = { name: 'nooona', age: 23 };

// interface 와 type

interface IStudent {
  // 객체만 가능
  name: string;
  age?: number;
  isStudent: boolean;
}

type TStudent = {
  // 객체와 원시 타입, 튜플 모두 가능
  name: string;
  age?: number;
  isStudent: boolean;
};

let d: IStudent = { name: 'ho', isStudent: false };
let e: TStudent = { name: 'ho', isStudent: false };

// interface의 장점
// 1. 확장관계가 잘 보인다. (extends로 명시적)

// 확장예시 interface
interface IPerson {
  name: string;
  age: number;
}

interface IForeigner extends IPerson {
  nationality: string;
}

//  확장 예시 type (&)
type TForeigner = IPerson & { nationality: string; period: Date };

// 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요.

// 인터페이스 작성
interface IUser {
  id: number;
  name: string;
  email?: string;
}

// 타입 작성
type TUser = {
  id: number;
  name: string;
  email?: string;
};

const user: IUser = {
  id: 1,
  name: 'Alice',
};

const userWithEmail: TUser = {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com',
};

// 문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요.

// User 타입을 작성하세요.
type TUser2 = {
  id: number;
  name: string;
  address: { city: string; zipCode: number };
};
// User 타입을 사용하여 아래 객체를 작성하세요.
const user2: TUser2 = {
  id: 1,
  name: 'Alice',
  address: {
    city: 'Seoul',
    zipCode: 12345,
  },
};

// 문제 3. 아래 조건에 따라 인터페이스를 확장하세요.

/*
- 기본적으로 사용자 정보를 나타내는 User 인터페이스를 만드세요. (id, name, email?)

- 관리자 정보를 나타내는 Admin 인터페이스를 만들되, User 인터페이스를 확장하세요. 관리자는 추가적으로 role 속성을 가집니다. (role: 문자열)
작성한 뒤, 사용자와 관리자를 나타내는 객체를 만드세요.
*/

// User 인터페이스 작성
interface IUser3 {
  id: number;
  name: string;
  email?: string;
}

// Admin 인터페이스 작성 (User 확장)
interface Admin extends IUser3 {
  role: string;
}

const normalUser: IUser3 = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

const adminUser: Admin = {
  id: 2,
  name: 'Bob',
  role: 'Administrator',
};

// 문제 4. 아래 조건에 따라 type을 확장하세요.

/*
- 기본적으로 상품 정보를 나타내는 Product 타입을 만드세요. (id, name, price)

- 할인 정보를 나타내는 DiscountedProduct 타입을 만드세요. Product를 확장하되, 추가적으로 discount 속성을 가집니다. (discount: 숫자, 퍼센트 값)
작성한 뒤, 일반 상품과 할인 상품 객체를 만드세요.
*/

// Product 타입 작성
type TProduct = {
  id: number;
  name: string;
  price: number;
};

// DiscountedProduct 타입 작성 (Product 확장)
type TDiscountedProduct = TProduct & { discount: number };

const normalProduct: TProduct = {
  id: 1,
  name: 'Laptop',
  price: 1000,
};

const discountedProduct: TDiscountedProduct = {
  id: 2,
  name: 'Smartphone',
  price: 800,
  discount: 10,
};

// 문제 5.아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.

/*
- 상품(Product)은 다음 속성을 가집니다:
  id: 숫자
  name: 문자열
  price: 숫자

- 주문(Order)은 다음 속성을 가집니다:
  orderId: 숫자
  products: Product 타입 배열
  totalPrice: 숫자
*/

// Product 타입 작성
type TProduct5 = {
  id: number;
  name: string;
  price: number;
};

// Order 타입 작성
type TOrder = {
  orderId: number;
  products: TProduct5[];
  totalPrice: number;
};

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order: TOrder = {
  orderId: 101,
  products: [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mouse', price: 50 },
  ],
  totalPrice: 1050,
};

// 문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.

/*
- BaseUser라는 인터페이스를 작성하세요:
  id: 숫자
  name: 문자열

  - AdminUser라는 타입을 작성하세요:
  BaseUser를 확장합니다.
  추가로 role: 문자열을 포함합니다.

  - GuestUser라는 타입을 작성하세요:
  BaseUser를 확장합니다.
  추가로 visitCount: 숫자를 포함합니다.
*/

// BaseUser 인터페이스 작성
interface BaseUser {
  id: number;
  name: string;
}

// AdminUser 타입 작성
type AdminUser = BaseUser & { role: string };

// GuestUser 타입 작성
type GuestUser = BaseUser & { visitCount: number };

// 아래 객체를 작성하세요.
const admin: AdminUser = {
  id: 1,
  name: 'Alice',
  role: 'Administrator',
};

const guest: GuestUser = {
  id: 2,
  name: 'Bob',
  visitCount: 5,
};
