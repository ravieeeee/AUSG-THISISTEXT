import React from 'react'
import axios from 'axios'

export default class Form extends React.Component {
  state = {
    imageURL: ''
  }

  render() {
    return (
      <>
        <input
          placeholder="url"
          value={this.state.imageURL}
          onChange={this.onURLChanged}
        />
        <button onClick={this.onSubmitButtonClicked}>
          submit
        </button>
      </>
    )
  }

  onURLChanged = (e) => {
    this.setState({
      imageURL: e.target.value
    })
  }

  onSubmitButtonClicked = async () => {
    this.props.setLoadingStatus(true)

    const result = await axios.get(
      'http://localhost:3001/detectImage/?imageURL=' + encodeURIComponent(this.state.imageURL)
    )
    console.log('result', result)
    const detectionResultArray = result.data.detectionResult.TextDetections
    this.props.getResult(detectionResultArray)

    this.props.setLoadingStatus(false)
  }
}
