import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function EditTeamInfo() {

    const dispatch = useDispatch();
    const teams = useSelector((store) => store.teams);

    // history.push button to send the data to component
    // see the information from the team i click on
    // write SQL statement 
    // button or confirmation to send action type to saga/DB


    return(
        <>
            <h2>Update Individual Team Data</h2>
            <div>
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
                            <td><button id='edit-player' >Edit</button></td>
                            <td><button id='delete-player' >Delete</button></td>
                        </tr>
                        </tbody>
                        );
                    })}
                </table>
            </div>
            
        </>
    );


}

export default EditTeamInfo;