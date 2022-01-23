const form = document.querySelector('form')
form.addEventListener('submit',function onFormSubmitted(event) {
  if(!form.checkValidity()){
    event.stopPropagation()
    event.preventDefault()
    alert('請完成必填項目')
  }
})

const submitButton = document.querySelector('#submit-btn')
const spanMark = document.querySelectorAll('.mark')
submitButton.addEventListener('click', function onSubmitBtnClicked(event) {
  form.classList.add('was-validated')
  spanMark.forEach(span => {
    span.classList.add('invisible')
  })
})
