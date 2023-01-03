import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Teams() {
    const dispatch = useDispatch();
    const [ownerName, setOwnerName] = useState('')

    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const teams = useSelector((store) => store.teams);
    console.log('what is in teams: ', teams);

    useEffect(() => {
        dispatch({type: 'FETCH_TEAMS'})
    }, []);


    return (
        <>
            <div>
                <h2>Teams Page splatting teams to the dom</h2>
                <form>
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
                </form>
            </div>
            <h2>Team List</h2>
            {teams.map((team, i)=> {
                console.log('Teams:  ', team);
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