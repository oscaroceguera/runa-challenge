import { Observable } from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'

import {
  FETCH_CHARACTER,
  fetchCharacterSuccess,
  fetchCharacterFail
} from '../reducers/character'

export const fetchCharacterEpic = action$ =>
  action$
    .ofType(FETCH_CHARACTER)
    .switchMap((action) => {
      return ajax
        .getJSON(action.payload)
        .map(data => data)
    })
    .map(characters => fetchCharacterSuccess(characters))
    .catch(error => Observable.of(fetchCharacterFail(error.message)))
