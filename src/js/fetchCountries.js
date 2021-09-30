const BASE_URL = 'https://restcountries.com/v2/name';

function fetchCountry(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then(res => res.json());
}

export default { fetchCountry };