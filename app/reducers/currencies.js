import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT, CHANGE_BASE, CHANGE_QUOTE } from '../actions/currencies';

const initialState = {
	baseCurrency: 'GBP',
	quoteCurrency: 'USD',
	amount: 100,
	conversions: {},
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
		};
		default:
		return state;
	}
}

export default reducer;
