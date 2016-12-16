import React, { Component } from 'react'

class Header extends Component {

  render () {
    return (
      <div>
        <header>
          <div>
            <img src='https://github.com/m1g/portfolio/blob/master/public/images/miguel.jpg?raw=true' />
            <h1>Hi, my name is Miguel</h1>
          </div>
          <div>
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
