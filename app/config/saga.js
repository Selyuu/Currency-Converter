// EVENTS TO LISTEN TO (Redux Saga) //

// 1. Swap currency
// 2. Change base currency
// 3. Upon initial app load

import { SWAP_CURRENCY, CHANGE_BASE, GET_INITIAL, CONV_ERROR, CONV_RESULT } from '../actions/currencies';
import { takeEvery, select, call, put } from 'redux-saga/effects';

const getLatestFromApi = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

const fetchLatestRates = function* (action) {
	let currency = action.currency;
	!currency ? currency = yield select(state => state.currencies.baseCurrency) : false;

	const response = yield call(getLatestFromApi, currency);
	const result = yield response.json();

	if (result.error) {
		yield put({ type: CONV_ERROR, error: result.error });
	} else {
		yield put({ type: CONV_RESULT, result });
	}
};

const rootSaga = function* () {
	yield takeEvery(GET_INITIAL, fetchLatestRates);
	yield takeEvery(SWAP_CURRENCY, fetchLatestRates);
	yield takeEvery(CHANGE_BASE, fetchLatestRates);
};

export default rootSaga;
