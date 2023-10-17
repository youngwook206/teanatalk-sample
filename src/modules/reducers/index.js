import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import chatList, { getChatListSaga } from 'modules/actions/chat';

const rootReducer = combineReducers({
  chatList,
});

export function* rootSaga() {
  yield all([getChatListSaga()]);
}

export default rootReducer;
