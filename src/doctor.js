export class DoctorLook {
  getDoctor(name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      const url = `https://developer.betterdoctor.com?q=Portland&appid=a0220cf0dee3060d82e4f322141749b6`;

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
