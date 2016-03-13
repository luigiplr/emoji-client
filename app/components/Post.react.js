import React from 'react'
import Reply from './Reply.react'
import Form from './Form.react'

export default class Post extends React.Component {

	state = {

	};

	render() {
		var	replyNodes = this.props.comments.map(function(reply) {
			return (
				<div className="reply">
					<Reply author={reply.username} text={reply.text} emoji={`https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/${reply.emoji_string}.png`}/>
				</div>
			);
		});

		return (
			<paper-card className="post" heading={this.props.title}>
  				<div className="post-wrapper">
					<div className="post-content">
						<div className="post-author">posted by {this.props.name}</div>
						<div className="post-text">{this.props.text}</div>
					</div>
					<img className="post-emoji" src={`https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/${this.props.emoji_string}.png`}/>

				</div>
				{replyNodes}
				<Form formType="reply"/>

			</paper-card>
		)
	}

}
