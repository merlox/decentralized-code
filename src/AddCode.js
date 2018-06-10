import React from 'react'
import ReactDOM from 'react-dom'
import './AddCode.styl'

class AddCode extends React.Component {
	constructor () {
		super()
	}

	render () {
		return (
			<div className="add-code-block">
				<h2>Add your code to the blockchain</h2>
                <input type="text" placeholder="File title" />
                <textarea placeholder="Your code"></textarea>
				<button>Submit code</button>
			</div>
		)
	}
}

export default AddCode
