import {combineReducers} from 'redux'
import characters from './characters'
import character from './character'

export const rootReducer = combineReducers({
  characters,
  character
})
