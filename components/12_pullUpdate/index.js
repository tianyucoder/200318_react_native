import React, { Component } from 'react'
import { Text, ScrollView,RefreshControl } from 'react-native'

export default class index extends Component {

	state = {
		newsArr:[],
		loading:false
	}

	componentDidMount(){
		let newsArr = []
		for (let i = 1; i <= 40; i++) {
			newsArr.push({id:i,title:'新闻'+i})
		}
		this.setState({newsArr})
	}

	onRefresh = ()=>{
		this.setState({loading:true})
		const {newsArr} = this.state
		setTimeout(()=>{
			this.setState({
				newsArr:[{id:newsArr.length*1+1,title:'新闻'+(newsArr.length*1+1)},...newsArr],
				loading:false
			})
		},1000)
	}

	render() {
		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl 
						refreshing={this.state.loading} //是否处于加载中
						onRefresh={this.onRefresh} //下拉的回调
						colors={['red','blue','green']}
						progressBackgroundColor='pink'
					/>
				}
			>
				{
					this.state.newsArr.map((news,index)=>{
						return (
							<Text 
								style={{
									fontSize:27,
									backgroundColor:index % 2 ? 'skyblue' : 'pink'
								}} 
								key={news.id}
							>
								{news.title}
							</Text>
						)
					})
				}
			</ScrollView>
		)
	}
}
