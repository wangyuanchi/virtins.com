function changeText() {
  var SerialNoInput = document.getElementById("SerialNoInput").value;
  var DownloadLink = document.getElementById("DownloadLink");
  var NotFound = document.getElementById("NotFound");
  var http = new XMLHttpRequest();
  DownloadLink.href = "";
  DownloadLink.innerHTML = "";
  NotFound.innerHTML = "Calibration files " + SerialNoInput + ".zip not found!";

  http.open("HEAD", "https://www.virtins.com/CalibrationFiles/VT-RTA-168C/" + SerialNoInput + ".zip", false);
  http.send();
  if (http.status != 404) {
    DownloadLink.href = "https://www.virtins.com/CalibrationFiles/VT-RTA-168C/" + SerialNoInput + ".zip";
    DownloadLink.innerHTML = "Download link: " + SerialNoInput + ".zip";
    NotFound.innerHTML = "";
  }
}
