import axios from "axios";
import { put, take, takeLatest } from "redux-saga/effects";


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
        // yield put({ type: '', payload: });
        console.log('in addTeam');
    } catch (err) {
        console.log('Error POSTing team: ', err);

    }
}





function* teamsSaga() {
    yield takeLatest('FETCH_TEAMS', fetchTeams);
    yield takeLatest('ADD_TEAM', addTeam);
}

export default teamsSaga;