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



function* teamsSaga() {
    yield takeLatest('FETCH_TEAMS', fetchTeams);
}

export default teamsSaga;