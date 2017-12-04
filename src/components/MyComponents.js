import React, { Component } from 'react'
import '../styles/header.css'

export default class MyComponent extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
      <h1> THIS IS MY COMPONENT </h1>
      </div>
    )
  }
}
