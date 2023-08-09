var btn_question_1_1 = document.getElementById('button-question-1-1');
var ans_question_1_1 = document.getElementById('answer-to-question-1-1');
var question_1_2 = document.getElementById('question-1-2');

var btn_question_1_2 = document.getElementById('button-question-1-2');
var ans_question_1_2 = document.getElementById('answer-to-question-1-2');
var main_question_1 = document.getElementById('main-question-1');

var btn_main_question_1 = document.getElementById('button-main-question-1');
var ans_to_main_question_1 = document.getElementById('answer-to-main-question-1');
var answer_1 = document.getElementById('answer-1');

var task_2 = document.getElementById('task-2');

var btn_question_2_1 = document.getElementById('button-question-2-1');
var ans_question_2_1 = document.getElementById('answer-to-question-2-1');
var question_2_2 = document.getElementById('question-2-2');

var btn_question_2_2 = document.getElementById('button-question-2-2');
var ans_question_2_2 = document.getElementById('answer-to-question-2-2');
var main_question_2 = document.getElementById('main-question-2');

var btn_main_question_2 = document.getElementById('button-main-question-2');
var ans_to_main_question_2 = document.getElementById('answer-to-main-question-2');
var answer_2 = document.getElementById('answer-2');

btn_question_1_1.addEventListener("click", function(){
  if (ans_question_1_1.value == 'Мексика') {
    alert('Молодец! Твое слово - "Custodios" запомни его (еще лучше запиши)');
    question_1_2.style.display = 'block';
  }
  else{
    alert('пока не правильно.. хнык.. кря..')
  }
})

btn_question_1_2.addEventListener("click", function(){
    if (ans_question_1_2.value == 'Бразилия') {
      alert('Молодец! Второе слово - "Universo" запомни его. Не забудь, после перевода, что фильм называется созвучно, но не точно так).. я есть..');
      main_question_1.style.display = 'block';
    }
    else{
      alert('пока не правильно.. хнык.. кря..')
    }
})

btn_main_question_1.addEventListener("click", function(){
    if (ans_to_main_question_1.value == 'Стражи Галактики') {
      alert('Мои поздравления! Ты уже почти победил)  Я есть Грууууут)..');
      answer_1.style.display = 'block';
      task_2.style.display = 'block';
    }
    else{
      alert('пока не правильно.. хнык.. кря..')
    }
})

btn_question_2_1.addEventListener("click", function(){
    if (ans_question_2_1.value == 'Гай Юлий Цезарь') {
      alert('Молодец! Есть одноименный метод шифрования. Он слишком прост, поэтому будем использовать созданный на его основе шифр Виженера.');
      question_2_2.style.display = 'block';
    }
    else{
      alert('пока не правильно.. хнык.. кря..')
    }
  })

  btn_question_2_2.addEventListener("click", function(){
    if (ans_question_2_2.value == 'Bistrot Alexandre III') {
      alert('Молодец! Ключом для нашего шифра будет название реки, на которой расположено бистро. Осталось получить сам шифр!');
      main_question_2.style.display = 'block';
    }
    else{
      alert('пока не правильно.. хнык.. кря..')
    }
})

btn_main_question_2.addEventListener("click", function(){
    if (ans_to_main_question_2.value == 'Нунчаки') {
      alert('Мои поздравления! Ты уже почти победил). Получи шифр....');
      answer_2.style.display = 'block';
    }
    else{
      alert('пока не правильно.. хнык.. кря..')
    }
})