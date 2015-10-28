$(document).ready(function(){

var dataURL = 'http://json-data.herokuapp.com/forms';

  $.ajax({
  url:dataURL,
  method: 'get',
  dataType: 'json'
 
 }).then (function (formData) {

    var fetchedData = {
        formData: formData
    };

     var formTemplate = $("#formTemplate").text();
	 var newArrayhtml = Mustache.render(formTemplate, fetchedData);
	 $("#main").html(newArrayhtml);
	
	});
    


    
    
 });//Closes Document Ready
