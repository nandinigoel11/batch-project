import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/Dashboard.page';
import LoginPage from './pages/Login.page';
import RecordingsPage from './pages/Recordings.page';
import SignupPage from './pages/Signup.page';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
          <Redirect to="/login"></Redirect>
      </Route>
      <Route path="/login">
         <LoginPage></LoginPage>
      </Route>
      <Route path="/signup">
        <SignupPage></SignupPage>
      </Route>
      <Route path="/dashboard">
        <DashboardPage></DashboardPage>
      </Route>
      <Route path="/recordings">
        <RecordingsPage></RecordingsPage>
      </Route>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;

