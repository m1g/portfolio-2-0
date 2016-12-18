import React, { Component } from 'react'

class Footer extends Component {

  static propTypes = {
    location: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <footer>
        <a name='contact' />
        <div className='contact-me'>
          <h1>Slide into my DMs.</h1>
          <ul className='social-icons'>
            <li><a href='http://twitter.com/miguelmalcolm'><i className='fa fa-twitter fa-2x' /></a></li>
            <li><a href='http://github.com/m1g'><i className='fa fa-github fa-2x' /></a></li>
            <li><a href='https://medium.com/@miguelmalcolm/'><i className='fa fa-medium fa-2x' /></a></li>
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
