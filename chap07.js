"use strict";
let result = [
    { title: 'hello', releaseDate: '2024' },
    { name: 'hello', releaseDate: '2025' },
];
function searchByKeyword(keyword) {
    // 넘버로 들어왔을땐 스트링으로 바꿔주기
    if (typeof keyword === 'number')
        return keyword.toString();
    return keyword;
}
function getDate(day) {
    if (day instanceof Date)
        return day;
    return new Date(day.start);
}
getDate({ start: '2024-01-01', end: '' });
function getName3(result) {
    if ('title' in result)
        return result.title;
    return result.name; // Track에는 name이 없기 때문에 오류 발생 ==> 타입 좁히기가 필요
}
// 4. is --> 타입 가드 함수
// function 타입가드(변수:any):변수 is 특정타입{
//   return 조건식
// }
// 이 함수를 총해 나온 결과는 무조건 Track이다. 를 is로 보장
function IsTrack(result) {
    // as를 이용해서 result가 Track이라고 가정
    return result.title !== undefined;
}
function IsArtist(result) {
    return result.name !== undefined;
}
function printInfo(result) {
    if (IsTrack(result)) {
        console.log(result.title);
    }
    else if (IsArtist(result)) {
        console.log(result.name);
    }
}
