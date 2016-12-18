import React, { Component } from 'react'

class BlogHub extends Component {

  static propTypes = {
    repos: React.PropTypes.array.isRequired
  }

  render () {
    const repos = this.props.repos.map((repo, i) => {
      return <li key={i}><a href={repo.html_url}>{repo.name}</a>: {repo.updated_at}</li>
    })

    return (
      <div>
        <article>
          <div className='boxes'>
            <header />
            <div className='content'>
              <div className='title'>
                <h3>What I'm Working On</h3>
                { /* Import latest time via some logic */ }
                <time>updated December 12, 2016 at 12:00am</time>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dicta vero repellat corrupti facere, dolor. Officiis cupiditate, harum
                illo suscipit et eligendi similique, neque facere, repellendus tempore quae?
                Fugiat, accusantium nostrum.
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
