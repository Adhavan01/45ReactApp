

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import LandingPageA from './Teacher';
import LandingPageB from './Students';

function Fleaching() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedLandingPage, setSelectedLandingPage] = useState(null);

  const handleLoginSubmit = ({ username }) => {
    setLoggedInUser(username);
  };

  const handleLandingPageSelect = (event) => {
    setSelectedLandingPage(event.target.value);
  };

  if (loggedInUser && selectedLandingPage === 'a') {
    return <LandingPageA username={loggedInUser} />;
  }

  if (loggedInUser && selectedLandingPage === 'b') {
    return <LandingPageB username={loggedInUser} />;
  }

  return (
    <div className='loginPage'>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLoginSubmit} />
      <label>
        Select User:
        <select className='loginSelect' onChange={handleLandingPageSelect}>
          <option  value="">Select</option>
          <option value="a">Teacher</option>
          <option value="b">Student</option>
        </select>
      </label>
    </div>
  );
}
export default Fleaching;