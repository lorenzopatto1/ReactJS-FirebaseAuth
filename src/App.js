import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as FirebaseController from './components/firebaseController';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function onButtonSignInClicked() {
    setErrorMessage('');
    try {
      await FirebaseController.signIn(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(error);
    }
  }

  async function onButtonSignUpClicked() {
    setErrorMessage('');
    try {
      await FirebaseController.signUp(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(error);
    }
  }

  async function onButtonResetPasswordClicked() {
    setErrorMessage('');
    try {
      await FirebaseController.resetPassword(email);
      alert('sended reset email password');
    } catch (error) {
      console.error(error);
      setErrorMessage(error);
    }
  }
  async function onButtonSignOutClicked() {
    setErrorMessage('');
    try {
      await FirebaseController.signOut();
      setIsAuthenticated(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isAuthenticated && (
          <div className="loginPage">
            <div className="inputs">
              <input
                onChange={(event) => setEmail(event.target.value)}
                placeholder="email"
                type="email"
              ></input>
              <br />
              <input
                onChange={(event) => setPassword(event.target.value)}
                placeholder="senha"
                type="password"
              ></input>
            </div>
            <div className="buttons">
              <button onClick={onButtonSignInClicked}>Sign In</button>
              <br />
              <button onClick={onButtonSignUpClicked}>Sign Up</button>
              <br />
              <button onClick={onButtonResetPasswordClicked}>
                Reset password
              </button>
            </div>
          </div>
        )}
        {isAuthenticated && (
          <div className="authPage">
            <h3>User authenticated</h3>
            <span>User email: {email}</span>
            <br />
            <button onClick={onButtonSignOutClicked}>Sign Out</button>
          </div>
        )}
        {errorMessage && <span>{errorMessage}</span>}
      </header>
    </div>
  );
}

export default App;
