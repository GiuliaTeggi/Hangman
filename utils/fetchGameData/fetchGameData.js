import 'whatwg-fetch';

export default () => fetch('https://restcountries.eu/rest/v2/region/europe')
  .then(res => res.json())
  .then((countryInfoArray) => {
    return countryInfoArray.map(({ name: country, capital: city}) => {
      return {
        country,
        city,
      }
    })
  })
  .catch(({ message }) => {
    throw new Error(`Something went wrong fetching game data ${message}`)
  })