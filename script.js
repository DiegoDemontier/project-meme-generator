const memeImg = document.querySelector('#meme-image');
const colorBorder = document.querySelector('#meme-image-container');

function setTextImg() {
  const text = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');
  text.addEventListener('keyup', () => {
    const newText = text.value;
    memeText.innerHTML = newText;
  });
}
setTextImg();

function selectImg() {
  const selectMeme = document.querySelector('#meme-insert');
  selectMeme.addEventListener('change', (event) => {
    memeImg.src = URL.createObjectURL(event.target.files[0]);
  });
}
selectImg();

function buttonFire() {
  const fire = document.querySelector('#fire');
  fire.style = 'background: red;';
  fire.addEventListener('click', () => {
    colorBorder.style = 'border: 3px dashed red;';
  });
}
buttonFire();

function buttonWater() {
  const water = document.querySelector('#water');
  water.style = 'background: blue;';
  water.addEventListener('click', () => {
    colorBorder.style = 'border: 5px double blue;';
  });
}
buttonWater();

function buttonEarth() {
  const earth = document.querySelector('#earth');
  earth.style = 'background: green;';
  earth.addEventListener('click', () => {
    colorBorder.style = 'border: 6px groove green;';
  });
}
buttonEarth();

function selectMeme1() {
  const selecMeme1 = document.querySelector('#meme-1');
  selecMeme1.addEventListener('click', () => {
    memeImg.src = '/imgs/meme1.png';
  });
}
selectMeme1();

function selectMeme2() {
  const selecMeme2 = document.querySelector('#meme-2');
  selecMeme2.addEventListener('click', () => {
    memeImg.src = '/imgs/meme2.png';
  });
}
selectMeme2();

function selectMeme3() {
  const selecMeme3 = document.querySelector('#meme-3');
  selecMeme3.addEventListener('click', () => {
    memeImg.src = '/imgs/meme3.png';
  });
}
selectMeme3();

function selectMeme4() {
  const selecMeme4 = document.querySelector('#meme-4');
  selecMeme4.addEventListener('click', () => {
    memeImg.src = '/imgs/meme4.png';
  });
}
selectMeme4();
