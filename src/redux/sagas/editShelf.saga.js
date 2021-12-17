import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* editShelf(action) {
  console.log("editShelf action", action);
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/shelf/${action.payload.id}`,
      data: {
        description: action.payload.description,
        image_url: action.payload.image_url
        }
    });
    //action.payload will be req.params on the ^^ server side ^^
    // call the dispatch that GETs the shelf items
    yield put({
      type: "GET_SHELF",
    });
  } catch (error) {
    window.alert('You are not authorized to EDIT this image.');
    // console.log("error editing from Client to Server", error);
  }
}

export default function* editShelfSaga() {
    yield takeLatest('EDIT_ITEM', editShelf)
}