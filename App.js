import React, { Component } from 'react'
import {StatusBar,Text,SafeAreaView} from 'react-native'

export default class App extends Component {

	componentDidMount(){
		// StatusBar.setBackgroundColor('green')
		// StatusBar.setBarStyle('dark-content')
		// StatusBar.setHidden(true,'fade')
	}

	render() {
		return (
			<>
				<StatusBar
					backgroundColor="orange"
					barStyle="dark-content"
					// hidden
					// animated
					// translucent
				/>
				<SafeAreaView>
					<Text>123</Text>
				</SafeAreaView>
			</>
		)
	}
}
