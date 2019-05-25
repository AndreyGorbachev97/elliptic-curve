export default (state={}, action) => {
    console.log(action.type)
    switch(action.type) {
        case 'STORE_ARRAY_POINTS':
            //console.log('act', action.payload)
            return {
                ...state,
                discriminant: action.payload.discriminant,
                test_ferma: action.payload.test_ferma,
                array_modul: action.payload.array_modul,
                array_points: action.payload.array_points
            }
        case 'STORE_POINTS_SUMM':
            return {
                ...state,
                summa: action.payload,
            }
        case 'STORE_POINTS_MULTI':
            return {
                ...state,
                multi: action.payload,
            }
        case 'STORE_RESULT_DH':
        return {
            ...state,
            resultDH: action.payload,
        }
        case 'STORE_RESULT_MA':
        return {
            ...state,
            resultMA: action.payload,
        }
        case 'STORE_RESULT_ELGAM':
        return {
            ...state,
            resultElGam: action.payload,
        }
        default:
            return state;
    }
}
