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
          $('.output ul').append(`<li> Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, Address: ${body.data[i].practices.visit_adresss}, Phone: ${body.data[i].practices.phones}, Accepting New Patients: ${body.data[i].practices.accepts_new_patients}  </li>`);
          // $('.output').append(body.data[i].lastName, firstName, address, phone number, website, accepting new patients)
        // } else {
        //   $('.output').text('There are 0 results matching your search. Please update or check your search. Thank you!')
        }
      }

    });
  });
});
