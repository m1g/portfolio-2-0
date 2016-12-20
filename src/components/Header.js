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
        <a name='home' />
        <header>
          <nav>
            <p className='logo'><a href='#home'>Miguel.</a></p>
            <ul>
              <li><a href='#portfolio'>Portfolio</a></li>
              <li><a href='#blog'>Blog</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
          <div className='intro'>
            <img src={this.props.avatar_url} />
            <h1>Hello, my name is {this.props.name}
              <p>{this.props.bio}</p>
            </h1>
          </div>
        </header>
        <div className='portfolio'>
          <a name='portfolio' />
          <ul>
            <li><img src='https://github.com/m1g/portfolio/blob/master/public/images/titanfall-2.png?raw=true' /></li>
            <li><img src='https://github.com/m1g/portfolio/blob/master/public/images/titanfall-2bg.png?raw=true' /></li>
            <li><img src='https://github.com/m1g/portfolio/blob/master/public/images/titanfall-2-wall-walking.jpg?raw=true' /></li>
            <li><img src='https://github.com/m1g/portfolio/blob/master/public/images/titanfall-pilot.jpg?raw=true' /></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
