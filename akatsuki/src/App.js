import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import List from './components/List';
import Compose from './components/Compose/Compose';
import './App.css';


const initState = {
  input: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initState;
  }
  
  loadUser = (data) => {
    this.setState({ user: {
        id: data.id,
        name: data.name,
        email: data.email,
    }})
  }

  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    // console.log(event.target.value);
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initState);
    }
    else if(route === 'home' ) {
      this.setState({isSignedIn: true});
    }
    console.log(this.state);
    if(route === 'Scheduled')
    {
      this.setState({route: 'home'});
    }
    else
    this.setState({route: route});
  }

  render() {
    const {isSignedIn, route} = this.state;
  return (
    <div className="App">
    
      <Navigation 
        onRouteChange={this.onRouteChange} 
        isSignedIn={isSignedIn}
      />
      { route === 'home'
        ? <div>
            <List />

          </div>
        : (
            route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            :(
              route === 'Sent'?
              <List />
              :(
                 route === 'Compose'
                 ? <Compose />
                 :<Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
              )

              

            )  
          )
      }
    </div>
    );
  }
}

export default App;
