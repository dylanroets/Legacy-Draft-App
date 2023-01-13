import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './EditTeamInfo.css';

function EditTeamInfo() {

    const {ID} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const teamEdit = useSelector((store) => store.edit);
    console.log('local teamEdit:', teamEdit);


    useEffect(() => {
        dispatch({ type: 'FETCH_TEAM_INFO', payload: ID });
        console.log('here i am')
    }, []);

    if(teamEdit[0] != undefined){
    }else{
    }

    const updateTeam = (event) => {
        event.preventDefault();
        console.log('ownerName: ', teamEdit);
        dispatch({ type: 'UPDATE_NEW_TEAM', payload: teamEdit });
        history.push('/teams');
    }


    return(
        <>
            <h2>Update Individual Team Data</h2>
            {console.log('in render')}
            <div>
                <form onSubmit={updateTeam}>
                    <label> Owner Name:
                        <input 
                            type="text" 
                            name='owner_name'
                            required
                            value={teamEdit.owner_name}
                            onChange={(event) => dispatch({
                                type: 'UPDATE_OWNER_NAME',
                                payload: event.target.value
                            })}
                        />
                    </label>
                    <label> Roster Size:
                        <input 
                            type="number" 
                            name='roster_size'
                            required
                            value={teamEdit.roster_size}
                            onChange={(event) => dispatch({
                                type: 'UPDATE_ROSTER_SIZE', 
                                payload: event.target.value
                            })}
                        />
                    </label>
                    <label> Team Salary:
                        <input 
                            type="number" 
                            name='team_salary'
                            required
                            value={teamEdit.team_salary}
                            onChange={(event) => dispatch({
                                type: 'UPDATE_TEAM_SALARY', 
                                payload: event.target.value
                            })}
                        />
                    </label>
                    <label> Profile Image URL:
                        <input 
                            type="text" 
                            name='owner_name'
                            required
                            value={teamEdit.profile_image}
                            onChange={(event) => dispatch({
                                type: 'UPDATE_PROFILE_IMAGE', 
                                payload: event.target.value
                            })}
                        />
                    </label>
                    <button id='edit-team' onClick={() => updateTeam()}>Update</button>
                </form>
            </div>
            
        </>
    );


}

export default EditTeamInfo;