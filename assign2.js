


/* url of song api --- https versions hopefully a little later this semester */	
const api = 'https://www.randyconnolly.com/funwebdev/3rd/api/music/songs-nested.php';

const songArray = [];
let apiArtistArray = [];
let apiGenreArray = [];
// get song data from api and put into songArray
fetch(`${api}`)
.then(resp => resp.json())
.then(songs => {
    console.log(`DATA FETCHED`);
    // populate songArray
    for(let s of songs){
      songArray.push(s);
      }
      apiArtistArray = buildArtistArray();
      apiGenreArray = buildGenreArray();

});

function buildArtistArray(){
   const result = [];
   for (let s of songArray){
      apiArtistArray.push(s.artist);
      apiGenreArray.push(s.genre);
   }
   
   const map = new Map();
   for (const artist of apiArtistArray) {
      if(!map.has(artist.id)){
         map.set(artist.id, true);    // set any value to Map
         result.push({
               id: artist.id,
               name: artist.name
         });
      }
   }
   return result;
}

function buildGenreArray(){
   const result = [];
   const map = new Map();
   for (const genre of apiGenreArray) {
      if(!map.has(genre.id)){
         map.set(genre.id, true);    // set any value to Map
         result.push({
               id: genre.id,
               name: genre.name
         });
      }
   }
   return result;
}


/* note: you may get a CORS error if you try fetching this locally (i.e., directly from a
   local file). To work correctly, this needs to be tested on a local web server.  
   Some possibilities: if using Visual Code, use Live Server extension; if Brackets,
   use built-in Live Preview.
*/
const artistArray = JSON.parse(artistString);
const genreArray = JSON.parse(genreString);



document.addEventListener('DOMContentLoaded', function(){
const header = document.querySelector("header");
const showPlaylist = document.createElement("button");
showPlaylist.textContent = "Playlist";
showPlaylist.addEventListener("click", function(){
   const index = document.querySelector("#index");
   const playlist = document.querySelector("#playlistPage")
   index.hidden = true;
   playlist.hidden = false;
})
const drops = document.querySelectorAll(".dropbtn");
for(const dropdown of drops){
dropdown.addEventListener("click", function(){
   console.log("hello");
   dropMenu = document.querySelectorAll("#myDropdown")
   for (const options of dropMenu){
   options.classList.toggle("show");
}
})}
window.addEventListener("click", function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 })
header.appendChild(showPlaylist);
const showNames = document.querySelectorAll("a[href='#groupNames']");
for (let names of showNames){
names.addEventListener("click", function(){
   window.alert("The Group Members Are: Guy Goren, Matt Schweitzer, and Matthew Anand")
})}
const showGit = document.querySelectorAll("a[href = '#github']");
for(Git of showGit){
Git.addEventListener("click", function(){
   window.alert("https://github.com/MatthewAnand/COMP-3512-assignment-2");
})}
const playlistHeader = document.querySelector("#playlistHeader")
const songHeader = document.querySelector("#songHeader");
const back = document.createElement("button");

back.textContent = "Close View";
back.addEventListener("click", function(){
   const index = document.querySelector("#index");
   const playlist = document.querySelector("#playlistPage")
   index.hidden = false;
   playlist.hidden = true;
   
})

const back1 = document.createElement("button");

back1.textContent = "Close View";
back1.addEventListener("click", function(){
   const index = document.querySelector("#index");
   const song = document.querySelector("#singleSongPage")
   index.hidden = false;
   song.hidden = true;
   
})
playlistHeader.appendChild(back);
songHeader.appendChild(back1);
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
const title = document.querySelector("input");

// Populates the artist drop down
for(let a of artistArray){
   const option = document.createElement("option");
   option.value=a.id;
   option.textContent=a.name;
   option.dataset.id=a.id;
   artists.appendChild(option);
}
artists.addEventListener("change", populateArtist);

// Populates the genre drop down
for(let a of genreArray){
   const option = document.createElement("option");
   option.value=a.id;
   option.textContent=a.name;
   option.dataset.id=a.id;
   genres.appendChild(option);
}
genres.addEventListener("change", populateGenre);
title.addEventListener("input", populateTitle);

//adds the clear button to the playlist
function replaceTable() {
   const old_tbody = document.querySelector("#playlistBody")
   const new_tbody = document.createElement('tbody');
   new_tbody.id = "playlistBody";
   old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
}
const removeAll = document.createElement("button");
removeAll.textContent = "Clear Playlist";
removeAll.addEventListener("click", replaceTable)
const options = document.querySelector("#buttonPlaylist");
options.appendChild(removeAll);

}); // end of DOMContentLoaded EventListener


