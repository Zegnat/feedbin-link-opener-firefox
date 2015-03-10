document.addEventListener(
  "keydown",
  function captureKeys(event) {
    var tag = event.target.tagName.toLowerCase();
    if (
      event.shiftKey && event.which === 86 &&
      tag !== "input" &&
      tag !== "textarea"
    ) {
      var link = document.getElementById("source_link");
      if ( link !== null ) {
        link = link.getAttribute("href");
        self.port.emit("open", link);
      }
    }
  }
);
