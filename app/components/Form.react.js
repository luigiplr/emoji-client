import React from 'react'
import * as actions from '../actions'

var handleFocus = function() {

};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmojiChange = this.handleEmojiChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    text: "",
    title: "",
    username: "",
    emoji: "",
    cords: [],
    reply: false
  };

  handleFocus(e) {
    e.preventDefault();
    this.setState({reply: true})
  }
  handleTextChange(e) {
    e.preventDefault();
    this.setState({text: e.target.value})
  }
  handleTitleChange(e) {
    e.preventDefault();
    this.setState({title: e.target.value})
  }
  handleUsernameChange(e) {
    e.preventDefault();
    this.setState({username: e.target.value})
  }
  handleEmojiChange(e) {
    e.preventDefault();
    this.setState({emoji: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({reply: false});
    username = this.state.username.trim();
    text = this.state.text.trim();
    this.props.dispatch(actions.sendAddPost(...state))
  }

  render() {
    console.log("we render now");
    if ((this.state.reply == false && !this.props.expanded) && this.props.formType == "post") return (
      <form className="postForm" onSubmit={this.handleFocus}>
        <input type="submit" value="Post" />
      </form>
    );
    if ((this.state.reply == false && !this.props.expanded) && this.props.formType == "reply") return (
      <form className="replyForm" onSubmit={this.handleFocus}>
        <input type="submit" value="Reply" />
      </form>
    );
    if ((this.state.reply == true || this.props.expanded) && this.props.formType == "post") return (
      <form className="postForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="text-field"
          placeholder="Your name"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Say something"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" className="input-field" value="Submit"></input>
      </form>
    );
    if ((this.state.reply == true || this.props.expanded) && this.props.formType == "reply") return (
      <form className="replyForm" onSubmit={this.handleSubmit}>
        <input
          className="text-field"
          type="text"
          placeholder="Your name"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Your reply"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" className="input-field" value="Submit"></input>
      </form>
    );
  }
}
