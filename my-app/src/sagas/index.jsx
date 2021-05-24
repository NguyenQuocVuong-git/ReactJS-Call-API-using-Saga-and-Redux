import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


function* fetchTranslate(action) {
    console.log('saga here',action);
//    try {
//       const user = yield call(Api.fetchUser, action.payload.userId);
//       yield put({type: "TRANSLATE_SUCCESS", user: user});
//    } catch (e) {
//       yield put({type: "TRANSLATE_FAILURE", message: e.message});
//    }
}


export function* mySaga() {
  yield takeEvery("TRANSLATE_START", fetchTranslate);
}