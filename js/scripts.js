$(document).ready(function(){
  $("#formOne").submit(function(event){
      var sentenceInput = $("input#sentence").val();
      var upper = sentenceInput.toUpperCase();
      $("#text").text(upper);

      event.preventDefault();
  })
})
