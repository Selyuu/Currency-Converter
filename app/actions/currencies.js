export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANGE_BASE = 'CHANGE_BASE';
export const CHANGE_QUOTE = 'CHANGE_QUOTE';

export const swapCurrency = () => ({
	type: SWAP_CURRENCY,
})

export const changeCurrencyAmount = (amount) => ({
	type: CHANGE_CURRENCY_AMOUNT,
	amount,
})

export const changeBaseCurrency = (currency) => ({
	type: CHANGE_BASE,
	currency,
})

export const changeQuoteCurrency = (currency) => ({
	type: CHANGE_QUOTE,
	currency,
})
