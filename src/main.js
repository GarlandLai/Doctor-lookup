import $ from 'jquery';
import { DoctorLook } from './doctor.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#findDoc').click(function(){
    let userInput = $('#input').val();
    $('#input').val("");
    // let issueInput = $('#medIssue').val();
    // $('#medIssue').val("");
    let doctorLook = new DoctorLook();

    let promise = doctorLook.getDoctor(userInput);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      for (let i = 0; i < body.data.length; i+=1) {
        console.log(body.data.length)
        if (body.data[i].profile.first_name.includes(userInput) || body.data[i].profile.last_name.includes(userInput) || body.data[i].profile.specialties.includes(userInput)) {
          $('.output ul').append(`<li> Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, Address: ${body.data[i].practices[0].visit_address.street}, Phone: ${body.data[i].practices[0].phones[0].number}, Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}</li>`);
        }
      }

    });
  });
});
