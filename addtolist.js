$(document).ready(function() {
  $("#add").click(function() {
    var newListItem = $("#addtolist").val();
    var quantityNum = $("#quantity").val();
    if ((newListItem.length > 0) && (quantityNum > 0) && (quantityNum <= 12)) {
      for (var i = 0; i < quantityNum; i++) {
        $("#timestack1").append("<li>" + newListItem + "</li>");
        $("#addtolist").val('');
      }}
  });
});
