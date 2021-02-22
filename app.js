
const Pnames = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];






const leftImageEl = document.getElementById('left-image');
const rightImageEl = document.getElementById('right-image');
const midImageEl = document.getElementById('mid-image');
const imagesSection = document.getElementById('images-section');

let remainingVotes = 25;

function Product(name) {
    this.name = name;
    this.path = `./img/${name}`;
    this.view = 0;
    this.votes = 0;
   Product.all.push(this);
}

Product.all = [];
for (let i = 0; i < Pnames.length; i++) {
  new Product(Pnames[i]);
}

function render() {
  const leftIndex = randomNumber(0, Product.all.length - 1);
  const rightIndex = randomNumber(0, Product.all.length - 1);
  const middleIndex = randomNumber(0, Product.all.length - 1);
  Product.all[leftIndex].view++;
  Product.all[rightIndex].view++;
  Product.all[middleIndex].view++;
  leftImageEl.src = Product.all[leftIndex].path;
  rightImageEl.src = Product.all[rightIndex].path;
  midImageEl.src = Product.all[middleIndex].path;
  leftImageEl.alt = Product.all[leftIndex].name;
  rightImageEl.alt = Product.all[rightIndex].name;
  midImageEl.alt = Product.all[middleIndex].name;
  leftImageEl.title = Product.all[leftIndex].name;
  rightImageEl.title = Product.all[rightIndex].name;
  midImageEl.title = Product.all[middleIndex].name;

}
imagesSection.addEventListener('click', clickHandler);
function clickHandler(event) {
  remainingVotes--;
  if (remainingVotes === 0) {
    imagesSection.removeEventListener('click', clickHandler);
    vChart();
  } else {
    if (event.target.id !== 'images-section') {
      console.log('hi', event.target);
      for (let i = 0; i < Product.all.length; i++) {
        if (Product.all[i].name === event.target.title) {
          Product.all[i].votes++;
        }
      }
      render();
      console.log(Product.all);
    }
  }
}
render();


function vChart(){
  const ctx = document.getElementById('myChart').getContext('2d');
 
 const product =[];
 const pvote =[];
 const pview=[];
 for (let i = 0; i <Product.all.length; i++) {
   product.push(Product.all[i].name);
   pvote.push(Product.all[i].votes);
   pview.push(Product.all[i].view);
 }
 
  new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
  
      // The data for our dataset
      data: {
          labels: product,
          datasets: [{
              barPercentage:0.5,
              label: 'My First dataset',
              backgroundColor: 'rgb(220, 185, 206)',
              data: pvote,
          }
           ,
           {
//new obj for a second bar
            barPercentage:0.5,
              labe2: 'My Second dataset',
              backgroundColor: 'rgb(153, 255, 102)',
              data: pview,
        
            
          }
        ]
      },
  
      // Configuration options go here
      options: {}
    });
  }
  
 
  





//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}














// const stackedBar = new Chart(ctx, {
//   type: 'bar',
//   data: data,
//   options: {
//       scales: {
//           xAxes: [{
//               stacked: true
//           }],
//           yAxes: [{
//               stacked: false
//           }]
//       }
//   }
// });





































// function render() {
//     const leftIndex = randomNumber(0, product.all.length - 1);
//     product.all[leftIndex].views++;
//     leftImage.src = product.all[leftIndex].path;
//     leftImage.title = product.all[leftIndex].name;
//     leftImage.alt = product.all[leftIndex].name;
    
  
//     const rightIndex = randomNumber(0, product.all.length - 1);
//     console.log('Right', rightIndex);
//     rightImage.src = product.all[rightIndex].path;
//     rightImage.title = product.all[rightIndex].name;
//     rightImage.alt = product.all[rightIndex].name;
//     product.all[rightIndex].views++;

//     const middleIndex = randomNumber(0, product.all.length - 1);
//     console.log('middle', rightIndex);
//     midImage.src = product.all[middleIndex].path;
//     midImage.title = product.all[middleIndex].name;
//     midImage.alt = product.all[middleIndex].name;
//     product.all[middleIndex].views++;
// }
  
// imagesSection.addEventListener('click', clickHandler);
// function clickHandler(event) {
//   remainingVotes--;
//   if (remainingVotes === 0) {
//     imagesSection.removeEventListener('click', clickHandler);
//   } else {
//     if (event.target.id !== 'images-section') {
//       console.log('hi', event.target);
//       for (let i = 0; i < product.all.length; i++) {
//         if (product.all[i].name === event.target.title) {
//           product.all[i].votes++;
//         }
//       }
//       render();
//       console.log(product.all);
//     }
//   }
// }
//   render();