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
        daysListItem.className = 'day holiday';
      } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
        daysListItem.className = 'day friday';
      } else if (dezDaysList[index] === 25) {
          daysListItem.className = 'day holiday' + ' ' + 'day friday';
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

      buttonFeriados.innerHTML = string;

      buttonsContainer.appendChild(buttonFeriados);
  }

  createBotton('Feriados');
