import React from 'react'
import cx from 'classnames'
import './index.css'

export default class FileLoaders extends React.Component {
  render() {
    const { __active, __doc, __name, config } = this.props.d

    const on = cx({
      button: true,
      'is-small': true,
      'is-primary': __active,
      'is-selected': __active
    })

    const off = cx({
      button: true,
      'is-small': true,
      'is-danger': !__active,
      'is-selected': !__active
    })

    return (
      <div className={`fileBlock panel-block  ${__active ? 'is-active' : ''}`}>
        <div
          className="inputSelector buttons has-addons"
          onClick={() => this.props.toggleFile(__name)}
        >
          <span className={on}>On</span>
          <span className={off}>Off</span>
        </div>

        <div className="inputPane__loader">
          {__doc.map(link => (
            <a className="inputPane__info" key={link} href={link}>
              <span className="icon has-text-info">
                <i className="fas fa-info-circle" />
              </span>
              {link}
            </a>
          ))}
          <h2 className="title file__title"> {__name} </h2>
          {__active &&
            config.use.map(d => (
              <Loader
                d={d}
                key={d.loader}
                fileName={__name}
                toggleOption={this.props.toggleOption}
                toggleLoader={this.props.toggleLoader}
                toggleFile={this.props.toggleFile}
              />
            ))}
        </div>
      </div>
    )
  }
}

class Loader extends React.Component {
  render() {
    const { __active, __doc, loader, options } = this.props.d
    const { toggleLoader, toggleOption, fileName } = this.props

    return (
      <div className="loaderBlock" data-active={__active}>
        <header className="loader__header">
          <span
            className="panel-icon has-text-primary"
            onClick={() => toggleLoader(fileName, loader)}
          >
            <i
              className="loader__toggle fas fa-check-circle"
              aria-hidden="true"
            />
          </span>
          <span
            className="loader__clickable"
            onClick={() => toggleLoader(fileName, loader)}
          >
            {loader}
          </span>
          {__doc.map(link => (
            <a className="loader__info" key={link} href={link}>
              <span className="icon has-text-info">
                <i className="fas fa-info-circle" />
              </span>
            </a>
          ))}
        </header>

        <div className="loader__options">
          {options != null &&
            Object.keys(options)
              .filter(key => typeof options[key] === 'boolean')
              .map(o => (
                <label key={o} className="checkbox loader__checkbox">
                  <input
                    type="checkbox"
                    checked={options[o]}
                    onChange={() => toggleOption(fileName, loader, o)}
                  />
                  {o}
                </label>
              ))}
        </div>
      </div>
    )
  }
}
