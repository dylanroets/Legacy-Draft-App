import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Teams() {
    const dispatch = useDispatch();
    const id = useParams();
    const [ownerName, setOwnerName] = useState('')
    const [rosterSize, setRosterSize] = useState('')
    const [teamSalary, setTeamSalary] = useState('')
    const [profileImage, setProfileImage] = useState('')

    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const teams = useSelector((store) => store.teams);
    const history = useHistory();


    useEffect(() => {
        dispatch({type: 'FETCH_TEAMS'})
    }, []);

    const addTeam = (event) => {
        event.preventDefault();
        // console.log('addTeam clicked');
        dispatch({
            type: 'ADD_TEAM',
            payload: { ownerName, rosterSize, profileImage, teamSalary },
        });
        setOwnerName('')
        setRosterSize('')
        setProfileImage('')
        setTeamSalary('')
    };

    const deleteTeam = (team) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Team deletes are permanent!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete team!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ type: 'DELETE_TEAM', payload: team })
                Swal.fire(
                    'Deleted!',
                    'The team has been deleted.',
                    'success'
            )
            }
        })
    }

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



    // fetches player list of individual team and push to another component to map over them
    const fetchTeamPlayers = (team) => {
        console.log('fetching team players in teams.jsx: ', team);
        dispatch({ type: 'FETCH_TEAM_PLAYERS', payload: team.id });
        history.push('/team-editor');
    }

    // grabs Team info data and pushes to new component to edit the team details
    const editTeamInfo = (team) => {
        console.log('sending in edit with team: ', team);
        dispatch({ type: 'FETCH_TEAM_INFO', payload: team.id });
        history.push('/edit-team-info/' + team.id);
    }

    return (
        <>
            <div>
                <h2>Create Teams</h2>
                <form onSubmit={addTeam}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            label="Team Owner"
                            id='ownerName-input'
                            type='text'
                            value={ownerName}
                            required
                            onChange={(event) => {
                                setOwnerName(event.target.value);
                            }}    
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Roster Size"
                            type='number'
                            id='rosterSize-input'
                            value={rosterSize}
                            required
                            onChange={(event) => {
                                setRosterSize(event.target.value);
                            }} 
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Team Salary"
                            id='teamSalary-input'
                            type='number'
                            value={teamSalary}
                            required
                            onChange={(event) => {
                                setTeamSalary(event.target.value);
                            }}  
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField 
                            label="Image URL" 
                            id='profileImage-input'
                            type='text'
                            value={profileImage}
                            onChange={(event) => {
                                setProfileImage(event.target.value);
                            }} 
                            InputLabelProps={{
                                shrink: true,
                            }}    
                        />
                    </Box>
                    <Box sx={{ '& button': { m: 1 } }}>
                    <Button variant="contained" type='submit' size="large">Add Team</Button>
                    </Box>
                </form>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Team Photo</StyledTableCell>
                        <StyledTableCell align="left">Team Name</StyledTableCell>
                        <StyledTableCell align="center">Roster Size</StyledTableCell>
                        <StyledTableCell align="center">Team Salary</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {teams.map((row) => (
                        <StyledTableRow key={row.profile_image}>
                        <StyledTableCell align="center" component="th" scope="row"><Stack direction="row" spacing={2}><Avatar alt="team photo" src={row.profile_image} sx={{ width: 71, height: 71 }}/></Stack></StyledTableCell>
                        <StyledTableCell align="left">{row.owner_name}</StyledTableCell>
                        <StyledTableCell align="center">{row.roster_size}</StyledTableCell>
                        <StyledTableCell align="center">{row.team_salary}</StyledTableCell>
                        <StyledTableCell position='right' align='right'>
                            <Box sx={{ '& > :not(style)': { m: 4 } }}>
                                <Fab onClick={() => editTeamInfo(row)} size='small' variant="extended" color="primary" aria-label="add">
                                    <EditIcon sx={{ mr: .8 }} />Edit
                                </Fab>
                                <Fab onClick={() => fetchTeamPlayers(row)} size='small' variant="extended">
                                    <NavigationIcon sx={{ mr: 1 , color: 'primary' }} />
                                    View Players
                                </Fab>
                                <Fab onClick={() => deleteTeam(row.id)} size='small' variant="extended" sx={{':hover': { bgcolor: 'rgb(210, 0, 0)', color: 'white'}, backgroundColor: 'rgb(240, 0, 0)', color: 'white'}} aria-label="edit">
                                    <DeleteForeverRoundedIcon sx={{ mr: 1 }}/>Delete
                                </Fab>
                            </Box>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Teams;