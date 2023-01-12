const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TEAM_INFO':
            return action.payload[0];
        case 'UPDATE_OWNER_NAME':
            return action.payload;
        case 'UPDATE_ROSTER_SIZE':
            return action.payload;
        case 'UPDATE_TEAM_SALARY':
            return action.payload;
        case 'UPDATE_PROFILE_IMAGE':
            return action.payload;        
        default:
            return state;
    }
}



export default editReducer;