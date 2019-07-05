export class DoctorLook {
  getDoctor(medIssue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8dd66e6a045597f1ce5f28b0149c8e9`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
