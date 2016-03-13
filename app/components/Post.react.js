import React from 'react'
import Reply from './Reply.react'
import Form from './Form.react'

export default class Post extends React.Component {



	state = {

	};

	render() {
		var	replyNodes = this.props.data.replies.map(function(reply) {
			return (
				<div className="reply">
					<Reply postId={reply.id} author={reply.author} text={reply.text}/>
				</div>
			);
		});

		return (
			<div className="post">
				<div className="post-wrapper">
					<div className="post-content">
						<div className="post-title">{this.props.data.title}</div>
						<div className="post-author">posted by {this.props.data.author}</div>
						<div className="post-text">{this.props.data.text}</div>
					</div>
					<div className="post-emoji">{this.props.data.emoji}</div>

				</div>

				{replyNodes}
				<Form formType="reply"/>
				<br />
			</div>
		)
	}

}
