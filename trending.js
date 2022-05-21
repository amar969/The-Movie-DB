const main = async () => {
    let data = await getData()
    if (data == undefined) return false
    console.log(data)
    showData(data)
};


const getData = async () => {
    let api_key = "5772f178183e6ae1fbafd94c6b8a591a";
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
    try {
    let res = await fetch(`${url}`);
    let data = await res.json()
    console.table(data.results)
    return data.results
  } 
  catch (err) {
      console.log(err)
  }
};



// display data in container for search result with debouncing

let cont_div = document.getElementById("main")
const showData = (data) => {
    cont_div.innerHTML = ""

    data.forEach(el => {


        let div = document.createElement("div")
        
        let movie_title = document.createElement("p")
        movie_title.innerHTML = el.title

        let mov_poster = document.createElement("img")
        mov_poster.src = `https://image.tmdb.org/t/p/w500${el.poster_path}` 
        
        div.append(mov_poster, movie_title)
        cont_div.append(div)
    });
}


