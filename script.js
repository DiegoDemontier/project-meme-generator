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

function buttonFire() {
  const fire = document.querySelector('#fire')
  fire.style = "background: red;"
  fire.addEventListener('click', () => {
    
    const colorFire = document.querySelector('#meme-image-container');
    colorFire.style = "border: 3px dashed red;"
  })
}
buttonFire();

function buttonWater() {
  const water = document.querySelector('#water')
  water.style = "background: blue;"
  water.addEventListener('click', () => {
    
    const colorWater = document.querySelector('#meme-image-container');
    colorWater.style = "border: 5px double blue;"
  })
}
buttonWater();

function buttonEarth() {
  const earth = document.querySelector('#earth')
  earth.style = "background: green;"
  earth.addEventListener('click', () => {
    
    const colorEarth = document.querySelector('#meme-image-container');
    colorEarth.style = "border: 6px groove green;"
  })
}
buttonEarth();

function selectMeme1() {
  const test1 = document.querySelector('#meme-1')
  const test = document.querySelector('#meme-image')
  test1.addEventListener('click', () => {
    test.src="/imgs/meme1.png"
  })
}
selectMeme1();

function selectMeme2() {
  const test1 = document.querySelector('#meme-2')
  const test = document.querySelector('#meme-image')
  test1.addEventListener('click', () => {
    test.src="/imgs/meme2.png"
  })
}
selectMeme2();

function selectMeme3() {
  const test1 = document.querySelector('#meme-3')
  const test = document.querySelector('#meme-image')
  test1.addEventListener('click', () => {
    test.src="/imgs/meme3.png"
  })
}
selectMeme3();

function selectMeme4() {
  const test1 = document.querySelector('#meme-4')
  const test = document.querySelector('#meme-image')
  test1.addEventListener('click', () => {
    test.src="/imgs/meme4.png"
  })
}
selectMeme4();


