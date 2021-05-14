import React, {Component} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Nav from "./components/nav"
import Home from "./pages/home"
import Login from "./pages/login"
import Singup from "./pages/signup"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "axios"


export default class App extends Component{
  state={}
  // const [data, setData] = useState([]); // keep user data in state for other component to use
  // const [user, setUser] = useState({})


// Get user profile if authenticated

componentDidMount = () => {
  axios.get('user')
    .then(res => {
      this.setUser(res.data)
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
  }

// useEffect(() => {
//   const getUser = () => {
        
//     axios.get('user')
//     .then(res => {
//         setUserUpdate(res.data.userInfo)
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//   }
//     getUser()
// }, [])


// Set user : Update user profile from login component

setUser = user => {
  this.setState({
    user: user
  })
}
// const setUserUpdate = useCallback((user) => {
//   setUser({
//     user: data
//   })
// }, [setUser]) 

render() {
  return (
      <Router>
        <div className="App">        
            <Nav user={this.state} setUser={this.setUser} />
            <Switch>
              <Route exact path="/" component={() => <Home user={this.state.user}/> } />
              <Route exact path="/login" component={() => <Login setUser={this.setUser} />} />
              <Route exact path="/signup" component={() => <Singup />} />
          
            </Switch>
        </div>
      </Router>

    );

  }
}



