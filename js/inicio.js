function buscarUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        window.open(url, '_blank');
      }, function (error) {
        alert('No se pudo obtener tu ubicación.');
      });
    } else {
      alert('La geolocalización no está soportada en este navegador.');
    }
  }