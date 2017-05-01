
$(function(){
  getPhotos();
});


var page : undefined;
var Photo = {
  title : undefined;
  id : undefined;
  server : undefined;
  secret : undefined;
  farm : undefined;
}


function getAllPhotos(data) {
  url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
    api_key + "&user_id=" + user_id + "&format=json&nojsoncallback=1";
  
  page = data.photos.pages;
  console.log(page);
  
  var i = 0;
  
  while ( i < data.photos.photo.length ) {
    
    var tittle_img = photo.title.substr(0, 1).toUpperCase() + photo.title.substr(1);
    var url_img = "https://farm" + photo.farm + ".staticflickr.com/" 
    + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
  }
}


function inyectHtml (url, size, description) {
  
}

             
function getPhotosBySearch (word) {

  
  }
             
//Funcion para limpiar los formularios
function cleanSearch (word){
  $(word).val("");
}
