import React from 'react'
import Post from './Post.react'

export default class Sidebar extends React.Component {

	data = [
		{id: 1, author: "Anonymous", text: "Belmont St seriouly needs some repairs."},
		{id: 2, author: "Anonymous", text: "My pomeranian is sick, does any know a good vet?"}
	];

    state = {
		data: {}
    };

    render() {
        return (
            <div className="sidebar">
				
				<Post data={this.props.data}/>
			</div>
        )
    }
	
	
}
