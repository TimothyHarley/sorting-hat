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

const houseColors = () => {
    const cardColors = document.getElementsByClassName('card-text');
    for (let i = 0; i < cardColors.length; i++){
        const element = cardColors[i];
        if(element.innerHTML === 'Gryffindor'){
            element.parentNode.parentNode.classList.add('bg-danger')
            element.parentNode.parentNode.classList.add('text-warning')
        } else if(element.innerHTML === 'Hufflepuff'){
            element.parentNode.parentNode.classList.add('bg-warning')
            element.parentNode.parentNode.classList.add('text-dark')
        } else if(element.innerHTML === 'Ravenclaw'){
            element.parentNode.parentNode.classList.add('bg-primary')
            element.parentNode.parentNode.classList.add('text-light')
        } else if(element.innerHTML === 'Slytherin'){
            element.parentNode.parentNode.classList.add('bg-success')
            element.parentNode.parentNode.classList.add('text-secondary')
        };
    }
}

startButton.addEventListener('click', (e) => {
    jumbotron.remove();
    hatForm.style.display = 'block';
  })

sortBtn.addEventListener('click', (e) => {
    if (studentName.value === '' ) {
        alert("Please enter a student's name");
    } else 
    buildNewStudentCard(studentName.value)
    studentName.value = '';
})

const buildNewStudentCard = (studentName) => {
    let domString = `<div class="card w-25 m-2 cardColor">
    <div class="card-body text-center">
      <h5 class="card-title">${studentName}</h5>
      <p class="card-text">${sorted()}</p>
      <button href="#" class="btn btn-dark deleteButton">Expel</button>
    </div>
  </div>`;
    printToDom(domString, 'cardContainer');
    activateExpels();
    houseColors();
}