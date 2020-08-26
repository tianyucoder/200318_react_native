import React, { Component } from 'react'
import { Text,SectionList,View,Image } from 'react-native'
import axios from 'axios'

export default class Demo extends Component {

	state = {
		cars:[]
	}	

	renderItem = ({item})=>{
		return (
			<View style={{flexDirection:'row',alignItems:'center'}}>
				<Image source={{uri:item.icon}} style={{width:100,height:100}}/>
				<Text style={{fontSize:20}}>{item.name}</Text>
			</View>
		)
	}
	componentDidMount(){
		axios.get('https://fankai.utools.club/total').then(
			response => {
				this.setState({cars:response.data})
			},
			error => {console.log('失败了',error);}
		)
	}

	renderSectionHeader = ({section})=>{
		return <Text style={{backgroundColor:'#ddd',fontSize:25,fontWeight:'bold'}}>{section.title}</Text>
	}

	render() {
		return (
			<SectionList
				sections={this.state.cars} //数据源
				renderItem={this.renderItem}
				renderSectionHeader={this.renderSectionHeader}
				keyExtractor={(_,index)=>index.toString()}
			/>
		)
	}
}
