var pageMod = require("sdk/page-mod"),
    tabs = require("sdk/tabs");

pageMod.PageMod({
  include: "https://feedbin.com/*",
  contentScriptFile: "./content.js",
  onAttach: listen
});

function listen(w) {
  w.port.on("open", openBackgroundTab);
}

function openBackgroundTab(url) {
  tabs.open({
    url: url,
    inBackground: true
  });
}
