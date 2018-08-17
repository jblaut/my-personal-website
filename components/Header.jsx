import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className='Header'>
        <div className='cust_photo'>
          <img src='../static/profile-pic.jpg' alt='profile pic' />
        </div>
        <div className='cust_name'>
          {`Jagoda "Jamie" Blaut`}
        </div>
        <div className='title'>
          Junior Software Engineer at BBC News - World Service team.
        </div>
      </div>
    )
  }
}

export default Header
