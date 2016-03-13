import React from 'react';
import emojis from '../utils/emojis'

export default class EmojiPicker extends React.Component {

  render() {
    console.log(emojis);
    return (
      <select>
        {Object.keys(emojis).map((key) => {
          return <option value={emojis[key]}>{emojis[key]}</option>
        })}
      </select>
    )
  }
}
