export const points = (points) => {
    return { 
        type: 'STORE_ARRAY_POINTS',
        payload: points
    }
}

export const requestArrayPoints = (points) => {
    return { type: 'FETCHED_ARRAY_POINTS', action: points }
};


export const points_summ = (res) => {
    return { 
        type: 'STORE_POINTS_SUMM',
        payload: res
    }
}

export const requestPointsSumm = (res) => {
    return { type: 'FETCHED_POINTS_SUMM', action: res }
};

export const points_multi = (res) => {
    console.log('re')
    return { 
        type: 'STORE_POINTS_MULTI',
        payload: res
    }
}

export const requestPointsMulti = (res) => {
    console.log('RESS')
    return { type: 'FETCHED_MULTI_POINTS', action: res }
};