import React from 'react'
import './App.css'
import Form from './components/Form'

export default class App extends React.Component {
  state = {
    isLoading: false,
    result: ''
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ?
          <div>Loading....</div> : 
          <Form
            getResult={this.getResult}
            setLoadingStatus={this.setLoadingStatus}
          />
        }
        {this.state.result !== '' ?
          <div>{this.state.result}</div> : null
        }
      </div>
    )
  }

  setLoadingStatus = (status) => {
    this.setState({
      isLoading: status
    })
  }

  getResult = (result) => {
    this.setState({
      result
    })
  }
}
