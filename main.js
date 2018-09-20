const startButton = document.getElementById('startButton');
const jumbotron = document.getElementById('jumbotron');
const hatForm = document.getElementById('hatForm')

startButton.addEventListener("click", (e) => {
    jumbotron.remove();
    hatForm.style.display = 'block';
  })
