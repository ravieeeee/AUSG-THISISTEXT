import React from 'react'

export default class Form extends React.Component {
  state = {
    imageURL: ''
  }

  render() {
    return (
      <div>
        <input
          placeholder="url"
          value={this.state.imageURL}
          onChange={this.onURLChanged}
        />
        <button onClick={this.onSubmitButtonClicked}>
          submit
        </button>
      </div>
    )
  }

  onURLChanged = (e) => {
    this.setState({
      imageURL: e.target.value
    })
  }

  onSubmitButtonClicked = () => {
    // TODO: call server
    this.props.getResult('hello world')
  }
}
