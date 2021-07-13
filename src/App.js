import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

//Components
import Nav from "./components/nav"
import Footer from "./components/footer";
import Scroll from "./components/scroll"

//Pages
import Home from "./pages/Home/home"
import Counsel from "./pages/counsel"
import Partners from "./pages/partners"
import Trainees from "./pages/trainees"
import Contact from "./pages/contactus"
import About from "./pages/aboutus"

import './App.css';


function App() {
  const [open, setOpen] = useState(false)

  const backToTop =() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
  }

  const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
      fabr: {
          backgroundColor: "blue"
      }
  }));

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
      
      const handleClick = (event) => {
          const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
      
          if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
      };
    
  return (
      <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
      </div>
      </Zoom>
  );
  }

  const handleOpen = () => {
    setOpen(true)
  }



  return (
    <Router>
      <Nav open={open} handleOpen={handleOpen} />
      <Switch>
        <Scroll>
          <div id="outer-container">
            <main  className={open && 'page-wrap'} >
              <Route exact path="/" component={() => <Home />}/>
              <Route exact path="/counsel" component={() => <Counsel />}/>
              <Route exact path="/partners" component={() => <Partners />}/>
              <Route exact path="/trainees" component={() => <Trainees />}/>
              <Route exact path="/contact" component={() => <Contact />}/>
              <Route exact path="/about" component={() => <About />}/>
              {/* <Redirect to="/home" /> */}
            </main>
            <ScrollTop>
                <Fab color="secondary" size="small" aria-label="scroll back to top"  onClick={backToTop} className="fabr">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop> 
          </div>
        </Scroll>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
