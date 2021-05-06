import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import {AmplifyAuthenticator, AmplifySignIn} from '@aws-amplify/ui-react'; 
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <AmplifyAuthenticator usernameAlias="email">
    <AmplifySignIn headerText="Sign In" slot="sign-in" hideSignUp></AmplifySignIn>
    </AmplifyAuthenticator>
    );
  }
}

export default withAuthenticator(App, true);
