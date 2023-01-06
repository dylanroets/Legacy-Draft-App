const teamEditorReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TEAM_PLAYERS':
            return action.payload;
        default:
            return state;
    }
}


export default teamEditorReducer;