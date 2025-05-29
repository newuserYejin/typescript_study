// 제네릭 타입 : 타입을 변수 처럼 쓴다.

type ArrayType<T> = T[]; // <내부> => 이렇게 생긴걸 제네릭 차입이라 한다.

// 내가 사용(호출)하며 타입을 지정하면 그때 타입이 결정된다.

const numberArray: ArrayType<number> = [1, 2, 3];
const stringArray: ArrayType<string> = ['1', '2'];

// 제네릭 가장 많이 사용되는 경우 : api 결과 받을때

type ApiResponse<T> = {
  status: string;
  totalPage: number;
  totalResult: number;
  page: number;
  data: T[];
};

type Category = {
  name: string;
};

type CategoryResponse = ApiResponse<Category>;

type MovieResponse = ApiResponse<{ title: string; genre: string }>;

interface le {
  length: number;
}

function getValue<T extends le>(data: T) {
  console.log(data.length);
}

console.log(getValue('hello'));
// console.log(getValue(2));
console.log(getValue([1, 2, 5]));
