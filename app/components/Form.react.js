import React from 'react'

var handleFocus = function() {

};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  state = {
    reply: false,
    author: "",
    text: ""
  };

  handleFocus(e) {
    e.preventDefault(),
    this.setState({reply: true})
  }
  handleAuthorChange(e) {
    e.preventDeafult(),
    this.setState({author: e.target.value})
  }
  handleTextChange(e) {
    e.preventDefault(),
    this.setState({text: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault(),
    this.setState({reply: false}),
    author = this.state.author.trim(),
    text = this.state.text.trim()
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
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Say something..."
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
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Your reply..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" className="input-field" value="Submit"></input>
      </form>
    );
  }
}
