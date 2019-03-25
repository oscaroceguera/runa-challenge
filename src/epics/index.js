import {combineEpics} from 'redux-observable'
import {fetchCharactersEpic} from './characters'
import {fetchCharacterEpic} from './character'

export const rootEpic = combineEpics(
  fetchCharactersEpic,
  fetchCharacterEpic
)