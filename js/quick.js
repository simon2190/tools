// gray
javascript: var root = document.documentElement;
if (root.style.getPropertyValue("filter") == "none") {
  root.style.setProperty("filter", "grayscale(1)");
} else {
  root.style.setProperty("filter", "none");
}

// img
javascript: setInterval(() => {
  document.querySelectorAll("img").forEach((img) => {
    if (img.src) img.removeAttribute("src");
  });
  document.querySelectorAll("div").forEach((e) => {
    if (getComputedStyle(e).backgroundImage != "none")
      e.style.backgroundImage = "none";
  });
}, 100);

// small img
javascript: document.querySelectorAll("img").forEach(function (img) {
  img.width = img.width / 2;
  img.height = img.height / 2;
});

// big img
javascript: document.querySelectorAll("img").forEach(function (img) {
  img.width = img.width * 2;
  img.height = img.height * 2;
});

///////////////////////
//        UDF
///////////////////////
setInterval(() => {
  document.querySelectorAll("img").forEach((img) => {
    if (img.src) img.removeAttribute("src");
  });
}, 10);
