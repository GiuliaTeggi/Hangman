import 'whatwg-fetch';

export default () => fetch('https://restcountries.eu/rest/v2/region/europe')
  .then(res => {
    if (res.status !== 200) {
      throw new Error(`Fetch responded with status: ${res.status}`);
    }
    return res.json();
  })
  .then((countryInfoArray) => {
    return countryInfoArray.map(({ name: country, capital: city}) => {
      return {
        country,
        city,
      }
    })
  })
  .catch(({ message }) => {
    throw new Error(`Something went wrong fetching game data ${message}`);
  })