/**
 * Triggered by changing the artist dropdown.
 * Retrives results and populates the table. 
 */
function populateArtist(e){
   const artist = e.target;
   for (let song of songArray){
      //console.log("artistLoop");
      if(song.artist.id == artist.value){
        //create song row
        buildSongRow(song);
        //build view song button
        buildViewSongButton(song);
        //build add to playlist button
        AddtoPlaylist(song);
        // add song to table
        table.appendChild(row);

      }
   }
}





/**
 * Triggered by changing the genre dropdown.
 * Retrives results and populates the table. 
 */
function populateGenre(e){
   const genre = e.target;
   for (let song of songArray){
      //console.log("genreLoop");
      if(song.genre.id == genre.value){
         //create song row
         buildSongRow(song);
         //build view song button
         buildViewSongButton(song);
         //build add to playlist button
        AddtoPlaylist(song);
         // add song to table
         table.appendChild(row);
      }
   }
}

/**
 * Triggered by typing in the title search field.
 * Retrives results and populates the table. 
 */
function populateTitle(e){
   const title = e.target.value;
   for (let song of songArray){
      //console.log("titleLoop");
      if(song.title.toLowerCase().includes(title.toLowerCase())){
         //create song row
         buildSongRow(song);
         //build view song button
         buildViewSongButton(song);
         //build add to playlist button
        AddtoPlaylist(song);
         // add song to table using function
        addSongResult(table, titleTable, title);
      }else{
         filterList(title);
      }
   } 
}

/**
 * Builds the song row
 * 
 * ***** whoever made this original code did it with a bunch of global variables,
 * this could be a big issue... or I'm 100% wrong idk 
 */
