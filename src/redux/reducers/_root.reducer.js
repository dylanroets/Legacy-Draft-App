import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import teams from './teams.reducer';
import teamEditor from './teamEditor.reducer';
import search from './search.reducer';
import edit from './edit.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  teams, // contains general teams data
  teamEditor, // contains teams players
  search, //contains search data
  edit // contains individual edit info
});

export default rootReducer;
