


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
         row.appendChild(titleTable);
         row.appendChild(artistTable);
         row.appendChild(yearTable);
         row.appendChild(genreTable);
         row.appendChild(popularityTable);
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
      const aColText = a.querySelector(`td:nth-child(${column+1})`).textContent.trim();
      const bColText = b.querySelector(`td:nth-child(${column+1})`).textContent.trim();
      return aColText > bColText ? (1* dirModifier) : (-1 * dirModifier);console.log(sortedRows);
   }); 
   while(tBody.firstChild){
      tBody.removeChild(tBody.firstChild);
   }
   tBody.append(...sortedRows);

   headers = table.querySelectorAll("th")
   for(th of headers){
      (th.classList.remove("th-sort-asc", "th-sort-desc"));
   table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
   table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);
   }
};
