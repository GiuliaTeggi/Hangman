// import 'whatwg-fetch';
import fetchGameData from "./fetchGameData";

test('test jest is working', () => {
  expect(true).toBeTruthy();
})

// test('fetching game data', async () => {
//   const res = await fetchGameData()
//   console.log(Object.keys(res))
// })

test('fetching game data', () => {
  return fetchGameData()
    .then((res) => {
      console.log(Object.keys(res))
    })
})

