import API_BASE_URL from './apiBaseUrl';

export default () => fetch(API_BASE_URL + '/api/quotes.json').then(r => r.json()).then(quotes => {
  for (const quote of quotes) {
    let key = quote.source + " " + firstWords(quote.text[0]);
    key = key.replace(/[^[a-zA-z0-9 ]/g, "");
    key = key.replace(/\s+/g, "-");
    quote.key = key;
  }
  console.log(quotes);
  return quotes;
});

function firstWords(s) {
  const m = s.match(/(\S+\s+){5}\S+/);
  if (m) {
    return m[0];
  } else { // there were not at least 6 words
    return s;
  }
}