export class DoctorLook {
  getDoctor(name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5155,-122.6793,100&user_key=a0220cf0dee3060d82e4f322141749b6`;

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
