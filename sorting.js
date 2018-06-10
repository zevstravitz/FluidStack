$(document).ready(function() {
  $( "#timestack2, #timestack1" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
});


/*$('#timestack1').sortable({tolerance: 'pointer', cursor: 'pointer', revert: true, opacity: .6});
});

$("#timestack").disableSelection();*/
