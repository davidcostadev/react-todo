import React from 'react'


export default class Errors extends React.Component {
  render() {

    if (this.props.errors.length) {
      const errors = this.props.errors.map((error, key) =>
        <div className="alert alert-danger" key={key}>{error}</div>
      )
      
      return <div>{errors}</div>
    }

    return null
  }
}
