import DateConverter from "../utils/date-converter";

const localStorageDate = localStorage.getItem('date');
const currentDate = DateConverter.convertDateToDefaultFormat(new Date());

const initialState = {
    astronomy: [],
    selectedDate: localStorageDate === null ? currentDate : localStorageDate,
    startDate: '2020-06-12',
    endDate: currentDate,
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ASTRONOMY_REQUESTED':
            return {
                ...state,
                astronomy: [],
                loading: true,
                error: null
            };

        case 'ASTRONOMY_LOADED':
            return {
                ...state,
                astronomy: action.payload,
                loading: false,
                error: null
            };

        case 'ASTRONOMY_ERROR':
            return {
                ...state,
                astronomy: [],
                loading: false,
                error: action.payload
            }

        case 'ASTRONOMY_LIST_LOADED':
            return {
                ...state,
                astronomy: action.payload,
                loading: false,
                error: null
            };

        case 'START_DATE_CHANGED':
            return {
                ...state,
                startDate: action.payload
            };

        case 'END_DATE_CHANGED':
            return {
                ...state,
                endDate: action.payload
            };

        default:
            return state;
    }
};

export default reducer;