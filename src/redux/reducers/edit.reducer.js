const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TEAM_INFO':
            return action.payload[0];
        case 'UPDATE_OWNER_NAME':
            return {...state, owner_name: action.payload};
        case 'UPDATE_ROSTER_SIZE':
            return {...state, roster_size: action.payload};
        case 'UPDATE_TEAM_SALARY':
            return {...state, team_salary: action.payload}
        case 'UPDATE_PROFILE_IMAGE':
            return {...state, profile_image: action.payload}      
        default:
            return state;
    }
}



export default editReducer;