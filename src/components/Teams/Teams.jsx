import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logger from 'redux-logger';

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
    const [editOpen, setEditOpen] = useState(true);

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
        // console.log('deleting team: ', team);
        dispatch({ type: 'DELETE_TEAM', payload: team })
    }

    const fetchTeamPlayers = (team) => {
        console.log('fetching team players in teams.jsx: ', team);
        dispatch({ type: 'FETCH_TEAM_PLAYERS', payload: team.id });
        history.push('/team-editor');
    }

    const handleEditOpen = (team) => {
        console.log('what in this team for editing? ', team );
        console.log('editOpen? ', editOpen);
        setEditOpen(false)
    }

    const handleEditClosed = (team) => {
        setEditOpen(true)
    }



    return (
        <>
            <div>
                <h2>Teams Page</h2>
                <input type="username" className="edit-userName" defaultValue={teams.owner_name}></input>
                <form onSubmit={addTeam}>
                    <input 
                    id='ownerName-input'
                    type='text'
                    placeholder='Team Owner...'
                    value={ownerName}
                    required
                    onChange={(event) => {
                        setOwnerName(event.target.value);
                    }}             
                    >               
                    </input>
                    <input
                    id='rosterSize-input'
                    type='number'
                    placeholder='Roster Size...'
                    value={rosterSize}
                    required
                    onChange={(event) => {
                        setRosterSize(event.target.value);
                    }}             
                    >               
                    </input>
                    <input
                    id='teamSalary-input'
                    type='number'
                    placeholder='Team Salary...'
                    value={teamSalary}
                    required
                    onChange={(event) => {
                        setTeamSalary(event.target.value);
                    }}             
                    >               
                    </input>
                    <input
                    id='profileImage-input'
                    type='text'
                    placeholder='Image URL...'
                    value={profileImage}
                    required
                    onChange={(event) => {
                        setProfileImage(event.target.value);
                    }}             
                    >               
                    </input>
                    <button type='submit' >Add Team</button>
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
                        <td><img src={team.profile_image} height={100} width={100} alt="profile-image" /></td>
                        <td>{editOpen ? <td>{team.owner_name}</td> : <input type="text" defaultValue={team.owner_name}></input>}</td>
                        <td>{editOpen ? <td>{team.roster_size}</td> : <input type="text" defaultValue={team.roster_size}></input>}</td>
                        <td>{editOpen ? <td>{team.team_salary}</td> : <input type="text" defaultValue={team.team_salary}></input>}</td>
                        <td>{editOpen ? <button onClick={() => handleEditOpen(team)}>Edit 🖊</button> : <button onClick={() => handleEditClosed(team)}>Cancel ❌</button>}</td>
                        <td>{editOpen ? <button id='view-players' onClick={() => fetchTeamPlayers(team)}>View Team</button> : <button>Save ✅</button>}</td>
                        <td>{editOpen ? <button id='delete' onClick={() => deleteTeam(team.id)}>Delete</button> : <td></td>}</td>
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