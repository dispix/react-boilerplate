import rootReducer from '../'
import initialState from '../initialState'

describe('Root reducer', () => {
  it('should return the same state when invalid action is dispatched', () => {
    const action = { type: 'INVALID_ACTION' }

    expect(rootReducer(initialState, action)).toEqual(initialState)
  })
  it('should update key `isTestOk` when dispatching action `TESTING`', () => {
    const action = { type: 'TESTING' }
    const expected = { isTestOk: true }

    expect(rootReducer(initialState, action)).toEqual(expected)
  })
})
