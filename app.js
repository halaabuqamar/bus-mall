
const Pnames = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];






const leftImage = document.getElementById('left-image');
const rightImage = document.getElementById('right-image');
const midImage = document.getElementById('mid-image');

const imagesSection = document.getElementById('images-section');

function product(name) {
    this.name = name;
    this.path = `./img/${name}.jpg`;
    this.Click = 0;
    this.view = 0;
   product.all.push(this);
}

product.all = [];
for (let i = 0; i < Pnames.length; i++) {
  new product(Pnames[i]);
}

function render() {
    const leftIndex = randomNumber(0, product.all.length - 1);
    leftImage.src = product.all[leftIndex].path;
    leftImage.title = product.all[leftIndex].name;
    leftImage.alt = product.all[leftIndex].name;
  
    const rightIndex = randomNumber(0, product.all.length - 1);
    rightImage.src = product.all[rightIndex].path;
    rightImage.title = product.all[rightIndex].name;
    rightImage.alt = product.all[rightIndex].name;
  

    const middleIndex = randomNumber(0, product.all.length - 1);
    midImage.src = product.all[middleIndex].path;
    midImage.title = product.all[middleIndex].name;
    midImage.alt = product.all[middleIndex].name;

}
  
  imagesSection.addEventListener('click', handleClick);

  function handleClick(event) {
    if (event.target.id !== 'images-section') {
      for (let i = 0; i < product.all.length; i++) {
        if (product.all[i].name === event.target.title) {
          product.all[i].votes++;
         
        }
      }
      console.log(product.all);
      render();
    }
  } 

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  render();