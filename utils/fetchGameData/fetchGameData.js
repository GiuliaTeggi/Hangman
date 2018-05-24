import 'whatwg-fetch';

// eslint-disable-next-line
export default (region = 'europe') => fetch(`https://restcountries.eu/rest/v2/region/${region}`)
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
