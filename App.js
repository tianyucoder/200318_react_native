import React, { Component } from 'react'
import {StatusBar,SafeAreaView} from 'react-native'
import Demo from './components/08_TextInput/TextInput'

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
