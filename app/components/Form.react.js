import React from 'react'

var handleFocus = function() {

};

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
  }

  state = {
    reply: false
  };

  handleFocus(e) {
    e.preventDefault(),
    console.log("TEST")
    this.setState({reply: true})
  }
  handleSubmit(e) {
    e.preventDefault(),
    this.setState({reply: false})
  }

  render() {
    console.log(this.state);
    if (this.state.reply == false && this.props.formType == "post") return (
      <form className="postForm" onSubmit={this.handleFocus}>
        <input type="submit" value="Post" />
      </form>
    );
    if (this.state.reply == false && this.props.formType == "reply") return (
      <form className="replyForm" onSubmit={this.handleFocus}>
        <input type="submit" value="Reply" />
      </form>
    );
    if (this.state.reply == true && this.props.formType == "post") return (
      <form className="postForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
        />
        <input
          type="text"
          placeholder="Say something..."
        />
        <input type="submit" value="Post">Submit</input>
      </form>
    );
    if (this.state.reply == true && this.props.formType == "reply") return (
      <form className="replyForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post">Submit</input>
      </form>
    );
  }
}
