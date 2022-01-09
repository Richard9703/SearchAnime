const url = "https://api.jikan.moe/v3"

function searchAnime(event) {

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search")

    console.log(query)

    fetch(`${url}/search/anime?q=${query}&page=1`)
    .then(res => res.json())

    .then(data =>  console.log(data))

    .catch(err => console.warn(err.message)); 
}

function newData(data) {

    const searchResults = document.getElementById('animeCard');

    searchResults.innerHTML = data.results
    .sort((a,b) => a.episodes-b.episodes)
    
    .map(anime => {
        return `
        <div>
            <img src="${anime.image_url}" 
            alt="${anime.title}" />
        </div>
        <div class="animeDesc">
            <h1>${anime.title}</h1>
            <p>Description: ${anime.synopsis}</p>
        </div>
        `
    });
}

function loadPage() {
      const form = document.getElementById('search-form');
      form.addEventListener("submit", searchAnime)
} 

window.addEventListener("load", loadPage)