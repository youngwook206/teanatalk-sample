import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import QueryStirng from 'query-string';
import { chatList } from 'modules/actions/chat';
import Template from './templates';

const Chat = ({ match, location }) => {
  const dispatch = useDispatch();
  const { search } = location;
  const paramObj = QueryStirng.parse(search);
  const chatResult = useSelector(state => state.chatList);

  const paramSet = {
    inType: 'intro',
    inStr: '',
  };
  useEffect(() => {
    dispatch(chatList(paramSet));
  }, [chatList]);

  return (
    <>
      <Template messageSet={chatResult.data} />
    </>
  );
};
Chat.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
};

Chat.defaultProps = {
  match: {},
  location: {},
};
export default Chat;
