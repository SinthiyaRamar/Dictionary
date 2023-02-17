function themeChange(){
   if($('#checkbox').is(":checked")){
    $('#dictionary').css("background","#050505");
    $('#wordSearchInputBox').css("background","#757575");
    $('#wordSearchInputBox').css("color","white");
    $('#checkbox').css("background","#a445ed");
    $('.nounDefinitions').css("color","white");
    $('.noun').css("color","white");
    $('#wordText').css("color","white");
    $('body').css("background","#3a3a3a");
    $('#select').css("background","#757575");
    $('#title').css("color","white");
    $('#errorMessage').css("color","white");
   }
   else{
    $('#dictionary').css("background","white");
    $('#wordSearchInputBox').css("background","#f4f4f4");
    $('#wordSearchInputBox').css("color","black");
    $('#checkbox').css("background","#757575");
    $('.nounDefinitions').css("color","black");
    $('.noun').css("color","black");
    $('.noun').css("color","black");
    $('body').css("background","white")
    $('#select').css("background","#e9e9e9");
    $('#title').css("color","black")
    $('#errorMessage').css("color","black");
    
   }
}



$(document).ready(function() {
    var mySelect = $('select');
    mySelect.on('change', function() {

      var selectedOption = $(this).val();
      myOnClickFunction(selectedOption);
    });
  });

  function myOnClickFunction(selectedOption) {
    if(selectedOption=='Sansserif'){
        $('body').css("font-family","Arial, sans-serif")
       
    }
    if(selectedOption=='Serif'){
    $('body').css("font-family","Times New Roman, Times, serif")
       
    }
    if(selectedOption=='Mono'){
    $('body').css("font-family","Consolas, monaco, monospace")
       
    }
  }
  