function buildSongRow(song){
   table = document.querySelector("tbody");
   row = document.createElement("tr")
   row.id="row";
   titleTable = document.createElement("td");
   titleLink = document.createElement("a")
   titleLink.addEventListener("click",function(){
      singleSong = document.querySelector("#singleSongPage");
      index = document.querySelector("#index");
      singleSong.hidden = false;
      index.hidden=true;
      // calc duration
      const songLength = document.querySelector("#duration");
      let minutes = (song.details.duration / 60).toFixed(0);
      let seconds = (song.details.duration % 60);
      songLength.textContent= `${minutes}:${seconds}`;
  
      const songTitle = document.querySelector("#titleSong");
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

      //Energy
      energy.textContent = "Energy: ";
      let energyBar = document.createElement(`progress`);
      energyBar.setAttribute(`max`, 100);
      energyBar.setAttribute(`value`, song.analytics.energy);
      energy.appendChild(energyBar);

      //Danceability
      dance.textContent = "Danceability: ";
      let danceabilityBar = document.createElement(`progress`);
      danceabilityBar.setAttribute(`max`, 100);
      danceabilityBar.setAttribute(`value`, song.analytics.danceability);
      dance.appendChild(danceabilityBar);

      //Liveness
      live.textContent = "Liveness: ";
      let livenessBar = document.createElement(`progress`);
      livenessBar.setAttribute(`max`, 100);
      livenessBar.setAttribute(`value`, song.analytics.liveness);
      live.appendChild(livenessBar);

      //Valence
      valence.textContent = "Valence: ";
      let valenceBar = document.createElement(`progress`);
      valenceBar.setAttribute(`max`, 100);
      valenceBar.setAttribute(`value`, song.analytics.valence);
      valence.appendChild(valenceBar);

      //Acousticness
      acoustic.textContent = "Acousticness: ";
      let acousticBar = document.createElement(`progress`);
      acousticBar.setAttribute(`max`, 100);
      acousticBar.setAttribute(`value`, song.analytics.acousticness);
      acoustic.appendChild(acousticBar);

      //Speechiness
      speech.textContent = "Speechiness: ";
      let speechBar = document.createElement(`progress`);
      speechBar.setAttribute(`max`, 100);
      speechBar.setAttribute(`value`, song.analytics.speechiness);
      speech.appendChild(speechBar);

      //Popularity
      pop.textContent = "Popularity: ";
      let popBar = document.createElement(`progress`);
      popBar.setAttribute(`max`, 100);
      popBar.setAttribute(`value`, song.details.popularity);
      pop.appendChild(popBar);

      //radarChart
      buildChart(song.details.bpm, song.analytics.energy, song.analytics.danceability, song.analytics.liveness, song.analytics.valence, song.analytics.acousticness, song.analytics.speechiness, song.details.popularity);
   })
   titleLink.textContent=song.title;
   titleTable.id=song.song_id;
   titleTable.appendChild(titleLink);
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
}

function buildViewSongButton(song){
   seeSongButton.id = song.id;
   seeSongButton.addEventListener("click", function(){
      singleSong = document.querySelector("#singleSongPage");
      index = document.querySelector("#index");
      singleSong.hidden = false;
      index.hidden=true;

      // calc duration
      const songLength = document.querySelector("#duration");
      let minutes = (song.details.duration / 60).toFixed(0);
      let seconds = (song.details.duration % 60);
      songLength.textContent= `${minutes}:${seconds}`;

      const songTitle = document.querySelector("#titleSong");
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

      //Energy
      energy.textContent = "Energy: ";
      let energyBar = document.createElement(`progress`);
      energyBar.setAttribute(`max`, 100);
      energyBar.setAttribute(`value`, song.analytics.energy);
      energy.appendChild(energyBar);

      //Danceability
      dance.textContent = "Danceability: ";
      let danceabilityBar = document.createElement(`progress`);
      danceabilityBar.setAttribute(`max`, 100);
      danceabilityBar.setAttribute(`value`, song.analytics.danceability);
      dance.appendChild(danceabilityBar);

      //Liveness
      live.textContent = "Liveness: ";
      let livenessBar = document.createElement(`progress`);
      livenessBar.setAttribute(`max`, 100);
      livenessBar.setAttribute(`value`, song.analytics.liveness);
      live.appendChild(livenessBar);

      //Valence
      valence.textContent = "Valence: ";
      let valenceBar = document.createElement(`progress`);
      valenceBar.setAttribute(`max`, 100);
      valenceBar.setAttribute(`value`, song.analytics.valence);
      valence.appendChild(valenceBar);

      //Acousticness
      acoustic.textContent = "Acousticness: ";
      let acousticBar = document.createElement(`progress`);
      acousticBar.setAttribute(`max`, 100);
      acousticBar.setAttribute(`value`, song.analytics.acousticness);
      acoustic.appendChild(acousticBar);

      //Speechiness
      speech.textContent = "Speechiness: ";
      let speechBar = document.createElement(`progress`);
      speechBar.setAttribute(`max`, 100);
      speechBar.setAttribute(`value`, song.analytics.speechiness);
      speech.appendChild(speechBar);

      //Popularity
      pop.textContent = "Popularity: ";
      let popBar = document.createElement(`progress`);
      popBar.setAttribute(`max`, 100);
      popBar.setAttribute(`value`, song.details.popularity);
      pop.appendChild(popBar);

      //radarChart
      buildChart(song.details.bpm, song.analytics.energy, song.analytics.danceability, song.analytics.liveness, song.analytics.valence, song.analytics.acousticness, song.analytics.speechiness, song.details.popularity);
   })
   
}
function AddtoPlaylist(song){
playlistButton.id = song.id;
playlistButton.addEventListener("click", function(){
   Playlist = document.querySelector("#playlistBody");
   songRow = document.createElement("tr");
   const songPop = document.createElement("td");
   songPop.textContent=song.details.popularity;
   const songTitle = document.createElement("td");
   songTitle.textContent = song.title;
   const songArtist = document.createElement("td");
   songArtist.textContent = song.artist.name;
   const songYear = document.createElement("td");
   songYear.textContent = song.year;
   const songGenre = document.createElement("td");
   songGenre.textContent = song.genre.name;
   songRow.appendChild(songTitle);
   songRow.appendChild(songArtist);
   songRow.appendChild(songYear);
   songRow.appendChild(songGenre);
   songRow.appendChild(songPop);
   //remove button for this song
   const removeSong = document.createElement("button");
   removeSong.textContent = "Remove";
   removeSong.addEventListener("click", function(){
 let row = removeSong.parentNode;
 row.parentNode.removeChild(row);
   })
   songRow.appendChild(removeSong);
   Playlist.appendChild(songRow);
   window.alert("The song " + songTitle.textContent + " by " +songArtist.textContent +" has been added to your playlist")
})
}

