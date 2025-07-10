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
