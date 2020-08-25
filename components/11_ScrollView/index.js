import React, { Component } from 'react'
import { Text, ScrollView,View,Dimensions } from 'react-native'

export default class index extends Component {

	state = {
		colors:['red','orange','yellow','green']
	}

	render() {
		return (
			<ScrollView
				// horizontal
				// pagingEnabled
				// showsHorizontalScrollIndicator={false}
				// showsVerticalScrollIndicator={false}
				// scrollEnabled={false}
			>
				{
					this.state.colors.map((c)=>{
						return (
							<View 
								style={{
									backgroundColor:c,
									width:Dimensions.get('screen').width,
									height:400
								}}
							>
								<Text style={{fontSize:20}}>{c}</Text>
							</View>
						)
					})
				}
			</ScrollView>
		)
	}
}
