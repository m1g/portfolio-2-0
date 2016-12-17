import React, { Component } from 'react'

class Header extends Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    bio: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <header>
          <div className='intro'>
            <img src={this.props.avatar_url} />
            <h1>Hello, my name is {this.props.name}
              <p>{this.props.bio}</p>
            </h1>
          </div>
          <div className='portfolio'>
            <ul>
              <li><img src='https://github.com/m1g/portfolio/blob/master/public/images/titanfall-2.png?raw=true' /></li>
              <li><img src='https://github.com/m1g/portfolio/blob/master/public/images/titanfall-2bg.png?raw=true' /></li>
              <li><img src='https://github.com/m1g/portfolio/blob/master/public/images/titanfall-2-wall-walking.jpg?raw=true' /></li>
              <li><img src='https://github.com/m1g/portfolio/blob/master/public/images/titanfall-pilot.jpg?raw=true' /></li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
