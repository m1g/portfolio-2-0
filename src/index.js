import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

import './styles/screen.scss'
import data from '../data.json'

const root = document.getElementById('root')

const render = (app) => {
  ReactDOM.render(
    <AppContainer>{app}</AppContainer>,
    root
  )
}

render(<App data={data} />)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
