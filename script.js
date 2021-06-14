function setTextImg () {
  const text = document.querySelector('#text-input')
  const memeText = document.querySelector('#meme-text')
  text.addEventListener('keyup', () => {
    const newText = text.value
    memeText.innerHTML = newText
  })
}
setTextImg();

function selectImg() {
  const test1 = document.querySelector('#meme-insert')
  const test = document.querySelector('#meme-image')
  test1.addEventListener('change', (event) => {
    test.src = URL.createObjectURL(event.target.files[0]);
  })
}
selectImg();
 