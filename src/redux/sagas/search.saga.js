import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


// Search function to GET player search results from the router and send the searchString
function* searchPlayers(action) {
    // console.log(' team players action.payload: ', action.payload);
    try{
        const searchString = yield axios.get('/api/search/'+ action.payload);
        console.log('searchString.data: ', searchString);
        yield put({ type: 'SET_SEARCH_PLAYERS', payload: searchString.data});
    } catch (err) {
        console.log('Error searching player in sagas: ', err);
    }
}

function* searchSaga() {
    yield takeLatest('SEARCH_PLAYERS', searchPlayers);

}

export default searchSaga;