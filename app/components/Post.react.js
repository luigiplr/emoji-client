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
					<Reply author={reply.username} text={reply.text} emoji={reply.emoji}/>
				</div>
			);
		});

		return (
			<div className="post">
				<div className="post-wrapper">
					<div className="post-content">
						<div className="post-title">{this.props.title}</div>
						<div className="post-author">posted by {this.props.name}</div>
						<div className="post-text">{this.props.text}</div>
					</div>
					<div className="post-emoji">{this.props.emoji}</div>

				</div>

				{replyNodes}
				<Form formType="reply"/>
				<br />
			</div>
		)
	}

}
