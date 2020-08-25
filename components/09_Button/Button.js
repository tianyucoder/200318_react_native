import React, { Component } from 'react'
import { Text, View,Button,TouchableOpacity } from 'react-native'

export default class MyButton extends Component {
	render() {
		return (
			<View style={{width:50,height:100}} >
				{/* Button组件 */}
				<Button 
					color="red" 
					style={{color:'black'}}  
					title="点我"
					onPress={()=>{}}
				/>
				{/* TouchableOpacity制作按钮 */}
				<TouchableOpacity
					style={{
						width:100,
						height:40,
						backgroundColor:'orange',
						justifyContent:'center',
						alignItems:'center',
						borderRadius:10
					}}
					onPress={()=>{}}
					activeOpacity={0.8}
				>
					<Text style={{fontSize:18,color:'white',fontWeight:"bold"}}>点我1</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
