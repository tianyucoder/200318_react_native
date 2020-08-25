import React, { Component } from 'react'
import {StatusBar,SafeAreaView} from 'react-native'
import Demo from './components/07_Image_ImageBackground'

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
