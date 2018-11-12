let arrow = document.createElement("i");
arrow.setAttribute("onclick", "scrollWin()");
arrow.setAttribute("id", "arrow");
arrow.setAttribute("class","rarrow ow fas fa-arrow-alt-circle-up fa-3x arrow float-right col-2");
let connect = document.getElementById("btnbot");
connect.appendChild(arrow);
<<<<<<< HEAD
 function scrollWin() {
  $("html,body").animate({scrollTop: 0},"slow");
}
 //https://contattafiles.s3.us-west-1.amazonaws.com/tnt14094/MaBi12Obb-RvtCg/arrow2.png//
 jQuery(function(){
=======

function scrollWin() {
  $("html,body").animate({scrollTop: 0},"slow");
}


//https://contattafiles.s3.us-west-1.amazonaws.com/tnt14094/MaBi12Obb-RvtCg/arrow2.png//


jQuery(function(){
>>>>>>> Max
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 1200 ) {  // Quand on est à 200pixels du haut de page,
                $('#arrow').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#arrow').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});
<<<<<<< HEAD
 //Modal Movies//
 $(document).ready(function(){
=======

//Modal Movies//

$(document).ready(function(){
>>>>>>> Max
    $("#myBtn").click(function(){
        $("#batman").modal();
    });
});
<<<<<<< HEAD
 $(document).ready(function(){
=======

$(document).ready(function(){
>>>>>>> Max
    $("#myBtn").click(function(){
        $("#inception").modal();
    });
});
<<<<<<< HEAD
 $(document).ready(function(){
=======

$(document).ready(function(){
>>>>>>> Max
    $("#myBtn").click(function(){
        $("#intouchable").modal();
    });
});
<<<<<<< HEAD
 $(document).ready(function(){
=======

$(document).ready(function(){
>>>>>>> Max
    $("#myBtn").click(function(){
        $("#shutter").modal();
    });
});
<<<<<<< HEAD
 $(document).ready(function(){
    $("#myBtn").click(function(){
        $("#star").modal();
    });
}); 
=======

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#star").modal();
    });
});
>>>>>>> Max
