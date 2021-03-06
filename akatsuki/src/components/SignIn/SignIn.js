import React from 'react';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    console.log(this.state);
    console.log(this.props);
    // fetch by default does GET request
      if(this.state.signInEmail=="abcd@gmail.com" && this.state.signInPassword=="abcd") { // does the user exist? Did we receive a user with a property of id?
        this.props.onRouteChange('home');
      }
    
    //
  }

  render() {
  // destructuring in the parameters itself
  const {onRouteChange} = this.props;
  // the parenthesis after return statement 
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password" 
                  id="password" 
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input 
                onClick={this.onSubmitSignIn}
                /*we cannot do onRouteChange('home') as it will be called and executed, but we want it to be called
                  whenever onChange happens. So we wrap it in an arrow function*/
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Sign in" 
              />
            </div>
            <div className="lh-copy mt3">
              <p 
                onClick={() => onRouteChange('register')} 
                className="f6 link dim black db pointer"
              >
              Register
              </p>
            </div>
          </div>
        </main>
        <a href="/auth/google">Sign In with Google</a>
      </article>
    );
  }
}

export default SignIn;

/*
Here we have to make sure that input tag is closed in form

instead of form we are using div
as we don't necessarily always send data

*/