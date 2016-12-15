import React from 'react'
import renderer from 'react-test-renderer'

import H1 from '../H1'

test('App component snapshot', () => {
  const component = renderer.create(<H1>Test</H1>)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
