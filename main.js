$(document).ready(function(){



  $.ajax({
  url:'http://json-data.herokuapp.com/forms',
  dataType: 'json',
  method: 'get'})
  	.then (function (formData) {

    var fetchedData = {
        data: formData
    };

     var formTemplate = $("#formTemplate").text();
	 var newArrayhtml = Mustache.render(formTemplate, fetchedData);
	 $("#main").html(newArrayhtml);
	
	});
    


    
    
 });//Closes Document Ready
