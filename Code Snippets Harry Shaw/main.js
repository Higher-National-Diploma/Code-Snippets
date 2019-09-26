$(document).ready(function() {"use strict";


});

function submit()
    {
        document.getElementById("search").click(); // Simulates button click
        document.submitForm.submit(); // Submits the form without the button
    }


$(document).ready(function(){
//On click run code
$("#search").click(function(){"use strict";
  //Get value of input field
var searchTerm = $('#city').val();
//Run ajax and get return in data type JSON
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +
            "&query&limit=1&namespace=0&parse&page=API:Parsing_wikitext&prop=extracts&raw&props=claims&exintro&format=json&callback=?";
  console.log(url);
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function (data) {
        $('#discription-output').html('');
        for(var i=0;i<data[1].length;i++){
          $('#discription-output').prepend("<div><div class='btn-primary'><h4"+data[3][i]+"><h4>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>" );
        }
 $("#city").val('');
      },
      error: function (errorMessage) {
       console.log(errorMessage);
      }
  });


});
    $("#searchTerm").keypress(function(e){
    if(e.which===13){
      $("#city").click();
    }
  });
});
