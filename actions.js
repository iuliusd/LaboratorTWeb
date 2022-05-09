// noinspection JSJQueryEfficiency
$('#chbox').on('change', check);

function check() {
  const checked = $('#chbox').is(':checked');
  if (checked) {
    $('#enddate').attr('disabled', true) && valText('In present');
  } else {
    $('#enddate').removeAttr('disabled');
  }
}

function dropdwn() {
  document.getElementById("educationtype").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function validateName(){
  const error = document.getElementById('usernameError');
  let usernameError = ('Please enter your full name (first & last name).');
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let name = document.getElementById('username').value;
  if(!regName.test(name)){
    error.innerHTML = usernameError;
    error.style.display = 'block';
    return false;
  }else{
    error.style.display="none";
    return true;
  }
}

function validateEmail(){
  const error = document.getElementById('emailError');
  let emailError = ('Email must contain `@` and `.`');
  let email = document.getElementById('email').value;
  if (email.includes('@') && email.includes('.')) {
    error.style.display = 'none';
    return true;
  }else{
    error.innerHTML = emailError;
    error.style.display="block";
    return false;
  }
}

function validatePhone() {
  const error = document.getElementById('phoneError');
  let phoneError = ('Respect the requirements.');
  let phone = document.getElementById('phone').value;
  if (phone.includes('+373')){
    error.style.display = 'none';
    return true;
  } else {
    error.innerHTML = phoneError;
    error.style.display="block";
    return false;
  }
}

function validateForm() {
  validateName();
  validateEmail();
  validatePhone();
  validateLinks();
  if(validateName() === true && validateEmail() === true && validatePhone() === true && validateLinks() === true){
    return true;
  }else return false;
}

function validateLinks() {
  const error = document.getElementById('linkError');
  let linkError = ('Only social links');
  let links = document.getElementById('links').value;
  if ((links.includes('https://') || links.includes('.com/') || links.includes('www.')) && (links.includes('instagram') || links.includes('facebook') || links.includes('twitter') || links.includes('linkedin'))) {
    error.style.display = 'none';
    return true;
  } else {
    error.innerHTML = linkError;
    error.style.display="block";
    return false;
  }
}

$('#save').on('click',response);
$('#save1').one('click',response1);

function response1(){
  validateJob();
  validateStartdate();
  validateEnddate();
  validateCity();
  validateCompany();
  if(validateJob() === true && validateStartdate() === true && validateEnddate() === true && validateCity() === true && validateCompany() === true){
    hide1();
    return true;
  } else return false;
}

function validateJob(){
  const error = document.getElementById('jobError');
  let jobError = ('Select a job from list');
  let job = document.getElementById('jobname').value;

  if(job===""){
    error.innerHTML = jobError;
    error.style.display="block";
    return false;
  }
  else{
    error.style.display="none";
    return true;
  }
}

function validateStartdate(){
  const error = document.getElementById('startdateError');
  let startdateError = ('Start date is required');
  let startdate = document.getElementById('startdate').value;

  if(startdate===""){
    error.innerHTML = startdateError;
    error.style.display="block";
    return false;
  }
  else{
    error.style.display="none";
    return true;
  }
}

function validateEnddate(){
  const error = document.getElementById('enddateError');
  let enddateError = ('End date is required');
  let enddate = document.getElementById('enddate').value;

  if(enddate===""){
    error.innerHTML = enddateError;
    error.style.display="block";
    return false;
  }
  else{
    error.style.display="none";
    return true;
  }
}

function validateCity(){
  const error = document.getElementById('cityError');
  let cityError = ('Select a option from list');
  let city = document.getElementById('city1').value;

  if(city===""){
    error.innerHTML = cityError;
    error.style.display="block";
    return false;
  }
  else{
    error.style.display="none";
    return true;
  }
}

function validateCompany(){
  const error = document.getElementById('companyError');
  let companyError = ('Select a option from list');
  let company = document.getElementById('companyname').value;

  if(company===""){
    error.innerHTML = companyError;
    error.style.display="block";
    document.getElementById('container3').style.height="500px";
    return false;
  }
  else{
    error.style.display="none";
    return true;
  }
}

function response(){
  validateGraduation();
  validateInstitution();
  validateEducation();
  if (validateInstitution() === true && validateGraduation() === true && validateEducation() === true){
    hide();
    return true;
  } else return false;
}

function validateGraduation(){
  const error = document.getElementById('graduationError');
  let graduationError = ('Select graduation date');
  let graduation = document.getElementById('date').value;

  if(graduation===""){
    error.innerHTML = graduationError;
    error.style.display="block";
    return false;
  }
  else{
    error.style.display="none";
    return true;
  }
}

function validateInstitution(){
  const error = document.getElementById('institutionError');
  let institutionError = ('Complete this field');
  let institution = document.getElementById('institution').value;

    if(institution===""){
      error.innerHTML = institutionError;
      error.style.display="block";
      return false;
    }
    else{
      error.style.display="none";
      return true;
    }
}

function validateEducation(){
  const error = document.getElementById('educationError');
  let educationError = ('Select education type');
  let education = document.getElementById('education').value;

  if(education===""){
    error.innerHTML = educationError;
    error.style.display="block";
    document.getElementById('container2').style.height="295px";
    return false;
  }
  else{
    error.style.display="none";
    return true;
  }
}

const container = $('#container');
let count = 0;

function makeRequest(index) {
  container.append(`<div>Sending request ${index}</div>`);
  $.ajax({
    url: 'http://localhost:3000/form-data',
    method: 'POST',
    datatype: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
    }),
    success: function(response) {
      console.log('true');
      container.append(`<div>${JSON.stringify(response)}</div>`);
    },
  });
}

