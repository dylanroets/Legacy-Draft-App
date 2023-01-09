import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function PlayerSelector() {

const searchResult = useSelector((store) => store.search);
const dispatch = useDispatch();

const [playerSearch, setPlayerSearch] = useState('');

const searchPlayers = (event) => {
  event.preventDefault();
  console.log('player searching for: ', playerSearch);
  dispatch({
      type: 'SEARCH_PLAYERS',
      payload: playerSearch,
  });
  setPlayerSearch('');
};

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
            <div>
                {searchResult.map((player, i)=> {
                  return (
                    <div key={i}>
                      <p>{player.name}</p>
                      <img src={player.image} height={100} width={140} alt="profile-image" />
                    </div>
                  )}
                )}
            </div> 
        </>
    );
}

export default PlayerSelector;