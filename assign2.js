


/* url of song api --- https versions hopefully a little later this semester */	
const api = 'http://www.randyconnolly.com/funwebdev/3rd/api/music/songs-nested.php';

 

/* note: you may get a CORS error if you try fetching this locally (i.e., directly from a
   local file). To work correctly, this needs to be tested on a local web server.  
   Some possibilities: if using Visual Code, use Live Server extension; if Brackets,
   use built-in Live Preview.
*/
const artistArray = JSON.parse(artistString);
const genreArray = JSON.parse(genreString);

document.write(`<select class="ui fluid dropdown" name="artists" id ="artists">`);
document.write(`<option value='0'> </option>`);
for(let a of artistArray){
   document.write("<option value='"+a.id+"'>"+a.name+"</option>");
}
document.write("</select>")

document.write(`<select class="ui fluid dropdown" name="genres" id ="genres">`);
document.write(`<option value='0'> </option>`);
for(let a of genreArray){
   document.write("<option value='"+a.id+"'>"+a.name+"</option>");
}
document.write("</select>")