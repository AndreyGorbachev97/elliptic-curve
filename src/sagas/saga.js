import {call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {points, points_summ, points_multi, result_DH, result_MA, result_ElGam} from '../action/index';
import axios from 'axios';

function* arrayPoints(data) {
    try {
        const product = yield axios.post('http://localhost:5000/api/answer/array_points', data.action )
        yield put(points(product.data));
    } catch (e) {
        console.log(e);
    }
}

function* summPoints(data) {
    try {
        const product = yield axios.post('http://localhost:5000/api/answer/summa', data.action )
        console.log('prod', product)
        yield put(points_summ(product.data));
    } catch (e) {
        console.log(e);
    }
}

function* multiPoits(data) {
    try {
        console.log('data', data)
        const product = yield axios.post('http://localhost:5000/api/answer/multi', data.action )
        console.log('prod', product)
        yield put(points_multi(product.data));
    } catch (e) {
        console.log(e);
    }
}

function* resultDH(data) {
    try {
        console.log('data', data)
        const product = yield axios.post('http://localhost:5000/api/answer/DH', data.action )
        console.log('prod', product)
        yield put(result_DH(product.data));
    } catch (e) {
        console.log(e);
    }
}

function* resultMA(data) {
    try {
        console.log('data', data)
        const product = yield axios.post('http://localhost:5000/api/answer/MA', data.action )
        console.log('prod', product)
        yield put(result_MA(product.data));
    } catch (e) {
        console.log(e);
    }
}

function* resultElGam(data) {
    try {
        console.log('data', data)
        const product = yield axios.post('http://localhost:5000/api/answer/ElGam', data.action )
        console.log('prod', product)
        yield put(result_ElGam(product.data));
    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga(){
    yield takeLatest('FETCHED_ARRAY_POINTS', arrayPoints);
    yield takeLatest('FETCHED_MULTI_POINTS', multiPoits);
    yield takeLatest('FETCHED_POINTS_SUMM', summPoints);
    yield takeLatest('FETCHED_RESULT_DH', resultDH);
    yield takeLatest('FETCHED_RESULT_MA', resultMA);
    yield takeLatest('FETCHED_RESULT_ELGAM', resultElGam);
    
};