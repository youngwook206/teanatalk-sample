import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import CustomerMessage from 'components/molecules/MessageTemplateSet/CustomerMessage';
import BotMessage from 'components/molecules/MessageTemplateSet/BotMessage';
import './style.scss';

/**
 * MessageDiv
 */
const MessageDiv = ({ message }) => {
  const { chatType, messageId } = message;

  const setItem = item => {
    try {
      if (chatType === 'customer') {
        const customerItem = {
          messageId: item.messageId,
          createAt: item.createAt,
          messages: item.messages,
        };
        return <CustomerMessage key={messageId} item={customerItem} />;
      }
      if (chatType === 'bot') {
        const botItem = {
          messageId: item.messageId,
          emotion: item.data.emotion,
          createAt: item.createAt,
          messages: item.data.speech,
          templateMessages: item.data.messages,
        };
        return <BotMessage key={messageId} item={botItem} />;
        // return <div>BBBB</div>;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  return (
    <>
      {/* {dateSeperator && <MessageBeforeLine label={dateSeperator} />} */}
      <Element name={[messageId, ''].join('_')}>{setItem(message)}</Element>
    </>
  );
};

MessageDiv.propTypes = {
  message: PropTypes.object,
};
MessageDiv.defaultProps = {
  message: {},
};

export default MessageDiv;
