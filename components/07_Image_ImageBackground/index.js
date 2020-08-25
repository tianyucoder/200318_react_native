import React, { Component } from 'react'
import {View,Image} from 'react-native'

export default class index extends Component {
	render() {
		return (
			<View>
				{/* 引入本地图片 */}
				<Image source={require('../../imgs/car.jpg')}/>
			</View>
		)
	}
}
