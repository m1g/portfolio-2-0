import React, { Component } from 'react'

class BlogHub extends Component {

  render () {
    return (
      <div>
        <article>
          <div>
            <header />
            <div className='content'>
              <div>
                <h3>Latest Repositories</h3>
                <time>January 1, 12:00am</time>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta vero repellat corrupti facere, dolor. Officiis cupiditate, harum illo suscipit et eligendi similique, neque facere, repellendus tempore quae? Fugiat, accusantium nostrum.</p>
            </div>
          </div>
          <div>
            <header className='blog-post' />
            <div className='content'>
              <div>
                <h3>Blog Posts</h3>
                <time>February 1, 12:00pm</time>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta vero repellat corrupti facere, dolor. Officiis cupiditate, harum illo suscipit et eligendi similique, neque facere, repellendus tempore quae? Fugiat, accusantium nostrum.</p>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default BlogHub
