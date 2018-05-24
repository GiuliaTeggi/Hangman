import fetchGameData from './fetchGameData';
import dummyGameData from './dummyGameData'
import fetchMock from "fetch-mock";

/* eslint-disable */
describe('Test fetchGameData', () => {

  beforeAll(() => fetchMock.get('begin:https://restcountries.eu/rest/v2/region/', dummyGameData));

  afterAll(() => fetchMock.restore());

  test('Test fetchGameData is mocked', () => {
    return fetchGameData()
      .then((countriesArray) => {
        expect(countriesArray.length).toBe(dummyGameData.length);
      });
  });

  test('Test fetchGameData response format', async () => {
    const countriesArray = await fetchGameData();
    expect(countriesArray.length).toBe(dummyGameData.length);
    const mergedCountriesObj = countriesArray
      .reduce((accumulator, currentObj) => Object.assign(accumulator, currentObj), {});
    const countryObjectPropsArray = Object.keys(mergedCountriesObj);
    expect(countryObjectPropsArray.length).toBe(2);
    expect(countryObjectPropsArray).toEqual(expect.arrayContaining(['country', 'city']));
  });
});

describe('Test fetchGameData after mocking', () => {
  test('Test fetchGameData was mocked', () => {
    return fetchGameData()
      .then((countriesArray) => {
        expect(countriesArray.length).not.toBe(dummyGameData.length)
      });
  });
})