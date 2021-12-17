import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getShelf(action){
  console.log(action)
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/shelf',
    })
    yield put({ 
      type: 'SET_SHELF',
      payload: response.data
    })
  } catch(error) {
    console.log('error GETting from Server', error);
  }
}

export default function* getShelfSaga() {
  yield takeLatest('GET_SHELF', getShelf)
}