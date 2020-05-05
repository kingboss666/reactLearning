import { createStore, combineReducers } from "redux"
// AddExpense
// RemoveExpense
// EditExpense
// SetTextFilter
// SortByDate
// SortByAmount
// Setstartdate
// Setenddate
const HandleExpenseReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state
    }
}
const HandleFiltersReducer = (state = {
    text: "",
    sortBy: "date", //date or amount
    startDate: undefined,
    endDate: undefined,
}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(combineReducers({
    expenses: HandleExpenseReducer,
    filters: HandleFiltersReducer
}))

console.log(store.getState())