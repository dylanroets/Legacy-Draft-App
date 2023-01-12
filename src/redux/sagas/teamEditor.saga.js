import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


// GET players from individual teams with team_id
function* fetchTeamPlayers(action) {
    // console.log(' team players action.payload: ', action.payload);
    try{
        const teamPlayers = yield axios.get('/api/teamEditor/'+ action.payload);
        console.log('teamPlayers.data: ', teamPlayers.data);
        yield put({ type: 'SET_TEAM_PLAYERS', payload: teamPlayers.data});
    } catch (err) {
        console.log('Error fetching team players: ', err);
    }
}

// Delete a player from the team
function* deleteTeamPlayer(action) {
    // console.log(' delete teamPlayer action.payload, ', action.payload);
    // console.log('fetching action.payload.team_id: ', action.payload.team_id);
    try{
        yield axios.delete('/api/teamEditor/'+ action.payload.id);
        yield put({ type: 'FETCH_TEAM_PLAYERS', payload: action.payload.team_id});
    } catch (err) {
        console.log('Error deleting player from team: ', err);
    }
}


function* teamEditorSaga() {
    yield takeLatest('FETCH_TEAM_PLAYERS', fetchTeamPlayers);
    yield takeLatest('DELETE_PLAYER', deleteTeamPlayer);
}

export default teamEditorSaga;