$('#submit').on('click', () => {
  if(validateForm()===true){
  $.ajax({
    url: 'http://localhost:3000/form-data',
    method: 'POST',
    dataType: 'json',
    headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          username: $('#username').val(),
          email: $('#email').val(),
          phone: $('#phone').val(),
          address: $('#address').val(),
          profession: $('#profession').val(),
          links: $('#links').val(),
          institution: $('#institution').val(),
          date: $('#date').val(),
          education: $('#education').val(),
          job: $('#jobname').val(),
          startdate: $('#startdate').val(),
          enddate: $('#enddate').val(),
          city1: $('#city1').val(),
          companyname: $('#companyname').val(),
        }),
    success: function(response) {
      container.append(`<div>${JSON.stringify(response)}</div>`);
    },
  });
    window.location.href = 'presentare.html'
  }
});

function makeRequest1() {
  $.ajax({
    url: 'http://localhost:3000/professions/5',
    method: 'GET',
    datatype: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    success: function(response){
      response.forEach(title => {
        $('#profession').append('<option value="'+title.label+'">'+ title.label + '</option>');
      })
    },
  });
}

function makeRequest2() {
  $.ajax({
    url: 'http://localhost:3000/education-type/5',
    method: 'GET',
    datatype: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    success: function(response){
      response.forEach(title => {
        $('#education').append('<option value="'+title.education+'">'+ title.education + '</option>');
      })
    },
  });
}

function makeRequest3() {
  $.ajax({
    url: 'http://localhost:3000/job-name/5',
    method: 'GET',
    datatype: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    success: function(response){
      response.forEach(title => {
        $('#jobname').append('<option value="'+title.name+'">'+ title.name + '</option>');
      })
    },
  });
}

function makeRequest4() {
  $.ajax({
    url: 'http://localhost:3000/companies/5/city/Chisinău',
    method: 'GET',
    datatype: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    success: function(response){
      response.forEach(title => {
        $('#companyname').append('<option value="'+title.label+'">'+ title.label + '</option>');
      })
    },
  });
}
document.getElementById('education').style.width="100%";
document.getElementById('jobname').style.width="100%";
document.getElementById('companyname').style.width="100%";

$('#plus').on('click',show);
$('#plus1').on('click',show1);

function show(){
  document.getElementById('container2').style.display="block";
  document.getElementById('job').style.marginTop='8px';
}

function show1(){
  document.getElementById('container3').style.display="block";
}

function hide(){
  document.getElementById('container2').style.display="none";
  document.getElementById('job').style.marginTop='5px';
}

function hide1(){
  document.getElementById('container3').style.display="none";
}

$(document).ready(() => {
  makeRequest1();
  makeRequest2();
  makeRequest3();
  makeRequest4();
})
