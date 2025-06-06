/**
 * Write your challenge solution here
 */
// Image data

let prevButton = document.querySelector('#prevButton')
let nextButton = document.querySelector('#nextButton')
let imageDisplay = document.querySelector('#carouselTrack')
let autoPlayButton = document.querySelector('#autoPlayButton')


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
]

let i = 0;
imageDisplay.innerHTML = `<img src=${images[i].url}></img>`

prevButton.addEventListener('click',function(){
  i += 1;
  if (i >= 4){
    i = 0;
  }
  imageDisplay.innerHTML = `<img src=${images[i].url}></img>`
})
nextButton.addEventListener('click',function(){
  i -= 1;
  if (i < 0){
    i = 3;
  }
  imageDisplay.innerHTML = `<img src=${images[i].url}></img>`
})
autoPlayButton.addEventListener('click',function(){
  setInterval(() => {
  i -= 1;
  if (i < 0){
    i = 3;
  }
  imageDisplay.innerHTML = `<img src=${images[i].url}></img>`
  }, 1000);
})