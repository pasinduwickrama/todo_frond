import React from 'react'
import { MdTagFaces } from 'react-icons/md'
import './header.css'
const Header = () => {
  return (
    <div className='header-body'>
        <div className='header-list'>
            <div className='list-r'>
            <p>Home</p>
            
            </div>
            <div className='list-l'>
                <MdTagFaces size={50}  color='rgb(326, 255, 05)'/>
            </div>
        </div>
    </div>
  )
}

export default Header