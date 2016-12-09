import React from 'react'
import { connect } from 'react-redux'

import { test } from '../actions'

class App extends React.Component {
  componentDidMount () {
    this.props.test()
  }

  render () {
    return (
      <div className='main'>
        <h1>Hello World</h1>
        <p>Redux test is {this.props.isTestOk ? 'passing' : 'not passing'}</p>
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({ test: () => dispatch(test()) })

export default connect(mapStateToProps, mapDispatchToProps)(App)
