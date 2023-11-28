window.onload = () => {
  const disablingSubmit = document.getElementById('submit-btn');
  disablingSubmit.addEventListener('click', function (event) {
    event.preventDefault();
  })
}

window.onload = () => {
  const disablingSubmit = document.getElementById('submit-btn');
  const btnClear = document.getElementById('clear-btn')
  btnClear.addEventListener('click', function () {
    disablingSubmit.disabled = true;
  })
}

window.onload = () => {
  const disablingSubmit = document.getElementById('submit-btn');
  const checkboxImg = document.getElementById('agreement');
  checkboxImg.addEventListener('click', function () {
    if (checkboxImg.checked === true) {
      disablingSubmit.disabled = false
    } else {
      disablingSubmit.disabled = true;
    }
  })
}

const name = document.getElementById('fullName');
const email = document.getElementById('email');
const textarea = document.getElementById('question');
const enviar = document.getElementById('submit-btn')

enviar.addEventListener('click', function () {
  const nameLength = name.value.length
  const emailLength = email.value.length
  const textareaLength = textarea.value.length
  if (nameLength >= 10 && nameLength <= 40 && emailLength >= 10 && emailLength <= 50 && textareaLength >= 1 && textareaLength <= 500) {
    alert('Dados válidos! Obrigado pela participação!')
  } else {
    alert('Dados inválidos!')
  }
})