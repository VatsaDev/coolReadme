var converter = new showdown.Converter();

function convert(text) {
  var html = converter.makeHtml(text);
  console.log(html);
}

async function fetchReadme() {
  fetch('https://raw.githubusercontent.com/VatsaDev/VatsaDev/main/README.md')
    .then((response) => response.text())
    .then((result) => {
      convert(result);
    });
}

fetchReadme();
