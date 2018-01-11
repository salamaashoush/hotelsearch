import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const setHotels = payload => ({
    type: actionTypes.SET_HOTELS,
    payload
})

export const getHotelData = payload => {
    return (dispatch) => {
        axios.get('https://api.myjson.com/bins/tl0bp').then(({data})=>{
            console.log(data);
            dispatch(setHotels(data.hotels));
        })
    }
}
