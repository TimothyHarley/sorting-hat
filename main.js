const startButton = document.getElementById('startButton');
const jumbotron = document.getElementById('jumbotron');
const hatForm = document.getElementById('hatForm');
const sortBtn = document.getElementById('sortBtn');
const studentName = document.getElementById('exampleInputEmail1');
const fourHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const printToDom = (stringToPrint, WhereToPrint) => {
    document.getElementById(WhereToPrint).innerHTML += stringToPrint;
};

const sorted = () => {
    return fourHouses[Math.floor(Math.random() * 4)];
}    


startButton.addEventListener('click', (e) => {
    jumbotron.remove();
    hatForm.style.display = 'block';
  })

sortBtn.addEventListener('click', (e) => {
    buildNewStudentCard(studentName.value)
    studentName.value = '';
})

const buildNewStudentCard = (studentName) => {
    let domString = `<div class="card w-25 m-2">
    <div class="card-body">
      <h5 class="card-title">${studentName}</h5>
      <p class="card-text">${sorted()}</p>
      <button href="#" class="btn btn-danger deleteButton">Expel</button>
    </div>
  </div>`;

    printToDom(domString, 'cardContainer')
}