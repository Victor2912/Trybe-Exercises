function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
function daysCalendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listDays = document.getElementById('days');
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const daysListItem = document.createElement('li');
    daysListItem.innerHTML = days;

    if (dezDaysList[index] === 24 || dezDaysList[index] === 31){
      daysListItem.className = 'day-holiday';
    } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      daysListItem.className = 'day-friday';
    } else if (dezDaysList[index] === 25) {
        daysListItem.className = 'day-holiday' + ' ' + 'day-friday';
    } else {
      daysListItem.className = 'day';
    } 

    listDays.appendChild(daysListItem);
  }
}

daysCalendar();

function createBotton(string) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let buttonFeriados = document.createElement('button');

  buttonFeriados.className = 'button-feriado';
  buttonFeriados.innerHTML = string;

  buttonsContainer.appendChild(buttonFeriados);
}

createBotton('Feriados');

function corFeriados() {
  let buttonFeriadoColor = document.querySelector('.button-feriado');
  let daysFeriados = document.querySelectorAll('.day-holiday');

  buttonFeriadoColor.addEventListener('click',function () {
    for (let index = 0; index < daysFeriados.length; index += 1) {
      if (daysFeriados[index].style.backgroundColor === "") {
        daysFeriados[index].style.backgroundColor = 'white';
      } else if (daysFeriados[index].style.backgroundColor === 'white') {
        daysFeriados[index].style.backgroundColor = "";
      } 
    }
  });
}

corFeriados();

function createBotton2(string) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let buttonFeriados = document.createElement('button');

  buttonFeriados.className = 'btn-friday';
  buttonFeriados.innerHTML = string;

  buttonsContainer.appendChild(buttonFeriados);
}

createBotton2('Sexta-feira');

function bottonSextou() {
  let buttonSextou = document.querySelector('.btn-friday');
  let daysSexta = document.querySelectorAll('.day-friday');
  let vetor = ['4', '11', '18', '25'];

  buttonSextou.addEventListener('click',function () {
    for (let index = 0; index < daysSexta.length; index += 1) {

      if (daysSexta[index].innerHTML === "4" || daysSexta[index].innerHTML === "11" || daysSexta[index].innerHTML === "18" || daysSexta[index].innerHTML === "25") {
        daysSexta[index].innerHTML = 'Sextou!!!';
      } else if (daysSexta[index].innerHTML === 'Sextou!!!') {
        daysSexta[index].innerHTML = vetor[index];
      }
    }
    
  });
}

bottonSextou();