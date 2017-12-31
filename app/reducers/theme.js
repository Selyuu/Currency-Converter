import { CHANGE_COLOR } from '../actions/theme';

const initialState = {
	primaryColor: '#3e4982',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_COLOR:
		return {
			...state,
			primaryColor: action.color,
		}
		default:
		return state;
	}
}

export default reducer;
