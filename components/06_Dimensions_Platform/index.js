import React, { Component } from 'react'
import { Text, View,Dimensions,Platform } from 'react-native'

export default class index extends Component {
	render() {
		return (
			<View>
				<Text style={{fontSize:30}}> 当前屏宽是:{Dimensions.get('window').width} </Text>
				<Text style={{fontSize:30}}> 当前屏高是:{Dimensions.get('window').height} </Text>
				<Text style={{fontSize:30}}> 当操作系统是:{Platform.OS} </Text>
				<Text style={{fontSize:30}}> 当操作系统版本是是:{Platform.Version} </Text>
				<Text style={{fontSize:30}}> 当是都为pad:{Platform.isPad} </Text>
			</View>
		)
	}
}
