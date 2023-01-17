import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h2>About</h2>
      <div>
        <h3>Application Overview</h3>
      </div>
      <div className="grid-col grid-col_8">
        <img style={{float: 'left', marginRight: -70, marginLeft: -90}} width={500} src="/images/app-logo.png" />
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
    </div>
  );
}

export default AboutPage;
