const genreArray = JSON.parse(genreString);
for(let a of genreArray){
    document.write("<option value='"+a.id+"'>"+a.name+"</option>");
 }