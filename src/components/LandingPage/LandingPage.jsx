import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/teams');
  };

  return (
    <div className="container">
      <div className="grid">   
        <div className="grid-col grid-col_8">
        <img style={{float: 'left', marginRight: -70, marginLeft: -90}} width={500} src="/images/app-logo.png" />
        <h2>Welcome</h2>
        <p> I’ve been a part of a live in-person fantasy football draft for years, but every year dread 
          sets in before the season starts! I remember I don’t have an efficient way to keep track of which 
          teams got which players during the chaotic draft party. If we don’t get exact rosters 
          it can create huge headaches for years to come.
        </p>
        <p> This is where Legacy Draft App saves your big day! The perfect companion to any live in-person draft. 
          It allows a user to create their league settings and add the necessary number of teams, 
          along with allocating the players each team starts with. Once the draft starts they can 
          quickly search for players as the draft flies by; easily adding them to the teams that drafted 
          them along with their associated stats. At the end of the day the goal is to have fun during your
          draft party, Legacy Draft will help keep it that way!
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
