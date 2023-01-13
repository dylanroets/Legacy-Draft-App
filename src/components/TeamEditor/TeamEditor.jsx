import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

function TeamEditor() {

  const id = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.teamEditor);
  const teams = useSelector((store) => store.teams);

  // Edit Player Click Function
  const editPlayer = (player) => {
    console.log('edit player: ', player);
    // dispatch({ type: 'DELETE_PLAYER', payload: team })
}

  // useEffect(() => {
  //   dispatch({type: 'FETCH_TEAM_PLAYERS'})
  // }, []);


  // Delete Player Click Function
  const deletePlayer = (player) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Removing this player is permanent!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove player!'
    }).then((result) => {
        if (result.isConfirmed) {
          dispatch({ type: 'DELETE_PLAYER', payload: player})
        }
    })
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
                  <td>Player Group</td>
                  <td>Age</td>
                  <td>Height</td>
                  <td>Weight</td>
              </tr>
            </thead>
              {store.map((player, i)=> {
                return (
                <tbody key={i}>
                  <tr>
                    <td><img src={player.player_image} height={80} width={110} alt="team-photo" /></td>
                    <td>{player.player_name}</td>
                    <td>{player.player_position}</td>
                    <td>{player.player_group}</td>
                    <td>{player.player_age}</td>
                    <td>{player.player_height}</td>
                    <td>{player.player_weight}</td>
                    <td><button id='edit-player' onClick={() => editPlayer(player)}>Edit</button></td>
                    <td><button id='delete-player' onClick={() => deletePlayer(player)}>Remove</button></td>
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