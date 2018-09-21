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
    buildNewStudentCard(studentName.value)
    studentName.value = '';
})

const buildNewStudentCard = (StudentName) => {
    let domString = `<div class="card w-25 m-2">
    <div class="card-body">
      <h5 class="card-title">${StudentName}</h5>
      <p class="card-text">placeholder house</p>
      <button href="#" class="btn btn-danger deleteButton">Expel</button>
    </div>
  </div>`;

    printToDom(domString, 'cardContainer')
}