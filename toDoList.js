$(document).ready(function() {
  $("#add").click(function() {
    var newListItem = $("#addtolist").val();
    var quantityNum = $("#quantity").val();
    console.log(newListItem);
    if ((newListItem.length > 0) && (quantityNum > 0)) {
      for (var i = 0; i < quantityNum; i++) {
        $("#timeStack").append("<li>" + newListItem + "</li>");
        $("#addtolist").val('');
      }}
  });
});
