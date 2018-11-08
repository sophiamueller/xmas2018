import React, { Component } from 'react'

import './App.css'
class Counter extends React.Component {
  render() {
    return <h1>Doors open: {this.props.num}</h1>
  }
}
export default Counter
