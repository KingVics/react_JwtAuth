import React from "react"
import { Link } from "react-router-dom"
import { stack as Menu } from 'react-burger-menu'


const Draw = (props) =>  {




  return (
      <>
        <Menu  {...props}>
            <Link  className="menu-item" to="/" >Home</Link>
            <Link  className="menu-item" to="/about" >About Us</Link>
            <Link  className="menu-item" to="#">Counsels</Link>
            <Link  className="menu-item" to="#">Practice Area</Link>
            <Link  className="menu-item" to="#">Event</Link>
            <Link  className="menu-item" to="/contact">Contact Us</Link>
        </Menu>
      </>
  )
}
export default Draw;