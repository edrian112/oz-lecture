// 과제:
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const container = document.querySelector(".container");
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

// 도전 과제 요소 생성 및 삽입
const prioritySelect = document.createElement("select");
prioritySelect.id = "priority";

const optionLow = document.createElement("option");
optionLow.value = "low";
optionLow.textContent = "낮음";

const optionHigh = document.createElement("option");
optionHigh.value = "high";
optionHigh.textContent = "높음";

prioritySelect.appendChild(optionLow);
prioritySelect.appendChild(optionHigh);

// taskInput 바로 뒤에 추가
taskInput.parentNode.insertBefore(prioritySelect, addButton);

// 할 일 개수 표시 요소 생성 및 삽입
const taskCount = document.createElement("div");
taskCount.id = "taskCount";
taskCount.textContent = "현재 할 일: 0개";

// container에 taskList 위에 추가
container.insertBefore(taskCount, taskList);

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();

  // 입력값이 비어있는지 확인
  if (taskText === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  const priority = prioritySelect.value;

  // 새로운 리스트 아이템 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // 할 일 텍스트 추가
  const span = document.createElement("span");
  span.textContent = taskText;

  // 높은 우선순위일 경우 빨간색 표시
  if (priority === "high") {
    span.style.color = "red";
  }

  li.appendChild(span);

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.className = "delete-button";

  // 삭제 버튼 이벤트 리스너
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
    updateTaskCount();
  });

  // 완료 상태 토글 이벤트 리스너
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // 요소 조립
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // 입력창 초기화
  taskInput.value = "";

  // 개수 업데이트
  updateTaskCount();
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
  taskList.innerHTML = "";
  updateTaskCount();
}

// 현재 할 일 개수 업데이트 함수
function updateTaskCount() {
  const count = taskList.querySelectorAll("li").length;
  taskCount.textContent = `현재 할 일: ${count}개`;
}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", clearAllTasks);
