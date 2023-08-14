const queryString = window.location.search;
var converter = new showdown.Converter();
const urlParams = new URLSearchParams(queryString);

function convert(text) {
  var html = converter.makeHtml(text);
  document.getElementById('content').innerHTML = html;
}

async function fetchReadme() {
  const u = urlParams.get('u');
  fetch(`https://raw.githubusercontent.com/${u}/${u}/master/README.md`)
    .then((response) => response.text())
    .then((result) => {
      convert(result);
    });
}

async function settings() {
  const u = urlParams.get('u');
  fetch(`https://raw.githubusercontent.com/vatsadev/vatsadev/master/set.json`)
    .then((response) => response)
    .then((result) => {
      console.log(result);
    });
}

fetchReadme();
settings();
