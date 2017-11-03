const playsUrl = 'https://next.json-generator.com/api/json/get/4yKd2-QAX'

export const fetchAllPlays = () => async dispatch => {
  const plays = await fetch(playsUrl).then(r => r.json())
  dispatch({
    type: 'FETCH_ALL_PLAYS',
    payload: plays
  })
}
