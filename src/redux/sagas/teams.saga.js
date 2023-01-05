import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* fetchTeams() {
    // getting all the teams from the database
    try {
        const teams = yield axios.get('/api/teams')
        console.log('GET all teams', teams.data);
        yield put({ type: 'SET_TEAMS', payload: teams.data});
    } catch(err) {
        console.log('Error GETting teams: ', err);
    }
}

// POST a new team to the database
function* addTeam(action) {
    try {
        yield axios.post('/api/teams', action.payload)
        yield put({ type: 'FETCH_TEAMS' });
        console.log('in addTeam');
    } catch (err) {
        console.log('Error POSTing team: ', err);

    }
}

// Update a team


// Delete a team from the Database

function* deleteTeam(action) {
    console.log('action.payload: ', action.payload);
    try{
        yield axios.delete('/api/teams/'+ action.payload);
        yield put({ type: 'FETCH_TEAMS' });
    } catch (err) {
        console.log('Error deleting Team: ', err);
    }
}





function* teamsSaga() {
    yield takeLatest('FETCH_TEAMS', fetchTeams);
    yield takeLatest('ADD_TEAM', addTeam);
    yield takeLatest('DELETE_TEAM', deleteTeam);
}

export default teamsSaga;