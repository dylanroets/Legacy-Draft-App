import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function PlayerSelector() {

const searchResult = useSelector((store) => store.search);
const dispatch = useDispatch();

const [playerSearch, setPlayerSearch] = useState('');
const [teamId, setNewTeamId]= useState('');
//setting team id for proper player placement
const setTeamId = (event) => {
  setNewTeamId(event.target.value);
}
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
  console.log('add player data: ', player);
  dispatch({ type: 'ADD_NEW_PLAYER', 
    payload: 
      { team_id: teamId,
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
                      <select name="teams\\" id="teams" onClick={(event) => setTeamId(event)}>
                                <option value=''></option>
                                <option value="1">Packers</option>
                                <option value="2">Vikings</option>
                                <option value="3">Dylan</option>
                                <option value="4">Detroit</option>
                                <option value="5">Chicago</option>
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