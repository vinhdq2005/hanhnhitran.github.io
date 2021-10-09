var container = document.querySelector(".movie-container");

var data = [
  {
    img: "https://kobis.or.kr/common/mast/movie/2018/10/3a4267d7bce04106b996ad93e65a57d1.jpg",
    link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
  },
  {
    img: "https://kobis.or.kr/common/mast/movie/2018/10/3a4267d7bce04106b996ad93e65a57d1.jpg",
    link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
  },
  {
    img: "https://kobis.or.kr/common/mast/movie/2018/10/3a4267d7bce04106b996ad93e65a57d1.jpg",
    link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
  },
  {
    img: "https://kobis.or.kr/common/mast/movie/2018/10/3a4267d7bce04106b996ad93e65a57d1.jpg",
    link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
  },
  {
    img: "https://kobis.or.kr/common/mast/movie/2018/10/3a4267d7bce04106b996ad93e65a57d1.jpg",
    link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
  },
  {
    img: "https://kobis.or.kr/common/mast/movie/2018/10/3a4267d7bce04106b996ad93e65a57d1.jpg",
    link: "https://www.netflix.com/title/81026705?trackId=13752289&trackIdJaw=13752289&trackIdEpisode=13752289&trackIdTrailer=13752289&dpRightClick=1",
  },
];



for (let index = 0; index < data.length; index++) {
    var html = `<div class="movie-list">
<div class="movie-list-wrapper">
    <div class="movie-list-item">
        <img src="url(${data[index].img})">
        <button><a href="url(${data[index].link})">Watch</a></button>
    </div>
</div>
</div>`;
    container.innerHTML+=html;
    
}