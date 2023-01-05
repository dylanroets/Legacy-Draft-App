import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Teams() {
    const dispatch = useDispatch();
    const [ownerName, setOwnerName] = useState('')
    const [rosterSize, setRosterSize] = useState('')
    const [profileImage, setProfileImage] = useState('')

    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const teams = useSelector((store) => store.teams);

    useEffect(() => {
        dispatch({type: 'FETCH_TEAMS'})
    }, []);

    const addTeam = (event) => {
        event.preventDefault();
        console.log('addTeam clicked');
        dispatch({
            type: 'ADD_TEAM',
            payload: { ownerName, rosterSize, profileImage },
        });
    };



    return (
        <>
            <div>
                <h2>Teams Page splatting teams to the dom</h2>
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
            <h2>Team List</h2>
            {teams.map((team, i)=> {
                return (
                <div key={i}>
                    <p>{team.owner_name}</p>
                    <img src={team.profile_image} height={200} width={200} alt="profile-image" />
                </div>
                );
            })}
        </>
    );
}

export default Teams;