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
                    <Button variant="contained" type='submit' size="small">Add Team</Button>
                    </Box>
                </form>
            </div>
            <div>
            <table>
                <thead>
                    <tr>
                        <td>Team Photo</td>
                        <td>Team Name</td>
                        <td>Roster Size</td>
                        <td>Team Salary</td>
                    </tr>
                </thead>
            {teams.map((team, i)=> {
                return (
                <tbody team={team} key={i}>
                    <tr>
                        <td><Stack direction="row" spacing={2}><Avatar alt="team photo" src={team.profile_image} sx={{ width: 75, height: 75 }}/></Stack></td>
                        <td>{team.owner_name}</td>
                        <td>{team.roster_size}</td>
                        <td>{team.team_salary}</td>
                        <td><button onClick={() => editTeamInfo(team)}>Edit</button></td>
                        <td><button id='view-players' onClick={() => fetchTeamPlayers(team)}>View Team</button></td>
                        <td><button id='delete' onClick={() => deleteTeam(team.id)}>Delete</button></td>
                    </tr>
                </tbody>
                );
            })}
            </table>
            </div>
        </>
    );
}

export default Teams;