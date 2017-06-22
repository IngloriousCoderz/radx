import { view, controller } from './radx'
import handle, { getCount, increment, decrement, initialState } from './model'

export default () => {
  const incrementBtn = document.createElement('button')
  incrementBtn.innerText = 'increment'

  const decrementBtn = document.createElement('button')
  decrementBtn.innerText = 'decrement'

  const countSpan = document.createElement('span')

  const wrapperDiv = document.createElement('div')
  wrapperDiv.appendChild(incrementBtn)
  wrapperDiv.appendChild(decrementBtn)
  wrapperDiv.appendChild(countSpan)

  const render = state => (countSpan.innerText = getCount(state))

  const increment$ = controller('click', incrementBtn, increment)
  const decrement$ = controller('click', decrementBtn, decrement)

  view(render, initialState, handle(increment$), handle(decrement$))

  return wrapperDiv
}
