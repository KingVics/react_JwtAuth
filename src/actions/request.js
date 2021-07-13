import * as api from "../api"


export const fetchCounsel = () => async(dispatch) => {
    try {
        const {data} = await api.fetchCounsel()

        dispatch({type: 'FETCH_COUNSEL', payload: data});
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchPartners = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPartners()

        dispatch({type: 'FETCH_PARTNERS', payload: data});
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchTrainees = () => async(dispatch) => {
    try {
        const {data} = await api.fetchTrainee()

        dispatch({type: 'FETCH_TRAINEES', payload: data});
        console.log(data)
        
    } catch (error) {
        console.log(error);
    }
}

export const submitForm = (post) => async(dispatch) => {
    try {
        const { data } = await api.submitForm(post) 
        dispatch({type: "SUBMIT_FORM", payload: data})
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}