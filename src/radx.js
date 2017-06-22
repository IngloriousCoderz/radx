import Rx from 'rxjs/Rx'

export const model = reducer => action$ =>
  action$.map(action => state => reducer(state, action))

export const view = (observer, initialState, ...observables) =>
  Rx.Observable
    .merge(...observables)
    .startWith(initialState)
    .scan((state, updateFn) => updateFn(state))
    .subscribe(observer)

export const controller = (event, elem, action) =>
  Rx.Observable.fromEvent(elem, event).map(action)
