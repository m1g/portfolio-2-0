import React, { Component } from 'react'
import Header from '../components/Header'
import BlogHub from '../components/BlogHub'
import Footer from '../components/Footer'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      bio: '',
      location: '',
      avatar_url: '',
      repos: []
    }
  }

  componentDidMount () {
    this.getProfile()
  }

  getProfile () {
    window.fetch('https://api.github.com/users/m1g').then((response) => {
      return response.json()
    }).then((data) => {
      this.getRepos(data.repos_url)
      this.setState({
        name: data.name,
        bio: data.bio,
        location: data.location,
        avatar_url: data.avatar_url
      })
    })
  }

  getRepos (url) {
    window.fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        repos: data
      })
    })
  }

  render () {
    // const { data } = this.props
    return (
      <div>
        {/* {data.name} */}
        <Header name={this.state.name} bio={this.state.bio} avatar_url={this.state.avatar_url} />
        <BlogHub repos={this.state.repos.sort((a, b) => a.updated_at > b.updated_at).slice(0, 5)} />
        <Footer location={this.state.location} />
      </div>
    )
  }
}

export default App
