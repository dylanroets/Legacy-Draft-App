import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

function PlayerSelector() {

const searchResult = useSelector((store) => store.search);
const dispatch = useDispatch();

const topPlayers = [{ player: 'Tom Brady'}, { player: 'Aaron Donald'}, { player: 'Aaron Rodgers'}, { player: 'Cooper Kupp'}, { player: 'Jonathan Taylor'}, { player: 'TJ Watt'}, { player: 'Davante Adams'}, { player: 'Patrick Mahomes'}, { player: 'Jalen Ramsey'}, { player: 'Travis Kelce'}, { player: 'Myles Garrett'}, { player: 'Derrick Henry'}, { player: 'Josh Allen'}, { player: 'Trent Williams'}, { player: 'Tyreek Hill'}, { player: 'Justin Jefferson'}, { player: 'Shaquille Leonard'}, { player: 'Deebo Samuel' }, { player: 'Joe Burrow'}, { player: 'George Kittle'}, { player: 'Trevon Diggs'}, { player: 'JaMarr Chase'}, { player: 'Stefon Diggs'}, { player: 'Matthew Stafford'}, { player: 'Dalvin Cook'}, { player: 'Nick Chubb'}, { player: 'Keenan Allen'}, { player: 'Lamar Jackson'}, { player: 'DeAndre Hopkins'}, { player: 'Joe Mixon'}, { player: 'Chris Jones'}, { player: 'Justin Herbert'}, { player: 'Tristan Wirfs'}, { player: 'Cameron Heyward'}, { player: 'Dak Prescott'}, { player: 'Austin Ekeler'}, { player: 'Alvin Kamara'}, { player: 'Mike Evans'}, { player: 'Kyler Murray'}, { player: 'Darren Waller'}, { player: 'Russell Wilson'}, { player: 'Chandler Jones'}, { player: 'Jaylen Waddle'}, { player: 'Derek Carr'}, { player: 'James Conner'}, { player: 'Mac Jones'}, { player: 'Odell Beckham Jr'}, { player: 'Kyle Pitts'}, { player: 'Justin Tucker'}, { player: 'CeeDee Lamb'}, { player: 'Leonard Williams'}, { player: 'David Montgomery'}, { player: 'Kirk Cousins'}, { player: 'Kyle Juszczyk'}]

const [playerSearch, setPlayerSearch] = useState('');
const [teamId, setNewTeamId]= useState('');

// Setting the teams store
useEffect(() => {
  dispatch({type: 'FETCH_TEAMS'})
}, []);

// grabbing and mapping over selections for the drop down menu
const teams = useSelector((store) => store.teams);

const searchPlayers = (event) => {
  event.preventDefault();
  console.log('player searching for: ', playerSearch);
  dispatch({
      type: 'SEARCH_PLAYERS',
      payload: playerSearch,
  });
  setPlayerSearch('');
};

//Pulling player specific data for adding players to teams in the database
const addPlayer = (player) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Player added successfully'
  })
  console.log('add player data: ', player);
  dispatch({ type: 'ADD_NEW_PLAYER', 
    payload: 
      { team_id: teamId,
        player_id: player.id,
        player_image: player.image,
        player_name: player.name,
        player_position: player.position,
        player_group: player.group,
        player_age: player.age,
        player_height: player.height,
        player_weight: player.weight,      
      }
  });
}

    return (
        <>
          <h2>Player Selector Page</h2>
          <form onSubmit={searchPlayers}>
                <h2>Search Players</h2>
                <input
                    className="search-field"
                    type="text"
                    required
                    value={playerSearch}
                    onChange={(event) => {
                    setPlayerSearch(event.target.value);
                    }}
                    placeholder="Search Players..."
                />
                <button type='submit'>Search</button>
          </form>
          <h2>Player Search</h2>
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
                  <td>Drafted Team</td>
                </tr>
              </thead>
                {searchResult.map((player, i)=> {
                  return (
                  <tbody key={i}>
                    <tr>
                      <td><img src={player.image} height={80} width={110} alt="team-photo" /></td>
                      <td>{player.name}</td>
                      <td>{player.position}</td>
                      <td>{player.group}</td>
                      <td>{player.age}</td>
                      <td>{player.height}</td>
                      <td>{player.weight}</td>
                      <td>
                      <select name="teams" id="teams" onChange={(event) => setNewTeamId(event.target.value)}>
                            <option key={i} value="">Select a Team</option>
                        {teams.map((team, i) => {
                          return (
                            <option key={i} value={team.id}>{team.owner_name}</option>
                          )}
                        )}
                        </select>
                      </td>
                      <td><button id='add-player' onClick={() => addPlayer(player)}>Add</button></td>
                    </tr>
                  </tbody>
                  );
                })}
            </table>
          </div>
        </>
    );
}

export default PlayerSelector;



