import React, { Component } from 'react'

class Footer extends Component {

  static propTypes = {
    location: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <footer>
        <div className='contact-me'>
          <h1>Stay connected with me.</h1>
          <ul className='social-icons'>
            <li><a href='http://twitter.com/miguelmalcolm'><i className='fa fa-twitter fa-3x' /></a></li>
            <li><a href='http://github.com/m1g'><i className='fa fa-github fa-3x' /></a></li>
            <li><a href='http://twitter.com/miguelmalcolm'><i className='fa fa-twitter fa-3x' /></a></li>
            <li><a href='http://twitter.com/miguelmalcolm'><i className='fa fa-twitter fa-3x' /></a></li>
            <li><a href='http://twitter.com/miguelmalcolm'><i className='fa fa-twitter fa-3x' /></a></li>
          </ul>
          <div className='copyright'>
            <p>
              Copyright &copy; 2016 Miguel Malcolm.
              Built with <i className='fa fa-heart fa-1' /> at
              The Iron Yard in {this.props.location}.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
