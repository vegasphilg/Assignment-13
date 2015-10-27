$(document).ready(function(){

var formData = 'http://json-data.herokuapp.com/forms';

$.ajax({
  url: formURL,
  dataType: 'json',
  method: 'get'
  
}).then (function (formData) {


    
  
var newArray = {
   data: formData
};
    
var ; $("#formTemplate").text();
var ; Mustache.render( , );
$("#main").html

    
    
  });  
});//Closes Document Ready
