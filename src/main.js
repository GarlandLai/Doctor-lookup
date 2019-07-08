import $ from 'jquery';
import { DoctorLook } from './doctor.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#findDoc').click(function(){
    const userInput = $('#input').val();
    let doctorLook = new DoctorLook();
    let promise = doctorLook.getDoctor(userInput);

    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      if (body.data.length === 0) {
        $('.output ul').html(' <li> No results have been found. please check your search and try again. </li>')
      };
      for (let i = 0; i < body.data.length; i+=1) {
        $('.output ol').append(`<li> Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, Address: ${body.data[i].practices[0].visit_address.street}, Phone: ${body.data[i].practices[0].phones[0].number}, Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}</li>`);
      };
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
