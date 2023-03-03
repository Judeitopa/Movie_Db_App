const API_KEY = "623c0b25918f6acf0addaadf573b3e8f";
const API_LINK = "https://api.themoviedb.org/3/movie/550?api_key=623c0b25918f6acf0addaadf573b3e8f";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=623c0b25918f6acf0addaadf573b3e8f&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(API_LINK)
function returnMovies(url) {
      fetch(url).then(res => res.json())
      .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement("div");
            div_card.setAttribute('class','card');

            const div_row = document.createElement("div");
            div_row.setAttribute('class','row');

            const div_column = document.createElement("div");
            div_column.setAttribute('class','column');

            const image = document.createElement("img");
            image.setAttribute('class','thumbnail');
            image.setAttribute('id','image');

            const center = document.createElement('center');
            
            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            title.innerHTML = element.title;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
        });  
        
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCH_API + searchItem);
        search.value = "";
    }
});