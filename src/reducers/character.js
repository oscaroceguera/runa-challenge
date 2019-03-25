export const FETCH_CHARACTER = 'character/FETCH_CHARACTER'
export const FETCH_CHARACTER_FAIL = 'character/FETCH_CHARACTER_FAIL'
export const FETCH_CHARACTER_SUCCESS = 'character/FETCH_CHARACTER_SUCCESS'

export const fetchCharacter = (url) => ({
  type: FETCH_CHARACTER,
  payload: url
})

export const fetchCharacterSuccess = (character) => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload: character
})

export const fetchCharacterFail = (err) => ({
  type: FETCH_CHARACTER_FAIL,
  payload: err
})

const initialState = {
  character: {},
  loading: false,
  error: null,
  // searchByName: ''
}

export default function character(state = initialState, action) {
  switch (action.type) {
  case FETCH_CHARACTER:
    return {
      ...state,
      loading: true,
      error: null
    }
  case FETCH_CHARACTER_SUCCESS:
    return {
      character: action.payload,
      loading: false,
      error: null
    }
  case FETCH_CHARACTER_FAIL:
    return {
      character: {},
      loading: false,
      error: action.payload
    }
  default:
    return state
  }
}