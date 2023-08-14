const queryString = window.location.search;
var converter = new showdown.Converter();
const urlParams = new URLSearchParams(queryString);
const u = urlParams.get('u');
const style = urlParams.get('style');

function setup() {
  document.title = u;
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
      if ((result = '404: Not Found')) {
        fetch(`https://raw.githubusercontent.com/${u}/${u}/main/README.md`)
          .then((response) => response.text())
          .then((result) => {
            convert(result);
          });
      } else {
        convert(result);
      }
    });
}

setup();
fetchReadme();

function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

addStyle(style);
