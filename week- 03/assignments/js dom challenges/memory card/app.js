/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

// Variables
let moves = document.getElementById('moves')
let totalMoves = 0;
let clickedIndexes = [];
let gameContainer= document.getElementById('gameContainer')
let time = document.getElementById('time')
let restart = document.getElementById('button')


// Loading all cards
loadCard(Math.round(Math.random()*3))
loadCard(Math.round(Math.random()*3))
loadCard(Math.round(Math.random()*3))
loadCard(Math.round(Math.random()*3))
loadCard(Math.round(Math.random()*3))
loadCard(Math.round(Math.random()*3))
loadCard(Math.round(Math.random()*3))
loadCard(Math.round(Math.random()*3))


function restartGame(){
  // Refresing all required things.
  gameContainer.innerHTML= "";
  totalMoves = 0;
  moves.innerText = totalMoves;clickedIndexes = [];

  // Time
  timeTaken = 0;
  changetime = setInterval(()=>{
    timeTaken += 1;
    time.innerText = timeTaken;
  },1000,)
  restart.addEventListener('click',()=>{clearInterval(changetime);})
}


function loadCard(index){
  // Creating Card
  let div = document.createElement('div')
  div.innerHTML = `<div style="height: 200px; width: 100px; background-color: rgb(255, 0, 0);"></div>`
  gameContainer.appendChild(div);

  // Adding event
  div.addEventListener('click',function(){
    // displaying the Image
    div.innerHTML =  `<img src="${images[index].url}" alt="card Image" height="200px" width="100px" style = "object-fit: cover; object-position: center; background-color: rgba(53, 47, 47, 0.837);"></img>`;
    // Updating the number of moves
    totalMoves += 1;
    moves.innerText = totalMoves;
    // Checking whether we won the game
    if(clickedIndexes.includes(index)){
      let heading = document.createElement('h1')
      heading.innerText = "You won the game"
      gameContainer.appendChild(heading)
    }
    else{
      clickedIndexes.push(Number(index));
      setTimeout(() => {
        div.innerHTML = `<div style="height: 200px; width: 100px; background-color: rgb(255, 0, 0);"></div>`;
      },1000)
    }
  })
}
