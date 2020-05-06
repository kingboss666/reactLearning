import {
    createStore,
    combineReducers
} from "redux"

import {
    v4 as uuidv4
} from 'uuid';

// AddExpense
const addExpense = ({
    desciption = "",
    note = "",
    creayteAt = 0,
    amount = 0
} = {}) => ({
    type: "ADDEXPENSE",
    expenses: {
        id: uuidv4(),
        desciption,
        note,
        creayteAt,
        amount
    }
})

// RemoveExpense
const removeExpense = ({ id }) => ({
    type: "REMOVEEXPENSE",
    id
})
// EditExpense
const editExpense = (id, update) => ({
    type: "EDITEXPENSE",
    id,
    update
})
// SetTextFilter
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})
// SortByDate
const sortByDate = () => ({
    type: "SORE_BY_DATE"
})
// SortByAmount
const sortByAmount = () => ({
    type: "SORE_BY_AMOUNT"
})
// SetStartDate
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})
// SetEndDate
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})
const HandleExpenseReducer = (state = [], action) => {
    switch (action.type) {
        case "ADDEXPENSE":
            return [...state, action.expenses]
        case "REMOVEEXPENSE":
            return state.filter(({ id }) => id !== action.id)
        case "EDITEXPENSE":
            return state.map(expenses => {
                if (expenses.id === action.id) {
                    return {
                        ...expenses,
                        ...action.update
                    }
                } else {
                    return expenses
                }
            })
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
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORE_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SORE_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

const store = createStore(combineReducers({
    expenses: HandleExpenseReducer,
    filters: HandleFiltersReducer
}))

store.subscribe(() => {
    console.log(store.getState())
})

const obj1 = store.dispatch(addExpense({ desciption: "买电动车", amount: 2000 }))
const obj2 = store.dispatch(addExpense({ desciption: "买课", amount: 5000 }))
store.dispatch(removeExpense({ id: obj1.expenses.id }))
store.dispatch(editExpense(obj2.expenses.id, { amount: 1000, desciption: "买所有课程" }))
store.dispatch(setTextFilter("车"))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
store.dispatch(setStartDate(2019))
store.dispatch(setEndDate(2020))
store.dispatch(setEndDate())