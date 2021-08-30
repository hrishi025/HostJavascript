$(".seat-box").click(function () {
  if ($(this).attr("id") == "seat-box-click") {
    $(this).removeAttr("id");
  } else {
    $(this).attr("id", "seat-box-click");
  }
});
