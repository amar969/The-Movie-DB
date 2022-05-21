

const getData = async () => {
    let searchInput = document.getElementById("search").value;
    console.log(searchInput)
    let api_key = "5772f178183e6ae1fbafd94c6b8a591a";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=`;
    

    console.log(searchInput)

    try {
    let res = await fetch(`${url}${api_key}&query=${searchInput}`);
    let data = await res.json()
    console.table(data.results)
    return data.results
  } catch (err) {}
};

const main = async () => {
    let data = await getData()
    if (data == undefined) return false
    console.log(data)
    showData(data)
};

main()



// display data in container for search result with debouncing

let cont_div = document.getElementById("container")
const showData = (data) => {
    cont_div.innerHTML = ""
    cont_div.style.display = "block"

    data.forEach(el => {


        let div = document.createElement("div")
        div.onclick = () => {
            localStorage.setItem("movieName", JSON.stringify(el.id))
            location.href = "movie.html";
        }
        
        let movie_title = document.createElement("h4")
        movie_title.innerHTML = el.title

        let mov_poster = document.createElement("img")
        mov_poster.src = `https://image.tmdb.org/t/p/w500${el.poster_path}` 


        
        div.append(mov_poster, movie_title)
        cont_div.append(div)
    });
}



let timerID
const debounce = (cbFunc, delay) => {

    if(timerID){
        clearInterval(timerID)
    }

    timerID = setTimeout(() => {
        cbFunc()
    }, delay)
}
