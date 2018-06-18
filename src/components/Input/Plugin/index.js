import React from 'react'
import cx from 'classnames'
import './index.css'

const Plugin = ({ d, togglePlugin }) => {
  return (
    <div className="plugin" data-active={d.active}>
      <header className="plugin__header">
        <span
          className="panel-icon has-text-primary"
          onClick={() => togglePlugin(d.name)}
        >
          <i
            className="plugin__toggle fas fa-check-circle"
            aria-hidden="true"
          />
        </span>
        <span
          className="plugin__clickable"
          onClick={() => togglePlugin(d.name)}
        >
          {d.name}
        </span>
        {d.doc.map(link => (
          <a className="plugin__info" key={link} href={link}>
            <span className="icon has-text-info">
              <i className="fas fa-info-circle" />
            </span>
          </a>
        ))}
      </header>
    </div>
  )
}

export default Plugin
