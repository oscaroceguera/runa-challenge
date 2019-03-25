import { Observable } from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'

import {
  FETCH_CHARACTERS,
  fetchCharactersFail,
  fetchCharactersSuccess
} from '../reducers/characters'

export const fetchCharactersEpic = action$ =>
  action$
    .ofType(FETCH_CHARACTERS)
    .switchMap((action) => {
      return ajax
        .getJSON(action.payload)
        .map(data => data)
    })
    .map(characters => fetchCharactersSuccess(characters))
    .catch(error => Observable.of(fetchCharactersFail(error.message)))
