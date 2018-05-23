import 'whatwg-fetch';

export default () => fetch('https://restcountries.eu/rest/v2/region/europe')
  .then(res => res.json())