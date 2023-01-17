import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

  //Mui table styling
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1e88e5',
        color: theme.palette.common.white,
        fontSize: 18
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
    border: 0,
    },
}));

//Pulling player specific data for adding players to teams in the database
  const addPlayer = (player) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
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
      <h2>Search the NFL</h2>
      <form onSubmit={searchPlayers}>
        <Box
          sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
        >
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            className="search-field"
            freeSolo
            value={playerSearch}
            onChange={(event, newPlayer) => { setPlayerSearch(newPlayer); }}
            options={topPlayers.map((event) => event.player)}
            renderInput={(params) => <TextField {...params} label="Search Players" />}
          />
          <Button type='submit' size='large' variant="contained">
            <PersonSearchIcon sx={{ mr: 2 , color: 'primary' }} />
            Search Players
          </Button>
        </Stack>
        </Box>
      </form>
      <h2>Player Results</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="left">Player Name</StyledTableCell>
                <StyledTableCell align="center">Position</StyledTableCell>
                <StyledTableCell align="center">Player Group</StyledTableCell>
                <StyledTableCell align="center">Age</StyledTableCell>
                <StyledTableCell align="center">Height</StyledTableCell>
                <StyledTableCell align="center">Weight</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {searchResult.map((row, i) => (
                <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row"><Stack direction="row" spacing={2}><Avatar alt="player photo" src={row.image} sx={{ width: 90, height: 90 }}/></Stack></StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.position}</StyledTableCell>
                <StyledTableCell align="center">{row.group}</StyledTableCell>
                <StyledTableCell align="center">{row.age}</StyledTableCell>
                <StyledTableCell align="center">{row.height}</StyledTableCell>
                <StyledTableCell align="center">{row.weight}</StyledTableCell>
                <StyledTableCell align="center">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel>Team Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="team-map"
                      label="Select Team"
                      value={teamId}
                      onChange={(event) => setNewTeamId(event.target.value)}
                      >
                      {teams.map((team, i) => {
                        return (
                          <MenuItem key={i} value={team.id}>{team.owner_name}</MenuItem>
                        )}
                      )}
                    </Select>
                  </FormControl>
                </Box>
                </StyledTableCell>
                <StyledTableCell><button id='add-player' onClick={() => addPlayer(row)}>Add</button></StyledTableCell>
                </StyledTableRow>
            ))}
              </TableBody>
          </Table>
      </TableContainer>
    </>
  );
}

export default PlayerSelector;