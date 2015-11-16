function createGoogleMap() {
  //This is the name of the ID where the map will be generated.
  var mapElement = document.getElementById("googleMap");
  //These are the properties of our map
  //Check out more controls at https://developers.google.com/maps/documentation/javascript/controls
  var mapProperties = {
    //First lets set the center of the map using a Latitude and Longitude
    //To get the coordinates see here https://support.google.com/maps/answer/18539?hl=en
    center:new google.maps.LatLng(51.524533,-0.067330),
    //We can set the zoom of the map
    zoom:15,
    //And the type of the map
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  //Finally we need to create the map by creating a "new" google map, passing in the mapElement and the mapProperties we just declared.
  var map = new google.maps.Map( mapElement, mapProperties);
  }
  var myLatlng = new google.maps.LatLng(51.524574,-0.065119);
  var mapOptions = {
    zoom:4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });


  // To add the marker to the map, call setMap();
  marker.setMap(map);

  $(document).ready(function(){
  //When the document is ready call our create Map function
  createGoogleMap();


});
