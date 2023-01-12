const editReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TEAM_INFO':
            return action.payload;
        default:
            return state;
    }
}


// try to access store at state.teams, i think
export default editReducer;