import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class MyView extends Component {
	render() {
		return (
			<View style={style.wraperStyle}>
					<Text style={style.textStyle1}>彼岸花花开彼岸，</Text>
					<Text style={[style.textStyle1,style.textStyle2]}>断肠草草断肝肠。</Text>
			</View>
		)
	}
}

const style = StyleSheet.create({
	textStyle1:{
		fontSize:18
	},
	textStyle2:{
		fontWeight:'bold'
	},
	wraperStyle:{
		backgroundColor:'red',
		// flexDirection:'row',
		width:300,
		height:200,
	}
})
