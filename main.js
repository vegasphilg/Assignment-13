$(document).ready(function(){

var formData = 'http://json-data.herokuapp.com/forms';

$.ajax({
  url: formURL,
  dataType: 'json',
  method: 'get'
  
}).then (function (formData) {
	fa-user: formData.fa-user,
	user-first-name:formData.user-first-name,
	user-last-name: formData.user-last-name

    var fetchedData = {
        data: formData
    };
});
    
var formTemplate = $("#formTemplate").text();
var newArrayhtml = Mustache.render(formTemplate , fetchedData);
$("#main").html(newArrayhtml),

    
    
  
});//Closes Document Ready
