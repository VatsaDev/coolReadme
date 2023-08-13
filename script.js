const url = 'https://api.github.com/markdown';

const data = '{"text":"Hello **world**"}';

async function test() {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  });

  const text = await response.text();
  console.log(text);
}

test()