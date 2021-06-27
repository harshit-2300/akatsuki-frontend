import React, { Component } from 'react';
import To from '../To';
import Subject from './Subject'
import Content from './Content'
import Button from '../Button'


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
  
  render() {
    const {isSignedIn, route} = this.state;
  return (
        <div>
          <  h3>To</h3>
          <To />
          <h3>CC</h3>
          <To />
          <Subject className="center" /> 
          <Content />
          <Button />
        </div>
    );
  }
}

export default App;
