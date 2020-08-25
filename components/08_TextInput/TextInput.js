import React, { Component } from 'react'
import {Text, TextInput, View } from 'react-native'

export default class MyTextInput extends Component {

	state = {
		userInput:''
	}

	showInfo = ()=>{
		//console.log(this.refs.userinput);
		alert(this.state.userInput)
	}

	render() {
		return (
			<View style={{padding:10}}>
				<TextInput
					style={{
						borderColor:'black',
						borderWidth:1,
					}}
					onChangeText={(data)=>this.setState({userInput:data})}
					// keyboardType="phone-pad"
					placeholder="请输入一些内容吧"
					placeholderTextColor="green"
					multiline
					autoCapitalize="sentences"
				/>
				<Text
					onPress={this.showInfo}
				 style={{fontSize:20,backgroundColor:'red',width:100,height:100}}>点我获取输入的内容</Text>
			</View>
		)
	}
}
