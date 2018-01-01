import {
	SWAP_CURRENCY,
	CHANGE_CURRENCY_AMOUNT,
	CHANGE_BASE,
	CHANGE_QUOTE,
	CONV_ERROR,
	CONV_RESULT,
	GET_INITIAL,
} from '../actions/currencies';

const initialState = {
	baseCurrency: 'GBP',
	quoteCurrency: 'USD',
	amount: 100,
	conversions: {},
	error: null,
}

const setConversions = (state, action) => {
	let conversion = {
		isFetching: true,
		date: '',
		rates: {},
	}
	state.conversions[action.currency] ?
	conversion = state.conversions[action.currency] : false;

	return {
		...state.conversions,
		[action.currency]: conversion,
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SWAP_CURRENCY:
		return {
			...state,
			baseCurrency: state.quoteCurrency,
			quoteCurrency: state.baseCurrency,
		};
		case CHANGE_CURRENCY_AMOUNT:
		return {
			...state,
			amount: action.amount || 0,
		};
		case CHANGE_BASE:
		return {
			...state,
			baseCurrency: action.currency,
			conversions: setConversions(state, action),
		};
		case CHANGE_QUOTE:
		return {
			...state,
			quoteCurrency: action.currency,
			conversions: setConversions(state, action),
		}
		case GET_INITIAL:
		return {
			...state,
			conversions: setConversions(state, { currency: state.baseCurrency }),
		}
		case CONV_ERROR:
		return {
			...state,
			error: action.error,
		}
		case CONV_RESULT:
		return {
			...state,
			baseCurrency: action.result.base,
			conversions: {
				...state.conversions,
				[action.result.base]: {
					isFetching: false,
					...action.result,
				}
			}
		}
		default:
		return state;
	}
}

export default reducer;
