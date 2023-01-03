const teamsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TEAMS':
            return action.payload;
        default:
            return state;
    }
}


// try to access store at state.teams, i think
export default teamsReducer;