/** SOMTHING CAUSING TITLE SEARCH TRIGGER TO NOT FIRE SOMTIMES
 *  ex: if you have "test" in the search field and press 1 or 2
 * it will immedietly filter out evrething but test1 or test2,
 * but when test3 is entered it only filters after you add and 
 * delete a space. IDFK.
 */
// adds found song to table
// also handles duplicates
function addSongResult(table, titleTable, title){
   filterList(title);
   //get list of all rows
   let listItems = document.querySelectorAll("#row");
   let dupeFound = false;
      
   // if song already displayed
   for(let i of listItems){
      //console.log("addSongLoop");
      if(i.firstChild.id == titleTable.id){
         dupeFound = true;
      }
   }
   if (dupeFound == false){
      table.appendChild(row);
      filterList(title);
   }
}

// Loops through all results in browse table and
// filters out values that no longer match search criteria
function filterList(title){
   let listItems = document.querySelectorAll("#row");
   for(let i of listItems){
      //console.log("filterLoop");
      if(((titleTable.textContent.toLowerCase()).includes(title.toLowerCase())) == false){
         i.remove();
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

function buildChart(bpm, energy, dance, live, valence, acoustic, speech, pop){
   // if chart exists, destroy.
   if(typeof radarChart != "undefined"){
      radarChart.destroy();
   }
   

       const ctx = document.getElementById('myChart');
       radarChart = new Chart(ctx, {
         type: 'radar',
         data: {
           labels: ['BPM', 'Energy', 'Danceability', 'Liveness', 'Valence', 'Acousticness', 'Speechiness',
             'Popularity'
           ],
           datasets: [{
             label: 'Song Data',
             data: [bpm, energy, dance, live, valence, acoustic, speech, pop],
             backgroundColor: 'rgba(54, 162, 235, 0.2)',
             borderColor: 'rgba(0,175,236,255)',
             pointBackgroundColor: 'rgba(11,49,86,255)',
             pointBorderColor: 'rgba(11,49,86,255)',
             pointHoverBackgroundColor: '#ffff',
             pointHoverBorderColor: '#0b88c3'
           }]
         },
         options: {
            maintainAspectRatio: false,
         },
         scale: {
            angleLines: {
               color: 'rgba(240, 240, 240,0.5)',
           },

           grid: {
               color: "lightgreen",
           },
          },
       });
}



