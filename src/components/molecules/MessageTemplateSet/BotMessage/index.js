import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SimpleMessage from 'components/molecules/MessageTemplateSet/Templates/Simple';
import TextMessage from 'components/molecules/MessageTemplateSet/Templates/Text';
import ButtonMessage from 'components/molecules/MessageTemplateSet/Templates/Button';
import ImageButtonMessage from 'components/molecules/MessageTemplateSet/Templates/ImageButton';
import ImageMessage from 'components/molecules/MessageTemplateSet/Templates/Image';
import MediaMessage from 'components/molecules/MessageTemplateSet/Templates/Media';
import CardDefault from 'components/molecules/MessageTemplateSet/Templates/CardDefault';
import '../style.scss';
/**
 * BotMessage
 */
const BotMessage = ({ boxStyle, item }) => {
  const makeKeyVal = (type, idx) => {
    return `bot_${type}_${idx}`;
  };
  const setSimpleItem = (message, idx) => {
    if (message) {
      return <SimpleMessage key={makeKeyVal('simple', idx)} item={message} />;
    }
    return false;
  };

  const setTemplateItem = (tempItem, idx) => {
    const { type } = tempItem;
    const key = makeKeyVal(type, idx);

    if (type === 'text') {
      return <TextMessage key={key} item={tempItem} />;
    }
    if (type === 'textbox') {
      return <TextMessage key={key} istem={tempItem} />;
    }
    if (type === 'button') {
      return <ButtonMessage key={key} item={tempItem} />;
    }
    if (type === 'image') {
      return <ImageMessage key={key} item={tempItem} />;
    }
    if (type === 'image_btn') {
      return <ImageButtonMessage key={key} item={tempItem} />;
    }
    if (type === 'media') {
      return <MediaMessage key={key} item={tempItem} />;
    }
    if (tempItem.type === 'card_default') {
      return <CardDefault key={key} item={tempItem} boxStyle={{ width: 180, margin: 10, height: '240px' }} />;
    }
    if (type === 'card_extend') {
      // return <CustomerMessage item={item} />;
    }
    if (type === 'custom') {
      // return <CustomerMessage item={item} />;
    }
    return false;
  };
  console.log('item:', item);
  // set
  return (
    <div className="bot_message_div">
      <div className="_left_message_div">
        <div className="_img">
          <img src={item.emotion?.image || '/images/emotion/bot_normal.png'} alt={item.emotion?.type} />
        </div>
      </div>
      <div className="_right_message_div">
        {/* TO_DE simplae message */}
        <div className="_chat_message_set">
          {item.messages.map((message, idx) => {
            return setSimpleItem(message, idx);
          })}
          {item.templateMessages.map((tempItem, idx) => {
            return setTemplateItem(tempItem, idx);
          })}
        </div>
        {item.createAt && <div className="_time">{item.createAt}</div>}
      </div>
    </div>
  );
};
BotMessage.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
};
BotMessage.defaultProps = {
  boxStyle: {},
  item: {
    messageId: '',
    emotion: '',
    createAt: '2021.01.01 00:00',
    messages: [],
    templateMessages: [],
  },
};

export default BotMessage;
