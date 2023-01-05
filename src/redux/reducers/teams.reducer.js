const teamsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TEAMS':
            return action.payload;
        default:
            return state;
    }
}

// case 'NEW_TEAM' :
//     return action.payload


// try to access store at state.teams, i think
export default teamsReducer;