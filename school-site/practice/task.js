var tasks = [
  "Задание 1",
  "Задание 2",
  "Задание 3"
];

// Функция для генерации случайного задания
function generateTask() {
  var taskElement = document.getElementById("task");
  var randomIndex = Math.floor(Math.random() * tasks.length);
  taskElement.innerHTML = tasks[randomIndex];
}

// Функция для проверки ответа
function checkAnswer() {
  var answerElement = document.getElementById("answer");
  var resultElement = document.getElementById("result");
  var answer = answerElement.value;

  // Проверяем правильность ответа
  if (answer === "правильный ответ") {
      resultElement.innerHTML = "Правильно!";
  } else {
      resultElement.innerHTML = "Неправильно!";
  }

  // Очищаем поле ввода
  answerElement.value = "";
}

// Функция для добавления задания в список
function addTask(task) {
  tasks.push(task);
}

// Функция для вывода заданий на экран
function displayTasks() {
  var taskContainer = document.getElementsByClassName("task-container")[0];

  // Очищаем контейнер заданий
  taskContainer.innerHTML = "<h1>Генератор заданий</h1>";

  // Выводим каждое задание в отдельном блоке
  tasks.forEach(function(task) {
      var taskElement = document.createElement("div");
      taskElement.className = "task";
      taskElement.innerHTML = task;
      taskContainer.appendChild(taskElement);
  });
}

// Инициализация страницы: генерируем первое задание и выводим список заданий
generateTask();
displayTasks();