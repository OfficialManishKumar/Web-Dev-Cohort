let calendar = document.getElementById('calendar')
let emotionBtns = document.getElementById('emotionBtns')
let moods = {}


// Finding the month name and date
let time = new Date()
let days = new Date(time.getFullYear(), time.getMonth() + 1, 0).getDate();
for (let i = 1; i <= days; i++){
  let div = document.createElement('div')
  if(localStorage.getItem(i)){
    div.innerText = i + (localStorage.getItem(i))
  }else{
    div.innerText = i
  }
  calendar.appendChild(div)
}
function mood(mood,date){
  localStorage.setItem(`${date}`,`${mood}`)
  alert(`Mood ofzz date ${date} is updated to ${mood}`)
  location.reload()
}
