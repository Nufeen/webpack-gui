import React from 'react'
import autobind from 'react-autobind'

import html from 'react-inner-html'

import FileTypeHandler from './FileTypeHandler'
import DevServer from './DevServer'
import SourceMaps from './SourceMaps'
import './index.css'

import generateNpmCommand from '../../utils/generateNpmCommand'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    autobind(this)
  }

  mutate(callback) {
    const { data, update } = this.props
    const newData = Object.assign({}, data)
    callback(newData) // mutation here
    update(newData)
  }

  toggleFile(name) {
    this.mutate(d => {
      const n = d.loaders.findIndex(x => name === x.__name)
      d.loaders[n].__active = !d.loaders[n].__active
    })
  }

  toggleLoader(file, loader) {
    this.mutate(d => {
      const f = d.loaders.find(x => file === x.__name)
      const l = f.config.use.find(x => loader === x.loader)
      l.__active = !l.__active
    })
  }

  togglePlugin(name, plugin) {
    this.mutate(d => {
      const f = d.plugins.find(x => name === x.name)
      f.active = !f.active
    })
  }

  toggleOption(file, loader, option) {
    this.mutate(d => {
      const f = d.loaders.find(x => file === x.__name)
      const l = f.config.use.find(x => loader === x.loader)
      l.options[option] = !l.options[option]
    })
  }

  toggleDevServerOption(option) {
    this.mutate(d => {
      d.devServer[option] = !d.devServer[option]
    })
  }

  setSourceMap(option) {
    // warn: adding a field to an array here!
    // hack intended
    this.mutate(d => {
      d.devtool.__option = option
    })
  }


  render() {
    const { data, advanced, toggleAdvanced } = this.props
    return (
      <div className="inputPane">
        <nav className="panel" hidden>
          <p className="panel-heading">resolve</p>
        </nav>
        <nav className="panel">
          <p className="panel-heading">loaders</p>
          <p className="panel-tabs">
            <a onClick={toggleAdvanced} className={advanced ? 'is-active' : ''}>
              all
            </a>
            <a
              onClick={toggleAdvanced}
              className={!advanced ? 'is-active' : ''}
            >
              minimum
            </a>
          </p>
          {data.loaders.map(
            d =>
              d.__advanced && !advanced ? null : (
                <FileTypeHandler
                  d={d}
                  key={d.__name}
                  advanced={advanced}
                  toggleFile={this.toggleFile}
                  toggleLoader={this.toggleLoader}
                  toggleOption={this.toggleOption}
                />
              )
          )}
        </nav>
        <nav className="panel">
          <p className="panel-heading">plugins</p>
          <div className="panel-block plugins">
            {data.plugins.map(d => {
              return (
                <Plugin key={d.name} d={d} togglePlugin={this.togglePlugin} />
              )
            })}
          </div>
        </nav>
        <div className="columns">
          <div className="column">
            <SourceMaps d={data.devtool} setSourceMap={this.setSourceMap} />

            <pre className="control">
              <code
                className="textarea language-bash"
                {...html(generateNpmCommand(data))}
              />
            </pre>
          </div>
          <div className="column">
            <DevServer
              d={data.devServer}
              toggleOption={this.toggleDevServerOption}
            />
          </div>
        </div>
      </div>
    )
  }
}

const Plugin = ({ d, togglePlugin }) => {
  return (
    <div className="loaderBlock" data-active={d.active}>
      <header className="loader__header">
        <span
          className="panel-icon has-text-primary"
          onClick={() => togglePlugin(d.name)}
        >
          <i
            className="loader__toggle fas fa-check-circle"
            aria-hidden="true"
          />
        </span>
        {d.name}
        {d.doc.map(link => (
          <a className="loader__info" key={link} href={link}>
            <span className="icon has-text-info">
              <i className="fas fa-info-circle" />
            </span>
          </a>
        ))}
      </header>
    </div>
  )
}
