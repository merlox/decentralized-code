import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import AddCode from './AddCode'
import MyCode from './MyCode'
import './index.styl'

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			isShowingMyCode: true
		}
	}

	showMyCodes(state) {
		this.setState({isShowingMyCode: state})
	}

	render () {
		return (
			<div>
				<Nav showMyCodes={(state) => this.showMyCodes(state)}/>
				{this.state.isShowingMyCode ? <MyCode/> : <AddCode/>}
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)
