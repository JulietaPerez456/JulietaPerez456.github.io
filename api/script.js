function iniciarMap(){
    var coord = {lat:21.4312044 ,lng:-104.8961782};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }