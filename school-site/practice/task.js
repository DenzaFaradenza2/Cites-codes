document.addEventListener("DOMContentLoaded", function() {
    var taskForm = document.getElementById('taskForm');
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Предотвращаем отправку формы по умолчанию
  
      var userAnswer = document.getElementById('p_answer').value;
      var correctAnswer = document.getElementById('t_answer').value;
  
      if (userAnswer.trim() === correctAnswer) {
        createNewTask(); // Правильный ответ! Создаем новое задание
      } else {
        alert("Попробуйте ещё раз!"); // Неправильный ответ! Можно заменить на более креативное сообщение
      }
    });
  
    function createNewTask() {
        alert("Поздравляю! Ответ правильный. Вот ваше новое задание!");
        newQuestionNumber=1;
        // Генерируем новое случайное число для следующего задания
        var newQuestionNumber = newQuestionNumber + 1;
        
        // Изменяем текст текущего задания
        var taskHeader = document.querySelector('.fulltask h2');
        var taskDescription = document.querySelector('.fulltask p');
        
        taskHeader.textContent = 'Задание ' + newQuestionNumber + '.';
        taskDescription.textContent = 'Новое математическое задание здесь...';
        
        // Очищаем поле для ответа
        document.getElementById('p_answer').value = '';
        
        // Генерируем новое значение верного ответа для нового задания
        var newCorrectAnswer = Math.floor(Math.random() * 100) + 1;
        document.getElementById('t_answer').value = newCorrectAnswer;
      
        // Можно добавить другие действия с новым заданием здесь, например, изменить скрытые значения или загрузить из внешнего источника
      }
  });