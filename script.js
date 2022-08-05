// для даты откытия
const date_text = document.querySelector('.date_open p');
const date_box = document.querySelector('.date_open ');

// для суммы депозита
const sum_text = document.querySelector('.sum_deposit p');
const sum_box = document.querySelector('.sum_deposit');

// для процентов по вкалду
const percent_text = document.querySelector(".percent_deposit p");
const percent_box = document.querySelector(".percent_deposit");

// для срока вклада
const term_text = document.querySelector('.deposit_time p');
const term_box = document.querySelector('.deposit_time');

// для суммы пополнения клада
const sumAdd_text = document.createElement('p');
const sumAdd_box = document.createElement('div');

// создаём всплывающее окно для пополнения вклада
createSumAddDOM();

// при проведении мышкой создаем инпуты для значений
// makeInput(date_box, date_text, 'Выберите дату открытия', "date_open_id"); не получается импортировать в js air-datapicker. вызвал в html
makeInput(sum_box, sum_text, 'Введите сумму вклада', 'sum_id');
makeInput(percent_box, percent_text, 'Введите процентную ставку','percent_id');
makeInput(term_box, term_text, 'Введите колличество', 'term_id');
makeInput(sumAdd_box, sumAdd_text, 'Введите сумму пополнения', 'sumAdd_id');

// функция создания инпутов
function makeInput(box, text, placeholder_text, ID='') {

	const input = document.createElement('input');

	box.onmouseover = () => {
		
		text.classList.remove('text_1')
	 	text.classList.add('text_3');
	 	input.classList.add('invisible', 'text_3');
	 	input.placeholder = placeholder_text;
	 	input.id = ID

	 	if (box.querySelector('invisible')) {}
	 	else {
	 		text.after(input);	
	 	}
 	} 
}

// функция создания всплывающего окна для пополениния вкладов
function createSumAddDOM(){

	const container = document.querySelector('.container');
	const checkbox = document.querySelector('.rectangle_3');

	sumAdd_place = document.createElement('div');

	sumAdd_place.classList.add('sum_up_deposit');
	sumAdd_box.classList.add('rectangle_2');
	sumAdd_text.classList.add('text_1');

	sumAdd_text.append('Сумма пополнения');

	sumAdd_place.appendChild(sumAdd_box);
	sumAdd_box.appendChild(sumAdd_text);

	checkbox.onclick = () => {
		container.append(sumAdd_place);
	}
}

// import AirDatepicker from '/assets/air-datepicker-3/dist/air-datepicker.js'; 

// $(document).ready(function() {
//     console.log( "ready!" );
//     $("result").on("submit", function() {

//     })
// });









