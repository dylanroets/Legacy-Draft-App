import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function TeamEditor() {

  const id = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.teamEditor);

  console.log('team editor store: ', store.teamEditor);

    return (
      <>
        <h2>Team Editor Page</h2>
        <div>
          <table>
            <thead>
              <tr>
                <td>Team Photo</td>
                <td>Player Name</td>
                <td>Position</td>
              </tr>
            </thead>
              {store.map((team, i)=> {
                return (
                <tbody key={i}>
                  <tr>
                    <td><img src={team.player_image} height={80} width={110} alt="team-photo" /></td>
                    <td>{team.player_name}</td>
                    <td>{team.player_position}</td>
                    <td><><button>Edit</button></></td>
                    <td><><button>Delete</button></></td>
                  </tr>
                </tbody>
                );
              })}
          </table>
        </div>
      </>
    );
}

export default TeamEditor;