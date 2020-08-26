import React, { Component } from 'react'
import { Text,SectionList,View,Image } from 'react-native'
import carData from '../../json/car.json'

export default class Demo extends Component {

	renderItem = ({item})=>{
		return (
			<View style={{flexDirection:'row',alignItems:'center'}}>
				<Image source={{uri:item.icon}} style={{width:100,height:100}}/>
				<Text style={{fontSize:20}}>{item.name}</Text>
			</View>
		)
	}
	componentDidMount(){
		console.log(carData.total);
	}

	renderSectionHeader = ({section})=>{
		return <Text style={{backgroundColor:'#ddd',fontSize:25,fontWeight:'bold'}}>{section.title}</Text>
	}

	render() {
		return (
			<SectionList
				sections={carData.total} //数据源
				renderItem={this.renderItem}
				renderSectionHeader={this.renderSectionHeader}
			/>
		)
	}
}
