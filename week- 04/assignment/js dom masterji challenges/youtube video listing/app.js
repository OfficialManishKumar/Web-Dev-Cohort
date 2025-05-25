const container = document.getElementById('container')
const searchBar = document.getElementById('searchBar')

fetch('https://api.freeapi.app/api/v1/public/youtube/videos')
    .then(response => response.json()) // Parse the response body as JSON
    .then(jsonObject =>  jsonObject) // Use the resulting object
    .then((result)=>{
        let numberofVideos = result.data.data.length;
        console.log(result.data.data[1].items.snippet.tags)
        for (let i = 0; i < numberofVideos; i++){
            let div = document.createElement('div');
            let hyperlink = document.createElement('a')
            let thumbnail = document.createElement('img')
            let title = document.createElement('p')
            let channelName = document.createElement('p')
            
            hyperlink.setAttribute('href',`${result.data.data[i].items.snippet.thumbnails.high.url}`)
            thumbnail.setAttribute('src',`${result.data.data[i].items.snippet.thumbnails.high.url}`)
            title.innerText = `${result.data.data[i].items.snippet.title}`;
            channelName.innerText = `${result.data.data[i].items.snippet.channelTitle}`

            hyperlink.appendChild(thumbnail)
            div.appendChild(hyperlink)
            div.appendChild(title)
            div.appendChild(channelName)
            container.appendChild(div);
        }
    })

searchBar.addEventListener('change',function(){
    for (let i = 0; i < container.childElementCount; i++){
        
    }
})
console.log(container.children)