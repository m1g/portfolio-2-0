import React, { Component } from 'react'
import ScrollAnim from 'rc-scroll-anim'

class Header extends Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    bio: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired
  }

  render () {
    const Link = ScrollAnim.Link

    return (
      <div id='home'>
        {/* <a name='home' /> */}
        <header>
          <nav>
            <div className='logo'><Link className='nav-list' to='home'>Miguel.</Link></div>
            <ul>
              <li><Link to='portfolio'>Portfolio</Link></li>
              <li><Link to='blog'>Blog</Link></li>
              <li><Link to='contact'>Contact</Link></li>
            </ul>
          </nav>
          <div className='intro'>
            <img src={this.props.avatar_url} />
            <h1>Hello, my name is {this.props.name}
              <p>{this.props.bio}</p>
            </h1>
          </div>
        </header>
        <div id='portfolio' className='portfolio'>
          <ul>
            <li><a href='https://github.com/m1g/moana-memory' target='_blank'><img src='http://i.imgur.com/yxQ1zxr.png' /></a></li>
            <li><a href='https://github.com/m1g/bomb-sweeper' target='_blank'><img src='http://i.imgur.com/JA8m4zI.png' /></a></li>
            <li><a href='https://github.com/m1g/simple-list' target='_blank'><img src='http://i.imgur.com/4HTyZFP.png' /></a></li>
            <li><a href='https://github.com/m1g/hsla-color-picker' target='_blank'><img src='http://i.imgur.com/YsllnwR.png' /></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
