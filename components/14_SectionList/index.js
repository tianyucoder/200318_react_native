import React, { Component } from 'react'
import { Text,SectionList,View } from 'react-native'

export default class Demo extends Component {

	state = {
		newsArr:[
			{
				id:'001',
				title:'国际新闻',
				data:[
					{id:'0001',title:'国际新闻1',content:"国际新闻内容1"},
					{id:'0002',title:'国际新闻2',content:"国际新闻内容2"},
					{id:'0003',title:'国际新闻3',content:"国际新闻内容3"},
				]
			},
			{
				id:'002',
				title:'国内新闻',
				data:[
					{id:'0001',title:'国内新闻1',content:"国内新闻内容1"},
					{id:'0002',title:'国内新闻2',content:"国内新闻内容2"},
					{id:'0003',title:'国内新闻3',content:"国内新闻内容3"},
				]
			},
			{
				id:'003',
				title:'本地新闻',
				data:[
					{id:'0001',title:'本地新闻1',content:"本地新闻内容1"},
					{id:'0002',title:'本地新闻2',content:"本地新闻内容2"},
					{id:'0003',title:'本地新闻3',content:"本地新闻内容3"},
				]
			},
		]
	}

	renderItem = ({item})=>{
		return (
			<Text 
				style={{
					fontSize:27,
				}} 
			>
				{item.title}
			</Text>
		)
	}

	renderSectionHeader = ({section})=>{
		return <Text style={{backgroundColor:'#ddd',fontSize:25,fontWeight:'bold'}}>{section.title}</Text>
	}

	render() {
		return (
			<SectionList
				sections={this.state.newsArr} //数据源
				renderItem={this.renderItem}
				renderSectionHeader={this.renderSectionHeader}
				keyExtractor={(_,index)=>index}
			/>
		)
	}
}
