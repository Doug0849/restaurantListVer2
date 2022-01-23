const searchButton = document.querySelector('#search-button')
const searchInput = document.querySelector('#keyword')
searchButton.addEventListener('click', function onSearchButtonClicked(event) {
  if (!searchInput.value.length) {
    event.stopPropagation()
    event.preventDefault()
    alert('請輸入搜尋關鍵字')
  }
})