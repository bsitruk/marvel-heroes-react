const initialState = {
    fetching: false,
    fetched: false,
    data: [],
    error: null
};

const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_PENDING':
            state = {...state, fetching: true};
            break;
        case 'FETCH_DATA_FULFILLED':
            state = {...state, fetching: false, fetched: true, data: action.payload.data.data.results};
            break;
        case 'FETCH_DATA_REJECTED':
            state = {...state, fetching:false, error: action.payload};
            break;
        default:
            break;
    }
    return state;
};

export default heroes;