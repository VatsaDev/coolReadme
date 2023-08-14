const queryString = window.location.search;
var converter = new showdown.Converter();
const urlParams = new URLSearchParams(queryString);
const u = urlParams.get('u');

function setup() {
  document.getElementById('userName').innerHTML = `@${u}`;
}

async function githubConvert(data) {
  const response = await fetch('https://api.github.com/markdown', {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `{"text":${data}}`,
  });
  console.log(response.text());
}

githubConvert('Hello **world**');

const text = await response.text();

console.log(text);

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
