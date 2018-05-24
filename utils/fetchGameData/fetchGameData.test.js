import fetchGameData from './fetchGameData';
import dummyGameData from './dummyGameData'

test('test jest is working', () => {
  expect(true).toBeTruthy();
})

test('Test fetchGameData', () => {
  return fetchGameData()
    .then((countriesArray) => {
      console.log(`
        From fetch ${countriesArray.length}, 
        From dummy ${dummyGameData.length}
      `);
      console.log()
    });
})

test('Test fetchGameData response format', async () => {
  const countriesArray = await fetchGameData()
  const mergedContriesObj = countriesArray
  .reduce((accumulator, currentObj) => Object.assign(accumulator, currentObj), {});
  const countryObjectPropsArrray = Object.keys(mergedContriesObj)
  expect(countryObjectPropsArrray.length).toBe(2)
  expect(countryObjectPropsArrray.includes('country')).toBeTruthy()
  expect(countryObjectPropsArrray.includes('city')).toBeTruthy()
  

})
