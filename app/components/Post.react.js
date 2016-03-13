import React from 'react'
import Reply from './Reply.react'
import Form from './Form.react'

export default class Post extends React.Component {



	state = {

	};

	render() {
		var	replyNodes = this.props.data.replies.map(function(reply) {
			return (
				<div>
					<Reply postId={reply.id} author={reply.author} text={reply.text}/>
				</div>
			);
		});

		return (
			<div className="post">
				<h4><span>{this.props.data.id} - {this.props.data.author}: {this.props.data.text}</span></h4>
				{replyNodes}
				<Form formType="reply"/>
				<br />
			</div>
		)
	}

}
