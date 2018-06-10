import React from 'react'
import ReactDOM from 'react-dom'

class AddCode extends React.Component {
	constructor () {
		super()
	}

	render () {
		return (
			<div className="add-code-block">
                <input type="text" placeholder="File title" />
                <textarea placeholder="Your code"></textarea>
			</div>
		)
	}
}

export default AddCode
