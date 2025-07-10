const MAX_STARS = 10; // 최대 별 개수 (상수 선언)

// 사용자 입력 변수
let inputStr;
let input = Number(inputStr);

// 유효성 검사
while (true) {
  console.log(`Enter the number of stars (1-${MAX_STARS})`);
  inputStr = prompt(`Enter the number of stars (1-${MAX_STARS})`);
  input = Number(inputStr);

  if (!isNaN(input) && input >= 1 && input <= MAX_STARS) {
    break;
  } else {
    console.log(
      `[입력: ${inputStr}] Invalid input! Enter a number between 1 and ${MAX_STARS}.`
    );
    continue;
  }
}

// ⭐ 기본 과제: 입력한 수만큼 별 출력 함수
function printStars(count = 1) {
  var stars = ""; // var 사용
  for (let i = 0; i < count; i++) {
    stars += "*";
  }
  console.log(`[입력: ${count}] ${stars}`);
}

// ⭐ 도전과제 1️⃣: 역순 별 출력 (함수 표현식)
const printReverseStars = function (count) {
  console.log(`===== 역순 별 출력 (${count}) =====`);
  for (let i = count; i >= 1; i--) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
};

// ⭐ 도전과제 2️⃣: 정사각형 별 출력 (화살표 함수)
const printSquare = (count) => {
  console.log(`===== 정사각형 별 출력 (${count}x${count}) =====`);
  let square = "";
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      square += "*";
    }
    square += "\n"; // 줄바꿈
  }
  console.log(square);
};

// ⭐ 도전과제 3️⃣: 객체 + for...in 사용
const patterns = {
  pattern1: "*".repeat(input),
  pattern2: "*".repeat(input - 1),
  pattern3: "*".repeat(input - 2 > 0 ? input - 2 : 1),
};

console.log("===== 객체 패턴 출력 =====");
for (let key in patterns) {
  console.log(`${key}: ${patterns[key]}`);
}

// ⭐ 도전과제 4️⃣: ...rest 사용
function printMultipleStars(...counts) {
  console.log("===== 여러 숫자에 대한 별 출력 =====");
  for (let count of counts) {
    let stars = "";
    for (let i = 0; i < count; i++) {
      stars += "*";
    }
    console.log(`Stars for count ${count}: ${stars}`);
  }
}

// 함수 호출
printStars(input); // 기본 별 출력
printReverseStars(input); // 역순 별 출력
printSquare(input); // 정사각형 별 출력
printMultipleStars(2, 4, 6); // ...rest 별 출력
