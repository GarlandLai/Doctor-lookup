import $ from 'jquery';
import { DoctorLook } from './doctor.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#findDoc').click(function(){
    let firstName = $('#firstName').val();
    $('#firstName').val("");
    let lastName = $('#lastName').val();
    $('#lastName').val("");
    let issueInput = $('#medIssue').val();
    $('#medIssue').val("");
    let doctorLook = new DoctorLook();

    let promise = doctorLook.getDoctor(firstName, lastName, issueInput );

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      for (let i = 0; body.data.length <= 0; i+=1) {
        if (body.data[i].profile.last_name.includes(lastName) || body.data[i].profile.first_name.includes(firstName)) {
          console.log(body.data[i].profile.first_name);
          // $('.output').append(body.data[i].lastName, firstName, address, phone number, website, accepting new patients)
        // } else {
        //   $('.output').text('There are 0 results matching your search. Please update or check your search. Thank you!')
        }
      }

    });
  });
});
