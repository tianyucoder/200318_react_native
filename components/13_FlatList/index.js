import React, { Component } from 'react'
import { Text, View,FlatList,Image, Dimensions } from 'react-native'
import phoneArr from '../../json/phone.json'

export default class index extends Component {

	renderItem = ({item})=>{
		return(
			<View style={{flexDirection:'row'}}>
				<Image source={{uri:item.url}} style={{width:100,height:100}}/>
				<View 
					style={{
						justifyContent:'space-between',
						padding:10,
						width:Dimensions.get('screen').width - 100
					}}
				>
					<Text>{item.name}</Text>
					<Text style={{fontSize:18,color:'orange'}}>￥{item.price}</Text>
				</View>	
			</View>
		)
	}

	render() {
		return (
			<FlatList
				data={phoneArr} //数据源---必须是数组
				renderItem={this.renderItem}
				keyExtractor={(item,index)=>index.toString()}
				ListHeaderComponent={<Text>我是头部</Text>}
				ListFooterComponent={<Text>我是列表底部</Text>}
			/>
		)
	}
}
