import React from 'react'
import './App.css'
import Form from './components/Form'

export default class App extends React.Component {
  state = {
    isLoading: false,
    detectionResult: ''
  }

  render() {
    const Fragment = React.Fragment
    
    return (
      <div className="App">
        {this.state.isLoading ?
          <div>Loading....</div> : 
          <Form
            getResult={this.getResult}
            setLoadingStatus={this.setLoadingStatus}
          />
        }
        {this.state.detectionResult !== '' ?
          this.state.detectionResult.map((result, index) => (
            <Fragment key={index}>
              <h3>{result.Type}</h3>
              <div>{result.DetectedText}</div>
            </Fragment>
          ))
          : null
        }
      </div>
    )
  }

  setLoadingStatus = (status) => {
    this.setState({
      isLoading: status
    })
  }

  getResult = (detectionResult) => {
    this.setState({
      detectionResult
    })
  }
}
