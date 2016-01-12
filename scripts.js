$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var addressInput = $("input#address").val();
    var nameInput = $("input#name").val();

    $(".address").text(addressInput);
    $(".name").text(nameInput);

    $("#Receipt").show();
    $("#Thankyou").show();
    $("#shipping").show();

    event.preventDefault();
  });
  });
