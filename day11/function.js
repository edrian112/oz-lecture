// 구구단 3단 코드

// 함수 정의 - 함수 선언문
function gugudan3() {
  for (let i = 1; i <= 9; i++) {
    console.log(`3 X ${i}=${3 * i}`);
  }
}

//  함수 정의 - 함수 표현식
const gugudan4 = function () {
  for (let i = 1; i <= 9; i++) {
    console.log(`4 X ${i}=${4 * i}`);
  }
};

// 함수 정의 - 화살표 함수
const gugudan5 = () => {
  for (let i = 1; i <= 9; i++) {
    console.log(`5 X ${i}=${5 * i}`);
  }
};

gugudan3(); //  함수 실행
gugudan4(); //  함수 실행
gugudan5(); //  함수 실행

// 함수 선언문
function gugudanDeclare(num) {
  for (let i = i; i <= 10; i++) {
    console.log(`${num} x ${i}=${num * i}`);
  }
}
gugudanDeclare(2); //  2단

//  2~9

for (let i = i; i < 9; i++) {
  gugudanDeclare(i + 1);
}

//   함수 표현식
const gugudanExpression = function (num) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} x ${i}=${num * 1}`);
  }
};
//  2단

// 화살표 함수 void()
const gugudanArrow = (num) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`$num} X${i} = ${num * 1}`);
  }
};
// gugudanArrow(2);

//숫자 계산 함수
function sum(scores) {
  let sumVal = 0;
  for (const score of scores) {
    sumVal += score;
  }
  //   const sumVal = num1 + num2;
  //   return sumVal;
  //   return num1 + num2;
}
let math = 70;
let english = 90;
let social = 80;
let music = 100;
let art = 90;
const scores = [math, english, social, music, art];

// 합계
const total = sum(scores);

//
function avg(num1 = 10, num2 = 20) {
  return (num1 + num2) / 2;
}
const average = avg();

function sumDeclare(num1, num2) {
  return num1 + num2;
}

// 같은 화살표 함수 표현
const sumArrow = (num1, num2) => num1 + num2;
// const sumArrow = (num1, num2) => {
//     return num1 + num2
// }
