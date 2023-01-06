import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchTeamPlayers(action) {
    console.log(' team players action.payload: ', action.payload);
    try{
        const teamPlayers = yield axios.get('/api/teamEditor/'+ action.payload);
        console.log('teamPlayers.data: ', teamPlayers);
        yield put({ type: 'SET_TEAM_PLAYERS', payload: teamPlayers.data});
    } catch (err) {
        console.log('Error deleting Team: ', err);
    }
}


function* teamEditorSaga() {
    yield takeLatest('FETCH_TEAM_PLAYERS', fetchTeamPlayers);
}

export default teamEditorSaga;