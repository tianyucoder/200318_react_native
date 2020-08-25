import React, { Component } from 'react'
import { Text,TouchableOpacity } from 'react-native'

export default class SimbleButton extends Component {
	render() {
		const {styleObj,textObj,onPress,activeOpacity,text} = this.props
		const {
			width,
			height,
			backgroundColor,
			borderRadius,
		} = styleObj
		const {
			fontSize,
			color,
			fontWeight,
		} = textObj
			console.log('@',text);
		return (
			<TouchableOpacity
					style={{
						width:width || 100,
						height:height || 40,
						backgroundColor:backgroundColor || 'orange',
						justifyContent:'center',
						alignItems:'center',
						borderRadius:borderRadius || 10
					}}
					onPress={onPress}
					activeOpacity={activeOpacity || 0.8}
				>
					<Text style={{fontSize:fontSize||18,color:color||'white',fontWeight:fontWeight||"bold"}}>{text}</Text>
				</TouchableOpacity>
		)
	}
}
