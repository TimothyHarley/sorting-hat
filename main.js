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
};

const activateExpels = () => {
    const expelButtons = document.getElementsByClassName('deleteButton');
    for (let i = 0; i < expelButtons.length; i++){
        const element = expelButtons[i];
        element.addEventListener('click', (e) => {
            expelStudent = e.target.parentNode.parentNode;
            expelStudent.remove();
        })
    }
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
    <div class="card-body text-center">
      <h5 class="card-title">${studentName}</h5>
      <p class="card-text">${sorted()}</p>
      <button href="#" class="btn btn-dark deleteButton">Expel</button>
    </div>
  </div>`;
    printToDom(domString, 'cardContainer')
    activateExpels();
}