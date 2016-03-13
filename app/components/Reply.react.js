import React from 'react'

export default class Reply extends React.Component {

	state = {

	};

	render() {
		return (
			<div className="reply">
				<span>({this.props.postId}) {this.props.author}:  {this.props.text}
				</span>
			</div>
		)
	}

}
