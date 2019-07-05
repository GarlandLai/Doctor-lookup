import $ from 'jquery';
import { DoctorLook } from './doctor.js'

$(document).ready(function() {
  $('#findDoc1').click(function(){
    let nameInput = $('#name').val();
    let doctorLook = new DoctorLook();

    let promise = doctorLook.getDoctor(name);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
    });






//   $('#findDoc2').click(function() {
//     let issueInput = $('#medIssue').val();
//     $('#medIssue').val("");
  });
});
