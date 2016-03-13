import React from 'react';
import emojis from '../utils/emojis'

export default class EmojiPicker extends React.Component {
  handleChange(e) {
    e.preventDefault();
    this.props.changeEmoji(e.target.value);
  }

  render() {
    return (
      <select onChange={this.handleChange.bind(this)}>
        {Object.keys(emojis).map((key) => {
          return <option value={emojis[key]}>{emojis[key]}</option>
        })}
      </select>
    )
  }
}
