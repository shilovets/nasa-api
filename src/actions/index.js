const astronomyRequested = () => {
    return {
        type: 'ASTRONOMY_REQUESTED'
    };
};

const astronomyLoaded = (newAstronomy) => {
    return {
        type: 'ASTRONOMY_LOADED',
        payload: newAstronomy
    };
};

const astronomyError = (error) => {
    return {
        type: 'ASTRONOMY_ERROR',
        payload: error
    };
};

const astronomyListLoaded = (newAstronomyList) => {
    return {
        type: 'ASTRONOMY_LIST_LOADED',
        payload: newAstronomyList
    };
};

const startDateChanged = (newStartDate) => {
    return {
        type: 'START_DATE_CHANGED',
        payload: newStartDate
    };
};

const endDateChanged = (newEndDate) => {
    return {
        type: 'END_DATE_CHANGED',
        payload: newEndDate
    };
};


export {
    astronomyLoaded,
    astronomyRequested,
    astronomyError,
    astronomyListLoaded,
    startDateChanged,
    endDateChanged
};