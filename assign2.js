


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
const headings = document.querySelectorAll(".table-sortable th");
for(headerCell of headings){
   headerCell.addEventListener("click", (e) => {
         const tableElement = e.target.parentElement.parentElement.parentElement;
         const headerIndex = e.target.id;
         const currentIsAscending = headerCell.classList.contains("th-sort-asc");
         console.log(tableElement);
   
         sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
      });
   
   };
const artists = document.querySelector("#artists");
const genres = document.querySelector("#genres");
const title = document.querySelector("#title");
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
title.addEventListener("change", populateTitle);
}
);

function populateArtist(e){
   const artist = e.target;
   for (let song of songArray){
      if(song.artist.id == artist.value){
         table = document.querySelector("tbody");
         row = document.createElement("tr")
         titleTable = document.createElement("td");
         titleTable.textContent=song.title;
         titleTable.id="0";
         genreTable = document.createElement("td");
         genreTable.textContent = song.genre.name;
         genreTable.id="1"
         artistTable = document.createElement("td");
         artistTable.textContent = song.artist.name;
         artistTable.id="2"
         yearTable = document.createElement("td");
         yearTable.textContent = song.year.toString();
         yearTable.id="3"
         popularityTable = document.createElement("td");
         popularityTable.textContent = song.details.popularity.toString();
         popularityTable.id="4"
         playlist = document.createElement("td");
         playlistButton = document.createElement("button");
         playlistButton.id = "playlist"
         playlistButton.textContent = "Add to Playlist"
         playlist.appendChild(playlistButton);
         seeSong = document.createElement("td");
         seeSongButton = document.createElement("button");
         seeSongButton.id = "view";
         seeSongButton.textContent = "View"
         seeSong.appendChild(seeSongButton);

         row.appendChild(titleTable);
         row.appendChild(artistTable);
         row.appendChild(yearTable);
         row.appendChild(genreTable);
         row.appendChild(popularityTable);
         row.appendChild(playlist);
         row.appendChild(seeSong);
         seeSongButton.id = song.id;
         seeSongButton.addEventListener("click", function(){
            singleSong = document.querySelector("#singleSongPage");
            index = document.querySelector("#index");
            singleSong.hidden = false;
            index.hidden=true;
            const songLength = document.querySelector("#duration");
            songLength.textContent=song.details.duration;
            const songTitle = document.querySelector("#title");
            songTitle.textContent = song.title;
            const songArtist = document.querySelector("#artist");
            songArtist.textContent = song.artist.name;
            const songYear = document.querySelector("#year");
            songYear.textContent = song.year;
            const songGenre = document.querySelector("#genre");
            songGenre.textContent = song.genre.name;
            const bpm = document.querySelector("#bpm");
            const energy = document.querySelector("#energy");
            const dance = document.querySelector("#danceability");
            const live = document.querySelector("#liveness");
            const valence= document.querySelector("#valence");
            const acoustic = document.querySelector("#acousticness");
            const speech = document.querySelector("#speechiness");
            const pop = document.querySelector("#popularity");
            bpm.textContent = "BPM: " +song.details.bpm;
            energy.textContent = "Energy: "+song.analytics.energy;
            dance.textContent = "Danceability: "+song.analytics.danceability;
            live.textContent = "Liveness: "+song.analytics.liveness;
            valence.textContent = "Valence: "+song.analytics.valence
            acoustic.textContent = "Acousticness: "+song.analytics.acousticness
            speech.textContent = "Speechiness: "+song.analytics.speechiness
            pop.textContent = "Popularity: "+song.details.popularity
         })
         table.appendChild(row);

      }
   }
}
const closeButton = document.querySelector("#back");
console.log(closeButton);
closeButton.addEventListener("click", function(){
   console.log("hello");
   singleSong.hidden = true;
   index.hidden=false;
})
function populateGenre(e){
   const genre = e.target;
   for (let song of songArray){
      if(song.genre.id == genre.value){
         console.log(genre.value)
         table = document.querySelector("tbody");
         row = document.createElement("tr")
         row.id="row";
         titleTable = document.createElement("td");
         titleTable.textContent=song.title;
         titleTable.id="0";
         genreTable = document.createElement("td");
         genreTable.textContent = song.genre.name;
         genreTable.id="3"
         artistTable = document.createElement("td");
         artistTable.textContent = song.artist.name;
         artistTable.id="2"
         yearTable = document.createElement("td");
         yearTable.textContent = song.year.toString();
         yearTable.id="2"
         popularityTable = document.createElement("td");
         popularityTable.textContent = song.details.popularity.toString();
         popularityTable.id="4"
         playlist = document.createElement("td");
         playlistButton = document.createElement("button");
         playlistButton.id = "playlist"
         playlistButton.textContent = "Add to Playlist"
         playlist.appendChild(playlistButton);
         seeSong = document.createElement("td");
         seeSongButton = document.createElement("button");
         seeSongButton.id = "view";
         seeSongButton.textContent = "View"
         seeSong.appendChild(seeSongButton);

         row.appendChild(titleTable);
         row.appendChild(artistTable);
         row.appendChild(yearTable);
         row.appendChild(genreTable);
         row.appendChild(popularityTable);
         row.appendChild(playlist);
         row.appendChild(seeSong);
         seeSongButton.id = song.id;
         seeSongButton.addEventListener("click", function(){
            singleSong = document.querySelector("#singleSongPage");
            index = document.querySelector("#index");
            singleSong.hidden = false;
            index.hidden=true;
            const songLength = document.querySelector("#duration");
            songLength.textContent=song.details.duration;
            const songTitle = document.querySelector("#title");
            songTitle.textContent = song.title;
            const songArtist = document.querySelector("#artist");
            songArtist.textContent = song.artist.name;
            const songYear = document.querySelector("#year");
            songYear.textContent = song.year;
            const songGenre = document.querySelector("#genre");
            songGenre.textContent = song.genre.name;
            const bpm = document.querySelector("#bpm");
            const energy = document.querySelector("#energy");
            const dance = document.querySelector("#danceability");
            const live = document.querySelector("#liveness");
            const valence= document.querySelector("#valence");
            const acoustic = document.querySelector("#acousticness");
            const speech = document.querySelector("#speechiness");
            const pop = document.querySelector("#popularity");
            bpm.textContent = "BPM: " +song.details.bpm;
            energy.textContent = "Energy: "+song.analytics.energy;
            dance.textContent = "Danceability: "+song.analytics.danceability;
            live.textContent = "Liveness: "+song.analytics.liveness;
            valence.textContent = "Valence: "+song.analytics.valence
            acoustic.textContent = "Acousticness: "+song.analytics.acousticness
            speech.textContent = "Speechiness: "+song.analytics.speechiness
            pop.textContent = "Popularity: "+song.details.popularity
         })
         table.appendChild(row);

      }
   }
}
function populateTitle(e){
   const title = e.target;
   for (let song of songArray){
      if(song.title == title){
         console.log(genre.value)
         table = document.querySelector("tbody");
         row = document.createElement("tr")
         row.id="row";
         titleTable = document.createElement("td");
         titleTable.textContent=song.title;
         titleTable.id="0";
         genreTable = document.createElement("td");
         genreTable.textContent = song.genre.name;
         genreTable.id="3"
         artistTable = document.createElement("td");
         artistTable.textContent = song.artist.name;
         artistTable.id="2"
         yearTable = document.createElement("td");
         yearTable.textContent = song.year.toString();
         yearTable.id="2"
         popularityTable = document.createElement("td");
         popularityTable.textContent = song.details.popularity.toString();
         popularityTable.id="4"
         playlist = document.createElement("td");
         playlistButton = document.createElement("button");
         playlistButton.id = "playlist"
         playlistButton.textContent = "Add to Playlist"
         playlist.appendChild(playlistButton);
         seeSong = document.createElement("td");
         seeSongButton = document.createElement("button");
         seeSongButton.id = "view";
         seeSongButton.textContent = "View"
         seeSong.appendChild(seeSongButton);

         row.appendChild(titleTable);
         row.appendChild(artistTable);
         row.appendChild(yearTable);
         row.appendChild(genreTable);
         row.appendChild(popularityTable);
         row.appendChild(playlist);
         row.appendChild(seeSong);
         seeSongButton.id = song.id;
         seeSongButton.addEventListener("click", function(){
            singleSong = document.querySelector("#singleSongPage");
            index = document.querySelector("#index");
            singleSong.hidden = false;
            index.hidden=true;
            const songLength = document.querySelector("#duration");
            songLength.textContent=song.details.duration;
            const songTitle = document.querySelector("#title");
            songTitle.textContent = song.title;
            const songArtist = document.querySelector("#artist");
            songArtist.textContent = song.artist.name;
            const songYear = document.querySelector("#year");
            songYear.textContent = song.year;
            const songGenre = document.querySelector("#genre");
            songGenre.textContent = song.genre.name;
            const bpm = document.querySelector("#bpm");
            const energy = document.querySelector("#energy");
            const dance = document.querySelector("#danceability");
            const live = document.querySelector("#liveness");
            const valence= document.querySelector("#valence");
            const acoustic = document.querySelector("#acousticness");
            const speech = document.querySelector("#speechiness");
            const pop = document.querySelector("#popularity");
            bpm.textContent = "BPM: " +song.details.bpm;
            energy.textContent = "Energy: "+song.analytics.energy;
            dance.textContent = "Danceability: "+song.analytics.danceability;
            live.textContent = "Liveness: "+song.analytics.liveness;
            valence.textContent = "Valence: "+song.analytics.valence
            acoustic.textContent = "Acousticness: "+song.analytics.acousticness
            speech.textContent = "Speechiness: "+song.analytics.speechiness
            pop.textContent = "Popularity: "+song.details.popularity
         })
         table.appendChild(row);
}
   }
}
function sortTableByColumn (table, column, asc = true){
   const dirModifier = asc ? 1 : -1;
   const tBody = table.tBodies[0];
   console.log(tBody);
   const rows = Array.from(tBody.querySelectorAll("tr"));

   const sortedRows = rows.sort((a,b) =>{
      
      const aColText = a.querySelector(`td:nth-child(${parseInt(column)+1})`).textContent.trim();
      const bColText = b.querySelector(`td:nth-child(${parseInt(column)+1})`).textContent.trim();
      return aColText > bColText ? (1* dirModifier) : (-1 * dirModifier);
   }); 
   while(tBody.firstChild){
      tBody.removeChild(tBody.firstChild);
   }
   tBody.append(...sortedRows);

   headers = table.querySelectorAll("th")
   for(th of headers){
      (th.classList.remove("th-sort-asc", "th-sort-desc"));
   table.querySelector(`th:nth-child(${parseInt(column) + 1})`).classList.toggle("th-sort-asc", asc);
   table.querySelector(`th:nth-child(${parseInt(column) + 1})`).classList.toggle("th-sort-desc", !asc);
   }
};
