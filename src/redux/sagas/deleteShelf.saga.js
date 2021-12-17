import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* deleteShelf(action) {
  console.log("deleteShelf action", action);
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/shelf/${action.payload.id}`,
    });
    //action.payload will be req.params on the ^^ server side ^^
    // call the dispatch that GETs the shelf items
    yield put({
      type: "GET_SHELF",
    });
  } catch (error) {
    window.alert('You are not authorized to delete this image.');
    // console.log("error deleting from Client to Server", error);
  }
}

export default function* deleteShelfSaga() {
    yield takeLatest('DELETE_ITEM', deleteShelf)
}
