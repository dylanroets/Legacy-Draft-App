import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Teams() {
    const dispatch = useDispatch();
    const id = useParams();
    const [ownerName, setOwnerName] = useState('')
    const [rosterSize, setRosterSize] = useState('')
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
            payload: { ownerName, rosterSize, profileImage },
        });
        setOwnerName('')
        setRosterSize('')
        setProfileImage('')
    };

    const deleteTeam = (team) => {
        // console.log('deleting team: ', team);
        dispatch({ type: 'DELETE_TEAM', payload: team })
    }

    const fetchTeamPlayers = (team) => {
        console.log('fetching team players in teams.jsx: ', team);
        dispatch({ type: 'FETCH_TEAM_PLAYERS', payload: team.id })
        history.push('/team-editor');
    }



    return (
        <>
            <div>
                <h2>Teams Page</h2>
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
                    </tr>
                </thead>
            {teams.map((team, i)=> {
                return (
                <tbody team={team} key={i}>
                    <tr>
                        <td><img src={team.profile_image} height={100} width={100} alt="profile-image" /></td>
                        <td>{team.owner_name}</td>
                        <td><button id='edit-players' onClick={() => fetchTeamPlayers(team)}>Edit Players</button></td>
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