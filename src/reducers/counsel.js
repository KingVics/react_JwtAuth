// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_COUNSEL":
            return  action.payload;
        case "FETCH_PARTNERS":
            return action.payload;
        case "FETCH_TRAINEES":
            return action.payload;
        case 'SUBMIT_FORM':
            return action.payload;
        default:
            return state;
    }
}