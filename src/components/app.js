import React, { Component } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavigationContainer from './navigation/navigationcontainer';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog-detail";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state ={
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSucessfulLogin = this.handleSucessfulLogin.bind(this);
    this.handleUnSucessfulLogin = this.handleUnSucessfulLogin.bind(this)
    this.handleSucessfulLogout = this.handleSucessfulLogout.bind(this)
  };

  handleSucessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN" 
    });
  }

  handleUnSucessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN" 
    });
  }

  handleSucessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN" 
    });
  }

  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", { 
      withCredentials: true }).then(Response => {
        const loggedIN = Response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status LOGGED_IN => return data
        // If loggedIn status NOT_LOGGED_IN => updata state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIN && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIN && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
          } else if (!loggedIN && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route key="portfoliomanager" path="/portfoliomanager" component={PortfolioManager} />
    ]
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
           <NavigationContainer 
           loggedInStatus={this.state.loggedInStatus} 
           handleSucessfulLogout = {this.handleSucessfulLogout}
           />

           <h2>{this.state.loggedInStatus}</h2>

           <Switch>
            <Route exact path="/" component={Home} />

            <Route
             path="/auth"
             render={props => (
               <Auth
                 {...props}
                 handleSucessfulLogin={this.handleSucessfulLogin}
                 handleUnSucessfulLogin={this.handleUnSucessfulLogin}
                 />
             )               
             }
            />

            <Route path="/about-me" component={About} />
            <Route path="/contact" component={Contact} />

            <Route path="/blog" 
            render={props => (
              <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
            )}
             />

            <Route path="/b/:slug" component {...BlogDetail} />
            {this.state.loggedInStatus === "LOGGED_IN" ?  this.authorizedPages() : null }
            <Route exact path="/portfolio/:slug" Component={PortfolioDetail} />
            <Route Component={NoMatch} />
           </Switch>
          </div>
        </Router>

        </div>
    );
  }
}