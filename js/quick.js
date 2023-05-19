// gray
javascript: $("html").css(
  "filter",
  $("html").css("filter") == "none" ? "grayscale(1)" : "none"
);

// scale img
javascript: $("img").css("width", "20%");

// scal2 img
javascript: $("img").width((index, width) => 0.2 * width);
$("img").height((index, height) => 0.2 * height);
$("*").css("background-image", "none");

// img
javascript: setInterval(function () {
  $("img").attr("src", "none");
  $("*").css("background-image", "none");
}, 500);

// img
javascript: setInterval(function () {
  $("img").each(function () {
    if ($(this).css("background-image") !== "none") {
      $(this).css("background-image", "none");
    }
  });
  $("img").each(function () {
    if ($(this).attr("src") !== "none") {
      $(this).attr("src", "none");
    }
  });
}, 100);
