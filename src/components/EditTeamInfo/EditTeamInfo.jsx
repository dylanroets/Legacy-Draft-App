import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './EditTeamInfo.css';

function EditTeamInfo() {

    // Added an ID along with the history.push form the teams page
    // also edited the route to reflect the exact path + ID
    const {ID} = useParams();
    const dispatch = useDispatch();
    const store = useSelector((store) => store.edit);

    useEffect(() => {
        dispatch({ type: 'FETCH_TEAM_INFO', payload: ID })
    }, [editTeam]);

    const editTeam = () => {
        console.log('store: ', store);;
        console.log('ownerName ', ownerName);
        // dispatch({ type: 'DELETE_PLAYER', payload: team })
        event.preventDefault();
    }

    const [ownerName, setOwnerName] = useState(store)

    // history.push button to send the data to component
    // see the information from the team i click on
    // write SQL statement 
    // button or confirmation to send action type to saga/DB



    return(
        <>
            <h2>Update Individual Team Data</h2>
            {/* <div>
                <table>
                    <thead>
                    <tr>
                        <td>Team Photo</td>
                        <td>Team Name</td>
                        <td>Team Roster</td>
                        <td>Team Roster</td>
                    </tr>
                    </thead>
                    {teams.map((team, i)=> {
                        return (
                        <tbody key={i}>
                        <tr>
                            <td><img src={team.profile_image} height={100} width={100} alt="team-photo" /></td>
                            <td>{team.owner_name}</td>
                            <td>{team.roster_size}</td>
                            <td>{team.team_salary}</td>
                            <td><button id='edit-team' onClick={() => editTeam(team)}>Edit</button></td>
                            <td><button id='delete-team'>Delete</button></td>
                        </tr>
                        </tbody>
                        );
                    })}
                </table>
            </div> */}
            <div>
                <form>
                    <label> Owner Name:
                        <input 
                            type="text" 
                            name='owner_name'
                            defaultValue=''
                            onChange={(event) => setOwnerName(event.target.value)}
                        />
                    </label>
                    <button id='edit-team' onClick={() => editTeam()}>Edit</button>
                </form>
            </div>
            
        </>
    );


}

export default EditTeamInfo;