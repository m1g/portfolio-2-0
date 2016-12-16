import React, { Component } from 'react'
import Header from '../components/Header'
import BlogHub from '../components/BlogHub'
import Footer from '../components/Footer'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      location: ''
    }
  }

  componentDidMount () {
    const URL = 'https://api.github.com/users/m1g'
    window.fetch(URL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        name: data.name,
        location: data.location
      })
    })
  }

  render () {
    // const { data } = this.props
    return (
      <div>
        {/* {data.name} */}
        <Header name={this.state.name} />
        <BlogHub />
        <Footer location={this.state.location} />
      </div>
    )
  }
}

export default App
