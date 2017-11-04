const playsUrl = 'https://next.json-generator.com/api/json/get/4yKd2-QAX'

export const fetchAllPlays = () => async dispatch => {
  dispatch({
    type: 'START_FETCHING'
  })
  const plays = await fetch(playsUrl).then(r => r.json())
  dispatch({
    type: 'FETCH_ALL_PLAYS',
    payload: plays
  })
  dispatch({
    type: 'STOP_FETCHING'
  })
}

export const filterPlays = (input) => ({
  type: 'FILTER_PLAYS',
  payload: input
})

export const filterWatched = (isWatched) => ({
  type: 'WATCHED',
  payload: isWatched
})
