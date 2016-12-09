import rootReducer from './'
import initialState from './initialState'

describe('Root reducer', () => {
  it('should update key `isTestOk` when dispatching action `TESTING`', () => {
    const action = { type: 'TESTING' }
    const expected = { isTestOk: true }

    expect(rootReducer(initialState, action)).toEqual(expected)
  })
})
