import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


// Search function to GET player search results from the router and send the searchString
function* searchPlayers(action) {
    // console.log(' team players action.payload: ', action.payload);
    try{
        const searchString = yield axios.get('/api/search/'+ action.payload);
        console.log('searchString: ', searchString.data.response);
        yield put({ type: 'SET_SEARCH_PLAYERS', payload: searchString.data.response});
    } catch (err) {
        console.log('Error searching player in sagas: ', err);
    }
}

// Adding an individual player from the API search to a specific team
function* addPlayer(action) {
    console.log('addplayer saga action.payload: ', action.payload);
    try {
        yield axios.post('/api/search', action.payload)
    } catch (err) {
        console.log('Error POSTing player: ', err);
    }
}

function* searchSaga() {
    yield takeLatest('SEARCH_PLAYERS', searchPlayers);
    yield takeLatest('ADD_NEW_PLAYER', addPlayer);

}

export default searchSaga;