type Track = {
  title: string;
  releaseDate: string;
};

type Artist = {
  name: string;
  releaseDate: string;
};

type SearchResult = Track | Artist;

interface SearchResponse {
  searchResult: Track | Artist;
}

let result: SearchResult[] = [
  { title: 'hello', releaseDate: '2024' },
  { name: 'hello', releaseDate: '2025' },
];

// union으로 생성시 생길 수 있는 문제

// function getName(result:Track | Artist){
//   return result.name    // Track에는 name이 없기 때문에 오류 발생 ==> 타입 좁히기가 필요
// }

// 타입 좁히기 1 - typeof

type SearchType = number | string;

function searchByKeyword(keyword: SearchType): string {
  // 넘버로 들어왔을땐 스트링으로 바꿔주기
  if (typeof keyword === 'number') return keyword.toString();

  return keyword;
}

// 단점. typeof는 원시 탑입만 잡아낼 수 있다.

// 2. instanceof - 객체 타입 분별 가능 단, js에 내장 된것만 가능

type Period = {
  start: string;
  end: string;
};

type SearchType2 = Period | Date; // Date 는 이미 js에 내장된 타입

function getDate(day: SearchType2): Date {
  if (day instanceof Date) return day;
  return new Date(day.start);
}

getDate({ start: '2024-01-01', end: '' });

// 3. in --> 직접 만든 타입 분별
type Track3 = {
  title: string;
  releaseDate: string;
};

type Artist3 = {
  name: string;
  releaseDate: string;
};

function getName3(result: Track3 | Artist3) {
  if ('title' in result) return result.title;
  return result.name; // Track에는 name이 없기 때문에 오류 발생 ==> 타입 좁히기가 필요
}

// 4. is --> 타입 가드 함수

// function 타입가드(변수:any):변수 is 특정타입{
//   return 조건식
// }

// 이 함수를 총해 나온 결과는 무조건 Track이다. 를 is로 보장
function IsTrack(result: Track3 | Artist3): result is Track {
  // as를 이용해서 result가 Track이라고 가정
  return (result as Track3).title !== undefined;
}

function IsArtist(result: Track3 | Artist3): result is Artist3 {
  return (result as Artist3).name !== undefined;
}

function printInfo(result: Track3 | Artist3) {
  if (IsTrack(result)) {
    console.log(result.title);
  } else if (IsArtist(result)) {
    console.log(result.name);
  }
}
