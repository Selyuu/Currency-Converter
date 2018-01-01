// EVENTS TO LISTEN TO //

// 1. Swap currency
// 2. Change base currency
// 3. Upon initial app load

import { SWAP_CURRENCY, CHANGE_BASE, GET_INITIAL } from '../actions/currencies';
import { takeEvery } from 'redux-saga/effects';

const fetchLatestConversionRates = function* (action) {
	yield;
};

const rootSaga = function* () {

};

export default rootSaga;
