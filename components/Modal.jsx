import React, { Component } from 'react'
import Header from '../components/Header'
import Description from '../components/Description'
import Contact from '../components/Contact'

class Modal extends Component {
  render () {
    return (
      <div className="Modal">
        <div className="uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-2@l uk-grid-match uk-grid">
          <div className="uk-card">
            <Header />
            <Contact />
          </div>
          <div className="uk-card">
            <Description />
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
