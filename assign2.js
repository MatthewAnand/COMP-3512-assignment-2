


/* url of song api --- https versions hopefully a little later this semester */	
const api = 'http://www.randyconnolly.com/funwebdev/3rd/api/music/songs-nested.php';

 

/* note: you may get a CORS error if you try fetching this locally (i.e., directly from a
   local file). To work correctly, this needs to be tested on a local web server.  
   Some possibilities: if using Visual Code, use Live Server extension; if Brackets,
   use built-in Live Preview.
*/
const artistArray = JSON.parse(artistString);
const genreArray = JSON.parse(genreString);
const songArray = JSON.parse(songString);
document.addEventListener('DOMContentLoaded', function(){
const artists = document.querySelector("#artists");
const genres = document.querySelector("#genres");
for(let a of artistArray){
   const option = document.createElement("option");
   option.value=a.id;
   option.textContent=a.name;
   option.dataset.id=a.id;
   artists.appendChild(option);
}
artists.addEventListener("change", populateArtist);
for(let a of genreArray){
   const option = document.createElement("option");
   option.value=a.id;
   option.textContent=a.name;
   option.dataset.id=a.id;
   genres.appendChild(option);
}
genres.addEventListener("change", populateGenre);
}
);

function populateArtist(e){
   const artist = e.target;
   for (let song of songArray){
      if(song.artist.id == artist.value){
         table = document.querySelector("#abc");
         row = document.createElement("tr")
         titleTable = document.createElement("td");
         titleTable.textContent=song.title;
         genreTable = document.createElement("td");
         genreTable.textContent = song.genre.name;
         artistTable = document.createElement("td");
         artistTable.textContent = song.artist.name;
         yearTable = document.createElement("td");
         yearTable.textContent = song.year;
         popularityTable = document.createElement("td");
         popularityTable.textContent = song.details.popularity;
         row.appendChild(titleTable);
         row.appendChild(artistTable);
         row.appendChild(yearTable);
         row.appendChild(genreTable);
         row.appendChild(popularityTable);
         table.appendChild(row);

      }
   }
}

function populateGenre(e){
   const genre = e.target;
   for (let song of songArray){
      if(song.genre.id == genre.value){
         console.log(genre.value)
         table = document.querySelector("#abc");
         row = document.createElement("tr")
         titleTable = document.createElement("td");
         titleTable.textContent=song.title;
         genreTable = document.createElement("td");
         genreTable.textContent = song.genre.name;
         artistTable = document.createElement("td");
         artistTable.textContent = song.artist.name;
         yearTable = document.createElement("td");
         yearTable.textContent = song.year;
         popularityTable = document.createElement("td");
         popularityTable.textContent = song.details.popularity;
         row.appendChild(titleTable);
         row.appendChild(artistTable);
         row.appendChild(yearTable);
         row.appendChild(genreTable);
         row.appendChild(popularityTable);
         table.appendChild(row);

      }
   }
}
