import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* fetchTeams() {
    // getting all the teams from the database
    try {
        const teams = yield axios.get('/api/teams')
        // console.log('GET all teams', teams.data);
        yield put({ type: 'SET_TEAMS', payload: teams.data});
    } catch(err) {
        console.log('Error GETting teams: ', err);
    }
}

//Getting a single teams info with the ID
function* fetchTeamInfo(action) {
    // console.log(' team players action.payload: ', action.payload);
    try{
        const team = yield axios.get('/api/teams/'+ action.payload);
        console.log('teamPlayers.data: ', team.data);
        yield put({ type: 'SET_TEAM_INFO', payload: team.data});
    } catch (err) {
        console.log('Error deleting Team: ', err);
    }
}

// POST a new team to the database
function* addTeam(action) {
    try {
        yield axios.post('/api/teams', action.payload)
        yield put({ type: 'FETCH_TEAMS' });
    } catch (err) {
        console.log('Error POSTing team: ', err);
    }
}

// Update a team
function* editTeam(action){
    console.log('Saga Update Team: ', action.payload);
    try {
        yield axios.put('/api/teams', action.payload)
        // maybe need to add fetch after put
    } catch (err) {
        console.log('Error updating Team: ', err);
    }
}

// Delete a team from the Database
function* deleteTeam(action) {
    console.log('action.payload: ', action.payload);
    try{
        yield axios.delete('/api/teams/'+ action.payload);
        yield put({ type: 'FETCH_TEAMS' });
    } catch (err) {
        console.log('Error deleting Team from saga: ', err);
    }
}

function* teamsSaga() {
    yield takeLatest('FETCH_TEAMS', fetchTeams);
    yield takeLatest('FETCH_TEAM_INFO', fetchTeamInfo);
    yield takeLatest('ADD_TEAM', addTeam);
    yield takeLatest('EDIT_TEAM', editTeam);
    yield takeLatest('DELETE_TEAM', deleteTeam);
}

export default teamsSaga;