import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MyText extends Component {
	render() {
		return (
			<View>
				<Text 
					numberOfLines={1}
					ellipsizeMode="middle"
					style={{fontSize:30,backgroundColor:'pink'}}
					onPress={()=>alert(1)}
					onLongPress={()=>alert(2)}
				>,这里的一切都有这里的一切都有这里的一切都有这里的一切都有这里的一切都有这里的一切都有</Text>
			</View>
		)
	}
}

