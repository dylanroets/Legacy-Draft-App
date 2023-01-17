import React from 'react';
import Avatar from '@mui/material/Avatar';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div className="">
        <div>
        <img style={{float: 'left', marginRight: -70, marginLeft: -90, marginBottom: 100}} width={500} src="/images/app-logo.png" />
        <Avatar label="Dylan" alt="player photo" src="/images/IMG_4746.JPG" sx={{ width: 80, height: 80 }}/>
        <a href="https://github.com/DylanRoets" target="_blank" rel="noreferrer">
          <img width={40}  src="/images/github_logoicon.png"/>
        </a>
        <a href="https://www.linkedin.com/in/dylan-roets-327848255/" target="_blank" rel="noreferrer">
          <img width={40}  src="/images/linkedin_icon.png"/>
        </a>
        <h4>Dylan Roets - Full Stack Software Engineer</h4>
        </div>

        <p>⦿ LEGACY🏈DRAFT was built to handle fast pace fantasy football live auction drafts, <br></br>
          that way even if your party is out of order, your draft doesn't have to be!
        </p>
        <img style={{float: 'right', marginRight: 400, marginLeft: 0}} width={500} src="/images/technologies-image.png" />
        <h4> Technologies Used:</h4>
        <p>⦿ React ⦿ node.js</p>
        <p>⦿ Express ⦿ JavaScript</p>
        <p>⦿ PostgreSQL ⦿ Redux-Saga</p>
        <p>⦿ Postman ⦿ MUI ⦿ CSS ⦿ HTML</p>
        <p>⦿ API - AMERICAN-FOOTBALL API</p>
        </div>
        <div>
          <h4>🌟Special Thanks🌟</h4>
          <p>
            🏫 Prime Digital Academy <br />
            🧑‍🏫 Instructors: Dane, Key, Kris, & Liz <br />
            🧑‍🎓 Shawl Cohort! <br />
            ❤️ My Loving Family Hannah & Lola
          </p>
        </div>
    </div>
  );
}

export default AboutPage;
