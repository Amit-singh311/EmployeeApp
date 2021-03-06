import {
	EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: 'Monday',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
		// action.payload === { prop: name, value: 'name'}
		// This is called key interpollation
		return { ...state, [action.payload.prop]: action.payload.value }
		default:
		return state;
	}
}