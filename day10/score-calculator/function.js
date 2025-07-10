// 사용자 입력
let inputStr = prompt("점수를 입력하세요.");
console.log(inputStr);
let input = parseInt(inputStr);
console.log(input);

function main() {
  promptScore();
  if (input < 0 || input)
    if (isNaN(input) || input < 0 || input > 100) {
      // 도전과제 // 코드 유효성 검사
      console.log("Invalid score! Please enter a number between 0 and 100.");
    }
  //  else {
  const MAX_SCORE = 105;
  let score;
  var grade;

  // 도전과제의 "1점 증가 후 5점 보너스 추가" 부분을 위한 추가 코드 생성
  // 만약 "증가 후 추가"가 아니었다면 이 부분은 없어도 됨
  score = input;

  //  도전과제 // 추가 연산
  //  위의 코드가 없다면 비적용. 왜나하면, 누적연산을 위해서는 score가 input으로 초기화되어야 하기 때문.
  score++; // 단항 산술 1점 증가

  // 최종점수 계산 (보너스 5점 추가)
  // score = input + 5;   //   도전과제가 없었을 경우엔 기본 input+5
  score += 5;

  // 도전과제 // 점수 스케일링 (10% 가산)
  const BONUS_PERCENT = 10;
  score += score * (BONUS_PERCENT / 100); // 복합 대입

  // 도전과제 // 단항부정 (조건반전)
  if (!isNaN(score)) {
    console.log("유효한 점수입니다.");
  }

  // 도전과제 // 점수가 100을 초과하면 100으로 제한
  if (score > 100) {
    score = 100;
  }

  // 등급 결정 (if문)
  if (score >= 90 && score < 100) {
    //  90이상 그리고+그리고 (즉, and / 양쪽이 참이어야 함) 100이하
    // (score >= 100)                 // 위와 동일한 의미
    grade = "S";
  } else if (score >= 90) {
    grade = "A"; // 100보다는 작고 (왜냐면 100보다 크거나 같지 않으니까) 90보다 크거나 같으면
  } else if (score >= 80) {
    grade = "B"; // 90보다 작고 80보다 크거나 같으면 (80이상 90미만)
  } else if (score >= 70) {
    grade = "C"; // 70이상 하지만 80미만
  } else if (score >= 60) {
    grade = "D"; // 60이상 하지만 70미만
    // else if (score >= 60) grade ="D"; 도 가능 하지만, 두개이상의 작업에는 불가. 왜냐하면 블럭 지정이 불가
  } else {
    grade = "F"; // 나머지 (60미만)
  }

  // 합격/불합격 여부 결정 (삼항연산자)
  let status = score >= 60 ? "Pass" : "Fail";

  // 등급에 따른 console.log() 출력 (switch문)
  let message;

  switch (grade) {
    case "S":
      message = "Super!!";
      break;
    case "A":
      if (score === 100) {
        message = "Perfect Score!";
      } else {
        message = "Excellent work!";
      }
      break;
    //   기본 과제에서의 출력 내용 생략처리
    //   case "A":
    //     message = "Excellent work!";
    //     break;
    // 기본 과제에서 생략 처리된 부분 끝
    case "B":
      message = "Good job!";
      break;
    case "C":
      message = "Satisfactory performance.";
      break;
    case "D":
      message = "Needs improvement.";
      break;
    case "F":
      message = "Please try harder!";
      break;
  }

  // 콘솔 출력
  console.log("Final Score: ", score);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
  console.log(`Message: ${message}`);
}
