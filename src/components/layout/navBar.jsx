import React from 'react';  
import '../../assets/styles/navBar.css'

function NavBar() {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
        <img src='/logo.png' alt="InvoPro" />
        </div>
        <div className='search-input-container'>
            <form>
            <input type='search' placeholder='search invoices...'/>
            <input type='submit' value='search'/>
            </form>
        </div>
        <div className='sign-in-up-container'>
            <a href='#'>Sign in / Sign up</a>
        </div>
     
    </div>
  )
}

export default NavBar
