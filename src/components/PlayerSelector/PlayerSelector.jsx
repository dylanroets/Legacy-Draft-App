import React, { useState } from 'react';
import {useSelector} from 'react-redux';


function PlayerSelector() {

const store = useSelector((store) => store);

const [playerSearch, setPlayerSearch] = useState('');

const searchPlayers = (event) => {
  event.preventDefault();
  console.log('player searching for: ', playerSearch);
  // dispatch({
  //     type: 'GET_SEARCH',
  //     payload: playerSearch,
  // });
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
        </>
    );
}

export default PlayerSelector;