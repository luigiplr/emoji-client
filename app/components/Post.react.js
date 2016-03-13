import React from 'react'
import Reply from './Reply.react'

export default class Post extends React.Component {



	state = {

	};

	render() {
		var	replyNodes = this.props.data.replies.map(function(reply) {
			return (
				<div>
					{reply.text}
				</div>
			);

		});

		return (
			<div className="post">
				<span><h3>{this.props.data.id} - {this.props.data.author}</h3></span>

				{replyNodes}
			</div>
		)
	}

}
