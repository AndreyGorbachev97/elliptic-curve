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
    return { 
        type: 'STORE_POINTS_MULTI',
        payload: res
    }
}

export const requestPointsMulti = (res) => {
    console.log('RESS')
    return { type: 'FETCHED_MULTI_POINTS', action: res }
};

export const result_DH = (res) => {
    return { 
        type: 'STORE_RESULT_DH',
        payload: res
    }
}

export const requestResultDH = (res) => {
    console.log('RESS')
    return { type: 'FETCHED_RESULT_DH', action: res }
};

export const result_MA = (res) => {
    return { 
        type: 'STORE_RESULT_MA',
        payload: res
    }
}

export const requestResultMA = (res) => {
    console.log('RESS')
    return { type: 'FETCHED_RESULT_MA', action: res }
};

export const result_ElGam = (res) => {
    return { 
        type: 'STORE_RESULT_ELGAM',
        payload: res
    }
}

export const requestResultElGam = (res) => {
    console.log('RESS')
    return { type: 'FETCHED_RESULT_ELGAM', action: res }
};