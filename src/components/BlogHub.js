import React, { Component } from 'react'
import Time from './Time'

class BlogHub extends Component {

  static propTypes = {
    repos: React.PropTypes.array.isRequired
  }

  render () {
    const repos = this.props.repos.map((repo, i) => {
      return <li key={i}><a href={repo.html_url}>{repo.name}</a>: <Time stamp={repo.pushed_at} /></li>
    })

    return (
      <div id='blog'>
        <article>
          <div className='boxes'>
            <header />
            <div className='content'>
              <div className='title'>
                <h3>What I'm Working On</h3>
                { /* Import latest time via some logic */ }
                { this.props.repos.length > 0 ? <Time stamp={this.props.repos[0].pushed_at} label='updated' /> : '' }
              </div>
              <ul>{repos}</ul>
            </div>
            <a className='keep-reading-btn' href='https://github.com/m1g?tab=repositories'>FULL LIST</a>
          </div>
          <div className='boxes'>
            <header className='blog-post' />
            <div className='content'>
              <div className='title'>
                <h3>Blog Posts</h3>
                <time>updated December 26, 2016 at 12:00pm</time>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ab ratione, pariatur provident labore hic amet aspernatur, nostrum impedit quia debitis nulla maxime ipsum, culpa veniam dolores qui! Itaque, atque.
              </p>
            </div>
            <a className='keep-reading-btn' href='#'>KEEP READING</a>
          </div>
        </article>
      </div>
    )
  }
}

export default BlogHub
