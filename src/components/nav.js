import React, {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
import style from "../styles/nav.module.css"
import { Link } from "react-router-dom"
import {VscListFlat} from  "react-icons/all"
import Drawer from "../components/drawer"



const Nav = ({open, handleOpen}) => {
    const location = useLocation();
    const [notHome, setNotHome] = useState(false)
    const [active, setActive] = useState(false)
    const [aboutActive, setAboutActive] = useState(false)
    const [contatcActive, setContactActive] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [openEvent, setOpenEvent] = useState(false)



    useEffect(() => {
        if(location.pathname !== "/" ) {
            setNotHome(true)
        }
        else {
            setNotHome(false)
        }
    }, [location.pathname])

    useEffect(() => {
        if(location.pathname) {
            setActive(true)
            setAboutActive(false)
            setContactActive(false)
        }

    }, [location.pathname])

    useEffect(() => {
        if(location.pathname === "/about") {
            setAboutActive(true)
            setActive(false)
            setContactActive(false)
        }

    }, [location.pathname])

    useEffect(() => {
        if(location.pathname === "/contact") {
            setContactActive(true)
            setAboutActive(false)
            setActive(false)
        }

    }, [location.pathname])


    const checkOpen = (item) => {
        setIsOpen(item)
    }

    const checkOpenEvent = (item) => {
        setOpenEvent(item)
    }
    return (
        <nav className={`${style.navContainer}`}>
            <div style={{color: "#fff"}}>
                LOGO
            </div>
            <ul className={ notHome ? `${style.linkChange} ${style.navLink}  ` : style.navLink}>
                <li className={active ?  `${style.Active}` : ""}>
                    <Link to="/">Home</Link>
                </li>
                <li className={aboutActive ?  ` ${style.ActiveOther}` : ""}>
                    <Link to="/about">About us</Link>
                </li>
                <li style={{position: "relative"}} >
                    <Link to="#">Counsel</Link>
                </li>
                <li style={{position: "relative"}} onMouseOver={checkOpen} onMouseLeave={(item) => setIsOpen(!item)}>
                    <Link to="#">practice area</Link>
                    {isOpen && 
                        <div className={style.dropDown}>
                            <div>
                                <Link to="#">Litigation</Link>
                            </div>
                            <div>
                                <Link to="#">Labour Law</Link>
                            </div>        
                            <div>
                                <Link to="#">Insurance</Link>
                            </div>
                            <div>
                                <Link to="#">Foreign Investments and Privatisation</Link>
                            </div>
                            <div>
                                <Link to="#">Intellectual Property</Link>
                            </div>
                            <div>
                                <Link to="#">Taxation</Link>
                            </div>
                            <div>
                                <Link to="#">Telecommunication Law</Link>
                            </div>
                        </div>
                    }
                </li>
                <li style={{position: "relative"}} onMouseOver={checkOpenEvent} onMouseLeave={(item) => setOpenEvent(!item)}>
                    <Link to="#">events</Link>
                    {openEvent && 
                        <div className={style.dropDownEvent}>
                            <div>
                                <Link to="#">Publications</Link>
                            </div>
                            <div>
                                <Link to="#">News</Link>
                            </div>        
                        </div>
                    }
                </li>
                <li  className={contatcActive ?  `${style.ActiveOther}` : ""}>
                    <Link to="/contact">contact us</Link>
                </li>
            </ul>
            <div className={style.hamburgerMenu}>
                <Drawer open={open} handleOpe={handleOpen} right customBurgerIcon={<VscListFlat /> } width={ '80%' } />
                {/* onStateChange={props.handleOpen}  } customCrossIcon={ <FaTimes /> }  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } */}
            </div>
        </nav>
    )
}

export default Nav;

