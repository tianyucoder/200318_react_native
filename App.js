import React, { Component } from 'react'
import {StatusBar,SafeAreaView} from 'react-native'
import Demo from './components/12_pullUpdate'
// import MyButton from './components/09_Button/SimbleButton'

export default class App extends Component {

	render() {
		return (
			<>
				<StatusBar	backgroundColor="orange"/>
				<SafeAreaView>
					<Demo/>
				</SafeAreaView>
			</>
		)
	}
}
