import React, { Component } from 'react'

class BlogHub extends Component {

  static propTypes = {
    repos: React.PropTypes.string.isRequired
  }

  render () {
    const repos = this.props.repos.map((repo, i) => {
      return <li key={i}><a href={repo.url}>{repo.name}</a>: {repo.updated_at}</li>
    })

    return (
      <div>
        <article>
          <div>
            <header />
            <div className='content'>
              <div>
                <h3>What I'm Working On</h3>
                { /* Import latest time via some logic */ }
                <time>updated December 12, 2016 at 12:00am</time>
              </div>
              <ul>{repos}</ul>
              <a className='keep-reading-btn' href='https://github.com/m1g?tab=repositories'>FULL LIST</a>
            </div>
          </div>
          <div>
            <header className='blog-post' />
            <div className='content'>
              <div>
                <h3>Blog Posts</h3>
                <time>updated December 26, 2016 at 12:00pm</time>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dicta vero repellat corrupti facere, dolor. Officiis cupiditate, harum
                illo suscipit et eligendi similique, neque facere, repellendus tempore quae?
                Fugiat, accusantium nostrum.
              </p>
              <a className='keep-reading-btn' href='#'>KEEP READING</a>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default BlogHub
