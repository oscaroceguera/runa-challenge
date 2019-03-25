export const FETCH_CHARACTERS = 'characters/FETCH_CHARACTERS'
export const FETCH_CHARACTERS_FAIL = 'characters/FETCH_CHARACTERS_FAIL'
export const FETCH_CHARACTERS_SUCCESS = 'characters/FETCH_CHARACTERS_SUCCESS'

export const fetchCharacters = (url) => ({
  type: FETCH_CHARACTERS,
  payload: url
})

export const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters
})

export const fetchCharactersFail = (err) => ({
  type: FETCH_CHARACTERS_FAIL,
  payload: err
})

const initialState = {
  characters: [],
  loading: false,
  error: null,
}

export default function characters(state = initialState, action) {
  switch (action.type) {
  case FETCH_CHARACTERS:
    return {
      ...state,
      loading: true,
      error: null
    }
  case FETCH_CHARACTERS_SUCCESS:
    return {
      characters: action.payload,
      loading: false,
      error: null
    }
  case FETCH_CHARACTERS_FAIL:
    return {
      characters: [],
      loading: false,
      error: action.payload
    }
  default:
    return state
  }
}