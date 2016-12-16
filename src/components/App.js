import React, { Component } from 'react'
import Header from '../components/Header'

class App extends Component {

  componentDidMount () {
    const URL = 'https://one-list-api.herokuapp.com/items?access_token=illustriousvoyage'
    window.fetch(URL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        items: data
      })
    })
  }

  render () {
    return (
      <div>
        <Header />
        <section />
        <section />
        <footer />
      </div>
    )
  }
}

export default App
