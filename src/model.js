import { model } from './radx'

export const increment = () => ({ type: 'INCREMENT' })
export const decrement = () => ({ type: 'DECREMENT' })

export const initialState = { count: 0 }

export const getCount = state => state.count

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: state.count - 1
      })
    default:
      return state
  }
}

export default model(reducer)
