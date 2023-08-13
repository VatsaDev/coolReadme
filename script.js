const url = 'https://api.github.com/markdown';

let data = '{"text":"Hello **world**"}';

async function test() {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  });

  const text = await response.text();
  console.log(text);
}

async function fetchReadme() {
  fetch('https://raw.githubusercontent.com/VatsaDev/VatsaDev/main/README.md')
    .then((response) => response.text())
    .then((result) => {
      data = `{"text":${result}}`;
      console.log(result);
      test();
    });
}

fetchReadme();
