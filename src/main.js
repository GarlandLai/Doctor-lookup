import $ from 'jquery';
import { DoctorLook } from './doctor.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#findDoc').click(function(){
    const userInput = $('#input').val();
    $('#input').val('');
    $('.output ol').empty();
    $('#noResults').empty();
    let doctorLook = new DoctorLook();
    let promise = doctorLook.getDoctor(userInput);

    promise.then(function(response) {
      const body = JSON.parse(response);
      if (body.data.length === 0) {
        $('.output ol').html(' <h5>No results have been found. please check your search and try again.</strong><h5>')
      };
      for (let i = 0; i < body.data.length; i+=1) {
        $('.output ol').append(`<li><strong>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</strong><br>
          <strong>Address:</strong> ${body.data[i].practices[0].visit_address.street}<br>
          <strong>Phone:</strong>${body.data[i].practices[0].phones[0].number}<br> <strong>Accepting New Patients:</strong> ${body.data[i].practices[0].accepts_new_patients}</li>`);
      };
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });


  $('#findDoc2').click(function(){
    const nameInput = $('#name').val();
    $('#name').val('');
    $('.nameOutput ol').empty();
    $('#noResults').empty();
    let doctorLook = new DoctorLook();
    let promise = doctorLook.getDoctorName(nameInput);

    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      if (body.data.length === 0) {
        $('.nameOutput ol').html(' <h5> No results have been found. please check your search and try again. </h5>')
      };
      for (let i = 0; i < body.data.length; i+=1) {
        $('.nameOutput ol').append(`<li><strong>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</strong><br>
          <strong>Address:</strong> ${body.data[i].practices[0].visit_address.street}<br>
          <strong>Phone:</strong>${body.data[i].practices[0].phones[0].number}<br> <strong>Accepting New Patients:</strong> ${body.data[i].practices[0].accepts_new_patients}</li>`);
      };
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });


});
