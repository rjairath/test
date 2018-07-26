var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
 ];
$(document).ready(function(){
      $( "#accordion" ).accordion({
            icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
      });

      $("#tags").autocomplete({
            source: availableTags
      });

      $("#datepicker").datepicker({
            maxDate: "+1m",
            minDate: 0
      });

      $("#slider").slider({
            min: 0,
            max: 50,
            value: 10,
            slide: function(event, ui){
                 $("#sliderValue").val(ui.value); 
            }
      });

      $("#tabs").tabs({
            collapsible: true
      });

      $("#fragment1").tooltip();
      $("#fragment2").tooltip();
      $("#fragment3").tooltip();

      /*var selection=$("#slider").slider("value");
      $("#sliderValue").val(selection);
      console.log(selection);*/

      $("#datepickerFirst").datepicker({
            minDate: 0,
            maxDate: "+1y",
            onClose: function(selectedDate){
                  $("#datepickerSecond").datepicker("option", "minDate", selectedDate);
                  let maxDate=new Date();
                  maxDate.setDate(new Date(selectedDate).getDate()+30);
                  $("#datepickerSecond").datepicker("option", "maxDate", maxDate);
            }
      });
      $("#datepickerSecond").datepicker();

      var handle=$("#custom-handle");
      $("#slider2").slider({
            min: 0,
            max: 100,
            step: 5,
            create: function() {
              handle.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
              handle.text( ui.value );
            }
      });

      submitSlider=function(){
            // $("#slider2").slider({
            //       change: function(event,ui){
            //             value: $("#actualValue").val();
            //             handle.text(ui.value);
            //       }
            // })
            $( "#slider2" ).slider( "option", "value",parseInt($("#actualValue").val()));
            handle.text( $("#slider2").slider( "value" ) );

            $( "#slider2" ).slider( "option", "min",parseInt($("#minValue").val()));
            $( "#slider2" ).slider( "option", "max", parseInt($("#maxValue").val()));
      }
});

thirdPage=function(){
      location.href="thirdView.html";
}
