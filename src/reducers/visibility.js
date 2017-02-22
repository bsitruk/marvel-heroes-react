const initialState = null;

const visibility = (state = initialState, action) => {
    switch (action.type) {
        case 'UNSET_VISIBILITY':
            state = null;
            break;
        case 'SET_VISIBILITY':
            state = action.scope;
            break;
        default:
            break;
    }
    return state;
};

export default visibility;