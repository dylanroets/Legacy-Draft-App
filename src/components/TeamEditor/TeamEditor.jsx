import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function TeamEditor() {

  const id = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.teamEditor);
  const teams = useSelector((store) => store.teams);

  console.log('whats in teams: ', teams);

  // Edit Player Click Function
  const editPlayer = (player) => {
    console.log('edit player: ', player);
    // dispatch({ type: 'DELETE_PLAYER', payload: team })
}

  // Delete Player Click Function
  const deletePlayer = (player) => {
    // console.log('deleting player: ', player.id);
    // console.log('setting players: ', player.team_id);
    dispatch({ type: 'DELETE_PLAYER', payload: player})
}

    return (
      <>
        <h2>Team Editor Page</h2>
        <div>
          <table>
            <thead>
              <tr>
                <td>Player Photo</td>
                <td>Player Name</td>
                <td>Position</td>
              </tr>
            </thead>
              {store.map((player, i)=> {
                return (
                <tbody key={i}>
                  <tr>
                    <td><img src={player.player_image} height={80} width={110} alt="team-photo" /></td>
                    <td>{player.player_name}</td>
                    <td>{player.player_position}</td>
                    <td><button id='edit-player' onClick={() => editPlayer(player)}>Edit</button></td>
                    <td><button id='delete-player' onClick={() => deletePlayer(player)}>Delete</button></td>
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