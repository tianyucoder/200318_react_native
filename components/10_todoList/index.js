import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet } from 'react-native'
import Button from '../09_Button/SimbleButton'

export default class Demo extends Component {

	state = {
		todos:['吃饭','睡觉','打代码'],
		userInput:''
	}

	add = ()=>{
		const {todos,userInput} = this.state
		this.setState({todos:[userInput,...todos],userInput:''})
	}

	render() {
		const {wraper,top,bottom,input,btnStyleObj,btnTextStyleObj,todoStyle} = styles
		return (
			<View style={wraper}>
				<View style={top}>
					<TextInput value={this.state.userInput} style={input} onChangeText={(data)=>this.setState({userInput:data})}/>
					<Button 
						styleObj={btnStyleObj} 
						textObj={btnTextStyleObj}
						onPress={this.add}
						activeOpacity={0.1}
						text="添加"
					/>
				</View>
				<View style={bottom}>
					{
						this.state.todos.map((todo,index)=>{
							return <Text key={index} style={todoStyle}>{todo}</Text>
						})
					}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wraper:{
		padding:10
	},
	top:{
		flexDirection:'row'
	},
	bottom:{},
	input:{
		width:200,
		height:40,
		marginRight:10,
		borderColor:'black',
		borderWidth:1,
	},
	 btnStyleObj:{
		width:100,
		height:40,
		backgroundColor:"orange",
		borderRadius:5,
	},
	btnTextStyleObj:{
		fontSize:18,
		color:'white',
		fontWeight:'400',
	},
	todoStyle:{
		fontSize:18
	}
})
