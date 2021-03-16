import uuid from 'uuid/v4';
import { SET_ALERT, REMOVE_ALERT } from './type';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
	const id = uuid();
	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, id },
	});
	//  Remove the alert after 5sec
	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
