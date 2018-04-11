import {Congif, ActionTypes} from '../constans/index'
import {Alert} from 'react-native'


export const loadStocks = () => {
    return (dispatch, getState) => {
        fetch(Congif.STOCKS_URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })  .then((response) => response.json())
            .then((responseJson) => {
                if (!responseJson.stock)
                    return Alert.alert(Congif.APP_NAME, Congif.NON_VALID_JSON);
                dispatch({type: ActionTypes.SET_STOCKS, stocks: responseJson.stock})
            })
            .catch((error) => {
                console.log(error);
                Alert.alert(Congif.APP_NAME, Congif.NETWORK_ERROR)
            });
    }
};