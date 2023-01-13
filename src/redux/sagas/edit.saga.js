import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


// updating single teams descriptive data with object
function* updateTeam(action){
    console.log('Saga Update Team: ', action.payload);
    try {
        yield axios.put('/api/edit', action.payload)
        // maybe need to add fetch after put
    } catch (err) {
        console.log('Error updating Team: ', err);
    }
}

function* editSaga() {
    yield takeLatest('UPDATE_NEW_TEAM', updateTeam)

}

export default editSaga;