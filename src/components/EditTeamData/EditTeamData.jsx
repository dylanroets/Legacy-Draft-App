import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function EditTeamData() {

    // see the information from the team i click on
    // inline on page with a conditional render
    // write SQL statement 
    // button or confirmation to send action type to saga/DB


    return(
        <>
            <h2>Update Individual Team Data</h2>

            <button>edit</button>

        </>
    );


}

export default EditTeamData;