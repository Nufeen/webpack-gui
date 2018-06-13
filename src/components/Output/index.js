import React from 'react'
import html from 'react-inner-html'
import autobind from 'react-autobind'
import generateCode from './generateConfig'

import Prism from 'prismjs'
import Clipboard from 'clipboard'

import './index.css'

export default class Output  extends React.Component {
  constructor () {
    super()
    autobind(this)
  }

  componentDidMount() {
    new Clipboard('.output__clip')
  }

  animate() {
    this.button.dataset.success = false
    void this.button.offsetWidth
    this.button.dataset.success = true
  }

  render() {
    const data = {
      plugins: this.props.data.plugins,
      devServer: this.props.data.devServer,
      loaders: this.props.data.loaders.filter(x => x.__active),
      devtool: this.props.data.devtool.__option
    }

    const config = generateCode(data)

    const configHtml = Prism.highlight(
      config,
      Prism.languages.javascript,
      'javascript'
    )

    const blob = new Blob([config], { type: 'text/javascript' })
    const href = window.URL.createObjectURL(blob)

    return (
      <div className="output">
        <pre className="control">
          <code className="textarea language-javascript" {...html(configHtml)} />
        </pre>
        <div className="output__buttons">
          <a
            className="output__button button is-link output__clip"
            data-clipboard-text={config}
            onClick={this.animate}
            ref={node => this.button = node}
          >
            Copy to clipboard
          </a>
          <a
            className="output__button button is-link"
            href={href}
            download="webpack.config.js"
          >
            Save file
          </a>
        </div>
      </div>
    )
  }
}
