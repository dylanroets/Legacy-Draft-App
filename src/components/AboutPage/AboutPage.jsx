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
        <p>I’ve been a part of a live in-person fantasy football draft for years, but every year dread sets in before the season starts. I always remember I don’t have a way to keep track of which teams pay for which players during the chaotic draft party. If we don’t get exact rosters and dollar amounts it can create huge headaches for years to come.</p>
        <p>This is where Legacy Draft App would be the perfect companion to any live in-person draft. It would allow a user to create their league settings and add the necessary number of teams, along with allocating the salary caps each team starts with. Once the draft starts they could quickly search for players as the draft moves forward and easily add them to teams that drafted them with their associated bid amounts. At the end of the day the goal is to have fun during these unique parties, Legacy Draft App will help keep it that way!</p>
      </div>
    </div>
  );
}

export default AboutPage;
