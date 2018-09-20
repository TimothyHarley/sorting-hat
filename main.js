const startButton = document.getElementById('startButton');
const jumbotron = document.getElementById('jumbotron');
const hatForm = document.getElementById('hatForm');
const sortBtn = document.getElementById('sortBtn');
const studentName = document.getElementById('exampleInputEmail1');

const printToDom = (stringToPrint, WhereToPrint) => {
    document.getElementById(WhereToPrint).innerHTML += stringToPrint;
};

startButton.addEventListener('click', (e) => {
    jumbotron.remove();
    hatForm.style.display = 'block';
  })

sortBtn.addEventListener('click', (e) => {
    console.log (studentName.value)
    studentName.value = '';
})

