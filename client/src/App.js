import React from 'react'
import { ajax } from 'jquery'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      test: 0
    }
  }

  componentDidMount () {
    console.log('component mount')
    this.get()
  }

  get () {
    ajax({
      method: 'GET',
      data: {},
      success: (data) => { console.log(data) },
      error: (err) => { console.log(err) }
    })
  }
  render (){
    return(
      <div> App check </div>
    )
  }
}

export default App
