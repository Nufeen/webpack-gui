import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma/css/bulma.css'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

import App from './components/App'
import './index.css'

fontawesome.library.add(solid)

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
