$(document).ready(function(){

var formData = 'http://json-data.herokuapp.com/forms';

$.ajax({
  url: formURL,
  dataType: 'json',
  method: 'get'
<<<<<<< HEAD
}).then (function (response) {

});

=======
}).then (function (formData) {


    
  
var newArray = {
   data: formData
};
    
var ; $("#formTemplate").text();
var ; Mustache.render( , );
$("#main").html

    
    
  });  
});//Closes Document Ready
>>>>>>> afa93761942c6d24a529bb6415dcf13cd240790f
