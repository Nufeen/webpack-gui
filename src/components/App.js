import React from 'react'
import autobind from 'react-autobind'

import Header from './Header'
import Input from './Input'
import Output from './Output'
import Footer from './Footer'

import data from '../config/config.js'

import updateUrl from '../utils/generateUrl'
import setValuesFromUrl from '../utils/setValuesFromUrl'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    autobind(this)
    this.state = {
      data,
      advanced: false
    }
  }

  componentDidMount() {
    this.readUrl()
  }

  readUrl() {
    const ls = window.location.search

    if (!ls) {
      return null
    }

    this.setState(s => ({
      data: setValuesFromUrl(s.data, ls)
    }))
  }

  update(data) {
    updateUrl(data)
    this.setState({ data })
  }

  toggleAdvanced() {
    this.setState({ advanced: !this.state.advanced })
  }

  render() {
    const props = {
      advanced: this.state.advanced,
      data: this.state.data,
      update: this.update,
      toggleAdvanced: this.toggleAdvanced
    }

    return (
      <div>
        <Header />
        <main className="main">
          <Input {...props} />
          <Output data={this.state.data} update={this.update} />
        </main>
        <Footer />
      </div>
    )
  }
}
