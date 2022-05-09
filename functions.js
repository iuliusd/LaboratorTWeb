let social;
function makeRequest() {
  $.ajax({
    url: 'http://localhost:3000/form-data',
    method: 'GET',
    datatype: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    success: function(response){
      $('#username').text(response.username);
      $('#email').text(response.email);
      $('#phone').text(response.phone);
      $('#address').text(response.address);
      $('#profession').text(response.profession);
      social=response.links;
      $('#institution').text(response.institution);
      $('#date').text(response.date);
      $('#education').text(response.education);
      $('#jobname').text(response.job);
      $('#startdate').text(response.startdate);
      $('#enddate').text(response.enddate);
      $('#city1').text(response.city1);
      $('#companyname').text(response.companyname);
      console.log(response);
      if(social.includes('facebook')){
        $('#soc').append('<span class="slinks"><a href="https://facebook.com"> <i class="fa fa-facebook-square"/></a></span>');
      } else
      if(social.includes('instagram')){
        $('#soc').append('<span class="slinks"><a href="https://instagram.com"><i class="fa fa-instagram"></i></a></span>');}
      else
      if(social.includes('twitter')){
        $('#soc').append('<span class="slinks"><a href="https://twitter.com"><i class="fa fa-twitter-square"></i></a></span>');}
      else
      if(social.includes('linkedin')){
        $('#soc').append('<span class="slinks"><a href="https://linkedin.com"><i class="fa fa-linkedin-square"></i></a></span>');}
    },
  });
}

$(document).ready(() => {
  makeRequest();

})
