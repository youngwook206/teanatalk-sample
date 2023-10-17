import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import './style.scss';

const MessageBox = ({ message = {} }) => (
  <div className="_text_div">
    <div className="_text">{ReactHtmlParser(message.text || '')}</div>
  </div>
);

/**
 * CustomerMessage
 */
const CustomerMessage = ({ boxStyle, item }) => {
  const { messageId, messages, createAt } = item;
  // set
  return (
    <div className="_customer_message_div" name={messageId}>
      <div className="_chat_message_template_set">
        {messages.map((message, idx) => (
          <MessageBox key={`customer_message_${idx}`} message={message} />
        ))}
      </div>
      <div className="_time">{createAt}</div>
    </div>
  );
};
CustomerMessage.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
};
CustomerMessage.defaultProps = {
  boxStyle: {},
  item: {},
};
MessageBox.propTypes = {
  message: PropTypes.object,
};
MessageBox.defaultProps = {
  message: {},
};

export default CustomerMessage;
