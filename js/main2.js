function initMap() {
  var myLatLng = {lat: 51.524574, lng: -0.065119};

  var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Stephanie Edwards'
  });
}

$('.menu').addClass('hidden-menu');
$('.menu-btn').on('click',function(){
  $('.menu').toggleClass('hidden-menu');
})

$(document).ready(function(){
//When the document is ready call our create Map function
initMap();
});
