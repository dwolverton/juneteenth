// const API_BASE_URL = '';
const API_BASE_URL = 'https://dwolverton.github.io/juneteenth/public';

export default () => fetch(API_BASE_URL + '/api/quotes.json').then(r => r.json()).then(quotes => {
  for (const quote of quotes) {
    let key = quote.source + " " + firstWords(quote.text[0]);
    key = key.replace(/[^[a-zA-z0-9 ]/g, "");
    key = key.replace(/\s+/g, "-");
    quote.key = key;
  }
  return quotes;
});

export function getPhotoUrl(photo) {
  return API_BASE_URL + photo;
}

function firstWords(s) {
  const m = s.match(/(\S+\s+){5}\S+/);
  if (m) {
    return m[0];
  } else { // there were not at least 6 words
    return s;
  }
}