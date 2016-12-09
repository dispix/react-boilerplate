import initialState from './initialState'
import { TESTING } from '../actions'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TESTING:
      return { ...state, isTestOk: true }
    default:
      return state
  }
}

export default rootReducer
