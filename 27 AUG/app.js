let form = document.querySelector(".form");

const movieName = document.querySelector("#movie-name");
const poster = document.querySelector("#poster-image-link");
const trailerLink = document.querySelector("#trailer-link");
const actor = document.querySelector("#actor-name");
const imdbRating = document.querySelector("#imdb-rating");
// console.log(form)
// console.log(movieName)
// console.log(poster)
// console.log(trailerLink)

// console.log(actor)
// console.log(imdbRating)



let obj = {
  movie: movieName,
  posterlink: poster,
  trailer: trailerLink,
  actor: actor,
  IMDB: imdbRating,
};
console.log(obj)
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let result = `<div class="movietitle">
      <h1>${obj.movie.value}</h1>
      </div>
      <div class="movieposter">
      <img src="${obj.posterlink.value}" height = 150px width 150px>
      </div>
      <div class="trailer">
          <a href="${obj.trailer.value}">Movie Link</a>
      </div>
      <div class="actor">
          <h2>${obj.actor.value}</h2>
      </div>
      <div class="imdb">
          <h4>${obj.IMDB.value}</h4>
      </div>`;

let main =document.querySelector(".main")
main.innerHTML += result



});
