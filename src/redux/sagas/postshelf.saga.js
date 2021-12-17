import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postShelfItem(action){
  console.log(action)
  try {
    const response = yield axios({
      method: 'POST',
      url: '/api/shelf',
      data: action.payload
    })
    // call the dispatch that GETs the shelf items
    yield put ({
      type: 'GET_SHELF'
    })
  } catch(error) {
    console.log('error POSTing from Client to Server', error);
  }
}

export default function* postShelfSaga() {
  yield takeLatest('ADD_SHELF_ITEM', postShelfItem)
}