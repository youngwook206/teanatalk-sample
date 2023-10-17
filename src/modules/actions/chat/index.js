import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { requestPost } from 'modules/fetch/api';
import moment from 'moment';

const GET_CHAT_LIST = 'chat/GET_CHAT_LIST';
const GET_CHAT_RESULT = 'chat/GET_CHAT_RESULT';
// message set
const messageArray = [];
export const chatList = createAction(GET_CHAT_LIST);

const initialState = {
  status: { type: 'success', class: 'disnone', status: '200', msg: '' },
  data: [],
};

export function* getChatList(action) {
  const paramSet = {
    domain_id: 'domain_9f86a0a7-98aa-4329-8302-3d7a9248feb1',
    in_type: action.payload.inType,
    in_str: action.payload.inStr,
    log_level: '0',
    session_id: '1',
    token: '826119D2-F590-4FA3-BA7E-0717869D40B1',
    parameters: {},
  };

  const setParam = {
    url: '/chat',
    param: paramSet,
  };
  try {
    const response = yield call(requestPost, setParam);
    const chatResult = response.data.data?.result?.fulfillment || {};
    const chatInStr = response.data.data?.in_str || '';

    const customerForm = {
      messageId: messageArray.length,
      createAt: moment().format('HH:mm'),
      messages: [{ text: chatInStr }],
      chatType: 'customer',
    };
    if (chatInStr !== '') messageArray.push(customerForm);
    // bot
    const messageForm = {
      messageId: messageArray.length,
      createAt: moment().format('HH:mm'),
      data: chatResult,
      chatType: 'bot',
    };
    messageArray.push(messageForm);
    yield put({
      type: GET_CHAT_RESULT,
      payload: {
        status: response.status,
        data: messageArray || [],
      },
    });
  } catch (err) {
    const errorStatus = { type: 'error', class: '', status: '400', msg: err };
    yield put({
      type: GET_CHAT_RESULT,
      payload: { ...initialState, status: errorStatus },
      error: true,
    });
  }
}

export function* getChatListSaga() {
  yield takeLatest(GET_CHAT_LIST, getChatList);
}

export default handleActions(
  {
    [GET_CHAT_RESULT]: (state, action) => {
      // return action.payload;
      return {
        data: action.payload.data,
        status: action.payload.status,
      };
    },
  },
  initialState
);
