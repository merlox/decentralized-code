import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import AddCode from './AddCode'
import './index.styl'

class App extends React.Component {
	constructor () {
		super()
	}

	render () {
		return (
			<div>
				<Nav/>
				Hi
				<AddCode/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)
