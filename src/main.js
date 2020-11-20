import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BreweryFinder from './project.js';

function clearFields() {
  $('#zipcode').val("");
}

function getElements(response) {
  if(response) {
    $('#response').text(`Here is a list of breweries near ${response[0].postal_code}: `);
    for (let i=0;i<response.length; i++) {
      $('#breweryResponse').append(`<li> ${response[i].name} <br> `);
      $('#breweryResponse').append(` ${response[i].street} <br>`);
      $('#breweryResponse').append(`Phone: ${response[i].phone} </li>`);
    }
    // response.map(function(response) {
    //   $('#brewLinks').text(`${response.website_url}`)      does not work yet, only shows last brewery url
    // }); 
    } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(zipcode){
  const response = await BreweryFinder.findBrewery(zipcode);
  getElements(response);
}

//User Logic goes here

 $(document).ready(function() {
$("#breweryZip").submit(function(event) {
    event.preventDefault();
    let zipcode = parseInt($('#zipcode').val());
    clearFields();
    makeApiCall(zipcode);
  });
});