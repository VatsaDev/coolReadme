const queryString = window.location.search;
var converter = new showdown.Converter();
const urlParams = new URLSearchParams(queryString);
const u = urlParams.get('u');

function setup() {
  document.getElementById('userName').innerHTML = `@${u}`;
}

function convert(text) {
  var html = converter.makeHtml(text);
  document.getElementById('content').innerHTML = html;
}

async function fetchReadme() {
  fetch(`https://raw.githubusercontent.com/${u}/${u}/master/README.md`)
    .then((response) => response.text())
    .then((result) => {
      convert(result);
    });
}

async function settings() {
  fetch(`https://raw.githubusercontent.com/vatsadev/vatsadev/master/set.json`)
    .then((response) => response)
    .then((result) => {
      console.log(result);
    });
}

setup();
fetchReadme();
settings(); // not working
