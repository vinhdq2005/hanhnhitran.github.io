var container = document.querySelector(".movie-container");

var data = [
    {
        img: "https://kobis.or.kr/common/mast/movie/2018/10/3a4267d7bce04106b996ad93e65a57d1.jpg",
        link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
        name: "High Society"
    },
    {
        img: "https://newsmd1fr.keeng.net/tiin/archive/images/20201030/115331_61zajvmda1l_sl1101_.jpg",
        link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
        name: "The King"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/2/26/Mine_TV_series.jpg",
        link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
        name: "Mine"
    },
    {
        img: "https://dep.com.vn/wp-content/uploads/2021/06/banner-truong-luat-law-school-2021.jpg",
        link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
        name: "Law School"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1374/2665/products/800x0.png?v=1616656958",
        link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
        name: "Penhouse"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/vi/archive/1/10/20210302064452%21What%27s_Wrong_with_Secretary_Kim.jpg",
        link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
        name: "What's wrong with kim secretary"
    },
]

let renderData = function(data){
    let dom = document.querySelector("#xx")
    dom.innerHTML = ""

    for(let i = 0; i < data.length; i++){
        let html = `<div class="movie-list">
        <div class="movie-list-wrapper">
            <div class="movie-list-item">
                <img src="${data[i].img}" alt="">
                <button><a href="${data[i].link}">Watch</a></button>
            </div>
            <p>${data[i].name}</p>
        </div>
    </div>`
    dom.innerHTML +=html
    }
}


let from = document.querySelector("#a")
form.onsubmit = function(e){
    e.preventDefault();
    let filmName = form.filmName.value.trim()

let result = data.filter((i)=>{
    return i.name.toLowerCase().includes(filmName.toLowerCase)
    })

    renderData(result)
} 
