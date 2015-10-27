var formURL = 'http://json-data.herokuapp.com/forms';

$.ajax({
  url: formURL,
  dataType: 'json',
  method: 'get'
}).then (function (response) {
  console.log(response);
});